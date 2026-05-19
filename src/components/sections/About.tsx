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

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

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
            Saya adalah siswa SMK RAJASA SURABAYA yang sedang belajar tentang website dan belajar untuk membuat website dan memahami kepentingan membuat website itu apa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200 shadow-sm shadow-cyan-400/10">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              LIVE INTERFACE
            </div>
            <div className="relative overflow-hidden rounded-full border-4 border-gradient-to-br from-cyan-400 via-purple-500 to-blue-500 p-[3px] shadow-lg shadow-cyan-500/20">
              <div className="rounded-full overflow-hidden bg-slate-900 w-40 h-40 sm:w-48 sm:h-48">
                <img
                  src={`${basePath}/asset_images/avatar.jpeg`}
                  alt="Profile Photo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute bottom-2 right-2 inline-flex h-4 w-4 rounded-full border-2 border-slate-900 bg-green-400 shadow-lg shadow-green-400/40" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">EVAN DWI SYAHPUTRA</h3>
              <p className="text-sm text-foreground/70">Full-stack developer & passionate web designer</p>
            </div>
          </div>
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
                  Perkenalkan, nama saya Evan Dwi Syahputra, seorang siswa yang sedang menempuh pendidikan di SMK Rajasa dengan mengambil jurusan TKJ (Teknik Komputer dan Jaringan). Saya memiliki ketertarikan besar di bidang teknologi, khususnya dalam dunia komputer, jaringan, dan pengembangan website. Saat ini saya sedang fokus mengerjakan sebuah project pembuatan website portofolio modern sebagai bagian dari pengembangan kemampuan sekaligus pengalaman belajar di dunia IT.
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
