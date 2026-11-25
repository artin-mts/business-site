'use client';

import { CI_PRICING, CI_CONFIG } from '@/lib/creative-intelligence-config';

interface PricingCardProps {
  tier: 'free' | 'pilot' | 'build';
  highlighted?: boolean;
  className?: string;
}

const tiers = {
  free: {
    name: 'Free Ad Library Breakdown',
    price: 'Free',
    description: "Any brand's live Meta ads, broken into concepts, longevity, and gaps.",
    deliveryTime: CI_CONFIG.breakdownSLA,
    features: [
      'Total live ads & distinct concepts',
      'Longest-running concepts (likely winners)',
      'Variant bursts (scaling signals)',
      '2-3 gaps you haven\'t tried',
    ],
    cta: 'Get my breakdown',
    ctaStyle: 'secondary' as const,
    ctaAction: 'scroll-breakdown' as const,
  },
  pilot: {
    name: '30-Day Pilot',
    price: CI_PRICING.showPrices && CI_PRICING.pilot.display ? CI_PRICING.pilot.display : 'Pilot pricing on a call',
    description: 'Your ads + orders + 5 competitors, AI-tagged, with 4 weekly briefs and a final readout.',
    badge: 'Most teams start here',
    features: [
      'Meta ad-level + Shopify orders joined',
      'AI concept-tagging of last 90 days',
      'Competitor watchlist (up to 5 brands)',
      '4 weekly briefs + end-of-pilot readout',
      CI_PRICING.pilotCreditTowardBuild ? 'Fee credited toward the build' : null,
    ].filter(Boolean) as string[],
    cta: 'Book a 30-min call',
    ctaStyle: 'primary' as const,
    ctaAction: 'calendly' as const,
  },
  build: {
    name: 'Agent Build + Run',
    price: CI_PRICING.showPrices && CI_PRICING.build.display ? CI_PRICING.build.display : 'Custom build quote',
    priceSecondary: CI_PRICING.showPrices && CI_PRICING.retainer.display ? `+ ${CI_PRICING.retainer.display}` : '+ monthly retainer',
    description: 'Production agent in your stack, weekly briefs, ask-anything chat, ongoing tuning.',
    features: [
      'Production agent in your warehouse',
      'Custom concept taxonomy',
      'Weekly brief to Slack or email',
      'Ask-anything chat over your data',
      'Ongoing tuning and support',
    ],
    cta: 'Book a 30-min call',
    ctaStyle: 'secondary' as const,
    ctaAction: 'calendly' as const,
  },
};

export default function PricingCard({ 
  tier, 
  highlighted = false, 
  className = '' 
}: PricingCardProps) {
  const data = tiers[tier];

  const handleClick = () => {
    if (data.ctaAction === 'scroll-breakdown') {
      document.getElementById('breakdown')?.scrollIntoView({ behavior: 'smooth' });
    } else if (data.ctaAction === 'calendly') {
      window.open(CI_CONFIG.calendlyUrl, '_blank');
    }
  };
  
  return (
    <div 
      className={`
        relative rounded-xl border p-6 h-full flex flex-col
        ${highlighted 
          ? 'bg-ci-surface-2 border-ci-signal/40 shadow-lg shadow-ci-signal/10' 
          : 'bg-ci-surface border-ci-border'
        }
        ${className}
      `}
    >
      {/* Badge */}
      {'badge' in data && data.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-ci-signal text-ci-bg text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
            {data.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-ci-text font-semibold text-lg mb-2">{data.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-2xl font-bold ${highlighted ? 'text-ci-signal' : 'text-ci-text'}`}>
            {data.price}
          </span>
          {'priceSecondary' in data && data.priceSecondary && (
            <span className="text-ci-muted text-sm">{data.priceSecondary}</span>
          )}
        </div>
        {'deliveryTime' in data && data.deliveryTime && (
          <div className="ci-mono-label text-ci-subtle text-[10px] mt-1">
            Delivered in {data.deliveryTime}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-ci-muted text-sm mb-4">{data.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-grow">
        {data.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg 
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? 'text-ci-signal' : 'text-ci-win'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-ci-muted">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={handleClick}
        className={`
          w-full py-3 px-4 rounded-lg font-medium text-sm transition-all
          ${data.ctaStyle === 'primary'
            ? 'bg-ci-signal text-ci-bg hover:brightness-110 hover:shadow-lg hover:shadow-ci-signal/25'
            : 'bg-ci-surface-2 text-ci-text border border-ci-border hover:border-ci-muted hover:bg-ci-border/30'
          }
        `}
      >
        {data.cta} →
      </button>
    </div>
  );
}
