import express from 'express'
import jwt from 'jsonwebtoken'
import rateLimit from 'express-rate-limit'
import expressValidator, { body, validationResult } from 'express-validator'
import { User } from '../models/User.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later',
})

// Validation rules
const registerValidation = [
  body('username')
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
]

const loginValidation = [
  body('login').notEmpty().withMessage('Username or email is required'),
  body('password').notEmpty().withMessage('Password is required'),
]

// Helper function to generate JWT
const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback-secret', {
    expiresIn: '7d',
  })
}

// Helper function to set auth cookie
const setAuthCookie = (res: express.Response, token: string) => {
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })
}

// Register route
router.post(
  '/register',
  authLimiter,
  registerValidation,
  async (req: express.Request, res: express.Response) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: 'Validation failed',
          details: errors.array(),
        })
      }

      const { username, email, password } = req.body

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      })

      if (existingUser) {
        return res.status(400).json({
          error:
            existingUser.email === email
              ? 'Email already registered'
              : 'Username already taken',
        })
      }

      // Create new user
      const user = new User({ username, email, password })
      await user.save()

      // Generate token and set cookie
      const token = generateToken(user._id)
      setAuthCookie(res, token)

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      })
    } catch (error) {
      console.error('Registration error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
)

// Login route
router.post(
  '/login',
  authLimiter,
  loginValidation,
  async (req: express.Request, res: express.Response) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: 'Validation failed',
          details: errors.array(),
        })
      }

      const { login, password } = req.body

      // Find user by email or username
      const user = await User.findOne({
        $or: [{ email: login }, { username: login }],
      })

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }

      // Check password
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }

      // Generate token and set cookie
      const token = generateToken(user._id)
      setAuthCookie(res, token)

      res.json({
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      })
    } catch (error) {
      console.error('Login error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
)

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('authToken')
  res.json({ message: 'Logout successful' })
})

// Get current user route
router.get('/me', authenticateToken, (req, res) => {
  res.json({
    user: {
      id: req.user?._id,
      username: req.user?.username,
      email: req.user?.email,
    },
  })
})

// Verify token route
router.get('/verify', (req, res) => {
  const token = (req as any).cookies?.authToken

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret')
    res.json({ valid: true })
  } catch (error) {
    res.status(401).json({ error: 'Invalid token', valid: false })
  }
})

export default router
