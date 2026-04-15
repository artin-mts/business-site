import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MTS Analytics | Modern Data Pipelines & AI-Powered Analytics for DTC Brands',
  description: 'Stop pulling reports from 5 different platforms. Get one source of truth that actually works. Modern data pipelines, unified dashboards, and AI that answers real questions for DTC brands.',
  metadataBase: new URL('https://mts-analytics.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'MTS Analytics | Modern Data Pipelines & AI-Powered Analytics for DTC Brands',
    description: 'Stop pulling reports from 5 different platforms. Get one source of truth that actually works.',
    url: 'https://mts-analytics.com',
    siteName: 'MTS Analytics',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MTS Analytics',
              url: 'https://mts-analytics.com',
              description: 'Senior-led data & AI studio for ecommerce and DTC brands. Modern data pipelines, unified dashboards, and AI-powered analytics.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'artin@mts-analytics.com',
                contactType: 'sales',
              },
              areaServed: 'US',
            }),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(
  function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  }
)(window,document,'script','dataLayer','GTM-TS2MQCQF');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS2MQCQF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
