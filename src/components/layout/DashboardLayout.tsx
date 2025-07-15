import { ReactNode } from 'react'
import { DashboardSidebar } from './DashboardSidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="lg:ml-64">
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}