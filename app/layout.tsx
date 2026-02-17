import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'MTS Analytics | Modern Data Pipelines & AI-Powered Analytics for DTC Brands',
  description: 'Stop pulling reports from 5 different platforms. Get one source of truth that actually works. Modern data pipelines, unified dashboards, and AI that answers real questions for DTC brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

