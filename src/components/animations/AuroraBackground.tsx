'use client'

import { cn } from '@/lib/utils'

interface AuroraBackgroundProps {
  className?: string
  children: React.ReactNode
}

export const AuroraBackground = ({ className, children }: AuroraBackgroundProps) => {
  return (
    <div
      className={cn('relative w-full min-h-screen overflow-hidden bg-background', className)}
    >
      {/* Aurora effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        />
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
