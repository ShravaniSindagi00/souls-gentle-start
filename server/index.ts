// import express from 'express'
// import cors from 'cors'
// import helmet from 'helmet'
// import cookieParser from 'cookie-parser'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import authRoutes from './routes/auth-simple'

// // Load environment variables
// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// // Security middleware
// app.use(helmet())
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//     credentials: true,
//   })
// )

// // Body parsing middleware
// app.use(express.json({ limit: '10mb' }))
// app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     const mongoURI =
//       process.env.MONGODB_URI || 'mongodb://localhost:27017/souls-gentle-auth'
//     await mongoose.connect(mongoURI)
//     console.log('Connected to MongoDB')
//   } catch (error) {
//     console.error('MongoDB connection error:', error)
//     process.exit(1)
//   }
// }

// // Routes
// app.use('/api/auth', authRoutes)

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({ status: 'Server is running', timestamp: new Date().toISOString() })
// })

// // Error handling middleware
// app.use(
//   (
//     err: any,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     console.error('Error:', err)
//     res.status(500).json({ error: 'Internal server error' })
//   }
// )

// // 404 handler (avoid Express 5 path-to-regexp wildcard issues by not using '*')
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' })
// })

// // Log startup
// console.log('Starting API server (CommonJS mode)...')

// // Start server
// const startServer = async () => {
//   try {
//     await connectDB()
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`)
//       console.log(`Health check: http://localhost:${PORT}/health`)
//     })
//   } catch (error) {
//     console.error('Failed to start server:', error)
//     process.exit(1)
//   }
// }

// startServer()

import express, { Request, Response, NextFunction } from 'express' // Import specific types
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import authRoutes from './routes/auth-simple'

// Load environment variables (force root .env even if process cwd differs)
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
} else {
  dotenv.config() // fallback
}
console.log(
  '[ENV] Loaded .env from',
  fs.existsSync(envPath) ? envPath : 'process.cwd()'
)

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Connect to MongoDB
const connectDB = async () => {
  try {
    let mongoURI =
      process.env.MONGODB_URI || 'mongodb://localhost:27017/souls-gentle-auth'
    // If URI contains localhost, also try 127.0.0.1 (IPv6 ::1 may be causing ECONNREFUSED)
    if (mongoURI.includes('localhost')) {
      mongoURI = mongoURI.replace('localhost', '127.0.0.1')
    }
    console.log('[DB] Connecting to', mongoURI)
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    })
    console.log('[DB] Connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

// Routes
app.use('/api/auth', authRoutes)

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  // Use explicit types
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() })
})

// FIX 1: 404 handler moved here, before the generic error handler.
// This catches all requests that didn't match any route above.
app.use((req: Request, res: Response) => {
  // Use explicit types
  res.status(404).json({ error: 'Route not found' })
})

// FIX 2: Generic error handling middleware is now last.
// It will only be called if a route handler calls next(error).
app.use(
  (
    err: Error, // Use the 'Error' type for better safety
    req: Request,
    res: Response,
    next: NextFunction // 'next' is unused but required for the signature
  ) => {
    console.error('Error:', err.stack) // Log the stack trace for better debugging
    res.status(500).json({ error: 'Internal server error' })
  }
)

// Log startup
console.log('Starting API server (CommonJS mode)...')

// Start server
const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
      console.log(`Health check: http://localhost:${PORT}/health`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
