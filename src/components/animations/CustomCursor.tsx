'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export const CustomCursor = () => {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const selector = 'a, button, input, textarea, select, .interactive'

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest && target.closest(selector)) {
        setIsHovering(true)
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target && target.closest && target.closest(selector)) {
        setIsHovering(false)
      }
    }

    document.addEventListener('pointerover', handleOver)
    document.addEventListener('pointerout', handleOut)

    return () => {
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleOut)
    }
  }, [])

  // Use springs for very snappy, low-latency movement
  const springConfig = { stiffness: 2000, damping: 90 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springScale = useSpring(isHovering ? 1.6 : 1, { stiffness: 400, damping: 40 })
  const haloScale = useSpring(isHovering ? 1.25 : 1, { stiffness: 400, damping: 40 })
  const haloOpacity = useSpring(isHovering ? 0.95 : 0.6, { stiffness: 400, damping: 40 })

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{ x: springX, y: springY, scale: springScale }}
        className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.45)]"
      />
      <motion.div
        style={{ x: springX, y: springY, scale: haloScale, opacity: haloOpacity }}
        className="absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-cyan-300/10 blur-xl"
      />
    </div>
  )
}

// Add class to body when custom cursor is enabled
if (typeof document !== 'undefined') {
  document.body.classList.add('custom-cursor-enabled')
}
