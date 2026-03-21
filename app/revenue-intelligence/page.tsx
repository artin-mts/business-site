'use client'

import { motion } from 'framer-motion'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Revenue Intelligence Stack | MTS Analytics',
  description:
    'A premium analytics and AI system for ecommerce brands doing $5M–$50M+. One source of truth for revenue, attribution clarity, and instant answers to what\'s happening and why.',
}

export default function RevenueIntelligencePage() {
  return (
    <div className="bg-soft-white relative">
      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 bg-white/95 border-t border-cool-gray px-4 py-3 flex items-center justify-between gap-3 md:hidden backdrop-blur-sm">
        <div className="text-xs text-midnight/70">
          <span className="font-semibold text-midnight">Revenue Intelligence Stack</span>
          <span className="hidden xs:inline"> · See your revenue clearly.</span>
        </div>
        <a
          href="mailto:artin@mts-analytics.com?subject=Revenue%20Intelligence%20Demo"
          className="bg-slate-blue text-white px-4 py-2 rounded-md text-xs font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Book Demo
        </a>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-slate-blue/10 text-slate-blue px-4 py-1 rounded-full text-sm font-medium mb-6">
            Premium ecommerce analytics & AI system
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-midnight mb-6">
            See your revenue clearly. Decide in minutes.
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 mb-4 max-w-3xl mx-auto">
            Revenue Intelligence Stack turns messy, conflicting ecommerce data into one trusted view
            of revenue—and instant answers to what&apos;s happening and why.
          </p>
          <p className="text-lg text-midnight/60 mb-8 max-w-2xl mx-auto">
            Built for ecommerce brands doing $5M–$50M+ who are done guessing and ready to make
            confident decisions from numbers they actually trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="mailto:artin@mts-analytics.com?subject=Revenue%20Intelligence%20Demo"
              className="bg-slate-blue text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Book a Revenue Intelligence Demo
            </a>
            <a
              href="#how-it-works"
              className="bg-transparent border border-midnight/20 text-midnight px-8 py-4 rounded-md font-medium hover:border-midnight/40 transition-colors text-lg"
            >
              See how it works
            </a>
          </div>
          <p className="text-sm text-midnight/50">
            No junior handoffs. You work directly with a senior analytics engineer and architect.
          </p>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            You can&apos;t grow what you don&apos;t understand.
          </h2>
          <p className="text-midnight/80 text-lg mb-4">
            Most ecommerce operators are flying blind:
          </p>
          <ul className="space-y-2 text-midnight/80 text-base list-disc pl-5">
            <li>Meta, Google Ads, GA4, and Shopify all show different revenue.</li>
            <li>Finance has one number, marketing has another—and nobody trusts the dashboards.</li>
            <li>You don&apos;t know which channels are actually driving profit, not just top-line revenue.</li>
            <li>
              Simple questions like &quot;Why is revenue down today?&quot; turn into Slack threads, exports, and
              guesswork.
            </li>
            <li>You wait days for an analyst to pull a report and still end up arguing about definitions.</li>
          </ul>
          <p className="text-midnight/80 text-lg mt-6">
            It&apos;s not a dashboard problem. It&apos;s a{' '}
            <span className="font-semibold">revenue intelligence</span> problem.
          </p>
        </motion.div>
      </section>

      {/* Solution overview + stack visual */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 md:p-12"
        >
          <p className="text-xs font-semibold tracking-wide uppercase text-midnight/50 mb-2">
            Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            Revenue Intelligence Stack
          </h2>
          <p className="text-midnight/80 text-lg mb-6">
            A complete ecommerce analytics and AI system that gives you one source of truth for
            revenue, clean metrics everyone agrees on, and instant answers to the questions you ask
            every day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 mt-4 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-midnight mb-2">What it includes</h3>
                <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5">
                  <li>BigQuery data warehouse built for ecommerce</li>
                  <li>dbt transformation layer encoding your revenue logic</li>
                  <li>Rill real-time dashboards for operators and leaders</li>
                  <li>Attribution modeling across channels and campaigns</li>
                  <li>Clean, standardized revenue and customer definitions</li>
                  <li>Conversational AI interface in Slack or a simple UI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-midnight mb-2">What you get</h3>
                <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5">
                  <li>One trusted revenue number across teams</li>
                  <li>Clear attribution—new vs returning, channel, campaign, creative</li>
                  <li>Real-time visibility into performance and unit economics</li>
                  <li>Instant answers to &quot;what changed?&quot; without waiting on analysts</li>
                </ul>
              </div>
            </div>

            {/* Simple stack visual */}
            <div className="hidden md:block">
              <div className="text-xs font-semibold tracking-wide uppercase text-midnight/50 mb-3">
                Stack at a glance
              </div>
              <div className="space-y-2">
                {[ 
                  {
                    label: 'AI & Revenue Intelligence',
                    desc: 'Slack / UI interface, anomaly alerts, decision support',
                  },
                  {
                    label: 'Dashboards & Reporting',
                    desc: 'Rill dashboards for growth, finance, and operations',
                  },
                  {
                    label: 'Models & Metrics (dbt)',
                    desc: 'Revenue logic, attribution, cohorts, LTV, payback',
                  },
                  {
                    label: 'Warehouse (BigQuery)',
                    desc: 'Unified data from ecommerce, ads, analytics, and more',
                  },
                ].map((layer, index) => (
                  <div
                    key={layer.label}
                    className="border border-cool-gray rounded-md px-4 py-3 bg-soft-white flex flex-col shadow-sm"
                    style={{ marginLeft: index * 4 }}
                  >
                    <div className="text-xs font-semibold text-midnight">
                      {layer.label}
                    </div>
                    <div className="text-[11px] text-midnight/70">{layer.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-midnight/80 text-lg mt-8 font-medium">
            From messy data → trusted revenue → instant decisions.
          </p>
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            How Revenue Intelligence Stack works
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            A clear, repeatable process to go from &quot;our numbers don&apos;t match&quot; to “we know exactly
            what&apos;s driving revenue today.”
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: '1. Centralize your data',
              body:
                'We connect your ecommerce platform, ad channels, analytics tools, and key systems into a BigQuery warehouse designed for ecommerce revenue analysis.',
            },
            {
              title: '2. Standardize revenue logic',
              body:
                'We define and implement your revenue and customer definitions in dbt so everyone uses the same logic for revenue, returns, discounts, and new vs returning customers.',
            },
            {
              title: '3. Visualize performance',
              body:
                'We deploy Rill dashboards that give operators and leaders a fast, reliable view of revenue, performance, and unit economics—updated continuously.',
            },
            {
              title: '4. Ask questions, get answers',
              body:
                'On top of the stack, we add conversational AI so you can ask questions in Slack or a simple UI and get answers backed by your warehouse, not another black-box platform.',
            },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-cool-gray rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-midnight mb-2">{step.title}</h3>
              <p className="text-sm text-midnight/70">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deliverables / Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            What you actually get
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                1. Data infrastructure that doesn&apos;t crumble at month-end
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                BigQuery warehouse, ingestion from your platforms, and dbt models that encode your
                revenue logic, customer definitions, and key metrics.
              </p>
              <p className="text-midnight/80 text-sm font-medium">
                Outcome: one reliable source of truth for revenue, not five slightly different
                versions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                2. Attribution models you can defend in a board meeting
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                Channel, campaign, and creative performance beyond last-click. New vs returning
                revenue attribution and cohort views by source and offer.
              </p>
              <p className="text-midnight/80 text-sm font-medium">
                Outcome: you know which spend is actually working—and what to cut without guessing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                3. Dashboards built for operators, not data tourists
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                Real-time Rill dashboards for daily performance. Views for growth, finance, and
                operations that focus on the metrics that matter.
              </p>
              <p className="text-midnight/80 text-sm font-medium">
                Outcome: leadership and operators use the same numbers, in the same place, every day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                4. AI interface for instant revenue intelligence
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                Slack or web UI connected directly to your warehouse. Natural language questions
                mapped to structured queries with alerts when something breaks pattern.
              </p>
              <p className="text-midnight/80 text-sm font-medium">
                Outcome: instead of waiting days for a custom report, you get answers in seconds—
                grounded in data you already trust.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Differentiation */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            Not another dashboard project.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5">
              <li>
                <span className="font-semibold">Revenue-first, not tool-first.</span> We start with
                what counts as revenue for your business and work backwards into the stack.
              </li>
              <li>
                <span className="font-semibold">Built specifically for ecommerce.</span> We live in
                the world of channels, cohorts, LTV, POAS, and payback—not generic SaaS metrics.
              </li>
              <li>
                <span className="font-semibold">Depth in data engineering and revenue ops.</span>{' '}
                You work with someone who has owned full analytics stacks for a national DTC brand,
                not a generalist freelancer.
              </li>
            </ul>
            <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5">
              <li>
                <span className="font-semibold">AI as a layer, not a gimmick.</span> The AI
                interface sits on a clean, governed data foundation, so answers are reliable.
              </li>
              <li>
                <span className="font-semibold">Designed for decision-makers.</span> The goal isn&apos;t
                more charts—it&apos;s faster, calmer, more confident decisions.
              </li>
              <li>
                <span className="font-semibold">High-touch, low-BS engagement.</span> No bloated
                team, no endless workshops. Focused implementation that respects your time.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Pricing / Engagement model */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            Designed for serious ecommerce brands
          </h2>
          <p className="text-midnight/80 text-lg mb-6 max-w-2xl">
            Revenue Intelligence Stack is a premium engagement for brands that are serious about
            understanding and growing their revenue. Typical projects range from $10k–$40k+,
            depending on scope and complexity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-cool-gray rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-midnight mb-2">Foundation</h3>
              <p className="text-midnight/70 text-sm mb-4">
                Revenue clarity
              </p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow">
                <li>Warehouse setup and core integrations</li>
                <li>Standardized revenue and customer definitions</li>
                <li>Core performance dashboards</li>
              </ul>
            </div>
            <div className="bg-white border border-midnight rounded-lg p-6 flex flex-col shadow-sm">
              <h3 className="text-xl font-semibold text-midnight mb-2">Attribution</h3>
              <p className="text-midnight/70 text-sm mb-4">Revenue confidence</p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow">
                <li>Everything in Foundation</li>
                <li>Multi-channel attribution models</li>
                <li>Cohort and LTV analysis by source and offer</li>
              </ul>
            </div>
            <div className="bg-white border border-cool-gray rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-midnight mb-2">Revenue Intelligence</h3>
              <p className="text-midnight/70 text-sm mb-4">AI layer</p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow">
                <li>Everything in Attribution</li>
                <li>Conversational AI interface</li>
                <li>Alerting and anomaly detection on key revenue metrics</li>
              </ul>
            </div>
          </div>
          <p className="text-midnight/70 text-sm mt-4 max-w-2xl">
            If you&apos;re spending serious money on growth, your data should be at least as
            sophisticated as your ad strategy.
          </p>
        </motion.div>
      </section>

      {/* Social proof placeholder */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            What this looks like in practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-cool-gray rounded-lg p-6">
              <h3 className="text-lg font-semibold text-midnight mb-2">
                DTC brand, $30M+/year
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                Fragmented revenue reporting across Shopify, GA4, and ad platforms. No agreement on
                &quot;real&quot; revenue or channel performance.
              </p>
              <p className="text-midnight/80 text-sm mb-2">
                Implemented centralized warehouse, standardized revenue logic, Rill dashboards, and
                channel attribution models.
              </p>
              <ul className="space-y-1 text-midnight/80 text-xs list-disc pl-5">
                <li>Single, trusted revenue number across finance and marketing</li>
                <li>Identified and cut unprofitable spend within 30 days</li>
                <li>Reallocated budget into high-ROAS campaigns with clear payback</li>
              </ul>
            </div>
            <div className="bg-white border border-cool-gray rounded-lg p-6">
              <h3 className="text-lg font-semibold text-midnight mb-2">
                Multi-channel ecommerce brand
              </h3>
              <p className="text-midnight/80 text-sm mb-2">
                Leadership waited days for answers and still got conflicting reports.
              </p>
              <p className="text-midnight/80 text-sm mb-2">
                Implemented Revenue Intelligence Stack with Slack-based Q&amp;A on top of a unified
                warehouse.
              </p>
              <ul className="space-y-1 text-midnight/80 text-xs list-disc pl-5">
                <li>Leadership gets answers in minutes, not days</li>
                <li>Reporting time reduced significantly</li>
                <li>Faster detection of revenue drops and spend anomalies</li>
              </ul>
            </div>
          </div>
          <p className="text-midnight/70 text-sm mt-6">
            Placeholder social proof. Replace with your anonymized case studies and testimonials as
            you collect them.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Stop guessing. Start understanding your revenue."
        description="If you&apos;re running a serious ecommerce brand and you&apos;re still arguing about whose numbers are right, it&apos;s time for a different approach. Revenue Intelligence Stack gives you one source of truth, clear attribution, and instant answers when something changes."
        buttonText="Book a Revenue Intelligence Demo"
        buttonHref="mailto:artin@mts-analytics.com?subject=Revenue%20Intelligence%20Demo"
      />
    </div>
  )
}
