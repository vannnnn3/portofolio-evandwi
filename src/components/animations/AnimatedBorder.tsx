'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedBorderProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export const AnimatedBorder = ({
  children,
  className,
  gradient = 'from-primary to-secondary',
}: AnimatedBorderProps) => {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl',
        'before:absolute before:inset-0 before:rounded-2xl before:p-[2px]',
        'before:bg-gradient-to-r before:' + gradient,
        'before:-z-10',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
