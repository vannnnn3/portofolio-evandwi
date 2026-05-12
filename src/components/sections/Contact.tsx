'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

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

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: portfolioData.social.instagram, color: 'hover:text-pink-400' },
    { icon: MessageCircle, label: 'WhatsApp', href: portfolioData.social.whatsapp, color: 'hover:text-green-400' },
    { icon: Github, label: 'GitHub', href: portfolioData.social.github, color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: portfolioData.social.linkedin, color: 'hover:text-blue-400' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Instagram does not support pre-filled messages via URL like WhatsApp
    // So we redirect directly to the profile
    window.open(portfolioData.social.instagram, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
            <Mail size={16} className="text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Get In Touch</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's <span className="gradient-text">Create Something Amazing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Have a project in mind? I'd love to hear about it. Let's collaborate and build something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
              <a href={`mailto:${portfolioData.email}`} className="text-cyan-300 hover:text-cyan-200 transition">
                {portfolioData.email}
              </a>
            </div>

            <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-xl font-bold text-white">Social</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-foreground/70 transition hover:text-cyan-300"
                  >
                    <Icon size={20} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition"
                >
                  <option value="">Select type...</option>
                  <option value="web">Web Development</option>
                  <option value="ai">AI Integration</option>
                  <option value="fullstack">Full Stack</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-400/25 transition hover:shadow-cyan-400/40"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70">
            Prefer to chat? <a href={portfolioData.social.instagram} className="text-cyan-300 hover:text-cyan-200 transition font-semibold">Message me on Instagram</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
