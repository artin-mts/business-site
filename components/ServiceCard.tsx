'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  tech?: string[]
  features?: string[]
  description: string
  delay?: number
}

export default function ServiceCard({
  title,
  tech,
  features,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-cool-gray rounded-lg p-8 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-midnight mb-3">{title}</h3>
      {tech && (
        <div className="mb-4">
          <p className="text-sm text-midnight/60 font-mono mb-2">
            {tech.join(' · ')}
          </p>
        </div>
      )}
      {features && (
        <ul className="mb-4 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-midnight/70">
              • {feature}
            </li>
          ))}
        </ul>
      )}
      <p className="text-sm text-midnight/70">{description}</p>
    </motion.div>
  )
}

