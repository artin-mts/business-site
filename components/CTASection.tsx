'use client'

import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref?: string
  variant?: 'primary' | 'secondary'
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref = '#contact',
  variant = 'primary',
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-midnight text-soft-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href={buttonHref}
          className={`inline-block px-6 py-3 rounded-md font-medium transition-opacity ${
            variant === 'primary'
              ? 'bg-slate-blue text-white hover:opacity-90'
              : 'bg-transparent border border-soft-white/30 text-soft-white hover:border-soft-white/50'
          }`}
        >
          {buttonText}
        </a>
      </div>
    </motion.section>
  )
}

