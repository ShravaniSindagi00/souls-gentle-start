import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react'
import axios from 'axios'
import { getStoredToken, storeToken, removeTokens } from '@/lib/jwt'

const API_URL = '/api/auth'

// Configure axios defaults
axios.defaults.withCredentials = true

export interface User {
  id: string
  username: string
  email: string
  role?: 'user' | 'therapist' | 'admin'
  name?: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isLoading: boolean
  login: (
    email: string,
    password: string,
    rememberMe?: boolean
  ) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateUser: (userData: Partial<User>) => Promise<User>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already authenticated on app load
  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Check for stored token first
        const storedToken = getStoredToken()

        if (storedToken) {
          // Set token in axios headers
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${storedToken}`

          try {
            console.log('Verifying token with server...')
            // First verify the token is valid with server
            const verifyResponse = await axios.get(`${API_URL}/verify`, {
              timeout: 5000, // 5 second timeout
              headers: { Authorization: `Bearer ${storedToken}` },
            })

            if (!verifyResponse.data.valid) {
              throw new Error('Invalid token')
            }

            // Get user details with token
            const userResponse = await axios.get(`${API_URL}/me`, {
              timeout: 5000, // 5 second timeout
              headers: { Authorization: `Bearer ${storedToken}` },
            })

            setUser(userResponse.data.user)
            setToken(storedToken)

            console.log('Authentication successful', userResponse.data.user)
          } catch (tokenError: any) {
            console.error(
              'Token validation failed:',
              tokenError.message || tokenError
            )

            if (tokenError.code === 'ERR_NETWORK') {
              console.log('Network error - server might be unreachable')
            }

            throw new Error('Token validation failed')
          }
        } else {
          // Fallback to session cookie verification
          try {
            const response = await axios.get(`${API_URL}/verify`, {
              timeout: 5000,
            })
            if (response.data.valid) {
              // Get user details if token is valid
              const userResponse = await axios.get(`${API_URL}/me`, {
                timeout: 5000,
              })
              setUser(userResponse.data.user)

              // Store the token if it was returned
              if (response.data.token) {
                setToken(response.data.token)
                storeToken(response.data.token, false)
              }
            }
          } catch (cookieError: any) {
            console.error(
              'Cookie validation failed:',
              cookieError.message || cookieError
            )
            throw new Error('No valid session')
          }
        }
      } catch (error: any) {
        console.log('No valid session found:', error.message || error)
        setUser(null)
        setToken(null)
        removeTokens()
      } finally {
        setIsLoading(false)
      }
    }
    verifyUser()
  }, [])

  const login = async (email: string, password: string, rememberMe = false) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        login: email, // Can be username or email
        password,
      })

      // Update auth state
      setUser(response.data.user)

      // Handle token if returned
      if (response.data.token) {
        setToken(response.data.token)
        storeToken(response.data.token, rememberMe)
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      })

      // Update auth state
      setUser(response.data.user)

      // Handle token if returned
      if (response.data.token) {
        setToken(response.data.token)
        // Store in session storage by default for new registrations
        storeToken(response.data.token, false)
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed')
    }
  }

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear auth state
      setUser(null)
      setToken(null)

      // Remove stored tokens
      removeTokens()

      // Remove authorization header
      delete axios.defaults.headers.common['Authorization']
    }
  }

  // Function to update user data
  const updateUser = async (userData: Partial<User>) => {
    if (!user || !token) {
      throw new Error('You must be logged in to update your profile')
    }

    try {
      const response = await axios.put(`${API_URL}/user`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setUser(response.data.user)
      return response.data.user
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to update user data'
      )
    }
  }

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
