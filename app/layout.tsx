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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1NJTY0HC0T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());

gtag('config', 'G-1NJTY0HC0T');`,
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

