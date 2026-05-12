'use client'

import { cn } from '@/lib/utils'

interface InfiniteMarqueeProps {
  className?: string
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
}

export const InfiniteMarquee = ({
  className,
  children,
  speed = 25,
  direction = 'left',
}: InfiniteMarqueeProps) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <style>{`
        @keyframes marquee-${direction} {
          0% {
            transform: translateX(${direction === 'right' ? '-100%' : '100%'});
          }
          100% {
            transform: translateX(${direction === 'right' ? '100%' : '-100%'});
          }
        }
        
        .marquee-animation {
          animation: marquee-${direction} ${speed}s linear infinite;
        }
      `}</style>

      <div className="flex marquee-animation">
        <div className="flex items-center gap-4 pr-4 whitespace-nowrap">{children}</div>
        <div className="flex items-center gap-4 pr-4 whitespace-nowrap">{children}</div>
      </div>
    </div>
  )
}
