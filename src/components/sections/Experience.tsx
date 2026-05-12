'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Tech Innovators Co.',
    duration: '2023 - Present',
    description: 'Leading AI integration projects and designing intelligent interfaces for millions of users.',
    achievements: ['Led 15+ AI projects', 'Mentored 5 junior developers', 'Published 3 technical articles'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Creators Inc.',
    duration: '2021 - 2023',
    description: 'Built scalable web applications and APIs serving 500K+ monthly users.',
    achievements: ['Reduced load time by 60%', 'Implemented CI/CD pipeline', 'Architected microservices'],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Studios',
    duration: '2019 - 2021',
    description: 'Designed and implemented responsive interfaces with focus on UX excellence.',
    achievements: ['Won design awards', 'Built component library', '5+ successful launches'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Labs',
    duration: '2018 - 2019',
    description: 'Started journey in web development, contributing to various projects.',
    achievements: ['First production deploy', 'Learned full stack', 'Built 10+ features'],
  },
]

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
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
            <Briefcase size={16} className="text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Career Journey</span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-cyan-400 before:bg-background"
            >
              {/* Timeline connector */}
              {i !== experiences.length - 1 && (
                <div className="absolute left-1.5 top-8 h-16 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent" />
              )}

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/50 hover:bg-cyan-400/5">
                <div className="mb-3 flex flex-col justify-between md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm text-cyan-300">{exp.company}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60 md:mt-0">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <p className="mb-4 text-foreground/70">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <span key={achievement} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                      ✓ {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
