import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Intelligence Stack | MTS Analytics',
  description:
    "A premium analytics and AI system for ecommerce brands doing $5M–$50M+. One source of truth for revenue, attribution clarity, and instant answers to what's happening and why.",
}

export default function RevenueIntelligenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
