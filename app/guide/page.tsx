'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Guide() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Stub - no backend implementation
    setSubmitted(true)
  }

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
          <h1 className="text-5xl md:text-6xl font-semibold text-midnight mb-6">
            The DTC Data Stack Guide
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 mb-4">
            2025 Edition
          </p>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            What actually works in 2025. No fluff, no vendor pitches—just the stack that scales.
          </p>
        </motion.div>
      </section>

      {/* Guide Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Foundation Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-midnight mb-4">
              1. Foundation Layer
            </h2>
            <p className="text-midnight/70 mb-4">
              Start with a centralized warehouse. With iOS 17+ and cookie deprecation, you need one source of truth, not 10 different platforms.
            </p>
            <ul className="space-y-2 text-midnight/70">
              <li>• Warehouse: BigQuery, Snowflake, or Redshift</li>
              <li>• Storage: GCS, S3, or Azure Blob</li>
              <li>• Pipelines: Airbyte, Fivetran, or Stitch</li>
              <li>• Modeling: dbt for transformations</li>
              <li>• Principle: Centralize everything</li>
            </ul>
          </motion.div>

          {/* Marketing Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-midnight mb-4">
              2. Marketing Integrations
            </h2>
            <p className="text-midnight/70 mb-4">
              Connect every touchpoint. Attribution is broken, so you need raw data from every source to build your own models.
            </p>
            <ul className="space-y-2 text-midnight/70">
              <li>• Paid Media: Meta, Google Ads, YouTube, TikTok</li>
              <li>• Email: Klaviyo, Mailchimp</li>
              <li>• Analytics: GA4, Adobe Analytics</li>
              <li>• E-commerce: Shopify, Recharge, WooCommerce</li>
              <li>• CRM: Salesforce, HubSpot</li>
              <li>• Principle: Track every touchpoint</li>
            </ul>
          </motion.div>

          {/* Analytics Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-midnight mb-4">
              3. Analytics Layer
            </h2>
            <p className="text-midnight/70 mb-4">
              Build dashboards that answer real questions. If your CMO can't use it in 30 seconds, it's not done.
            </p>
            <ul className="space-y-2 text-midnight/70">
              <li>• ROAS by channel, campaign, creative</li>
              <li>• LTV by cohort, product, segment</li>
              <li>• CAC payback periods</li>
              <li>• Creative performance analysis</li>
              <li>• Anomaly detection & forecasting</li>
              <li>• Principle: Answer real questions</li>
            </ul>
          </motion.div>

          {/* AI Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-midnight mb-4">
              4. AI Layer
            </h2>
            <p className="text-midnight/70 mb-4">
              Add AI that actually helps. Slack bots that answer questions, detect anomalies, and surface insights—not another tool to learn.
            </p>
            <ul className="space-y-2 text-midnight/70">
              <li>• Slack insights & daily summaries</li>
              <li>• Auto-generated reports</li>
              <li>• LLM-assisted queries</li>
              <li>• Smart alerting for anomalies</li>
              <li>• Natural language data exploration</li>
              <li>• Principle: Reduce friction, not add complexity</li>
            </ul>
          </motion.div>

          {/* What Good Looks Like */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-midnight mb-4">
              5. What Good Looks Like
            </h2>
            <p className="text-midnight/70 mb-4">
              What good actually looks like. Realistic benchmarks for 2025.
            </p>
            <ul className="space-y-2 text-midnight/70">
              <li>• Low latency pipelines (under 1 hour for most sources, same-day for all)</li>
              <li>• Zero manual reporting—everything automated</li>
              <li>• Unified definitions—ROAS means the same thing to everyone</li>
              <li>• Infrastructure costs under 3–5% of marketing spend (not 10%+)</li>
              <li>• Non-technical users can answer their own questions</li>
              <li>• Broken pipelines detected and fixed within hours, not days</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Email Capture Form */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cool-gray rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-midnight mb-4">
            Get the Full Guide
          </h2>
          <p className="text-midnight/70 mb-6">
            Enter your email to get the full PDF and a free stack audit.
          </p>
          {submitted ? (
            <p className="text-slate-blue font-medium">
              Thanks! We'll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2 border border-cool-gray rounded-md text-midnight focus:outline-none focus:border-slate-blue"
                />
                <button
                  type="submit"
                  className="bg-slate-blue text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  Get Guide
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  )
}

