'use client'

import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Menu, MessageCircle, Moon, Sun, Twitter, X } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keterampilan', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
]

const socialLinks = [
  { icon: Instagram, href: portfolioData.social.instagram, label: 'Instagram' },
  { icon: MessageCircle, href: portfolioData.social.whatsapp, label: 'WhatsApp' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-2xl shadow-glow',
        'transition-colors duration-300'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-display"
        >
          EVAN.
        </motion.a>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/70">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.href.slice(1))}
              whileHover={{ y: -1 }}
              className={cn(
                'relative px-4 py-2 rounded-full transition duration-300',
                activeSection === item.href.slice(1)
                  ? 'text-cyan-300'
                  : 'text-foreground/50 hover:text-foreground'
              )}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute inset-x-2 -bottom-1 h-1 rounded-full bg-cyan-400/60 blur-xl" />
              )}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-foreground/80 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:shadow-lg"
          >
            Mulai Kolaborasi
          </a>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden"
      >
        <div className="space-y-2 border-t border-white/10 bg-background/90 px-4 py-4 backdrop-blur-xl">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveSection(item.href.slice(1))
                setIsOpen(false)
              }}
              whileHover={{ x: 4 }}
              className="block rounded-2xl px-4 py-3 text-sm text-foreground/70 transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </motion.a>
          ))}
          <div className="flex justify-between gap-3 pt-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-foreground/80 transition hover:border-cyan-400/30"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
