export const CALENDLY_URL = 'https://calendly.com/artin-mts-analytics/30min'

type TrackingWindow = Window & {
  dataLayer?: Record<string, unknown>[]
  gtag?: (...args: unknown[]) => void
}

export function trackCtaClick(label: string) {
  if (typeof window === 'undefined') return
  const w = window as TrackingWindow
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: 'cta_click', cta_label: label })

  if (typeof w.gtag === 'function') {
    w.gtag('event', 'conversion', {
      send_to: 'AW-18297010208/6lVBCPP9nsocEKDw2JRE',
      value: 1.0,
      currency: 'USD',
    })
  }
}
