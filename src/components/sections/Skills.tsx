'use client'

import { motion } from 'framer-motion'
import { InfiniteMarquee } from '@/components/animations'

const techStack = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 93 },
  { name: 'TypeScript', level: 92 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'PostgreSQL', level: 87 },
  { name: 'MongoDB', level: 86 },
]

const categories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind', 'Framer Motion'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
  },
  {
    name: 'AI/ML',
    skills: ['Machine Learning', 'Data Analysis', 'RAG Systems', 'Prompt Engineering'],
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Firebase'],
  },
]

export const Skills = () => {
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
    <section id="skills" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
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
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Skills & Tools</span>
          </div>
          <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-bold md:text-5xl">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <InfiniteMarquee speed={30}>
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'AI', 'Web3'].map((tech) => (
              <div key={tech} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md whitespace-nowrap text-sm font-semibold text-cyan-300">
                {tech}
              </div>
            ))}
          </InfiniteMarquee>
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid gap-6 md:grid-cols-2"
        >
          {techStack.map((tech, i) => (
            <motion.div key={tech.name} variants={itemVariants} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{tech.name}</span>
                <span className="text-xs text-cyan-400">{tech.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-400/5 transition"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300"
                    >
                      {skill}
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
