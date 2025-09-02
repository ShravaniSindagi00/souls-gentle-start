import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { authService } from '@/services/authService'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Basic email validation
      if (!email || !email.includes('@')) {
        toast({
          variant: 'destructive',
          title: 'Invalid email',
          description: 'Please enter a valid email address',
        })
        return
      }

      await authService.requestPasswordReset(email)
      setIsSubmitted(true)

      toast({
        title: 'Reset link sent',
        description:
          'If an account exists with that email, you will receive a password reset link.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed to send reset link',
        description:
          error.message || 'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Forgot Password
              </h2>
              <p className="text-gray-600 mt-2">
                {!isSubmitted
                  ? 'Enter your email to reset your password'
                  : 'Check your inbox for the reset link'}
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 block"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </Button>

                <div className="text-center mt-4">
                  <Button
                    variant="link"
                    onClick={() => navigate('/login')}
                    className="text-sm text-primary hover:text-primary/90"
                  >
                    Return to Login
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center">
                <p className="text-gray-600">
                  We've sent a password reset link to <strong>{email}</strong>.
                  Please check your inbox and follow the instructions to reset
                  your password.
                </p>
                <p className="text-gray-600">
                  If you don't see the email, check your spam folder.
                </p>
                <Button onClick={() => navigate('/login')} className="mt-4">
                  Return to Login
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ForgotPassword
