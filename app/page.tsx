import { Metadata } from 'next';
import SwissLayout from '@/components/swiss/SwissLayout';
import SwissSection from '@/components/swiss/SwissSection';
import SwissButton from '@/components/swiss/SwissButton';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

const TITLE = 'MTS Analytics | Data Infrastructure & AI Agents for DTC Brands';
const DESCRIPTION =
  'MTS Analytics unifies ad, order, and warehouse data into one reliable layer, then builds practical AI agents and analytics systems on top for DTC and e-commerce brands.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mts-analytics.com',
    siteName: 'MTS Analytics',
    type: 'website',
  },
};

const offers = [
  {
    n: '01',
    name: 'Creative Intelligence Agent',
    tag: 'For DTC brands on Meta',
    desc: 'Weekly creative briefs grounded in your ad data, competitor Meta Ad Library signals, and actual Shopify orders.',
    bullets: [
      'Ads graded on real orders, not platform ROAS',
      'Fatigue flagged before blended CPA moves',
      'A Monday brief: winning / fatiguing / make next',
    ],
    cta: 'Explore offer',
    href: '/creative-intelligence/',
    external: false,
  },
  {
    n: '02',
    name: 'Data Foundation',
    tag: 'For e-commerce & DTC teams',
    desc: 'Unify ad spend, orders, and subscriptions into one clean warehouse layer built for reporting, forecasting, and AI.',
    bullets: [
      'Ad platforms, Shopify, and subscriptions in one place',
      'Tested models with shared metric definitions',
      'Ready for dashboards, forecasts, and agents',
    ],
    cta: 'Explore offer',
    href: '/revenue-intelligence/',
    external: false,
  },
  {
    n: '03',
    name: 'Custom AI & Analytics',
    tag: 'Built in your stack',
    desc: 'Conversational analytics over your warehouse, automated alerts, and custom AI workflows built directly in your stack.',
    bullets: [
      'Ask questions of your data in plain English',
      'Alerts when key metrics move, in Slack or email',
      'Forecasting and workflow automation on clean data',
    ],
    cta: 'Book a call',
    href: CI_CONFIG.calendlyUrl,
    external: true,
  },
];

const faqs = [
  {
    q: 'Who is MTS Analytics a fit for?',
    a: 'DTC and e-commerce brands with real volume across ads, orders, and subscriptions, and teams that want faster, more reliable decisions rather than another dashboard.',
  },
  {
    q: 'Do we need a data warehouse already?',
    a: 'No. If you have one, we build on it. If you don\'t, we set up a clean warehouse layer first as part of the engagement, so everything that follows runs on trustworthy data.',
  },
  {
    q: 'Who owns the data and the code?',
    a: 'You do. Everything runs in your cloud and your warehouse, in your accounts. There is no SaaS lock-in, and you keep every model, pipeline, and agent we build.',
  },
  {
    q: 'How does an engagement start?',
    a: 'With a 30-minute call, then a short audit and scope. Most teams move into a 30-day pilot on one high-value use case before committing to a full production build.',
  },
  {
    q: 'Can you work alongside our internal team?',
    a: 'Yes. We regularly work with in-house analysts, engineers, and growth teams. We can build and run the system for you, or document it and hand it off.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MTS Analytics',
  description: DESCRIPTION,
  url: 'https://mts-analytics.com',
  areaServed: 'US',
};

const emailLink = (
  <a href={`mailto:${CI_CONFIG.leadEmail}`} className="underline hover:text-swiss-ink transition-colors">
    Email us
  </a>
);

export default function HomePage() {
  return (
    <SwissLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="border-b border-swiss-rule">
        <div className="border-b border-swiss-rule">
          <div className="max-w-6xl mx-auto px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 py-3 gap-4 font-mono text-mono-sm text-swiss-ink-subtle">
              <span>MTS ANALYTICS</span>
              <span className="hidden md:block">DATA INFRASTRUCTURE + AI AGENTS</span>
              <span className="hidden md:block">FOR DTC &amp; E-COMMERCE</span>
              <span className="text-right md:text-left">SENIOR-LED, NO HANDOFFS</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-display text-swiss-ink mb-6">
                Data infrastructure and AI agents for DTC brands.
              </h1>
              <p className="text-body text-swiss-ink-muted mb-8 max-w-xl">
                MTS Analytics unifies ad, order, and warehouse data into one reliable layer, then builds practical AI agents and analytics workflows on top so growth and finance teams make faster decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SwissButton href={CI_CONFIG.calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  Book a 30-minute call
                  <span aria-hidden="true">→</span>
                </SwissButton>
                <SwissButton href="#offers" variant="secondary" className="w-full sm:w-auto">
                  Explore offers
                  <span aria-hidden="true">↓</span>
                </SwissButton>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-swiss-rule lg:pl-8 lg:pt-2">
              <div className="space-y-8">
                <div>
                  <div className="mono-label mb-3">What we build</div>
                  <ul className="border-t border-swiss-rule">
                    {['AI Agents for Growth', 'Unified Data Infrastructure', 'Revenue & Forecasting Systems'].map((t, i) => (
                      <li key={t} className="flex items-baseline gap-3 py-2.5 border-b border-swiss-rule text-body-sm text-swiss-ink">
                        <span className="font-mono text-mono-sm text-swiss-ink-subtle">0{i + 1}</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mono-label mb-3">Who it&apos;s for</div>
                  <p className="text-body-sm text-swiss-ink">DTC &amp; e-commerce brands</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 01 Offers */}
      <SwissSection id="offers" figNumber="01" figTitle="OFFERS">
        <h2 className="text-h1 text-swiss-ink mb-4 max-w-3xl">One clean data layer. Three ways to put it to work.</h2>
        <p className="text-body text-swiss-ink-muted mb-10 max-w-2xl">
          Start with the offer that matches your most expensive problem. Every engagement is built on the same unified data foundation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule border border-swiss-rule">
          {offers.map((o) => (
            <div key={o.n} className="bg-swiss-white p-6 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-mono-sm text-swiss-accent">{o.n}</span>
                <span className="mono-label">{o.tag}</span>
              </div>
              <h3 className="text-h2 text-swiss-ink mb-3">{o.name}</h3>
              <p className="text-body-sm text-swiss-ink-muted mb-6">{o.desc}</p>
              <ul className="mb-8 border-t border-swiss-rule">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-baseline gap-2 py-2 border-b border-swiss-rule text-body-sm text-swiss-ink">
                    <span className="text-swiss-ink-subtle" aria-hidden="true">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {o.external ? (
                  <SwissButton href={o.href} variant="ghost" target="_blank" rel="noopener noreferrer">
                    {o.cta} <span aria-hidden="true">→</span>
                  </SwissButton>
                ) : (
                  <SwissButton href={o.href} variant="ghost">
                    {o.cta} <span aria-hidden="true">→</span>
                  </SwissButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* 02 How we work */}
      <SwissSection figNumber="02" figTitle="HOW WE WORK" className="border-t border-swiss-rule">
        <h2 className="text-h1 text-swiss-ink mb-10 max-w-3xl">Data comes first. Everything else gets easier.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Unified data', d: 'Ad platforms, Shopify, and subscriptions joined into one clean, tested dataset, so every number agrees with revenue.' },
            { t: 'Built for decisions', d: 'Answers land in Slack or your existing workflow, not another dashboard nobody opens.' },
            { t: 'Owned by you', d: 'Runs in your cloud and your warehouse. No SaaS lock-in, and you keep everything we build.' },
          ].map((c, i) => (
            <div key={c.t} className="border-t border-swiss-ink pt-4">
              <span className="block font-mono text-mono-sm text-swiss-ink-subtle mb-2">0{i + 1}</span>
              <h3 className="text-h3 text-swiss-ink mb-2">{c.t}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* 03 Engagement model */}
      <SwissSection figNumber="03" figTitle="ENGAGEMENT MODEL" className="border-t border-swiss-rule">
        <h2 className="text-h1 text-swiss-ink mb-10 max-w-3xl">Start small. Prove value. Then scale.</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-swiss-rule border border-swiss-rule">
          {[
            { t: 'Audit & Scope', d: 'A short review of your data, stack, and goals. We agree on one high-value use case.' },
            { t: '30-Day Pilot', d: 'A working version on your real data, so you can judge the value before a bigger commitment.' },
            { t: 'Production Build', d: 'Hardened pipelines, models, and agents, tested and documented in your stack.' },
            { t: 'Ongoing Support or Handoff', d: 'We keep it running and improving, or hand it to your team with full documentation.' },
          ].map((s, i) => (
            <li key={s.t} className="bg-swiss-white p-6">
              <span className={`block font-mono text-body mb-4 ${i === 0 ? 'text-swiss-accent' : 'text-swiss-ink-subtle'}`}>0{i + 1}</span>
              <h3 className="text-h3 text-swiss-ink mb-2">{s.t}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </SwissSection>

      {/* 04 Selected work */}
      <SwissSection figNumber="04" figTitle="SELECTED WORK" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-2">Results from past engagements</h2>
        <p className="text-body-sm text-swiss-ink-subtle mb-8">Anonymized at client request</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swiss-rule">
          {[
            { result: '10+ hrs/week', title: 'Unified marketing data', desc: 'Manual reporting automated. Single source of truth matching actual revenue.' },
            { result: '80% less time', title: 'Conversational analytics', desc: 'Leadership gets answers in minutes. High adoption across non-technical teams.' },
            { result: 'Monthly → daily', title: 'Subscription forecasting', desc: 'Data freshness improved. 20+ hrs/month saved on manual forecasting.' },
          ].map((item, i) => (
            <div key={i} className="bg-swiss-white p-6">
              <div className="font-mono text-body text-swiss-accent mb-2">{item.result}</div>
              <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* 05 About */}
      <SwissSection id="about" figNumber="05" figTitle="ABOUT" tint>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-h1 text-swiss-ink">Senior data engineers, not a rotating team.</h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-body text-swiss-ink-muted mb-4">
              MTS Analytics builds data infrastructure and analytics for high-growth e-commerce and DTC brands: warehouses, ad-platform pipelines, revenue models, and the AI layers on top.
            </p>
            <p className="text-body text-swiss-ink-muted mb-8">
              We build the systems brands keep wishing they had: ones that turn a pile of ad data into a clear decision. Senior people do the work, start to finish, with no handoffs.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { n: '01', t: 'Warehouse & pipelines' },
                { n: '02', t: 'Revenue models' },
                { n: '03', t: 'AI on top of clean data' },
              ].map((item) => (
                <li key={item.n} className="border-t border-swiss-ink pt-3">
                  <span className="block font-mono text-mono-sm text-swiss-ink-subtle mb-1">{item.n}</span>
                  <span className="text-body-sm text-swiss-ink">{item.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwissSection>

      {/* 06 FAQ */}
      <SwissSection id="faq" figNumber="06" figTitle="QUESTIONS">
        <h2 className="text-h2 text-swiss-ink mb-8">Frequently asked questions</h2>
        <div className="border-t border-swiss-rule max-w-3xl">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-swiss-rule">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-swiss-ink font-medium">
                {item.q}
                <span className="font-mono text-swiss-ink-subtle group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <p className="pb-5 text-body-sm text-swiss-ink-muted max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </SwissSection>

      {/* Final CTA */}
      <SwissSection id="contact" className="border-t border-swiss-rule">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h1 text-swiss-ink mb-4">Ready to put your data to work?</h2>
          <p className="text-body text-swiss-ink-muted mb-8">
            Tell us where decisions are slowest today. We&apos;ll show you what a clean data layer and the right agent on top could change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton href={CI_CONFIG.calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer">
              Book a 30-minute call <span aria-hidden="true">→</span>
            </SwissButton>
            <SwissButton href="/creative-intelligence/" variant="secondary">
              Explore Creative Intelligence <span aria-hidden="true">→</span>
            </SwissButton>
          </div>
          <p className="mt-6 text-caption text-swiss-ink-subtle">Prefer email? {emailLink}</p>
        </div>
      </SwissSection>
    </SwissLayout>
  );
}
