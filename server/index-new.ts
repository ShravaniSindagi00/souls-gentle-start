import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import authRoutes from './routes/auth' // Using real MongoDB auth

// Load environment variables (force root .env even if process cwd differs)
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
} else {
  dotenv.config()
}

// Initialize express app
const app = express()
const PORT = process.env.PORT || 5001

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for development
  })
)

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:5173',
      'http://localhost:8083',
      'http://localhost:8084',
      'http://localhost:3000',
    ],
    credentials: true,
  })
)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`, {
    headers: req.headers.authorization
      ? 'Auth header present'
      : 'No auth header',
    body:
      req.method === 'POST'
        ? JSON.stringify(req.body).substring(0, 100)
        : 'No body or GET request',
  })

  // Log response when it completes
  const originalSend = res.send
  res.send = function (body) {
    console.log(
      `Response for ${req.method} ${req.url}: ${res.statusCode}`,
      typeof body === 'string' ? body.substring(0, 200) : 'Non-string response'
    )
    return originalSend.call(this, body)
  }

  next()
})

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || 'mongodb://localhost:27017/souls-gentle-auth'
    await mongoose.connect(mongoURI)
    console.log('[DB] Connected to MongoDB')
  } catch (error) {
    console.error('[DB] MongoDB connection error:', error)
    process.exit(1)
  }
}

// Routes
app.use('/api/auth', authRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() })
})

// API root
app.get('/api', (req, res) => {
  res.json({
    message: 'Souls Gentle API',
    version: '1.0.0',
    endpoints: ['/api/auth', '/health'],
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// General error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('[ERROR]', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`[SERVER] Running on port ${PORT}`)
      console.log(`[SERVER] Health check: http://localhost:${PORT}/health`)
    })
  } catch (error) {
    console.error('[SERVER] Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
