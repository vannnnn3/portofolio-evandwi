'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterEffectProps {
  words: string[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const currentWord = words[wordIndex]
      const displayedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1)

      if (textRef.current) {
        textRef.current.textContent = displayedText
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true
        setTimeout(type, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        setTimeout(type, 500)
      } else {
        setTimeout(type, isDeleting ? 50 : 100)
      }

      if (!isDeleting) {
        charIndex++
      } else {
        charIndex--
      }
    }

    setTimeout(type, 500)
  }, [words])

  return (
    <div ref={ref} className={cn('inline-block', className)}>
      <span ref={textRef} />
      <span className={cn('ml-1 inline-block w-1 h-8 bg-primary animate-pulse', cursorClassName)} />
    </div>
  )
}
