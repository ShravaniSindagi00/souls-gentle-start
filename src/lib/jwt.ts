/**
 * JWT Token utility functions for handling authentication tokens
 */

// Parse JWT token to get payload without verification
// Use only for non-sensitive operations like checking expiration
export const parseJwt = (token: string): any => {
  try {
    // Split token into parts and decode the payload (second part)
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error parsing JWT token:', error)
    return null
  }
}

// Check if token is expired
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = parseJwt(token)
    if (!decoded) return true

    // Get current time in seconds
    const currentTime = Date.now() / 1000

    // Check if token is expired with 10 second buffer
    return decoded.exp < currentTime - 10
  } catch (error) {
    console.error('Error checking token expiration:', error)
    return true
  }
}

// Get stored token (from localStorage or sessionStorage)
export const getStoredToken = (): string | null => {
  // Try localStorage first (remember me)
  const persistentToken = localStorage.getItem('auth_token')
  if (persistentToken) {
    // Check if persistent token is expired
    if (!isTokenExpired(persistentToken)) {
      return persistentToken
    }
    // Remove expired token
    localStorage.removeItem('auth_token')
  }

  // Try sessionStorage (session-only)
  const sessionToken = sessionStorage.getItem('auth_token')
  if (sessionToken) {
    // Check if session token is expired
    if (!isTokenExpired(sessionToken)) {
      return sessionToken
    }
    // Remove expired token
    sessionStorage.removeItem('auth_token')
  }

  return null
}

// Store token based on remember preference
export const storeToken = (
  token: string,
  rememberMe: boolean = false
): void => {
  if (rememberMe) {
    localStorage.setItem('auth_token', token)
    // Remove from session storage to avoid conflicts
    sessionStorage.removeItem('auth_token')
  } else {
    sessionStorage.setItem('auth_token', token)
    // Remove from local storage to avoid conflicts
    localStorage.removeItem('auth_token')
  }
}

// Remove stored tokens
export const removeTokens = (): void => {
  localStorage.removeItem('auth_token')
  sessionStorage.removeItem('auth_token')
}
