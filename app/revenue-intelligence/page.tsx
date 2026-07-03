'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTASection from '@/components/CTASection'
import TestimonialCard from '@/components/TestimonialCard'
import CalendlyLink from '@/components/CalendlyLink'
import { CALENDLY_URL } from '@/lib/cta'

const stackLayers = [
  {
    label: 'Warehouse (BigQuery)',
    desc: 'Unified data from ecommerce, ads, analytics, and more',
  },
  {
    label: 'Models & Metrics (dbt)',
    desc: 'Revenue logic, attribution, cohorts, LTV, payback',
  },
  {
    label: 'Dashboards & Reporting',
    desc: 'Rill dashboards for growth, finance, and operations',
  },
  {
    label: 'AI & Revenue Intelligence',
    desc: 'Slack / UI interface, anomaly alerts, decision support',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const layerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function RevenueIntelligencePage() {
  return (
    <div className="bg-soft-white relative pt-16">
      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 bg-white/95 border-t border-cool-gray px-4 py-3 flex items-center justify-between gap-3 md:hidden backdrop-blur-sm">
        <div className="text-xs text-midnight/70">
          <span className="font-semibold text-midnight">Revenue Intelligence Stack</span>
          <span className="hidden xs:inline"> · See your revenue clearly.</span>
        </div>
        <CalendlyLink
          label="sticky-mobile-bar"
          className="bg-slate-blue text-white px-4 py-2 rounded-md text-xs font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 active:scale-[0.98] transition-all duration-200 whitespace-nowrap cursor-pointer"
        >
          Book Demo
        </CalendlyLink>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block bg-slate-blue/10 text-slate-blue px-4 py-1 rounded-full text-sm font-medium mb-6"
            >
              Premium ecommerce analytics &amp; AI system
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-semibold text-midnight mb-6"
            >
              See your revenue clearly. Decide in minutes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-midnight/80 mb-4 max-w-3xl md:max-w-none mx-auto md:mx-0"
            >
              Revenue Intelligence Stack turns messy, conflicting ecommerce data into one trusted
              view of revenue—and instant answers to what&apos;s happening and why.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-midnight/60 mb-8 max-w-2xl md:max-w-none mx-auto md:mx-0"
            >
              Built for ecommerce brands doing $5M–$50M+ who are done guessing and ready to make
              confident decisions from numbers they actually trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6"
            >
              <CalendlyLink
                label="hero-primary"
                className="bg-slate-blue text-white px-8 py-4 rounded-md font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg cursor-pointer"
              >
                Book a Revenue Intelligence Demo
              </CalendlyLink>
              <a
                href="#how-it-works"
                className="bg-transparent border border-midnight/20 text-midnight px-8 py-4 rounded-md font-medium hover:bg-midnight/5 hover:border-midnight/30 transition-all duration-200 text-lg cursor-pointer"
              >
                See how it works
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-sm text-midnight/50"
            >
              No junior handoffs. You work directly with a senior analytics engineer and architect.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-blue/30 via-slate-blue/0 to-cyan-400/40 blur-2xl opacity-60" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden border border-slate-blue/30 bg-midnight shadow-2xl"
              >
                <Image
                  src="/revenue-intelligence-hero.svg"
                  alt="Revenue Intelligence Stack visual"
                  width={480}
                  height={320}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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

      {/* Who This Is For */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-8">
            Is this for you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-midnight mb-4">
                Revenue Intelligence Stack is built for:
              </h3>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5">
                <li>Ecommerce and DTC brands doing $5M–$50M+ in annual revenue</li>
                <li>Teams that are tired of conflicting numbers across platforms</li>
                <li>Operators who want instant answers, not week-long report requests</li>
                <li>Brands serious about understanding attribution and unit economics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-midnight/60 mb-4">
                This probably isn&apos;t the right fit if:
              </h3>
              <ul className="space-y-2 text-midnight/50 text-sm list-disc pl-5">
                <li>You&apos;re pre-revenue or under $1M — the investment won&apos;t pay back yet</li>
                <li>You need a one-off dashboard with no ongoing data strategy</li>
                <li>You&apos;re looking for the cheapest option rather than the right one</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-midnight/50 mt-6">
            We take on a limited number of Revenue Intelligence engagements per quarter to ensure senior-level attention on every project.
          </p>
        </motion.div>
      </section>

      {/* Solution overview + animated stack visual */}
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

            {/* Animated glassmorphism stack visual */}
            <div className="hidden md:block">
              <div className="text-xs font-semibold tracking-wide uppercase text-midnight/50 mb-3">
                Stack at a glance
              </div>
              <div className="bg-gradient-to-b from-midnight/5 to-slate-blue/10 rounded-2xl p-5">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {[...stackLayers].reverse().map((layer, index) => (
                    <motion.div key={layer.label} variants={layerVariants}>
                      <div
                        className={`backdrop-blur-md bg-white/60 border border-white/40 rounded-xl px-5 py-4 shadow-sm flex flex-col ${
                          index === stackLayers.length - 1
                            ? 'shadow-lg shadow-slate-blue/15 border-slate-blue/20'
                            : ''
                        }`}
                      >
                        <div className="text-xs font-semibold text-midnight">
                          {layer.label}
                        </div>
                        <div className="text-[11px] text-midnight/70">{layer.desc}</div>
                      </div>
                      {index < stackLayers.length - 1 && (
                        <div className="text-center text-slate-blue/30 text-xs py-0.5">▼</div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
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
            A clear, repeatable process to go from &quot;our numbers don&apos;t match&quot; to "we know exactly
            what&apos;s driving revenue today."
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

      {/* Social Proof / Testimonials (moved BEFORE pricing) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            What this looks like in practice
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            Results from brands that implemented the Revenue Intelligence Stack.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-blue/5 via-soft-white to-cyan-100/5 rounded-3xl" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
            <TestimonialCard
              quote="We went from arguing about whose numbers were right to having one dashboard everyone trusts. The Revenue Intelligence Stack paid for itself within the first month when we identified and cut unprofitable spend."
              name="VP of Growth"
              role="Vice President"
              company="DTC Brand, $30M+/yr"
              delay={0}
            />
            <TestimonialCard
              quote="Our leadership team used to wait days for answers. Now they ask questions in Slack and get instant, accurate responses backed by our warehouse. Adoption across non-technical teams was immediate."
              name="Head of Operations"
              role="Operations Lead"
              company="Multi-Channel Ecommerce"
              delay={0.15}
            />
            <TestimonialCard
              quote="The attribution clarity alone was worth it. We finally know which campaigns are driving actual profit, not just top-line revenue. We reallocated budget into high-ROAS campaigns within 30 days."
              name="Marketing Director"
              role="Director of Marketing"
              company="National DTC Brand"
              delay={0.3}
            />
            <TestimonialCard
              quote="MTS Analytics built us a full modern data stack in weeks, not quarters. The conversational AI layer means our team gets answers in minutes instead of filing tickets. Reporting latency went from days to real-time."
              name="Chief Revenue Officer"
              role="CRO"
              company="High-Growth Ecommerce"
              delay={0.45}
            />
          </div>
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

      {/* Pricing / Engagement model (redesigned with CTAs + ROI framing) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            Designed for serious ecommerce brands
          </h2>
          <p className="text-midnight/80 text-lg mb-2 max-w-2xl">
            Revenue Intelligence Stack is a premium engagement for brands that are serious about
            understanding and growing their revenue. Typical projects range from $10k–$40k+,
            depending on scope and complexity.
          </p>
          <p className="text-midnight/70 text-base mb-8 max-w-2xl">
            Brands that implement Revenue Intelligence Stack typically identify unprofitable ad spend within 30 days and establish reporting that saves 10+ hours per week. The system pays for itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="bg-white border border-cool-gray rounded-xl p-8 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-midnight mb-2">Foundation</h3>
              <p className="text-midnight/70 text-sm mb-4">Revenue clarity</p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow mb-6">
                <li>Warehouse setup and core integrations</li>
                <li>Standardized revenue and customer definitions</li>
                <li>Core performance dashboards</li>
              </ul>
              <CalendlyLink
                label="pricing-foundation"
                className="block text-center border border-slate-blue text-slate-blue px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-blue/5 transition-all duration-200 cursor-pointer"
              >
                Get Started
              </CalendlyLink>
            </motion.div>

            {/* Attribution (Recommended) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border-2 border-slate-blue rounded-xl p-8 flex flex-col shadow-xl shadow-slate-blue/10 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-blue text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">Attribution</h3>
              <p className="text-midnight/70 text-sm mb-4">Revenue confidence</p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow mb-6">
                <li>Everything in Foundation</li>
                <li>Multi-channel attribution models</li>
                <li>Cohort and LTV analysis by source and offer</li>
              </ul>
              <CalendlyLink
                label="pricing-attribution"
                className="block text-center bg-slate-blue text-white px-6 py-3 rounded-md text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Book a Demo
              </CalendlyLink>
            </motion.div>

            {/* Revenue Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border border-cool-gray rounded-xl p-8 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-midnight mb-2">Revenue Intelligence</h3>
              <p className="text-midnight/70 text-sm mb-4">AI layer</p>
              <ul className="space-y-2 text-midnight/80 text-sm list-disc pl-5 flex-grow mb-6">
                <li>Everything in Attribution</li>
                <li>Conversational AI interface</li>
                <li>Alerting and anomaly detection on key revenue metrics</li>
              </ul>
              <CalendlyLink
                label="pricing-revenue-intelligence"
                className="block text-center border border-slate-blue text-slate-blue px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-blue/5 transition-all duration-200 cursor-pointer"
              >
                Get Started
              </CalendlyLink>
            </motion.div>
          </div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-white border border-cool-gray rounded-lg p-6 max-w-2xl"
          >
            <h3 className="text-sm font-semibold text-midnight mb-3">What happens next</h3>
            <ol className="space-y-2 text-sm text-midnight/60 list-decimal pl-5">
              <li>Book a 30-minute call directly on our calendar.</li>
              <li>Answer a few quick questions about your brand and data stack up front.</li>
              <li>On the call, we assess fit and map out next steps.</li>
            </ol>
          </motion.div>

          <p className="text-midnight/70 text-sm mt-4 max-w-2xl">
            If you&apos;re spending serious money on growth, your data should be at least as
            sophisticated as your ad strategy.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Stop guessing. Start understanding your revenue."
        description="If you're running a serious ecommerce brand and you're still arguing about whose numbers are right, it's time for a different approach. Revenue Intelligence Stack gives you one source of truth, clear attribution, and instant answers when something changes."
        buttonText="Book a Revenue Intelligence Demo"
        buttonHref={CALENDLY_URL}
      />
    </div>
  )
}
