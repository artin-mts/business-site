'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTASection from '@/components/CTASection'
import { CALENDLY_URL } from '@/lib/cta'
import ServiceCard from '@/components/ServiceCard'
import MetricCard from '@/components/MetricCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import FAQ from '@/components/FAQ'
import TechLogoBar from '@/components/TechLogoBar'
import AnimatedCounter from '@/components/AnimatedCounter'

const faqItems = [
  {
    question: 'Do I need a data team to work with you?',
    answer:
      "No. MTS Analytics often acts as your fractional data team—perfect for businesses that don't have in‑house analytics expertise. You get senior‑level data infrastructure without hiring a full team.",
  },
  {
    question: 'How fast can you deliver results?',
    answer:
      'We move fast because we use proven patterns and modern tools. Most engagements start with a roadmap and an initial implementation that ships in weeks, not quarters.',
  },
  {
    question: 'What if my data is a mess?',
    answer:
      "That's exactly when it makes sense to bring us in. We start by auditing your stack, identifying gaps, and sharing a prioritized roadmap. Most clients come to MTS Analytics because their data is scattered—we specialize in cleaning it up.",
  },
  {
    question: 'Can you work with our existing tools?',
    answer:
      "Yes. We integrate with your existing stack: Shopify, Klaviyo, Meta, Google Ads, GA4, and more. We'll connect everything to a modern warehouse and build reporting that works with what you already have.",
  },
  {
    question: 'How does AI fit into an engagement?',
    answer:
      'AI is a layer on top of a solid data foundation. Once your warehouse and models are in good shape, we can introduce conversational analytics, agentic monitoring, and decision‑support use cases that match your business.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We primarily work with growth‑stage e‑commerce and DTC brands, but the patterns apply to any organization with fragmented data, complex reporting needs, and an appetite for AI.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'MTS Analytics',
  description: 'Senior-led data & AI studio for ecommerce and DTC brands.',
  url: 'https://mts-analytics.com',
  areaServed: 'US',
  serviceType: ['Analytics Consulting', 'Data Engineering', 'AI Implementation'],
  priceRange: '$$$',
}

export default function Home() {
  return (
    <div className="bg-soft-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ===== DARK HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-midnight">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block bg-slate-blue/20 text-slate-blue border border-slate-blue/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                Data &amp; AI studio for ecommerce brands
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-soft-white mb-6 leading-[1.1]"
              >
                Turn messy data into{' '}
                <span className="bg-gradient-to-r from-slate-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  revenue clarity.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl text-soft-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                We build the analytics and AI systems serious ecommerce brands rely on to understand revenue, not just report on it.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
              >
                <a
                  href="/revenue-intelligence"
                  className="bg-slate-blue text-white px-8 py-4 rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg cursor-pointer"
                >
                  See Revenue Intelligence Stack
                </a>
                <a
                  href="/revenue-intelligence#how-it-works"
                  className="bg-soft-white/10 border border-soft-white/20 text-soft-white px-8 py-4 rounded-lg font-medium hover:bg-soft-white/15 hover:border-soft-white/30 transition-all duration-200 text-lg cursor-pointer"
                >
                  How it works
                </a>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sm text-soft-white/40"
              >
                No junior handoffs. You work directly with a senior analytics engineer.
              </motion.p>
            </div>

            {/* Hero visual — animated data dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-tr from-slate-blue/20 via-transparent to-cyan-400/20 blur-3xl opacity-60" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* Dashboard mockup */}
                  <div className="bg-midnight/80 backdrop-blur-xl border border-soft-white/10 rounded-2xl p-6 shadow-2xl shadow-slate-blue/10">
                    {/* Top metrics row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: 'Revenue', value: '$184,920', change: '+18.3%', up: true },
                        { label: 'ROAS', value: '4.2x', change: '+0.8x', up: true },
                        { label: 'New Customers', value: '1,247', change: '+12.1%', up: true },
                      ].map((metric) => (
                        <div key={metric.label} className="bg-soft-white/5 rounded-xl p-3 border border-soft-white/5">
                          <div className="text-[10px] text-soft-white/40 mb-1">{metric.label}</div>
                          <div className="text-lg font-semibold text-soft-white">{metric.value}</div>
                          <div className={`text-xs font-medium ${metric.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Chart area */}
                    <div className="bg-soft-white/5 rounded-xl p-4 border border-soft-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-soft-white/40">30-day Revenue Trend</span>
                        <span className="text-xs text-emerald-400 font-medium">+18.3%</span>
                      </div>
                      <svg viewBox="0 0 400 80" className="w-full h-auto">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#526CFF" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#526CFF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M0 65 Q30 60 60 55 T120 45 T180 40 T240 30 T300 25 T360 20 T400 15"
                          fill="none"
                          stroke="#526CFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                        />
                        <path
                          d="M0 65 Q30 60 60 55 T120 45 T180 40 T240 30 T300 25 T360 20 T400 15 V80 H0 Z"
                          fill="url(#chartGrad)"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                    {/* Channel breakdown */}
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {[
                        { name: 'Meta', pct: 38, color: 'bg-blue-500' },
                        { name: 'Google', pct: 28, color: 'bg-emerald-500' },
                        { name: 'Email', pct: 22, color: 'bg-purple-500' },
                        { name: 'Direct', pct: 12, color: 'bg-amber-500' },
                      ].map((ch) => (
                        <div key={ch.name} className="text-center">
                          <div className="text-[10px] text-soft-white/40 mb-1">{ch.name}</div>
                          <div className="w-full bg-soft-white/5 rounded-full h-1.5 mb-1">
                            <motion.div
                              className={`${ch.color} h-1.5 rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${ch.pct}%` }}
                              transition={{ duration: 1.2, delay: 1 + Math.random() * 0.3, ease: 'easeOut' }}
                            />
                          </div>
                          <div className="text-xs text-soft-white/60 font-medium">{ch.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TECH LOGO BAR ===== */}
      <section className="max-w-5xl mx-auto px-6">
        <TechLogoBar />
      </section>

      {/* ===== FEATURED OFFER ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-blue/5 to-cyan-100/10 border border-slate-blue/15 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-blue/10 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-blue">
                <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold tracking-wide uppercase text-slate-blue mb-1">Featured offer</p>
              <h2 className="text-xl md:text-2xl font-semibold text-midnight mb-1">Revenue Intelligence Stack</h2>
              <p className="text-sm text-midnight/70 max-w-xl">
                A complete analytics and AI system for ecommerce brands doing $5M–$50M+ that turns messy data into trusted revenue and instant decisions.
              </p>
            </div>
          </div>
          <div>
            <a
              href="/revenue-intelligence"
              className="inline-block bg-slate-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              See the Stack
            </a>
          </div>
        </motion.div>
      </section>

      {/* ===== HOW WE WORK (with icons) ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            How we can work together
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            Brands that win with data focus on outcomes. Here are the three main ways we help.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-blue">
                  <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4m-4 0v4m-4 0h8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 9h8M8 13h4" strokeLinecap="round" />
                </svg>
              ),
              title: '1. Analytics Architecture & Roadmap',
              features: [
                'Deep dive into your current data stack—sources, warehouse, reporting',
                'Identify what is working, what is broken, and where data is leaking',
                'Target architecture and phased implementation plan tuned to your team',
              ],
              description: 'Start with clarity. You get a senior‑level review of your entire analytics ecosystem and a practical roadmap to a reliable, AI‑ready foundation.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-blue">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  <path d="M4 9h16M9 4v16" strokeLinecap="round" />
                  <path d="M13 13l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: '2. End‑to‑End Data & Reporting',
              features: [
                'Connect ERPs, ecommerce platforms, and ad networks into a unified warehouse',
                'Design and implement analytics engineering patterns for modeling and transformation',
                'Ship dashboards tailored to growth, finance, and operations teams',
              ],
              description: 'We build the full analytics pipeline so your team stops wrestling with spreadsheets and starts making decisions from one source of truth.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-blue">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" strokeLinecap="round" />
                </svg>
              ),
              title: '3. Ongoing Analytics & AI Studio',
              features: [
                'Fractional analytics lead without a full‑time hire',
                'Ongoing maintenance, enhancements, and new reporting use cases',
                'Advisory and implementation for conversational and agentic AI initiatives',
              ],
              description: 'For teams that want a long‑term partner. We keep your data stack healthy, evolve your reporting, and layer in AI where it drives decisions.',
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px -10px rgba(82, 108, 255, 0.15)' }}
              className="bg-white border border-cool-gray border-t-2 border-t-slate-blue rounded-xl p-8 cursor-default"
            >
              <div className="w-12 h-12 bg-slate-blue/10 rounded-xl flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-3">{service.title}</h3>
              <ul className="mb-4 space-y-1">
                {service.features.map((f, j) => (
                  <li key={j} className="text-sm text-midnight/70">• {f}</li>
                ))}
              </ul>
              <p className="text-sm text-midnight/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DARK STATS SECTION ===== */}
      <section className="relative overflow-hidden bg-midnight py-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-4">
              Results that speak for themselves
            </h2>
            <p className="text-lg text-soft-white/50 max-w-2xl mx-auto">
              Real outcomes from brands that invested in proper data infrastructure and AI.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter target={10} suffix="+" label="Years building analytics" />
            <AnimatedCounter target={80} suffix="%" label="Reduction in reporting time" />
            <AnimatedCounter target={30} suffix=" days" label="To identify waste" />
            <AnimatedCounter target={10} suffix="+ hrs" label="Saved per week per team" />
          </div>
        </div>
      </section>

      {/* ===== WHY MTS ANALYTICS ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-midnight mb-12 text-center"
        >
          Why MTS Analytics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <MetricCard
            title="10+ years building analytics for e‑commerce and beyond"
            description="I've spent over a decade designing and implementing analytics systems across multiple industries, with a deep focus on e‑commerce and DTC. From ERPs and ecommerce platforms to ad networks and warehouses, I know how to connect the dots."
            delay={0}
          />
          <MetricCard
            title="Senior partner, not a bloated agency"
            description="You're not getting a rotating cast of juniors. You work directly with a senior analytics engineer and architect who has led data infrastructure through hyper‑growth, complex reporting requirements, and AI initiatives."
            delay={0.1}
          />
        </div>
      </section>

      {/* ===== AI SECTION (dark) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-midnight to-slate-blue/20 py-20">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-6">
                  AI on top of a solid data foundation
                </h2>
                <p className="text-soft-white/70 mb-6 text-lg">
                  Once your data is modeled correctly, AI becomes genuinely useful. We focus on high‑leverage use cases on top of your warehouse:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '💬', title: 'Conversational analytics', desc: 'Ask questions in natural language and get answers backed by your warehouse.' },
                    { icon: '🔔', title: 'Agentic monitoring', desc: 'Agents watch for anomalies in spend, conversion, and inventory and alert the right people.' },
                    { icon: '🧭', title: 'Decision support', desc: 'Playbooks encoded in AI so your team can explore scenarios without an analyst.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-soft-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-soft-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-soft-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* AI Visual */}
              <div className="hidden lg:block">
                <div className="bg-soft-white/5 backdrop-blur-sm border border-soft-white/10 rounded-2xl p-6">
                  <div className="text-xs text-soft-white/40 mb-3">Revenue Intelligence Interface</div>
                  <div className="space-y-3">
                    <div className="bg-slate-blue/20 text-soft-white/80 text-sm rounded-lg rounded-bl-none px-4 py-3 max-w-[85%]">
                      Why is revenue down today compared to last Tuesday?
                    </div>
                    <div className="bg-soft-white/10 text-soft-white/80 text-sm rounded-lg rounded-br-none px-4 py-3 ml-auto max-w-[85%]">
                      <p className="mb-2">Revenue is down 12% ($22.4k) vs last Tuesday. Key drivers:</p>
                      <ul className="text-xs text-soft-white/60 space-y-1">
                        <li>• Meta CPA up 34% — new creative underperforming</li>
                        <li>• Email revenue flat — Klaviyo flow paused since Monday</li>
                        <li>• Google stable — ROAS holding at 3.8x</li>
                      </ul>
                    </div>
                    <div className="bg-slate-blue/20 text-soft-white/80 text-sm rounded-lg rounded-bl-none px-4 py-3 max-w-[85%]">
                      Which Meta creatives should we pause?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            Recent wins (anonymized)
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            Real results from brands and organizations I've helped scale with better data and AI.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CaseStudyCard
            title="Unified marketing data for a multi‑channel DTC brand"
            challenge="The brand couldn't trust their numbers—Meta, Google, and GA4 all showed different performance."
            solution="Built a unified data pipeline connecting all sources into a single warehouse of truth."
            results={[
              'Single source of truth matching actual revenue',
              'Fixed waste in underperforming campaigns within weeks',
              'Automated daily reporting replaced 10+ hours/week of manual work',
            ]}
            delay={0}
          />
          <CaseStudyCard
            title="Conversational analytics for non‑technical leadership"
            challenge="Leadership spent hours pulling reports and still couldn't answer basic questions quickly."
            solution="Deployed a secure conversational analytics interface connected to the data warehouse."
            results={[
              '80% reduction in time spent pulling reports',
              'High adoption across non‑technical teams',
              'Executives get answers in minutes instead of waiting on analysts',
            ]}
            delay={0.1}
          />
          <CaseStudyCard
            title="Subscription forecasting for supply chain"
            challenge="Manual Excel models were inaccurate, leading to stockouts and overstock."
            solution="Built automated forecasting using historical cohorts, seasonality, and churn patterns."
            results={[
              'Data freshness went from monthly to daily',
              '20+ hours saved per month on manual forecasting',
              'Reduced stockouts during key promotions',
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="Modern data stack for a high‑growth organization"
            challenge="Fragmented ingestion and stale reporting blocked timely decisions and AI initiatives."
            solution="Architected full modern data stack with automated ingestion, transformation, and conversational AI."
            results={[
              'Fully automated pipeline from source to insight',
              'Reporting latency reduced from days to minutes',
              'Foundation for advanced predictive modeling',
            ]}
            delay={0.3}
          />
        </div>
      </section>

      {/* ===== ABOUT (with visual layout) ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-slate-blue to-blue-400 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AM</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">About MTS Analytics</h2>
              <p className="text-midnight/80 mb-4 text-lg">
                I'm a data engineer and analytics consultant with 10+ years building data infrastructure and reporting for high‑growth organizations, especially in e‑commerce and DTC.
              </p>
              <p className="text-midnight/80 mb-4 text-lg">
                I started MTS Analytics because I saw the same patterns everywhere: fragmented data sources, conflicting metrics, and infrastructure costs that outpace value.
              </p>
              <p className="text-midnight/80 text-lg">
                That's why MTS Analytics operates as a small, senior‑led data & AI studio — building systems that provide a single source of truth so you can make confident decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== GOVERNMENT ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-xl p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-midnight mb-4">Government & contractors</h2>
          <p className="text-midnight/80 text-lg">
            MTS Analytics is registered in SAM.gov and available for analytics and data infrastructure work with government contractors and public‑sector projects.
          </p>
        </motion.div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-midnight mb-12 text-center"
        >
          Frequently asked questions
        </motion.h2>
        <FAQ items={faqItems} />
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTASection
        id="contact"
        title="Ready to get serious about your data?"
        description="If you're a growth‑stage ecommerce or DTC brand wrestling with messy data, broken reporting, or unclear ROI — let's talk."
        subtitle="Book a 30-minute call to walk through your brand, your current data stack, and what you want it to do."
        buttonText="Book a Call with MTS Analytics"
        buttonHref={CALENDLY_URL}
      />
    </div>
  )
}
