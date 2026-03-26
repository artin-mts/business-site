'use client'

import { motion } from 'framer-motion'

interface CTASectionProps {
  id?: string
  title: string
  description: string
  subtitle?: string
  buttonText: string
  buttonHref?: string
  variant?: 'primary' | 'secondary'
}

export default function CTASection({
  id,
  title,
  description,
  subtitle,
  buttonText,
  buttonHref = '#contact',
  variant = 'primary',
}: CTASectionProps) {
  return (
    <motion.section
      id={id}
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
          className={`inline-block px-6 py-3 rounded-md font-medium cursor-pointer ${
            variant === 'primary'
              ? 'bg-slate-blue text-white hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
              : 'bg-transparent border border-soft-white/30 text-soft-white hover:bg-soft-white/10 hover:border-soft-white/50 transition-all duration-200'
          }`}
        >
          {buttonText}
        </a>
        {subtitle && (
          <p className="text-sm text-soft-white/60 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </motion.section>
  )
}

