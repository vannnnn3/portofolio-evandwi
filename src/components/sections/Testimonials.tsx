'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { InfiniteMarquee } from '@/components/animations'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at Tech Corp',
    content: 'Exceptional developer with amazing attention to detail. Delivered the project ahead of schedule with outstanding quality.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Product Manager',
    content: 'Evan\'s AI integration work transformed our platform. Highly recommend for any cutting-edge projects.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder & CEO',
    content: 'Best decision was hiring Evan. Brought innovation and technical excellence to every project.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Design Director',
    content: 'Rare combination of technical skills and creative thinking. Loved collaborating with such a talented developer.',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Product Owner',
    content: 'Delivered an incredible dashboard. The attention to user experience was remarkable.',
    rating: 5,
  },
  {
    name: 'David Kumar',
    role: 'CTO at StartUp Labs',
    content: 'Outstanding work on our AI pipeline. Professional, reliable, and incredibly skilled.',
    rating: 5,
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-xl hover:border-cyan-400/50 min-w-fit mx-3"
  >
    <div className="mb-4 flex items-start justify-between">
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
        ))}
      </div>
    </div>

    <p className="mb-4 text-sm text-foreground/80">{testimonial.content}</p>

    <div className="border-t border-white/10 pt-4">
      <p className="font-semibold text-white">{testimonial.name}</p>
      <p className="text-xs text-cyan-300">{testimonial.role}</p>
    </div>
  </motion.div>
)

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
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
            <Star size={16} className="text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Loved by <span className="gradient-text">Clients & Teams</span>
          </h2>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <InfiniteMarquee speed={20} direction="left">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </InfiniteMarquee>
        </motion.div>

        {/* Second row moving right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <InfiniteMarquee speed={20} direction="right">
            {testimonials.slice().reverse().map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>
    </section>
  )
}
