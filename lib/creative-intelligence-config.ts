/**
 * Configuration for the Creative Intelligence offer page
 * 
 * OWNER: Update these values before launch
 */

// Contact & booking
export const CI_CONFIG = {
  // Email address for lead notifications
  leadEmail: 'artin@mts-analytics.com',
  
  // Calendly booking link
  calendlyUrl: 'https://calendly.com/artin-mts-analytics/30min',
  
  // Form submission endpoint
  // For static hosting, use a service like:
  // - Formspree: https://formspree.io/f/YOUR_FORM_ID
  // - Basin: https://usebasin.com/
  // - Netlify Forms, etc.
  // Set to null to use mailto fallback
  formEndpoint: null as string | null, // TODO(ARTIN): Add form service endpoint
  
  // SLA for free breakdown delivery
  breakdownSLA: '3 business days',
} as const;

// Pricing configuration
// TODO(ARTIN): Confirm final pricing to display (or keep as "pricing on a call")
export const CI_PRICING = {
  // Set to true to show actual prices, false for "pricing on a call" style
  showPrices: false,
  
  // Pilot pricing (30-day)
  pilot: {
    display: 'Pricing discussed on call', // e.g., '$4,000 flat'
    value: null as number | null, // e.g., 4000
  },
  
  // Build pricing (one-time)
  build: {
    display: 'Custom quote', // e.g., 'From $7,500'
    minValue: null as number | null, // e.g., 7500
    maxValue: null as number | null, // e.g., 15000
  },
  
  // Monthly retainer
  retainer: {
    display: 'Custom quote', // e.g., 'From $2,000/mo'
    minValue: null as number | null, // e.g., 2000
    maxValue: null as number | null, // e.g., 4000
  },
  
  // Pilot credit toward build?
  pilotCreditTowardBuild: true, // TODO(ARTIN): Confirm
} as const;

// Meta spend qualification
export const CI_QUALIFICATION = {
  // Minimum monthly Meta spend for "great fit"
  minSpend: '$50K',
  maxSpend: '$500K',
  // Floor for "not a fit yet"
  spendFloor: '$20K', // TODO(ARTIN): Confirm floor
} as const;

// External stats & citations
// TODO(ARTIN): Verify MIT NANDA report URL for the 5% stat
export const CI_STATS = {
  mhi: {
    stat: '1,392',
    statSecondary: '19',
    description: 'Median DTC brand ran 1,392 Meta ads with spend in 90 days. Only 19 took ≥1% of spend.',
    source: 'MHI Meta Benchmarks',
    date: 'Oct 2026',
    url: 'https://mhigrowthengine.com/blog/meta-ads-creative-volume-benchmarks-2026/',
  },
  gartner: {
    stat: '40%+',
    description: 'of agentic AI projects predicted to be canceled by 2027',
    source: 'Gartner',
    date: 'Jun 2025',
    url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  },
  // MIT NANDA stat - link dropped per brief instructions (couldn't verify specific report URL)
  // The stat is kept for reference but should not be displayed with a link until Artin confirms the URL
  mitNanda: {
    stat: '5%',
    description: 'of custom enterprise AI tools reach production',
    source: 'MIT NANDA',
    date: '2025',
    url: null, // TODO(ARTIN): Provide actual report URL
  },
} as const;

// Form field options
export const CI_FORM_OPTIONS = {
  spendBuckets: [
    { value: 'under-20k', label: 'Under $20K/month' },
    { value: '20k-50k', label: '$20K – $50K/month' },
    { value: '50k-150k', label: '$50K – $150K/month' },
    { value: '150k-500k', label: '$150K – $500K/month' },
    { value: '500k-plus', label: '$500K+/month' },
  ],
  roles: [
    { value: 'founder', label: 'Founder / CEO' },
    { value: 'growth', label: 'Head of Growth' },
    { value: 'creative', label: 'Creative Strategist' },
    { value: 'agency', label: 'Agency' },
    { value: 'other', label: 'Other' },
  ],
} as const;
