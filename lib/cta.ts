export const CALENDLY_URL = 'https://calendly.com/artin-mts-analytics/30min'

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] }

export function trackCtaClick(label: string) {
  if (typeof window === 'undefined') return
  const w = window as DataLayerWindow
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: 'cta_click', cta_label: label })
}
