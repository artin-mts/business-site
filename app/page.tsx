import { Metadata } from 'next';
import Link from 'next/link';
import SwissLayout from '@/components/swiss/SwissLayout';
import SwissSection from '@/components/swiss/SwissSection';
import SwissButton from '@/components/swiss/SwissButton';
import HeroAdStrip from '@/components/swiss/HeroAdStrip';
import { CI_CONFIG, CI_STATS, CI_QUALIFICATION } from '@/lib/creative-intelligence-config';
import { getCIFAQSchema } from '@/lib/creative-intelligence-faq';

export const metadata: Metadata = {
  title: 'MTS Analytics | Creative Intelligence for DTC Brands on Meta',
  description: 'An AI agent that reads your Meta ads, your competitors\' Ad Library, and your actual Shopify orders, then tells your team every Monday what\'s winning, what\'s fatiguing, and what to make next.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MTS Analytics | Know which ads to make next',
    description: 'Creative intelligence for DTC brands on Meta. An AI agent that grades ads on real orders, not platform ROAS.',
    url: 'https://mts-analytics.com',
    siteName: 'MTS Analytics',
    type: 'website',
  },
};

const faqSchema = getCIFAQSchema();

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MTS Analytics',
  description: 'Creative Intelligence for DTC brands. An AI agent that joins Meta ads to Shopify orders and delivers weekly creative briefs.',
  url: 'https://mts-analytics.com',
  areaServed: 'US',
  priceRange: '$$$',
};

export default function HomePage() {
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
              <span>CREATIVE INTELLIGENCE / META</span>
              <span className="hidden md:block">FOR DTC, {CI_QUALIFICATION.minSpend}–{CI_QUALIFICATION.maxSpend}/MO</span>
              <span className="hidden md:block">LOS ANGELES, CA</span>
              <span className="text-right md:text-left">SENIOR ENGINEER, NO HANDOFFS</span>
            </div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left column - headline and CTAs */}
            <div className="lg:col-span-7">
              <h1 className="text-display text-swiss-ink mb-6">
                Know which ads to make next.
              </h1>
              <p className="text-body text-swiss-ink-muted mb-8 max-w-lg">
                An AI agent that reads your Meta ads, your competitors' Ad Library, and your actual Shopify orders, then tells your team every Monday what's winning, what's fatiguing, and what to make next.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <SwissButton href="#breakdown" variant="secondary" className="w-full sm:w-auto">
                  Get a free Ad Library breakdown
                  <span aria-hidden="true">→</span>
                </SwissButton>
                <SwissButton href={CI_CONFIG.calendlyUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
                  Book a 30-minute call
                  <span aria-hidden="true">→</span>
                </SwissButton>
              </div>
            </div>

            {/* Right column - feature lists */}
            <div className="lg:col-span-5 lg:pt-4">
              <div className="space-y-8">
                <div>
                  <div className="mono-label mb-3">What it reads</div>
                  <ul className="space-y-1 text-body-sm text-swiss-ink-muted">
                    <li className="flex items-baseline gap-2">
                      <span className="font-mono text-swiss-ink-subtle">01</span>
                      Your Meta ads
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="font-mono text-swiss-ink-subtle">02</span>
                      Competitors' Ad Library
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="font-mono text-swiss-ink-subtle">03</span>
                      Shopify orders
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="mono-label mb-3">What it sends</div>
                  <p className="text-body-sm text-swiss-ink-muted">
                    Mon. brief: winning / fatiguing / make next
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero visualization */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 pb-8">
          <HeroAdStrip />
        </div>
      </section>

      {/* Problem Section */}
      <SwissSection figNumber="FIG. 2" figTitle="THE PROBLEM">
        <div className="max-w-3xl">
          <h2 className="text-h1 text-swiss-ink mb-6">
            Your team makes ads faster than anyone can read the results.
          </h2>
          <p className="text-body text-swiss-ink-muted mb-8">
            The bottleneck isn't making ads anymore. It's deciding which ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule mt-12">
          {[
            {
              stat: `${CI_STATS.mhi.stat} → ${CI_STATS.mhi.statSecondary}`,
              title: 'Most ads don\'t matter',
              description: `The median DTC brand ran ${CI_STATS.mhi.stat} Meta ads with spend in 90 days. Only ${CI_STATS.mhi.statSecondary} took 1% or more of the budget.`,
            },
            {
              stat: 'ROAS ≠ P&L',
              title: 'Platform grades its homework',
              description: 'Meta reports its own ROAS. The ad with the best in-platform number isn\'t always bringing new customers who reorder.',
            },
            {
              stat: 'Hidden',
              title: 'Winners in plain sight',
              description: 'The Ad Library shows every live ad but no spend. Nobody has time to read 2,000 competitor ads and spot the pattern.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-swiss-white p-6 md:p-8">
              <div className="font-mono text-h2 text-swiss-orange mb-3">{item.stat}</div>
              <h3 className="text-h3 text-swiss-ink mb-2">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* How it works */}
      <SwissSection figNumber="FIG. 3" figTitle="HOW IT WORKS" className="border-t border-swiss-rule">
        <h2 className="text-h1 text-swiss-ink mb-4 max-w-2xl">
          Meet your Creative Intelligence Agent.
        </h2>
        <p className="text-body text-swiss-ink-muted mb-12 max-w-2xl">
          Built inside your data. Runs every week. Answers the only question that matters on Monday morning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Connect', desc: 'Meta ad-level data and Shopify orders land in your warehouse, joined at the ad level.' },
            { step: '02', title: 'Tag', desc: 'AI reads every ad and tags its concept, hook, format, offer, and talent.' },
            { step: '03', title: 'Watch', desc: "The agent tracks competitors' Ad Library: longevity, variant bursts, cross-brand spread." },
            { step: '04', title: 'Brief', desc: 'Every Monday: Winning · Fatiguing · Make next, with the evidence behind every call.' },
          ].map((item) => (
            <div key={item.step} className="border-t border-swiss-rule pt-6">
              <div className="font-mono text-mono-sm text-swiss-orange mb-3">{item.step}</div>
              <h3 className="text-h3 text-swiss-ink mb-2">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* Sample Brief Preview */}
      <SwissSection id="sample-brief" figNumber="FIG. 4" figTitle="THE DELIVERABLE" className="border-t border-swiss-rule">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-h1 text-swiss-ink mb-4">
              This is what lands in Slack every Monday.
            </h2>
            <p className="text-body text-swiss-ink-muted mb-6">
              A focused brief that tells your creative team exactly what to do, backed by evidence from your orders and your competitors.
            </p>
            <ul className="space-y-3">
              {[
                'Concepts graded on new-customer revenue, not platform ROAS',
                'Competitor signals: longevity, variant bursts, cross-brand spread',
                'Specific "make next" recommendations with evidence',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body-sm text-swiss-ink-muted">
                  <span className="font-mono text-swiss-orange">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample brief card */}
          <div className="border border-swiss-rule bg-swiss-paper">
            <div className="border-b border-swiss-rule px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-mono-sm text-swiss-ink-subtle">THIS MONDAY'S BRIEF · EXAMPLE BRAND</span>
            </div>
            <div className="divide-y divide-swiss-rule">
              {[
                { type: '▲ WINNING', label: 'Founder POV, kitchen', color: 'text-swiss-win' },
                { type: '▼ FATIGUING', label: 'Before/after split', color: 'text-swiss-warn' },
                { type: '◆ MAKE NEXT', label: 'Ingredient close-up', color: 'text-swiss-orange' },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4 flex items-center justify-between">
                  <span className={`font-mono text-mono-sm ${item.color}`}>{item.type}</span>
                  <span className="text-body-sm text-swiss-ink-muted">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-swiss-rule px-5 py-2 bg-swiss-white">
              <span className="text-caption text-swiss-ink-subtle italic">Illustrative example</span>
            </div>
          </div>
        </div>
      </SwissSection>

      {/* Pricing / Offer */}
      <SwissSection id="offer" figNumber="FIG. 5" figTitle="HOW TO START" className="border-t border-swiss-rule">
        <h2 className="text-h1 text-swiss-ink mb-4 text-center">
          Start free. Prove it in 30 days.
        </h2>
        <p className="text-body text-swiss-ink-muted mb-12 text-center max-w-xl mx-auto">
          For brands spending roughly {CI_QUALIFICATION.minSpend}–{CI_QUALIFICATION.maxSpend}/month on Meta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule">
          {[
            {
              name: 'Free Breakdown',
              price: 'Free',
              desc: 'Any brand\'s live Meta ads, broken into concepts, longevity, and gaps.',
              features: ['Total live ads & concepts', 'Longest-running concepts', 'Variant bursts', '2-3 gaps you haven\'t tried'],
              cta: 'Get my breakdown',
              ctaHref: '#breakdown',
              highlight: false,
            },
            {
              name: '30-Day Pilot',
              price: 'Pricing on a call',
              desc: 'Your ads + orders + 5 competitors, AI-tagged, with 4 weekly briefs.',
              features: ['Meta + Shopify joined', 'AI concept-tagging', 'Competitor watchlist', '4 weekly briefs + readout'],
              cta: 'Book a call',
              ctaHref: CI_CONFIG.calendlyUrl,
              highlight: true,
            },
            {
              name: 'Agent Build + Run',
              price: 'Custom quote',
              desc: 'Production agent in your stack, weekly briefs, ask-anything chat.',
              features: ['Production agent', 'Custom taxonomy', 'Weekly briefs', 'Ongoing support'],
              cta: 'Book a call',
              ctaHref: CI_CONFIG.calendlyUrl,
              highlight: false,
            },
          ].map((tier, i) => (
            <div key={i} className={`bg-swiss-white p-6 md:p-8 ${tier.highlight ? 'ring-2 ring-swiss-orange ring-inset' : ''}`}>
              {tier.highlight && (
                <div className="font-mono text-mono-sm text-swiss-orange mb-4">MOST TEAMS START HERE</div>
              )}
              <h3 className="text-h3 text-swiss-ink mb-1">{tier.name}</h3>
              <div className="font-mono text-body text-swiss-ink-muted mb-4">{tier.price}</div>
              <p className="text-body-sm text-swiss-ink-muted mb-4">{tier.desc}</p>
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
      </SwissSection>

      {/* About Section - warm background */}
      <SwissSection id="about" figNumber="FIG. 6" figTitle="WHO YOU WORK WITH" warm>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-h1 text-swiss-ink mb-4">
              You work with me, not a rotating team.
            </h2>
            <p className="text-body text-swiss-ink-muted mb-4">
              I'm Artin Sarkisian. I've spent 10+ years building data infrastructure and analytics for high-growth companies, mostly e-commerce and DTC: warehouses, ad-platform pipelines, revenue models, and the AI layers on top.
            </p>
            <p className="text-body text-swiss-ink-muted">
              I started MTS Analytics to build the systems I kept wishing brands had: ones that turn a pile of ad data into a clear decision.
            </p>
          </div>
          <div className="lg:col-span-5">
            {/* Headshot placeholder - hidden in production per brief */}
            <div className="aspect-[4/5] bg-swiss-rule-dark flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-caption text-swiss-ink-subtle">Real headshot of Artin</p>
                <p className="text-caption text-swiss-ink-subtle">(environmental portrait, at his desk)</p>
              </div>
            </div>
          </div>
        </div>
      </SwissSection>

      {/* Results */}
      <SwissSection figNumber="FIG. 7" figTitle="RECENT WORK" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-2">Results from past engagements</h2>
        <p className="text-body-sm text-swiss-ink-subtle mb-8">Anonymized at client request</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule">
          {[
            { result: '10+ hrs/week', title: 'Unified marketing data', desc: 'Manual reporting automated. Single source of truth matching actual revenue.' },
            { result: '80% less time', title: 'Conversational analytics', desc: 'Leadership gets answers in minutes. High adoption across non-technical teams.' },
            { result: 'Monthly → daily', title: 'Subscription forecasting', desc: 'Data freshness improved. 20+ hrs/month saved on manual forecasting.' },
          ].map((item, i) => (
            <div key={i} className="bg-swiss-white p-6">
              <div className="font-mono text-body text-swiss-orange mb-2">{item.result}</div>
              <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* FAQ */}
      <SwissSection id="faq" figNumber="FIG. 8" figTitle="QUESTIONS" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">Frequently asked questions</h2>
        
        <div className="max-w-3xl divide-y divide-swiss-rule border-t border-b border-swiss-rule">
          {[
            { q: 'Do you need access to our ad account for the free breakdown?', a: 'No. The breakdown uses Meta\'s public Ad Library, so we can run it on your brand or any competitor without logins or ad account access.' },
            { q: 'How is this different from Motion, Atria, or Foreplay?', a: 'Those are great tools, and the agent can work alongside them. The difference: we join every ad to your actual orders and margin, build the concept taxonomy around your brand, and run it in infrastructure you own.' },
            { q: 'What do you need from us for the pilot?', a: 'Read access to Meta Ads and Shopify (or your warehouse), a list of up to 5 competitors, and a 30-minute kickoff call. Most of the setup is on us.' },
            { q: 'Will the agent change our ads automatically?', a: 'Not unless you want it to. By default it recommends; your team decides what to act on.' },
            { q: 'What if our data is a mess?', a: 'That\'s my background. If the foundation isn\'t ready, we fix the ads-to-orders join first as part of the build, or as a separate Data Foundation project.' },
          ].map((item, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between cursor-pointer py-4 text-swiss-ink font-medium list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.q}</span>
                <span className="text-swiss-ink-subtle group-open:rotate-45 transition-transform flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-4 text-body-sm text-swiss-ink-muted pr-8">{item.a}</p>
            </details>
          ))}
        </div>
      </SwissSection>

      {/* Final CTA / Lead Form */}
      <SwissSection id="breakdown" className="border-t border-swiss-rule">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h1 text-swiss-ink mb-4">
            Find out what's working, for you and your competitors.
          </h2>
          <p className="text-body text-swiss-ink-muted mb-8">
            Send me a brand. I'll send back a one-page breakdown of its live Meta ads: concepts, longevity, and the gaps you haven't tried. Free, in {CI_CONFIG.breakdownSLA}.
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
              Book a 30-minute call →
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
