import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  )
}