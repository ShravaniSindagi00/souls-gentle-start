import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getStoredToken } from '@/lib/jwt'

// Base API URL
const API_BASE_URL = '/api'

// Create a custom axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Allow cookies for cross-origin requests
})

// Request interceptor for adding token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from storage
    const token = getStoredToken()

    // If token exists, add it to request headers
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
      console.log('Adding auth token to request', config.url)
    } else {
      console.log('No auth token available for request', config.url)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    // Handle 401 Unauthorized errors - token might be expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Attempt to refresh the token
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          }
        )

        if (response.data.token) {
          // Store the new token
          localStorage.setItem('auth_token', response.data.token)

          // Update the failed request with new token and retry
          originalRequest.headers.Authorization = `Bearer ${response.data.token}`
          return apiClient(originalRequest)
        }
      } catch (refreshError) {
        // Token refresh failed, redirect to login
        console.error('Token refresh failed:', refreshError)

        // Dispatch an event to notify the app about auth failure
        window.dispatchEvent(new CustomEvent('auth:expired'))

        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)

// Generic API request methods
export const api = {
  /**
   * GET request
   */
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient
      .get(url, config)
      .then((response: AxiosResponse) => response.data)
  },

  /**
   * POST request
   */
  post: <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return apiClient
      .post(url, data, config)
      .then((response: AxiosResponse) => response.data)
  },

  /**
   * PUT request
   */
  put: <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient
      .put(url, data, config)
      .then((response: AxiosResponse) => response.data)
  },

  /**
   * PATCH request
   */
  patch: <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return apiClient
      .patch(url, data, config)
      .then((response: AxiosResponse) => response.data)
  },

  /**
   * DELETE request
   */
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient
      .delete(url, config)
      .then((response: AxiosResponse) => response.data)
  },
}

export default apiClient
