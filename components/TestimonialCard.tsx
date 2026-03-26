'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  delay?: number
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg"
    >
      <div className="mb-4 text-slate-blue/40 text-3xl leading-none">&ldquo;</div>
      <p className="text-lg text-midnight/80 italic mb-6 leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-blue/10 flex items-center justify-center flex-shrink-0">
          <span className="text-slate-blue text-sm font-semibold">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-midnight">{name}</p>
          <p className="text-xs text-midnight/50">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}
