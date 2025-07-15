import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { 
  Home, 
  Users, 
  Package, 
  Receipt, 
  CreditCard, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  Wifi
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Packages', href: '/packages', icon: Package },
  { name: 'Billing', href: '/billing', icon: Receipt },
  { name: 'Payments', href: '/payments', icon: CreditCard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      toast({
        title: 'Logged out successfully',
        description: 'You have been signed out of your account.',
      })
      navigate('/login')
    } catch (error) {
      toast({
        title: 'Error signing out',
        description: 'Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Wifi className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">WiFi Billing</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}