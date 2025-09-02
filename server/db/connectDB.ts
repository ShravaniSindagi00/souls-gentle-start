import mongoose from 'mongoose'

/**
 * Connects to MongoDB Atlas using Mongoose
 * @returns Promise<void>
 */
const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI

    if (!mongoURI) {
      throw new Error('MONGODB_URI environment variable is not defined')
    }

    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log(`[DB] MongoDB Connected: ${conn.connection.host}`)
  } catch (error: any) {
    console.error(`[DB] MongoDB connection error: ${error.message}`)

    // Check for specific MongooseServerSelectionError
    if (error.name === 'MongooseServerSelectionError') {
      console.error('Check if your IP is whitelisted in MongoDB Atlas.')
      console.error('Ensure cluster is running and URI is correct.')
    }

    // Exit process with failure
    process.exit(1)
  }
}

export default connectDB
