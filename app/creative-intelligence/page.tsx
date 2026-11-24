import { Metadata } from 'next';
import CIHeader from '@/components/creative-intelligence/CIHeader';
import CIFooter from '@/components/creative-intelligence/CIFooter';
import CISection from '@/components/creative-intelligence/CISection';
import HeroAdGrid from '@/components/creative-intelligence/HeroAdGrid';
import BriefCard from '@/components/creative-intelligence/BriefCard';
import ComparisonTable from '@/components/creative-intelligence/ComparisonTable';
import PricingCard from '@/components/creative-intelligence/PricingCard';
import LeadForm from '@/components/creative-intelligence/LeadForm';
import CIFAQ from '@/components/creative-intelligence/CIFAQ';
import { getCIFAQSchema } from '@/lib/creative-intelligence-faq';
import { CI_CONFIG, CI_STATS, CI_QUALIFICATION } from '@/lib/creative-intelligence-config';

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
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Intelligence Agent for DTC Brands on Meta',
    description: 'Know which ads to make next with AI that grades concepts on real orders, not platform ROAS.',
  },
};

const sampleBriefItems = [
  {
    type: 'winning' as const,
    concept: 'Founder-story, kitchen POV',
    evidence: 'New-customer revenue share 41% vs 28% account avg. 4 variants running.',
    confidence: 'high' as const,
  },
  {
    type: 'fatiguing' as const,
    concept: 'Before/after split',
    evidence: 'Frequency rising, CPA up 3 weeks running. Consider rotating out.',
    confidence: 'high' as const,
  },
  {
    type: 'make-next' as const,
    concept: 'Ingredient close-up',
    evidence: 'Running 70+ days at 3 competitors. You haven\'t tested this angle.',
    confidence: 'medium' as const,
  },
];

export default function CreativeIntelligencePage() {
  const faqSchema = getCIFAQSchema();
  
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

  return (
    <div className="ci-page min-h-screen">
      {/* Skip to content link */}
      <a href="#main-content" className="ci-skip-link">
        Skip to main content
      </a>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CIHeader />

      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Background effects */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-ci-signal/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-ci-brand/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-5 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-ci-signal/10 border border-ci-signal/20 px-4 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-ci-signal" />
                  <span className="ci-mono-label text-ci-signal text-[10px]">
                    Creative Intelligence for DTC Brands on Meta
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ci-text mb-6 leading-[1.1] tracking-tight">
                  Know which ads to make next.
                </h1>
                
                <p className="text-lg md:text-xl text-ci-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  An AI agent that reads your Meta ads, your competitors' Ad Library, and your actual Shopify orders, then tells your team every Monday what's winning, what's fatiguing, and what to make next.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <a
                    href="#breakdown"
                    className="bg-ci-signal text-ci-bg px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 hover:shadow-lg hover:shadow-ci-signal/25 transition-all"
                  >
                    Get a free Ad Library breakdown →
                  </a>
                  <a
                    href={CI_CONFIG.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ci-surface border border-ci-border text-ci-text px-8 py-4 rounded-lg font-medium text-lg hover:bg-ci-surface-2 hover:border-ci-muted transition-all"
                  >
                    Book a 30-min call
                  </a>
                </div>
                
                <p className="text-ci-subtle text-sm">
                  Free · Any brand's live ads · Delivered in {CI_CONFIG.breakdownSLA} · No ad account access needed
                </p>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:block">
                <HeroAdGrid />
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-y border-ci-border py-6 bg-ci-surface/50">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ci-muted text-sm">
              <span className="ci-mono-label text-[11px]">10+ years in DTC data engineering</span>
              <span className="hidden md:inline text-ci-border">·</span>
              <span className="ci-mono-label text-[11px]">Senior engineer, no junior handoffs</span>
              <span className="hidden md:inline text-ci-border">·</span>
              <span className="ci-mono-label text-[11px]">Built on BigQuery · dbt · Shopify · Meta API</span>
              <span className="hidden md:inline text-ci-border">·</span>
              <span className="ci-mono-label text-[11px]">Based in Los Angeles</span>
            </div>
          </div>
        </section>

        {/* Mobile hero visual (shown below proof strip on mobile) */}
        <section className="lg:hidden py-12 px-5">
          <HeroAdGrid />
        </section>

        {/* Problem narrative */}
        <CISection figLabel="[Fig 0.1 — The problem]">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-12 max-w-3xl">
            Your team makes ads faster than anyone can read the results.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: `${CI_STATS.mhi.stat} → ${CI_STATS.mhi.statSecondary}`,
                title: 'Most ads don\'t matter',
                description: `The median DTC brand ran ${CI_STATS.mhi.stat} Meta ads with spend in 90 days. Only ${CI_STATS.mhi.statSecondary} took 1% or more of the budget.`,
                source: CI_STATS.mhi,
              },
              {
                stat: 'ROAS ≠ P&L',
                title: 'Platform grades its homework',
                description: 'Meta reports its own ROAS. The ad with the best in-platform number isn\'t always bringing new customers who reorder.',
                source: null,
              },
              {
                stat: 'Hidden',
                title: 'Winners in plain sight',
                description: 'The Ad Library shows every live ad but no spend. Nobody has time to read 2,000 competitor ads and spot the pattern.',
                source: null,
              },
            ].map((item, i) => (
              <div key={i} className="bg-ci-surface border border-ci-border rounded-xl p-6">
                <div className="text-ci-signal font-bold text-2xl mb-3 font-mono">{item.stat}</div>
                <h3 className="text-ci-text font-semibold mb-2">{item.title}</h3>
                <p className="text-ci-muted text-sm leading-relaxed">{item.description}</p>
                {item.source && (
                  <a 
                    href={item.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-ci-subtle text-xs hover:text-ci-muted transition-colors"
                  >
                    Source: {item.source.source}, {item.source.date} ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="text-ci-muted text-xl mt-12 max-w-2xl mx-auto text-center">
            The bottleneck isn't making ads anymore.{' '}
            <span className="text-ci-text font-medium">It's deciding which ones.</span>
          </p>
        </CISection>

        {/* Solution / How it works */}
        <CISection figLabel="[Fig 0.2 — The agent]" className="bg-ci-surface/30">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4">
            Meet your Creative Intelligence Agent.
          </h2>
          <p className="text-ci-muted text-lg mb-12 max-w-2xl">
            Built inside your data. Runs every week. Answers the only question that matters on Monday morning: what do we make next?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Meta ad-level data and Shopify orders land in your warehouse, joined at the ad level.',
                note: 'Already have a warehouse? We use it.',
              },
              {
                step: '02',
                title: 'Tag',
                description: 'AI watches and reads every ad and tags its concept, hook, format, offer, and talent.',
                note: 'Taxonomy built for your brand, not generic.',
              },
              {
                step: '03',
                title: 'Watch',
                description: 'The agent tracks your competitors\' Ad Library: which concepts run longest, which get cloned.',
                note: 'Signals you can\'t fake.',
              },
              {
                step: '04',
                title: 'Brief',
                description: 'Every Monday your team gets a one-page brief: Winning · Fatiguing · Make next.',
                note: 'Slack or email.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-ci-surface border border-ci-border rounded-xl p-6">
                <div className="ci-mono-label text-ci-signal text-[10px] mb-4">{item.step}</div>
                <h3 className="text-ci-text font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-ci-muted text-sm mb-3">{item.description}</p>
                <p className="text-ci-subtle text-xs italic">{item.note}</p>
              </div>
            ))}
          </div>
        </CISection>

        {/* Sample brief preview */}
        <CISection figLabel="[Fig 0.3 — The deliverable]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4">
                This is what lands in Slack every Monday.
              </h2>
              <p className="text-ci-muted text-lg mb-6">
                A focused brief that tells your creative team exactly what to do, backed by evidence from your orders and your competitors.
              </p>
              <ul className="space-y-3 text-ci-muted">
                {[
                  'Concepts graded on new-customer revenue, not platform ROAS',
                  'Competitor signals: longevity, variant bursts, cross-brand spread',
                  'Specific "make next" recommendations with evidence',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ci-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BriefCard
              brandName="Northwind Skincare (example)"
              items={sampleBriefItems}
              isIllustrative={true}
            />
          </div>
        </CISection>

        {/* Why not ChatGPT / SaaS */}
        <CISection figLabel="[Fig 0.4 — The difference]" className="bg-ci-surface/30">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4">
            AI that knows your margins, not just your ROAS.
          </h2>
          <p className="text-ci-muted text-lg mb-12 max-w-2xl">
            Generic AI guesses why an ad worked. Yours is wired into your orders and ad history, so its recommendations hold up.
          </p>

          {/* Chat comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-ci-surface border border-ci-border rounded-xl p-6">
              <div className="ci-mono-label text-ci-subtle text-[10px] mb-4">Generic AI response</div>
              <div className="bg-ci-surface-2 rounded-lg p-4 text-ci-muted/60 text-sm">
                <p className="font-medium text-ci-muted mb-2">Q: "Which concept should we make more of?"</p>
                <p className="italic">"Try UGC testimonials and strong hooks in the first 3 seconds. Focus on pain points and social proof."</p>
              </div>
            </div>
            <div className="bg-ci-surface border border-ci-signal/30 rounded-xl p-6 shadow-lg shadow-ci-signal/5">
              <div className="ci-mono-label text-ci-signal text-[10px] mb-4">Your agent response</div>
              <div className="bg-ci-signal/5 border border-ci-signal/20 rounded-lg p-4 text-ci-text text-sm">
                <p className="font-medium mb-2">Q: "Which concept should we make more of?"</p>
                <p>"Make more <span className="text-ci-signal font-medium">'founder-story, kitchen POV.'</span> It's 6% of spend but 14% of new-customer revenue over 30 days. Three competitors have run a similar concept for 60+ days. Your last two variants of 'before/after split' are fatiguing (CPA up 3 weeks running)."</p>
                <p className="text-ci-subtle text-xs mt-2 italic">Illustrative</p>
              </div>
            </div>
          </div>

          <ComparisonTable />
        </CISection>

        {/* Stats section */}
        <CISection figLabel="[Fig 0.5 — Built to ship]">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4">
            Most AI pilots never ship. This one is built on plumbing that works.
          </h2>
          <p className="text-ci-muted text-lg mb-12 max-w-2xl">
            The usual reason AI fails is messy data, not the model. I've spent 10+ years building DTC data pipelines, so the agent sits on a clean, tested join of ads and orders from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-ci-surface border border-ci-border rounded-xl p-8">
              <div className="text-5xl font-bold text-ci-signal font-mono mb-2">{CI_STATS.gartner.stat}</div>
              <p className="text-ci-muted text-lg mb-2">{CI_STATS.gartner.description}</p>
              <a 
                href={CI_STATS.gartner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ci-subtle text-xs hover:text-ci-muted transition-colors"
              >
                Source: {CI_STATS.gartner.source}, {CI_STATS.gartner.date} ↗
              </a>
            </div>
            <div className="bg-ci-surface border border-ci-border rounded-xl p-8">
              <div className="text-ci-muted text-lg">
                <p className="mb-4">If your data isn't ready, we fix that first. That's our <a href="/revenue-intelligence" className="text-ci-brand-soft hover:text-ci-text transition-colors underline">Data Foundation</a> work.</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Your warehouse, your data',
                  'Versioned taxonomy and prompts',
                  'Human review before changes (agent recommends, doesn\'t auto-pause)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-ci-muted text-sm">
                    <svg className="w-4 h-4 text-ci-win flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CISection>

        {/* Offer ladder / Pricing */}
        <CISection id="offer" figLabel="[Fig 0.6 — How to start]" className="bg-ci-surface/30">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4 text-center">
            Start free. Prove it in 30 days.
          </h2>
          <p className="text-ci-muted text-lg mb-12 text-center max-w-2xl mx-auto">
            For brands spending roughly {CI_QUALIFICATION.minSpend}–{CI_QUALIFICATION.maxSpend}/month on Meta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard tier="free" />
            <PricingCard tier="pilot" highlighted />
            <PricingCard tier="build" />
          </div>

          <p className="text-ci-subtle text-xs text-center mt-8">
            Fixed prices. No percentage of ad spend. No per-seat fees.
          </p>
        </CISection>

        {/* Fit / Not fit */}
        <CISection figLabel="[Fig 0.7 — Fit]">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-12 text-center">
            Is this for you?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-ci-surface border border-ci-win/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-ci-win/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-ci-win" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-ci-text font-semibold">Great fit</h3>
              </div>
              <ul className="space-y-3 text-ci-muted text-sm">
                {[
                  `DTC/e-com brands spending ${CI_QUALIFICATION.minSpend}–${CI_QUALIFICATION.maxSpend}/mo on Meta`,
                  'Teams shipping 50+ new ads a month',
                  'You have a creative team or agency but no one owns "what the data says"',
                  'Shopify (or similar) + Meta as core channels',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-ci-win">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ci-surface border border-ci-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-ci-muted/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-ci-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-ci-text font-semibold">Not a fit (yet)</h3>
              </div>
              <ul className="space-y-3 text-ci-muted text-sm">
                {[
                  `Spending under ~${CI_QUALIFICATION.spendFloor}/mo on Meta`,
                  'Looking for someone to produce ads (we tell you what to make; you make it)',
                  'Want a one-off dashboard without ongoing insight',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-ci-subtle">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CISection>

        {/* About */}
        <CISection figLabel="[Fig 0.8 — Who you work with]" className="bg-ci-surface/30">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-ci-signal to-ci-brand rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-ci-bg">AM</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-ci-text mb-4">
                  You work with me, not a rotating team.
                </h2>
                <p className="text-ci-muted leading-relaxed mb-4">
                  I'm Artin Sarkisian. I've spent 10+ years building data infrastructure and analytics for high-growth companies, mostly e-commerce and DTC: warehouses, ad-platform pipelines, revenue models, and the AI layers on top.
                </p>
                <p className="text-ci-muted leading-relaxed">
                  I started MTS Analytics to build the systems I kept wishing brands had: ones that turn a pile of ad data into a clear decision.
                </p>
              </div>
            </div>
          </div>
        </CISection>

        {/* Testimonials - using existing verified ones */}
        <CISection figLabel="[Fig 0.9 — Work]">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4 text-center">
            Recent work
          </h2>
          <p className="text-ci-muted text-center mb-12">Anonymized at client request</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Unified marketing data',
                result: '10+ hrs/week of manual reporting automated',
                description: 'Single source of truth matching actual revenue. Fixed waste in underperforming campaigns within weeks.',
              },
              {
                title: 'Conversational analytics for leadership',
                result: '80% less time pulling reports',
                description: 'High adoption across non-technical teams. Executives get answers in minutes instead of waiting on analysts.',
              },
              {
                title: 'Subscription forecasting',
                result: 'Monthly → daily data freshness',
                description: '20+ hrs/month saved on manual forecasting. Reduced stockouts during key promotions.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-ci-surface border border-ci-border rounded-xl p-6">
                <div className="text-ci-signal font-semibold text-sm mb-2">{item.result}</div>
                <h3 className="text-ci-text font-semibold mb-2">{item.title}</h3>
                <p className="text-ci-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </CISection>

        {/* FAQ */}
        <CISection id="faq" figLabel="[Fig 1.0 — Questions]" className="bg-ci-surface/30">
          <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <CIFAQ />
          </div>
        </CISection>

        {/* Lead form / Final CTA */}
        <CISection id="breakdown" className="relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-ci-signal/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-ci-text mb-4">
                Find out what's working, for you and your competitors.
              </h2>
              <p className="text-ci-muted text-lg max-w-2xl mx-auto">
                Send me a brand. I'll send back a one-page breakdown of its live Meta ads: concepts, longevity, and the gaps you haven't tried. Free, in {CI_CONFIG.breakdownSLA}.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* What you'll get */}
              <div>
                <h3 className="text-ci-text font-semibold mb-4">What you'll get:</h3>
                <ul className="space-y-3 text-ci-muted">
                  {[
                    'Total live ads and how many distinct concepts they boil down to',
                    'Longest-running concepts (the ones they keep paying for)',
                    'Variant bursts: concepts being cloned and scaled right now',
                    '2-3 gaps: angles they\'re winning with that you haven\'t tried',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-ci-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Micro-signature */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-ci-signal to-ci-brand rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-ci-bg">AM</span>
                  </div>
                  <div className="text-ci-muted text-sm">
                    — Artin, MTS Analytics
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-ci-surface border border-ci-border rounded-xl p-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </CISection>
      </main>

      <CIFooter />
    </div>
  );
}
