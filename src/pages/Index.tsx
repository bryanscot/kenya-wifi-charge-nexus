import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { Wifi, Shield, Users, BarChart3 } from 'lucide-react'

const Index = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Wifi className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">WiFi Billing Kenya</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/signup')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Modern WiFi Billing System for Kenya
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Streamline your ISP operations with our comprehensive billing system. 
            Manage customers, packages, and payments with M-Pesa integration.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/signup')}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
              View Demo
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
            <p className="text-muted-foreground">
              Efficiently manage your customer base with detailed profiles, usage tracking, and automated billing.
            </p>
          </div>

          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">M-Pesa Integration</h3>
            <p className="text-muted-foreground">
              Seamless payment processing with M-Pesa STK push, automatic payment verification, and instant activation.
            </p>
          </div>

          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics & Reports</h3>
            <p className="text-muted-foreground">
              Comprehensive analytics dashboard with revenue tracking, customer insights, and business intelligence.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Index;
