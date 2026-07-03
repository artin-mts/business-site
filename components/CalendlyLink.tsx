'use client'

import { CALENDLY_URL, trackCtaClick } from '@/lib/cta'

interface CalendlyLinkProps {
  label: string
  className?: string
  children: React.ReactNode
}

export default function CalendlyLink({ label, className, children }: CalendlyLinkProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(label)}
      className={className}
    >
      {children}
    </a>
  )
}
