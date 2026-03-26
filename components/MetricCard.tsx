'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  title: string
  value?: string
  description: string
  delay?: number
}

export default function MetricCard({
  title,
  value,
  description,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="bg-white border border-cool-gray border-t-2 border-t-slate-blue rounded-lg p-8 transition-shadow hover:shadow-lg cursor-default"
    >
      <h3 className="text-lg font-semibold text-midnight mb-2">{title}</h3>
      {value && (
        <p className="text-2xl font-semibold text-slate-blue mb-2">{value}</p>
      )}
      <p className="text-sm text-midnight/70">{description}</p>
    </motion.div>
  )
}
