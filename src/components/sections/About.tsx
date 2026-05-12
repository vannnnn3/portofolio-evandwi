'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code2, Zap, Target } from 'lucide-react'

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stats = [
    { icon: Zap, label: '5+ Years', value: 'Experience', color: 'from-cyan-400 to-blue-500' },
    { icon: Code2, label: '50+', value: 'Projects', color: 'from-purple-400 to-pink-500' },
    { icon: Target, label: '100%', value: 'Commitment', color: 'from-green-400 to-cyan-500' },
    { icon: Sparkles, label: '∞', value: 'Innovation', color: 'from-amber-400 to-orange-500' },
  ]

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">About Me</span>
          </div>
          <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="gradient-text">Evan Dwi</span> - AI Engineer & Creative Developer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            I craft immersive digital experiences with AI integration, futuristic design, and cutting-edge technology. Turning ideas into intelligent solutions.
          </p>
        </motion.div>

        {/* Stats Grid - Bento style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                </div>
                <div className="relative z-10">
                  <Icon className={`mb-3 h-6 w-6 text-cyan-300`} />
                  <p className="text-2xl font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-foreground/60">{stat.value}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {/* Bio Card - Large */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 backdrop-blur-xl lg:col-span-2 lg:row-span-2"
          >
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0" />
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="mb-3 text-3xl font-bold text-white">Who I Am</h3>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
              <div className="space-y-4 text-foreground/70">
                <p>
                  I'm a full-stack developer and AI engineer passionate about creating immersive, futuristic digital experiences. With 5+ years of experience, I specialize in building intelligent interfaces that combine cutting-edge design with powerful technology.
                </p>
                <p>
                  My approach blends creativity with technical excellence, resulting in products that are not just functional, but truly transformative.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {['React', 'Next.js', 'TypeScript', 'AI/ML', 'Web3'].map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white">Core Skills</h3>
              <div className="space-y-3">
                {['Frontend Development', 'Backend Systems', 'AI Integration', 'UI/UX Design', 'DevOps'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-sm text-foreground/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Passion Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white">Passion</h3>
              <p className="mb-4 text-sm text-foreground/70">
                Building AI-powered interfaces, exploring emerging technologies, and creating immersive digital experiences.
              </p>
              <div className="flex gap-2">
                <div className="inline-flex items-center gap-1 rounded-full bg-pink-400/20 px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
                  <span className="text-xs text-pink-300">Always Innovating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white">Achievement</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Led 50+ successful projects</li>
                <li>• 100+ satisfied clients</li>
                <li>• Awards in design & development</li>
                <li>• Open source contributor</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
