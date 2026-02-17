'use client'

import { motion } from 'framer-motion'
import CTASection from '@/components/CTASection'
import ServiceCard from '@/components/ServiceCard'
import MetricCard from '@/components/MetricCard'

import CaseStudyCard from '@/components/CaseStudyCard'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="bg-soft-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-slate-blue/10 text-slate-blue px-4 py-1 rounded-full text-sm font-medium mb-6">
            Data & AI studio for e‑commerce and DTC brands
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-midnight mb-6">
            Data & AI for brands that are serious about growth
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 mb-4 max-w-3xl mx-auto">
            MTS Analytics is a small data & AI studio that builds end‑to‑end analytics for e‑commerce and DTC brands—from connecting ERPs and ad platforms to modeling data for reporting and AI‑driven decision support.
          </p>
          <p className="text-lg text-midnight/60 mb-8 max-w-2xl mx-auto">
            Unify spend and performance across channels, fix broken reporting, and unlock conversational and agentic AI on top of a clean, trusted data foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="mailto:artin@mts-analytics.com"
              className="bg-slate-blue text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Talk to MTS Analytics
            </a>
            <a
              href="/guide"
              className="bg-transparent border border-midnight/20 text-midnight px-8 py-4 rounded-md font-medium hover:border-midnight/40 transition-colors text-lg"
            >
              Get the Data Stack Guide
            </a>
          </div>
          <p className="text-sm text-midnight/50">
            No junior handoffs. You work directly with a senior analytics engineer and architect.
          </p>
        </motion.div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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
            High‑paying brands buy outcomes, not random analytics work. These are the three main ways we typically engage.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="1. Analytics Architecture & Roadmap"
            features={[
              'Deep dive into your current data stack—sources, warehouse, reporting',
              'Identify what is working, what is broken, and where data is leaking',
              'Target architecture and phased implementation plan tuned to your team',
            ]}
            description="Start with clarity. You get a senior‑level review of your entire analytics ecosystem and a practical roadmap to a reliable, AI‑ready foundation."
            delay={0}
          />
          <ServiceCard
            title="2. End‑to‑End Data & Reporting Implementation"
            features={[
              'Connect ERPs, ecommerce platforms, and ad networks into a unified warehouse',
              'Design and implement analytics engineering patterns for modeling and transformation',
              'Ship dashboards tailored to growth, finance, and operations teams',
            ]}
            description="We design and build the full analytics pipeline for your brand so your team stops wrestling with spreadsheets and starts making decisions from one source of truth."
            delay={0.1}
          />
          <ServiceCard
            title="3. Ongoing Analytics & AI Studio"
            features={[
              'Fractional analytics lead without a full‑time hire',
              'Ongoing maintenance, enhancements, and new reporting use cases',
              'Advisory and implementation for conversational and agentic AI initiatives',
            ]}
            description="For teams that want a long‑term partner. We keep your data stack healthy, evolve your reporting, and layer in AI where it actually drives decisions."
            delay={0.2}
          />
        </div>
      </section>

      {/* Why MTS Analytics Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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
            description="I’ve spent over a decade designing and implementing analytics systems across multiple industries, with a deep focus on e‑commerce and DTC. From ERPs and ecommerce platforms to ad networks and warehouses, I know how to connect the dots."
            delay={0}
          />
          <MetricCard
            title="Senior partner, not a bloated agency"
            description="You’re not getting a rotating cast of juniors. You work directly with a senior analytics engineer and architect who has led data infrastructure through hyper‑growth, complex reporting requirements, and AI initiatives."
            delay={0.1}
          />
        </div>
      </section>

      {/* AI Layer Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            AI on top of a solid data foundation
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-midnight/80 mb-4 text-lg">
              Once your data is modeled correctly, AI becomes genuinely useful. Instead of another chatbot demo, we focus on a few high‑leverage use cases that sit on top of your warehouse.
            </p>
            <ul className="text-midnight/80 mb-4 text-lg list-disc pl-5">
              <li>
                <strong>Conversational analytics:</strong> operators and leaders ask questions in natural language (“What did we spend on Meta vs last year?”) and get answers backed by your warehouse.
              </li>
              <li>
                <strong>Agentic monitoring:</strong> agents watch for anomalies in spend, conversion, and inventory, and alert the right people—instead of relying on someone to notice a chart.
              </li>
              <li>
                <strong>Decision support:</strong> playbooks encoded in AI so your team can explore “what if” scenarios without pulling in an analyst every time.
              </li>
            </ul>
            <p className="text-midnight/80 text-lg">
              I’ve deployed conversational analytics using tools like Rill and now use agentic AI to automate monitoring and reporting workflows. The pattern is always the same: clean, well‑modeled data first, AI as an accelerator.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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
            Real results from brands and organizations I’ve helped scale with better data and AI.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CaseStudyCard
            title="Unified marketing data for a multi‑channel DTC brand"
            challenge="The brand couldn’t trust their numbers—Meta, Google, and GA4 all showed different performance. Fragmented sources led to wasted ad spend and confusion about which campaigns were actually working."
            solution="Built a unified data pipeline connecting all sources into a single warehouse of truth. Standardized metrics across channels and implemented identity resolution for actual customer tracking."
            results={[
              'Single source of truth matching actual revenue',
              'Noticed and fixed waste in underperforming campaigns within weeks',
              'Automated daily reporting replaced 10+ hours/week of manual work',
              'Optimization focused on profit, not just clicks and impressions',
            ]}
            delay={0}
          />
          <CaseStudyCard
            title="Conversational analytics for a non‑technical leadership team"
            challenge="Leadership spent hours pulling reports and still couldn’t answer basic questions quickly. BI tool adoption was low due to complexity."
            solution="Deployed a secure conversational analytics interface connected to the data warehouse. Stakeholders ask questions in natural language and receive instant, accurate answers."
            results={[
              '80% reduction in time spent pulling reports',
              'High adoption across non‑technical teams',
              'Anomaly alerts caught issues significantly faster',
              'Executives get answers in minutes instead of waiting on analysts',
            ]}
            delay={0.1}
          />
          <CaseStudyCard
            title="Subscription forecasting for supply chain and inventory"
            challenge="A DTC subscription brand struggled with inventory forecasting. Manual Excel models were inaccurate, leading to stockouts during peak seasons and overstock during slower periods."
            solution="Built automated forecasting using historical cohorts, seasonality, and churn patterns. Integrated with 3PL systems for automated reorder recommendations."
            results={[
              'Data freshness went from monthly to daily',
              '20+ hours saved per month on manual forecasting',
              'Reduced stockouts during key promotions',
              'Improved cash flow via better inventory planning',
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="Modern data stack and AI layer for a high‑growth organization"
            challenge="The team struggled with fragmented ingestion and stale reporting. Manual spreadsheet flows prevented timely decisions and blocked AI initiatives."
            solution="Architected a full modern data stack: automated ingestion (ELT), robust transformation layer, cloud warehousing, and a conversational AI interface for end‑users."
            results={[
              'Fully automated pipeline from source to insight',
              'Reporting latency reduced from days to minutes',
              'Self‑serve analytics enabled for dozens of users',
              'Foundation established for advanced predictive modeling',
            ]}
            delay={0.3}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-6">
            About MTS Analytics
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-midnight/80 mb-4 text-lg">
              I’m a data engineer and analytics consultant with 10+ years building data infrastructure and reporting for high‑growth organizations, especially in e‑commerce and DTC. I’ve led analytics through scaling phases, managed complex optimization projects, and built the pipelines that power critical business decisions.
            </p>
            <p className="text-midnight/80 mb-4 text-lg">
              I started MTS Analytics because I saw the same patterns everywhere: fragmented data sources, conflicting metrics between departments, and infrastructure costs that outpace value. Generic dashboards often fail to answer the specific business questions your team actually has.
            </p>
            <p className="text-midnight/80 text-lg">
              That’s why MTS Analytics operates as a small, senior‑led data & AI studio. Whether you’re a scaling brand or an established enterprise, we build systems that provide a single source of truth and clarity—so you can make confident decisions based on real data, with AI layered in when it genuinely helps.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Government & Contractors Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-midnight mb-4">
            Government & contractors
          </h2>
          <p className="text-midnight/80 text-lg">
            MTS Analytics is registered in SAM.gov and available for analytics and data infrastructure work with government contractors and public‑sector projects, typically as a subcontractor: designing reporting, integrating systems, and advising on AI initiatives.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
        <FAQ
          items={[
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
          ]}
        />
      </section>

      {/* Final CTA Section */}
      <CTASection
        title="Ready to get serious about your data?"
        description="If you're a growth‑stage e‑commerce or DTC brand wrestling with messy data, broken reporting, or unclear ROI, let's talk."
        buttonText="Email MTS Analytics"
        buttonHref="mailto:artin@mts-analytics.com"
      />

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            Let's talk
          </h2>
          <p className="text-lg text-midnight/70 mb-8">
            Send a short note about your brand, your current data stack, and what you wish it could do. We’ll reply with next steps and, if it’s a fit, schedule a 30‑minute strategy call.
          </p>
          <a
            href="mailto:artin@mts-analytics.com"
            className="inline-block bg-slate-blue text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Email MTS Analytics
          </a>
        </motion.div>
      </section>
    </div>
  )
}
