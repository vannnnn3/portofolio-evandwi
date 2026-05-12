import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#020617',
        backgroundSoft: '#0b1124',
        foreground: '#eff4ff',
        card: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.12)',
        primary: '#00f5ff',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
        'gradient-2': 'linear-gradient(135deg, #ec4899, #8b5cf6)',
        'gradient-3': 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        glow: 'glow 2.5s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        shine: 'shine 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        marquee: 'marquee 25s linear infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        blob: 'blob 8s ease-in-out infinite',
        scan: 'scan 10s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.35)' },
          '50%': { boxShadow: '0 0 48px rgba(139, 92, 246, 0.65)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(18px, -12px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 10px) scale(0.96)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 245, 255, 0.18)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.25)',
        'glow-sm': '0 0 14px rgba(255, 255, 255, 0.08)',
      },
      borderRadius: {
        '3xl': '24px',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      addUtilities({
        '.glassmorphism': {
          '@apply bg-white/5 backdrop-blur-md border border-white/10': {},
        },
        '.glassmorphism-dark': {
          '@apply bg-black/20 backdrop-blur-md border border-white/10': {},
        },
        '.gradient-text': {
          '@apply bg-gradient-1 bg-clip-text text-transparent': {},
        },
        '.animate-glow-border': {
          animation: 'glow 3s ease-in-out infinite',
        },
      })
    }),
  ],
}
export default config
