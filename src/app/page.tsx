'use client'

import { motion } from 'framer-motion'
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Testimonials,
  Contact,
} from '@/components/sections'
import { AuroraBackground, CustomCursor } from '@/components/animations'

const sections = [
  { Component: Hero, delay: 0 },
  { Component: About, delay: 0.1 },
  { Component: Skills, delay: 0.2 },
  { Component: Projects, delay: 0.3 },
  { Component: Experience, delay: 0.4 },
  { Component: Testimonials, delay: 0.5 },
  { Component: Contact, delay: 0.6 },
]

export default function Home() {
  return (
    <AuroraBackground className="relative bg-background">
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.18),transparent_45%)] opacity-80 pointer-events-none" />
      <div className="absolute left-10 top-32 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-90 pointer-events-none" />
      <div className="absolute right-16 top-1/4 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl opacity-80 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {sections.map(({ Component, delay }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>

      <CustomCursor />

      <div className="fixed inset-x-0 bottom-0 -z-20 h-72 bg-gradient-to-t from-background via-transparent opacity-90 pointer-events-none" />
    </AuroraBackground>
  )
}
