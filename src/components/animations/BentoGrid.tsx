'use client'

import { cn } from '@/lib/utils'

interface BentoGridProps {
  className?: string
  children: React.ReactNode
}

interface BentoGridItemProps {
  className?: string
  children: React.ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({ className, children }: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl',
        'transition duration-200 shadow-input dark:shadow-none p-4',
        'dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      {children}
    </div>
  )
}
