'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-white/10 text-foreground border border-white/20',
      primary: 'bg-primary/20 text-primary border border-primary/30',
      secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
      accent: 'bg-accent/20 text-accent border border-accent/30',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
          'border backdrop-blur-sm',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Badge.displayName = 'Badge'
