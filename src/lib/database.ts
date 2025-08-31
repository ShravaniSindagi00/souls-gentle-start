import mongoose from 'mongoose'

// Extend ImportMeta to include 'env' for Vite
interface ImportMetaEnv {
  VITE_MONGODB_URI?: string
}

interface ImportMeta {
  env: ImportMetaEnv
}

// Database connection
let isConnected = false

export async function connectToDatabase() {
  if (isConnected) {
    return
  }

  try {
    const mongoUri =
      import.meta.env.VITE_MONGODB_URI ||
      'mongodb://localhost:27017/souls-gentle'

    await mongoose.connect(mongoUri)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// Check if database is properly configured
export const isDatabaseConfigured = () => {
  const mongoUri = import.meta.env.VITE_MONGODB_URI
  return mongoUri && mongoUri !== 'your_mongodb_uri_here'
}

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String },
  featured: { type: Boolean, default: false },
  datePublished: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Review Schema
const reviewSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  therapistName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String, required: true },
  sessionType: { type: String },
  datePublished: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Blog Post Schema
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Rich text as HTML or Markdown
  author: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  featuredImage: { type: String },
  featured: { type: Boolean, default: false },
  publishDate: { type: Date, default: Date.now },
  readTime: { type: Number }, // in minutes
  seoTitle: { type: String },
  seoDescription: { type: String },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Update timestamps on save
testimonialSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})

reviewSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})

blogPostSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})

// Models
export const Testimonial =
  (mongoose.models.Testimonial as mongoose.Model<any>) ||
  mongoose.model('Testimonial', testimonialSchema)
export const Review =
  (mongoose.models.Review as mongoose.Model<any>) ||
  mongoose.model('Review', reviewSchema)
export const BlogPost =
  (mongoose.models.BlogPost as mongoose.Model<any>) ||
  mongoose.model('BlogPost', blogPostSchema)

// Type definitions for use in components
export interface TestimonialData {
  _id: string
  name: string
  role?: string
  content: string
  rating: number
  image?: string
  featured: boolean
  datePublished: Date
}

export interface ReviewData {
  _id: string
  clientName: string
  therapistName: string
  rating: number
  reviewText: string
  sessionType?: string
  datePublished: Date
  verified: boolean
}

export interface BlogPostData {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  featuredImage?: string
  featured: boolean
  publishDate: Date
  readTime?: number
  seoTitle?: string
  seoDescription?: string
  published: boolean
}
