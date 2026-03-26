'use client'

import { animate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [inView, setInView] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView])

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-semibold text-soft-white mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-soft-white/60">{label}</div>
    </div>
  )
}
