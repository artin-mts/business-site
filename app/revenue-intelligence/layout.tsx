import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Intelligence Stack | MTS Analytics',
  description:
    "A premium analytics and AI system for ecommerce brands doing $5M–$50M+. One source of truth for revenue, attribution clarity, and instant answers to what's happening and why.",
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Revenue Intelligence Stack',
  description: 'A complete analytics and AI system for ecommerce brands. Unified data warehouse, attribution modeling, real-time dashboards, and conversational AI interface.',
  provider: {
    '@type': 'Organization',
    name: 'MTS Analytics',
  },
  serviceType: 'Analytics and AI Implementation',
  areaServed: 'US',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '10000',
    highPrice: '40000',
    priceCurrency: 'USD',
  },
}

export default function RevenueIntelligenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}
