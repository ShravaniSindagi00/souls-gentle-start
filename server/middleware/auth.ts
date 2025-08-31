import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { User, IUser } from '../models/User.js'

declare global {
  namespace Express {
    interface Request {
      user?: IUser
    }
  }
}

export interface AuthRequest extends Request {
  user?: IUser
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      (req as any).cookies?.authToken ||
      req.get('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return res
        .status(401)
        .json({ error: 'Access denied. No token provided.' })
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'fallback-secret'
    ) as { userId: string }
    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      return res.status(401).json({ error: 'Invalid token. User not found.' })
    }

    req.user = user as IUser
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' })
  }
}

export const optionalAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      (req as any).cookies?.authToken ||
      req.get('Authorization')?.replace('Bearer ', '')

    if (token) {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'fallback-secret'
      ) as { userId: string }
      const user = await User.findById(decoded.userId).select('-password')
      if (user) {
        req.user = user as IUser
      }
    }
    next()
  } catch (error) {
    // Continue without authentication if token is invalid
    next()
  }
}
