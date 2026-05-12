'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const GlowCard = ({ className, children, delay = 0 }: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        'relative group p-6 rounded-2xl',
        'bg-white/5 border border-white/10',
        'backdrop-blur-md hover:backdrop-blur-lg',
        'hover:bg-white/10 hover:border-white/20',
        'transition-all duration-300',
        'overflow-hidden',
        className
      )}
    >
      {/* Glow effect */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          'bg-gradient-to-r from-primary/20 via-transparent to-secondary/20'
        )}
      />

      {/* Border glow */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300 pointer-events-none',
          'bg-gradient-to-r from-primary to-secondary',
          'p-[1px] blur-sm'
        )}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
