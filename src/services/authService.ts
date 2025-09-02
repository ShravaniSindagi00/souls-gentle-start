import { User } from '@/contexts/AuthContext'
import { api } from '@/lib/apiClient'
import { storeToken, removeTokens } from '@/lib/jwt'

// API endpoints
const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  VERIFY: '/auth/verify',
  ME: '/auth/me',
  USER: '/auth/user',
  LOGOUT: '/auth/logout',
  PASSWORD_RESET_REQUEST: '/auth/password-reset-request',
  PASSWORD_RESET: '/auth/password-reset',
  VERIFY_EMAIL: '/auth/verify-email',
}

// Define response types
interface AuthResponse {
  user: User
  token?: string
  message?: string
}

// Auth service
export const authService = {
  // Login user
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, {
        login: email, // Can be username or email
        password,
      })

      // Store token if returned
      if (response && response.token) {
        storeToken(response.token, false) // Default to session storage
      }

      return response
    } catch (error: any) {
      console.error('Login error:', error)
      throw new Error(
        error.message || 'Login failed. Please check your credentials.'
      )
    }
  },

  // Register new user
  async register(
    name: string,
    email: string,
    password: string
  ): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(AUTH_ENDPOINTS.REGISTER, {
        name,
        email,
        password,
      })

      // Store token if returned
      if (response && response.token) {
        storeToken(response.token, false)
      }

      return response
    } catch (error: any) {
      console.error('Registration error:', error)
      throw new Error(error.message || 'Registration failed. Please try again.')
    }
  },

  // Validate token
  async validateToken(token: string): Promise<User> {
    try {
      // We can use the api client directly here since it will automatically add the token
      const response = await api.get<AuthResponse>(AUTH_ENDPOINTS.VERIFY)

      if (!response.user) {
        throw new Error('Invalid token')
      }

      return response.user
    } catch (error) {
      throw new Error('Session expired. Please login again.')
    }
  },

  // Get current user
  async getCurrentUser(): Promise<User> {
    try {
      const response = await api.get<AuthResponse>(AUTH_ENDPOINTS.ME)
      return response.user
    } catch (error) {
      throw new Error('Failed to fetch user data')
    }
  },

  // Update user data
  async updateUser(userData: Partial<User>): Promise<User> {
    try {
      const response = await api.put<AuthResponse>(
        AUTH_ENDPOINTS.USER,
        userData
      )
      return response.user
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to update user data'
      )
    }
  },

  // Logout user
  async logout(): Promise<void> {
    try {
      await api.post(AUTH_ENDPOINTS.LOGOUT, {})
      removeTokens()
    } catch (error) {
      console.error('Logout error:', error)
      // Continue with logout even if the API call fails
      removeTokens()
    }
  },

  // Request password reset
  async requestPasswordReset(email: string): Promise<{ message: string }> {
    try {
      const response = await api.post<{ message: string }>(
        AUTH_ENDPOINTS.PASSWORD_RESET_REQUEST,
        {
          email,
        }
      )

      return response
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to request password reset'
      )
    }
  },

  // Reset password with token
  async resetPassword(
    token: string,
    newPassword: string
  ): Promise<{ message: string }> {
    try {
      const response = await api.post<{ message: string }>(
        AUTH_ENDPOINTS.PASSWORD_RESET,
        {
          token,
          password: newPassword,
        }
      )

      return response
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || 'Failed to reset password'
      )
    }
  },

  // Verify email with token
  async verifyEmail(token: string): Promise<{ message: string }> {
    try {
      const response = await api.post<{ message: string }>(
        AUTH_ENDPOINTS.VERIFY_EMAIL,
        {
          token,
        }
      )

      return response
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to verify email')
    }
  },
}
