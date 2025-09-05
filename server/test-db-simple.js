// filepath: server/test-db-simple.js
import pkg from 'pg'
const { Pool } = pkg
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'oursouls_db',
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
})

async function testConnection() {
  try {
    const client = await pool.connect()
    console.log('✅ Database connection successful!')

    const result = await client.query('SELECT NOW()')
    console.log('✅ Current time from database:', result.rows[0].now)

    client.release()
    process.exit(0)
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)
  }
}

testConnection()
