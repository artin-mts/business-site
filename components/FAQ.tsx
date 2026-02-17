'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className="bg-white border border-cool-gray rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-soft-white transition-colors"
          >
            <span className="font-semibold text-midnight">{item.question}</span>
            <span className="text-slate-blue text-xl">
              {openIndex === idx ? '−' : '+'}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4">
              <p className="text-midnight/70">{item.answer}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

