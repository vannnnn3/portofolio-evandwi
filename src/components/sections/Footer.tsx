'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Instagram, Mail, MessageCircle } from 'lucide-react'
import { scrollToElement } from '@/lib/utils'
import { portfolioData } from '@/data/portfolio'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: portfolioData.social.instagram, label: 'Instagram' },
    { icon: MessageCircle, href: portfolioData.social.whatsapp, label: 'WhatsApp' },
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background/80 backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.12),transparent_45%)] opacity-80 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 py-16 grid gap-10 md:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-display">
              EVAN.
            </div>
            <p className="text-foreground/60 text-sm">
              Full-stack developer yang menciptakan pengalaman digital futuristik dan premium.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[
                { label: 'Beranda', href: 'home' },
                { label: 'Tentang', href: 'about' },
                { label: 'Proyek', href: 'projects' },
                { label: 'Kontak', href: 'contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToElement(link.href)}
                    className="transition hover:text-cyan-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white">Terhubung</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-foreground/80 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-foreground/50">
            © {currentYear} Evan Dwi. All rights reserved.
          </p>
          <motion.button
            onClick={() => scrollToElement('home')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 text-sm text-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
