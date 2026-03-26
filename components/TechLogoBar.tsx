'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'BigQuery', path: 'M6 2L1 12l5 10h12l5-10L18 2H6zm6 15a5 5 0 110-10 5 5 0 010 10z' },
  { name: 'dbt', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-6v4h4l-5 6z' },
  { name: 'Shopify', path: 'M15.34 3.27l-.79 5.94-2.1-.55s-.45-3.16-.47-3.32c0-.16-.1-.23-.2-.23l-1.02-.07C10.76 3.88 9.68 2 9.68 2l-2.3 6.42-.03.08L5 8l.01.08 1.67 11.42h4.5l.32-2.12 1.83.49 5.29-11.08-3.28-3.52zM9.23 6.38l.72 4.84-2.5-.66 1.78-4.18zm1.86 11.92l-.22 1.5H7.5L6.23 9.67l1.25.33-.32.9 2.75.72.19-1.32h.99z' },
  { name: 'Meta', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 7c1.1 0 2 .67 2.5 1.5.5-.83 1.4-1.5 2.5-1.5 1.93 0 3.5 2.24 3.5 5s-1.57 5-3.5 5c-1.1 0-2-.67-2.5-1.5-.5.83-1.4 1.5-2.5 1.5C6.57 17 5 14.76 5 12s1.57-5 3.5-5z' },
  { name: 'Google Ads', path: 'M3.27 12l5.45-9.44a2.18 2.18 0 013.82.08L21 18h-5.45L12 12l-3.55 6H3a2.18 2.18 0 01.27-6z' },
  { name: 'GA4', path: 'M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM12 6a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z' },
  { name: 'Klaviyo', path: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 9l-7 3.5L5 9l7-4.5zM4 10.5l7 3.5v7L4 17.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z' },
  { name: 'Rill', path: 'M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h4v10H7V7zm6 4h4v6h-4v-6z' },
]

export default function TechLogoBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <p className="text-center text-xs text-midnight/40 uppercase tracking-wider font-medium mb-8">
        Built on industry-leading tools
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-midnight/70">
              <path d={logo.path} />
            </svg>
            <span className="text-[10px] text-midnight/50 font-medium">{logo.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
