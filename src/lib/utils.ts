import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date)
}

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
