import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'
import { authService } from '@/services/authService'

const VerifyEmail = () => {
  const [verificationState, setVerificationState] = useState<
    'verifying' | 'success' | 'error'
  >('verifying')
  const [message, setMessage] = useState('Verifying your email address...')

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const token = searchParams.get('token')

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        setVerificationState('error')
        setMessage('Invalid or missing verification token.')
        return
      }

      try {
        const response = await authService.verifyEmail(token)
        setVerificationState('success')
        setMessage(
          response.message || 'Your email has been verified successfully.'
        )

        toast({
          title: 'Email Verified',
          description: 'Your email address has been verified successfully.',
        })
      } catch (error: any) {
        setVerificationState('error')
        setMessage(
          error.message || 'Failed to verify email. The link may have expired.'
        )

        toast({
          variant: 'destructive',
          title: 'Verification Failed',
          description:
            error.message || 'Failed to verify email. Please try again.',
        })
      }
    }

    verifyEmailToken()
  }, [token])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Email Verification
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              {verificationState === 'verifying' && (
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              )}

              {verificationState === 'success' && (
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              )}

              {verificationState === 'error' && (
                <XCircle className="h-12 w-12 text-red-500 mb-4" />
              )}

              <p className="text-center text-gray-600 mb-6">{message}</p>

              <div className="mt-4">
                {verificationState === 'success' && (
                  <Button onClick={() => navigate('/login')}>
                    Proceed to Login
                  </Button>
                )}

                {verificationState === 'error' && (
                  <div className="space-y-4">
                    <Button onClick={() => navigate('/login')}>
                      Return to Login
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      If you're having trouble, please contact support.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VerifyEmail
