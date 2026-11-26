import type { Metadata } from 'next'
import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-schibsted',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MTS Analytics | Data Infrastructure & AI Agents for DTC Brands',
  description: 'MTS Analytics unifies ad, order, and warehouse data into one reliable layer, then builds practical AI agents and analytics systems on top for DTC and e-commerce brands.',
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
    title: 'MTS Analytics | Data Infrastructure & AI Agents for DTC Brands',
    description: 'MTS Analytics unifies ad, order, and warehouse data into one reliable layer, then builds practical AI agents and analytics systems on top for DTC and e-commerce brands.',
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
    <html lang="en" className={`${schibsted.variable} ${jetbrains.variable}`}>
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
              description: 'Senior-led data & AI studio for e-commerce and DTC brands: unified data infrastructure and practical AI agents built on top.',
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18297010208" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-18297010208');`,
          }}
        />
        {/* End Google tag */}
      </head>
      <body className={schibsted.className}>
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
