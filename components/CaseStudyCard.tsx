'use client'

import { motion } from 'framer-motion'

interface CaseStudyCardProps {
  title: string
  challenge: string
  solution: string
  results: string[]
  delay?: number
}

export default function CaseStudyCard({
  title,
  challenge,
  solution,
  results,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="bg-white border border-cool-gray border-l-2 border-l-slate-blue rounded-lg p-8 transition-shadow hover:shadow-lg cursor-default"
    >
      <h3 className="text-xl font-semibold text-midnight mb-4">{title}</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-midnight/80 mb-1">Challenge:</p>
          <p className="text-sm text-midnight/70">{challenge}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-midnight/80 mb-1">Solution:</p>
          <p className="text-sm text-midnight/70">{solution}</p>
        </div>
        <div className="bg-slate-blue/5 rounded-md p-3 -mx-1">
          <p className="text-sm font-semibold text-slate-blue mb-2">Results:</p>
          <ul className="space-y-1">
            {results.map((result, idx) => (
              <li key={idx} className="text-sm text-midnight/70">
                • {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
