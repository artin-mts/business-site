import { Metadata } from 'next';
import Link from 'next/link';
import SwissLayout from '@/components/swiss/SwissLayout';
import SwissSection from '@/components/swiss/SwissSection';
import SwissButton from '@/components/swiss/SwissButton';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

export const metadata: Metadata = {
  title: 'Data Foundation | MTS Analytics',
  description: 'The data foundation your AI agents run on. BigQuery warehouse, dbt models, trusted revenue metrics, and the plumbing that makes creative intelligence work.',
  alternates: {
    canonical: '/revenue-intelligence/',
  },
  openGraph: {
    title: 'Data Foundation | MTS Analytics',
    description: 'AI is only as good as the data under it. We build the foundation.',
    url: 'https://mts-analytics.com/revenue-intelligence/',
    siteName: 'MTS Analytics',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Foundation',
  provider: {
    '@type': 'Organization',
    name: 'MTS Analytics',
    url: 'https://mts-analytics.com',
  },
  description: 'Data infrastructure for ecommerce brands: warehouse, models, dashboards, and the foundation for AI analytics.',
  areaServed: 'US',
  serviceType: 'Data Engineering',
};

export default function DataFoundationPage() {
  return (
    <SwissLayout>
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
              <span>DATA FOUNDATION</span>
              <span className="hidden md:block">FOR ECOMMERCE & DTC</span>
              <span className="hidden md:block">$5M–$50M+ BRANDS</span>
              <span className="text-right md:text-left">$10K–$40K+</span>
            </div>
          </div>
        </div>

        {/* Main hero */}
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-display text-swiss-ink mb-6">
              The data foundation your AI agents run on.
            </h1>
            <p className="text-body text-swiss-ink-muted mb-8">
              AI is only as good as the data under it. We build the warehouse, the models, and the trusted metrics that make creative intelligence—or any AI initiative—actually work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <SwissButton href={CI_CONFIG.calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                Book a 30-minute call →
              </SwissButton>
              <SwissButton href="/creative-intelligence/" variant="ghost">
                See Creative Intelligence →
              </SwissButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <SwissSection figNumber="01" figTitle="THE PROBLEM">
        <div className="max-w-3xl">
          <h2 className="text-h1 text-swiss-ink mb-6">
            You can't grow what you don't understand.
          </h2>
          <p className="text-body text-swiss-ink-muted mb-6">
            Most ecommerce operators are flying blind:
          </p>
          <ul className="space-y-3 text-body-sm text-swiss-ink-muted">
            {[
              'Meta, Google Ads, GA4, and Shopify all show different revenue.',
              'Finance has one number, marketing has another—nobody trusts the dashboards.',
              'Simple questions like "Why is revenue down today?" turn into Slack threads and guesswork.',
              'You wait days for a report and still end up arguing about definitions.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-swiss-ink-subtle">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body text-swiss-ink mt-6">
            It's not a dashboard problem. It's a <span className="font-semibold">data foundation</span> problem.
          </p>
        </div>
      </SwissSection>

      {/* What it includes */}
      <SwissSection figNumber="02" figTitle="THE STACK" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">What you get</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-swiss-rule">
          {[
            {
              layer: 'Warehouse',
              tech: 'BigQuery',
              desc: 'Unified data from ecommerce, ads, analytics, and more. One place for everything.',
            },
            {
              layer: 'Models',
              tech: 'dbt',
              desc: 'Revenue logic, attribution, cohorts, LTV, payback. Definitions everyone agrees on.',
            },
            {
              layer: 'Dashboards',
              tech: 'Rill / Looker',
              desc: 'Real-time views for growth, finance, and operations. Numbers that update continuously.',
            },
            {
              layer: 'AI Layer',
              tech: 'Conversational',
              desc: 'Ask questions in Slack or a UI. Get answers backed by your warehouse, not a black box.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-swiss-white p-6 md:p-8">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-h3 text-swiss-ink">{item.layer}</span>
                <span className="font-mono text-mono-sm text-swiss-ink-subtle">{item.tech}</span>
              </div>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-body text-swiss-ink-muted max-w-2xl">
          From messy data → trusted revenue → instant decisions. The foundation that makes AI analytics possible.
        </p>
      </SwissSection>

      {/* How it works */}
      <SwissSection figNumber="03" figTitle="PROCESS" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">How we build it</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Centralize', desc: 'Connect your ecommerce platform, ad channels, analytics tools into BigQuery.' },
            { step: '02', title: 'Standardize', desc: 'Define revenue logic, customer definitions, and key metrics in dbt.' },
            { step: '03', title: 'Visualize', desc: 'Deploy dashboards for daily performance—growth, finance, operations.' },
            { step: '04', title: 'Ask', desc: 'Add conversational AI so you can ask questions and get instant answers.' },
          ].map((item) => (
            <div key={item.step} className="border-t border-swiss-rule pt-6">
              <div className="font-mono text-mono-sm text-swiss-orange mb-2">{item.step}</div>
              <h3 className="text-h3 text-swiss-ink mb-1">{item.title}</h3>
              <p className="text-body-sm text-swiss-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* Results */}
      <SwissSection figNumber="04" figTitle="RESULTS" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-2">What this looks like in practice</h2>
        <p className="text-body-sm text-swiss-ink-subtle mb-8">Anonymized at client request</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-swiss-rule">
          {[
            {
              quote: 'We went from arguing about whose numbers were right to having one dashboard everyone trusts. Identified and cut unprofitable spend in the first month.',
              role: 'VP of Growth',
              company: 'DTC Brand, $30M+/yr',
            },
            {
              quote: 'Leadership used to wait days for answers. Now they ask questions in Slack and get instant, accurate responses backed by our warehouse.',
              role: 'Head of Operations',
              company: 'Multi-Channel Ecommerce',
            },
            {
              quote: 'The attribution clarity alone was worth it. We finally know which campaigns are driving actual profit, not just top-line revenue.',
              role: 'Marketing Director',
              company: 'National DTC Brand',
            },
            {
              quote: 'MTS built us a full modern data stack in weeks, not quarters. Reporting latency went from days to real-time.',
              role: 'Chief Revenue Officer',
              company: 'High-Growth Ecommerce',
            },
          ].map((item, i) => (
            <div key={i} className="bg-swiss-white p-6 md:p-8">
              <p className="text-body-sm text-swiss-ink mb-4">"{item.quote}"</p>
              <div className="text-caption text-swiss-ink-subtle">
                <span className="font-medium text-swiss-ink">{item.role}</span> · {item.company}
              </div>
            </div>
          ))}
        </div>
      </SwissSection>

      {/* Fit */}
      <SwissSection figNumber="05" figTitle="FIT" className="border-t border-swiss-rule">
        <h2 className="text-h2 text-swiss-ink mb-8">Is this for you?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-h3 text-swiss-ink mb-4">Built for</h3>
            <ul className="space-y-2">
              {[
                'Ecommerce brands doing $5M–$50M+ in annual revenue',
                'Teams tired of conflicting numbers across platforms',
                'Operators who want instant answers, not week-long report requests',
                'Brands serious about understanding attribution and unit economics',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-swiss-ink-muted">
                  <span className="text-swiss-orange">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-h3 text-swiss-ink-muted mb-4">Not a fit if</h3>
            <ul className="space-y-2">
              {[
                "Pre-revenue or under $1M—the investment won't pay back yet",
                'You need a one-off dashboard with no ongoing data strategy',
                "You're looking for the cheapest option rather than the right one",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-swiss-ink-subtle">
                  <span>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwissSection>

      {/* Pricing */}
      <SwissSection figNumber="06" figTitle="PRICING" className="border-t border-swiss-rule">
        <div className="max-w-3xl">
          <h2 className="text-h2 text-swiss-ink mb-4">
            Designed for serious ecommerce brands
          </h2>
          <p className="text-body text-swiss-ink-muted mb-6">
            Data Foundation is a premium engagement for brands that are serious about understanding their revenue. Typical projects range from $10k–$40k+, depending on scope.
          </p>
          <p className="text-body-sm text-swiss-ink-subtle mb-8">
            Brands that implement Data Foundation typically identify unprofitable ad spend within 30 days and establish reporting that saves 10+ hours per week.
          </p>

          <div className="border-t border-swiss-rule pt-6">
            <h3 className="text-h3 text-swiss-ink mb-4">What happens next</h3>
            <ol className="space-y-2 text-body-sm text-swiss-ink-muted">
              {[
                'Book a 30-minute call directly on our calendar.',
                'Answer a few quick questions about your brand and data stack.',
                'On the call, we assess fit and map out next steps.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-swiss-orange">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SwissSection>

      {/* Connection to Creative Intelligence */}
      <SwissSection className="border-t border-swiss-rule bg-swiss-paper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mono-label mb-3">RELATED</div>
            <h2 className="text-h2 text-swiss-ink mb-4">
              The Creative Intelligence Agent runs on this foundation.
            </h2>
            <p className="text-body-sm text-swiss-ink-muted mb-6">
              Once your data is clean and trustworthy, AI becomes genuinely useful. The Creative Intelligence Agent is built on top of Data Foundation to deliver weekly briefs on what's winning, what's fatiguing, and what to make next.
            </p>
            <SwissButton href="/creative-intelligence/" variant="secondary">
              See Creative Intelligence →
            </SwissButton>
          </div>
          <div className="hidden md:block">
            <div className="border border-swiss-rule bg-swiss-white p-6">
              <div className="font-mono text-mono-sm text-swiss-ink-subtle mb-4">STACK DEPENDENCY</div>
              <div className="space-y-2">
                {[
                  { layer: 'Creative Intelligence', active: true },
                  { layer: 'AI Layer', active: false },
                  { layer: 'Dashboards', active: false },
                  { layer: 'Models (dbt)', active: false },
                  { layer: 'Warehouse (BigQuery)', active: false },
                ].map((item, i) => (
                  <div key={i} className={`px-4 py-2 border ${item.active ? 'border-swiss-orange bg-swiss-orange/5' : 'border-swiss-rule'}`}>
                    <span className={`text-body-sm ${item.active ? 'text-swiss-orange font-medium' : 'text-swiss-ink-muted'}`}>
                      {item.layer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SwissSection>

      {/* Final CTA */}
      <SwissSection className="border-t border-swiss-rule">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h1 text-swiss-ink mb-4">
            Stop guessing. Start understanding your revenue.
          </h2>
          <p className="text-body text-swiss-ink-muted mb-8">
            If you're running a serious ecommerce brand and you're still arguing about whose numbers are right, it's time for a different approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton href={CI_CONFIG.calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer">
              Book a 30-minute call →
            </SwissButton>
          </div>

          <p className="mt-6 text-caption text-swiss-ink-subtle">
            Email {CI_CONFIG.leadEmail}
          </p>
        </div>
      </SwissSection>
    </SwissLayout>
  );
}
