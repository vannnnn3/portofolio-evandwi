'use client'

import { useMousePosition } from '@/hooks/useMousePosition'
import { cn } from '@/lib/utils'

interface SpotlightProps {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill = '#8b5cf6' }: SpotlightProps) => {
  const mousePosition = useMousePosition()

  return (
    <div className={cn('pointer-events-none fixed inset-0', className)}>
      <svg
        className="w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="spotlight" cx={mousePosition.x} cy={mousePosition.y}>
            <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={mousePosition.x} cy={mousePosition.y} r="200" fill="url(#spotlight)" />
      </svg>
    </div>
  )
}
