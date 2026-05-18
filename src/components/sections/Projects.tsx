'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { GlowCard } from '@/components/animations'

const projects = [
  {
    id: 1,
    title: 'Arduino Uno',
    description: 'Proyek menggunakan Arduino Uno untuk mengontrol sensor dan LED, menunjukkan dasar pemrograman mikrokontroler dan elektronik praktis.',
    tags: ['Arduino', 'Elektronik', 'Sensor', 'Pemrograman'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Pembuatan Website Portofolio',
    description: 'Website portofolio personal untuk menampilkan proyek, keterampilan, dan pengalaman dengan desain responsif dan modern.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Mikrotik Network Configuration',
    description: 'Konfigurasi jaringan Mikrotik untuk routing, firewall, dan manajemen bandwidth di lingkungan laboratorium.',
    tags: ['Mikrotik', 'Routing', 'Firewall', 'Networking'],
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'LAN Infrastructure',
    description: 'Perancangan infrastruktur LAN yang stabil dan terorganisir, mencakup switch, kabel, dan topologi jaringan lokal.',
    tags: ['LAN', 'Switch', 'Topologi', 'Infrastruktur'],
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    id: 5,
    title: 'User Testing & Prototyping',
    description: 'Pengujian pengguna dan pembuatan prototipe untuk mengevaluasi pengalaman dan mengoptimalkan desain sebelum pengembangan final.',
    tags: ['UX', 'Prototyping', 'User Test', 'Feedback'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 6,
    title: 'Design System Documentation',
    description: 'Dokumentasi sistem desain yang mencakup panduan komponen, tipografi, dan aturan penggunaan untuk konsistensi UI.',
    tags: ['Design System', 'Dokumentasi', 'UI Kit', 'Guidelines'],
    gradient: 'from-violet-500 to-purple-500',
  },
]

export const Projects = () => {
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

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Featured Work</span>
          </div>
          <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-bold md:text-5xl">
            Showcase of <span className="gradient-text">Innovative Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <GlowCard className="group h-full overflow-hidden rounded-3xl border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/50 transition flex flex-col">
                {/* Header */}
                <div className="mb-4 space-y-2">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm text-foreground/70">{project.description}</p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 border-t border-white/10 pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-semibold text-foreground/80 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-semibold text-foreground/80 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
