import { Metadata } from 'next';
import SwissLayout from '@/components/swiss/SwissLayout';
import SwissSection from '@/components/swiss/SwissSection';
import SwissButton from '@/components/swiss/SwissButton';
import HeroAdStrip from '@/components/swiss/HeroAdStrip';
import { CI_CONFIG, CI_STATS, CI_QUALIFICATION } from '@/lib/creative-intelligence-config';
import { getCIFAQSchema, ciFaqItems } from '@/lib/creative-intelligence-faq';

export const metadata: Metadata = {
  title: 'Creative Intelligence Agent for DTC Brands on Meta | MTS Analytics',
  description: 'An AI agent that joins your Meta ads to real Shopify orders, tracks competitors\' Ad Library, and sends a weekly brief on what\'s winning, fatiguing, and what to make next.',
  alternates: {
    canonical: '/creative-intelligence/',
  },
  openGraph: {
    title: 'Creative Intelligence Agent for DTC Brands on Meta | MTS Analytics',
    description: 'Know which ads to make next. An AI agent that reads your Meta ads, your competitors\' Ad Library, and your actual Shopify orders.',
    url: 'https://mts-analytics.com/creative-intelligence/',
    siteName: 'MTS Analytics',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creative Intelligence Agent',
  provider: {
    '@type': 'Organization',
    name: 'MTS Analytics',
    url: 'https://mts-analytics.com',
  },
  description: 'An AI agent that joins Meta ads to Shopify orders, tracks competitors, and delivers weekly creative briefs.',
  areaServed: 'US',
  serviceType: 'AI Creative Analytics',
};

export default function CreativeIntelligencePage() {
  const faqSchema = getCIFAQSchema();

  return (
    <SwissLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="border-b border-swiss-rule">
        {/* Sub-header metadata row */}
        <div className="border-b border-swiss-rule">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 py-3 gap-4 font-mono text-mono-sm text-swiss-ink-subtle">
              <span>THE OFFER</span>
              <span className="hidden md:block">CREATIVE INTELLIGENCE AGENT</span>
              <span className="hidden md:block">FOR DTC BRANDS ON META</span>
              <span className="text-right md:text-left">{CI_QUALIFICATION.minSpend}–{CI_QUALIFICATION.maxSpend}/MO</span>
            </div>
          </div>
        </div>

        {/* Main hero */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-display text-swiss-ink mb-6">
              The Creative Intelligence Agent
            </h1>
            <p className="text-body text-swiss-ink-muted mb-8">
              A weekly brief on what's winning, what's fatiguing, and what to make next—grounded in your orders and your competitors' live ads. Built in your data, run by a senior engineer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <SwissButton href={CI_CONFIG.calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                Book a 30-minute call →
              </SwissButton>
              <SwissButton href="#breakdown" variant="ghost">
                Get a free breakdown first →
              </SwissButton>
            </div>
          </div>
        </div>

        {/* Hero visualization */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 pb-8">
          <HeroAdStrip />
        </div>
      </section>

      {/* Outcomes */}
      <SwissSection figNumber="01" figTitle="OUTCOMES" className="!pt-10 md:!pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: 'Stop funding fatigue early',
              desc: 'Spot concepts losing steam weeks before blended CPA tells you.',
            },
            {
              title: 'Brief from evidence',
              desc: 'Every "make next" comes with the data and competitor examples behind it.',
            },
            {
              title: 'Grade on revenue, not ROAS',
              desc: 'New-customer revenue and margin by concept, from your own orders.',
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-swiss-ink pt-4">
              <h3 className="text-h3 text-swiss-ink mb-2">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* What's inside */}
      <SwissSection figNumber="02" figTitle="WHAT'S INSIDE" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8 max-w-2xl">
          Everything that goes into the weekly brief
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { title: 'Ad-to-order join', desc: 'Meta ad-level + Shopify, deduped, in your warehouse' },
              { title: 'AI concept tagging', desc: 'Concept, hook, format, offer, talent, visual style (custom taxonomy)' },
              { title: 'Fatigue detection', desc: 'Frequency, CPA trend, spend decay by concept' },
            ].map((item, i) => (
              <div key={i} className="border-t border-swiss-rule pt-4">
                <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
                <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {[
              { title: 'Competitor watch', desc: 'Longevity, variant bursts, cross-brand concept spread from Meta Ad Library' },
              { title: 'Weekly brief', desc: 'Winning · Fatiguing · Make next, delivered to Slack or email' },
              { title: 'Ask-anything chat', desc: 'Query your creative + revenue data in natural language' },
            ].map((item, i) => (
              <div key={i} className="border-t border-swiss-rule pt-4">
                <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
                <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SwissSection>

      {/* Sample Brief */}
      <SwissSection id="sample-brief" figNumber="03" figTitle="SAMPLE BRIEF" className="border-t border-swiss-rule">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-h2 text-swiss-ink mb-4">
              This is what lands in Slack every Monday.
            </h2>
            <p className="text-body text-swiss-ink-muted mb-6">
              A focused brief that tells your creative team exactly what to do, backed by evidence.
            </p>
          </div>

          {/* Sample brief card */}
          <div className="border border-swiss-rule bg-swiss-paper">
            <div className="border-b border-swiss-rule px-5 py-3">
              <span className="font-mono text-mono-sm text-swiss-ink-subtle">WEEKLY BRIEF · NORTHWIND SKINCARE (EXAMPLE)</span>
            </div>
            <div className="divide-y divide-swiss-rule">
              {[
                { type: '▲ WINNING', label: 'Founder-story, kitchen POV', evidence: 'New-cust. revenue share 41% vs 28% avg', color: 'text-swiss-win' },
                { type: '▼ FATIGUING', label: 'Before/after split', evidence: 'CPA up 3 weeks running, frequency rising', color: 'text-swiss-warn' },
                { type: '◆ MAKE NEXT', label: 'Ingredient close-up', evidence: 'Running 70+ days at 3 competitors', color: 'text-swiss-orange' },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-mono-sm ${item.color}`}>{item.type}</span>
                    <span className="text-body-sm text-swiss-ink">{item.label}</span>
                  </div>
                  <p className="text-caption text-swiss-ink-subtle text-right">{item.evidence}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-swiss-rule px-5 py-2 bg-swiss-white">
              <span className="text-caption text-swiss-ink-subtle italic">Illustrative example: fictional brand and numbers</span>
            </div>
          </div>
        </div>
      </SwissSection>

      {/* How the pilot works */}
      <SwissSection figNumber="04" figTitle="THE PILOT" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">How the 30-day pilot works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { week: 'Week 0', title: 'Kickoff', desc: 'Access, competitors, what "winning" means for you. 30 minutes.' },
            { week: 'Week 1', title: 'Connect + tag', desc: '90 days of ads tagged; first brief delivered.' },
            { week: 'Weeks 2–3', title: 'Weekly briefs', desc: 'Tune the taxonomy with your creative team.' },
            { week: 'Week 4', title: 'Readout', desc: "What we found, what it's worth, build-or-stop recommendation." },
          ].map((item, i) => (
            <div key={i} className="border-t border-swiss-rule pt-6">
              <div className="font-mono text-mono-sm text-swiss-orange mb-2">{item.week}</div>
              <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* Pricing */}
      <SwissSection id="offer" figNumber="05" figTitle="PRICING" className="border-t border-swiss-rule">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule">
          {[
            {
              name: 'Free Breakdown',
              price: 'Free',
              time: CI_CONFIG.breakdownSLA,
              features: ["Any brand's live Meta ads", 'Concepts, longevity, gaps', 'No ad account access needed'],
              cta: 'Get my breakdown',
              ctaHref: '#breakdown',
            },
            {
              name: '30-Day Pilot',
              price: 'Pricing on a call',
              time: '30 days',
              features: ['Meta + Shopify joined', 'AI concept-tagging', '5 competitors', '4 weekly briefs'],
              cta: 'Book a call',
              ctaHref: CI_CONFIG.calendlyUrl,
              highlight: true,
            },
            {
              name: 'Build + Run',
              price: 'Custom quote',
              time: '3-5 weeks build + monthly',
              features: ['Production agent', 'Custom taxonomy', 'Weekly briefs', 'Ask-anything chat'],
              cta: 'Book a call',
              ctaHref: CI_CONFIG.calendlyUrl,
            },
          ].map((tier, i) => (
            <div key={i} className={`bg-swiss-white p-6 md:p-8 ${tier.highlight ? 'ring-2 ring-swiss-orange ring-inset' : ''}`}>
              {tier.highlight && (
                <div className="font-mono text-mono-sm text-swiss-orange mb-4">MOST TEAMS START HERE</div>
              )}
              <h3 className="text-h3 text-swiss-ink mb-1">{tier.name}</h3>
              <div className="font-mono text-body text-swiss-ink-muted mb-1">{tier.price}</div>
              <div className="text-caption text-swiss-ink-subtle mb-4">{tier.time}</div>
              <ul className="space-y-1 mb-6">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-caption text-swiss-ink-subtle flex items-baseline gap-2">
                    <span>—</span> {f}
                  </li>
                ))}
              </ul>
              <SwissButton 
                href={tier.ctaHref} 
                variant={tier.highlight ? 'primary' : 'secondary'}
                className="w-full text-body-sm"
                {...(tier.ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {tier.cta} →
              </SwissButton>
            </div>
          ))}
        </div>
        <p className="mt-6 text-caption text-swiss-ink-subtle text-center">
          Fixed prices. No percentage of ad spend. No per-seat fees.
        </p>
      </SwissSection>

      {/* Comparison */}
      <SwissSection figNumber="06" figTitle="COMPARISON" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">How this compares</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-swiss-rule">
                <th className="py-3 pr-4 font-mono text-mono-sm text-swiss-ink-subtle font-normal">Feature</th>
                <th className="py-3 px-4 font-mono text-mono-sm text-swiss-ink-subtle font-normal">Creative SaaS</th>
                <th className="py-3 px-4 font-mono text-mono-sm text-swiss-ink-subtle font-normal">Agency</th>
                <th className="py-3 pl-4 font-mono text-mono-sm text-swiss-orange font-normal border-l border-swiss-rule bg-swiss-paper">MTS</th>
              </tr>
            </thead>
            <tbody className="text-body-sm">
              {[
                { feature: 'Grades ads on', saas: 'Platform metrics', agency: 'Gut + metrics', mts: 'Your orders & margin' },
                { feature: 'Data lives in', saas: 'Vendor cloud', agency: 'Agency decks', mts: 'Your warehouse' },
                { feature: 'Concept taxonomy', saas: 'Generic tags', agency: 'Varies', mts: 'Built for your brand' },
                { feature: 'Cost model', saas: 'Per-seat SaaS', agency: '10-15% of spend', mts: 'Fixed build + flat monthly' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-swiss-rule">
                  <td className="py-3 pr-4 text-swiss-ink-muted">{row.feature}</td>
                  <td className="py-3 px-4 text-swiss-ink-subtle">{row.saas}</td>
                  <td className="py-3 px-4 text-swiss-ink-subtle">{row.agency}</td>
                  <td className="py-3 pl-4 text-swiss-ink border-l border-swiss-rule bg-swiss-paper">{row.mts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SwissSection>

      {/* Fit */}
      <SwissSection figNumber="07" figTitle="FIT" className="border-t border-swiss-rule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-h3 text-swiss-ink mb-4">Great fit</h3>
            <ul className="space-y-2">
              {[
                `DTC/e-com brands spending ${CI_QUALIFICATION.minSpend}–${CI_QUALIFICATION.maxSpend}/mo on Meta`,
                'Teams shipping 50+ new ads a month',
                'You have a creative team but no one owns "what the data says"',
                'Shopify + Meta as core channels',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-swiss-ink-muted">
                  <span className="text-swiss-win">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-h3 text-swiss-ink mb-4">Not a fit (yet)</h3>
            <ul className="space-y-2">
              {[
                `Spending under ~${CI_QUALIFICATION.spendFloor}/mo on Meta`,
                'Looking for someone to produce ads',
                'Want a one-off dashboard without ongoing insight',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-swiss-ink-muted">
                  <span className="text-swiss-ink-subtle">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwissSection>

      {/* FAQ */}
      <SwissSection id="faq" figNumber="08" figTitle="FAQ" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">Frequently asked questions</h2>
        
        <div className="max-w-3xl divide-y divide-swiss-rule border-t border-b border-swiss-rule">
          {ciFaqItems.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between cursor-pointer py-4 text-swiss-ink font-medium list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.question}</span>
                <span className="text-swiss-ink-subtle group-open:rotate-45 transition-transform flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-4 text-body-sm text-swiss-ink-muted pr-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </SwissSection>

      {/* Final CTA */}
      <SwissSection id="breakdown" className="border-t border-swiss-rule">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h1 text-swiss-ink mb-4">
            Find out what's working.
          </h2>
          <p className="text-body text-swiss-ink-muted mb-8">
            Send me a brand. I'll send back a one-page breakdown of its live Meta ads. Free, in {CI_CONFIG.breakdownSLA}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton 
              href={`mailto:${CI_CONFIG.leadEmail}?subject=Ad Library Breakdown Request`}
              variant="primary"
            >
              Request a breakdown →
            </SwissButton>
            <SwissButton 
              href={CI_CONFIG.calendlyUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call →
            </SwissButton>
          </div>

          <p className="mt-6 text-caption text-swiss-ink-subtle">
            No ad account access needed. Email {CI_CONFIG.leadEmail}
          </p>
        </div>
      </SwissSection>
    </SwissLayout>
  );
}
