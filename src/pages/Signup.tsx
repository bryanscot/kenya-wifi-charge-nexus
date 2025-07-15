import { AuthLayout } from '@/components/auth/AuthLayout'
import { SignupForm } from '@/components/auth/SignupForm'

const Signup = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Set up your WiFi billing system"
    >
      <SignupForm />
    </AuthLayout>
  )
}

export default Signup