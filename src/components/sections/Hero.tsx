'use client'

import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui'
import { portfolioData } from '@/data/portfolio'
import { TypewriterEffect } from '@/components/animations'

export const Hero = () => {
  const orbVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      {/* Animated background grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Glowing orbs background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"
        animate={orbVariants.float}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0], transition: { duration: 8, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-10 left-1/2 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, 20, 0], transition: { duration: 7, repeat: Infinity, delay: 1 } }}
      />

      {/* Spotlight effect */}
      <div className="hero-spotlight" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-3 backdrop-blur-xl w-fit"
            >
              <div className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Available for Work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="max-w-3xl text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl font-display">
                Building <span className="gradient-text inline-block">Intelligent</span>
                <br />
                Digital Experiences
              </h1>
              <div className="text-xl text-cyan-200/80 md:text-2xl font-light">
                <TypewriterEffect
                  words={[
                    'AI Engineer • Full Stack Developer',
                    'Futuristic UI Designer • Web Architect',
                    'Tech Innovator • Digital Pioneer',
                  ]}
                />
              </div>
            </div>

            {/* Description */}
            <motion.p variants={itemVariants} className="max-w-2xl text-lg leading-relaxed text-foreground/70">
              Crafting next-generation web experiences with AI integration, immersive interfaces, and futuristic design systems. Where technology meets artistry.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black shadow-lg hover:shadow-cyan-500/50">
                <Zap size={18} />
                Explore Projects
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10">
                Download Resume
              </Button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-6">
              {['React', 'Next.js', 'TypeScript', 'AI', 'Web3'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-xl"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/50" />
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: portfolioData.social.instagram, label: 'Instagram' },
                  { icon: MessageCircle, href: portfolioData.social.whatsapp, label: 'WhatsApp' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground/80 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/50">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center p-2">
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block h-1.5 w-1 rounded-full bg-cyan-400" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
