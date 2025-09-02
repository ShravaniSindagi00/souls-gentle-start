import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

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

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() })
})

// API root endpoint
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Souls Gentle API',
    version: '1.0.0',
    endpoints: ['/health'],
  })
})

// 404 handler moved here, before the generic error handler.
// This catches all requests that didn't match any route above.
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

// Generic error handling middleware is now last.
// It will only be called if a route handler calls next(error).
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// Log startup
console.log('Starting API server...')

// Start server
const startServer = async () => {
  try {
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
