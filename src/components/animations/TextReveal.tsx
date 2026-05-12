'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const words = text.split(' ')
    ref.current.innerHTML = words
      .map(
        (word, idx) =>
          `<span style="animation-delay: ${delay + idx * 0.1}s" class="inline-block animate-fade-up opacity-0">${word}&nbsp;</span>`
      )
      .join('')
  }, [text, delay])

  return <div ref={ref} className={cn('overflow-hidden', className)} />
}
