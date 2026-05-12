'use client'

import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg font-display tracking-tight'

    const variantClasses = {
      primary: 'bg-gradient-1 text-white hover:shadow-glow hover:shadow-lg',
      secondary: 'bg-secondary text-white hover:bg-secondary/80 hover:shadow-lg',
      outline:
        'border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow',
    }

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = 'Button'
