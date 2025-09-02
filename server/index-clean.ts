import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB'

// Load environment variables
dotenv.config()

// Create Express application
const app = express()

// Get port from environment or default to 5000
const PORT = process.env.PORT || 5000

/**
 * Start the server
 */
const startServer = async (): Promise<void> => {
  try {
    // Connect to MongoDB before starting the server
    await connectDB()

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`[SERVER] Running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Start the application
startServer()
