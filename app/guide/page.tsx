'use client'

import { useState } from 'react'

export default function Guide() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock only: no backend, just a friendly confirmation
    setSubmitted(true)
  }

  return (
    <div className="bg-soft-white pt-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-midnight mb-6">
            The DTC Data Stack Guide
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 mb-4">2025 Working Draft</p>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            This is a draft / mockup version of the guide. It outlines how MTS Analytics thinks about
            the modern DTC data stack so you can see the approach before the full PDF is ready.
          </p>
        </div>
      </section>

      {/* Outline Sections */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-midnight mb-3">1. Foundation Layer</h2>
            <p className="text-midnight/70 mb-3">
              Start with a centralized warehouse. With iOS changes and cookie deprecation, you need
              one source of truth, not a patchwork of ad platform UIs.
            </p>
            <ul className="space-y-1 text-midnight/70 list-disc pl-5 text-sm">
              <li>Warehouse: BigQuery, Snowflake, or Redshift</li>
              <li>Storage: GCS, S3, or Azure Blob</li>
              <li>Pipelines: Airbyte, Fivetran, or Stitch</li>
              <li>Modeling: dbt for transformations</li>
              <li>Principle: centralize everything and version your logic</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight mb-3">2. Marketing Integrations</h2>
            <p className="text-midnight/70 mb-3">
              Connect every touchpoint so you can build your own attribution and performance views
              instead of trusting black‑box platforms.
            </p>
            <ul className="space-y-1 text-midnight/70 list-disc pl-5 text-sm">
              <li>Paid: Meta, Google Ads, YouTube, TikTok</li>
              <li>Email: Klaviyo, Mailchimp</li>
              <li>Analytics: GA4, Adobe Analytics</li>
              <li>E‑commerce: Shopify, Recharge, WooCommerce</li>
              <li>CRM: Salesforce, HubSpot</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight mb-3">3. Analytics & Decision Layer</h2>
            <p className="text-midnight/70 mb-3">
              Dashboards should answer real growth and operations questions within 30 seconds, or they
              won&apos;t get used.
            </p>
            <ul className="space-y-1 text-midnight/70 list-disc pl-5 text-sm">
              <li>ROAS and POAS by channel, campaign, creative</li>
              <li>LTV by cohort, product, and acquisition source</li>
              <li>CAC payback and unit economics</li>
              <li>Inventory and subscription forecasting basics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight mb-3">4. AI Layer (On Top of the Stack)</h2>
            <p className="text-midnight/70 mb-3">
              AI is a layer you add once the warehouse and models are trustworthy. The goal is
              faster, more reliable decisions — not another toy.
            </p>
            <ul className="space-y-1 text-midnight/70 list-disc pl-5 text-sm">
              <li>Slack / Teams assistants that answer performance questions</li>
              <li>Agentic monitoring that flags anomalies in spend and conversion</li>
              <li>Decision support for &quot;what if&quot; scenarios and playbooks</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight mb-3">5. What the Full Guide Will Include</h2>
            <p className="text-midnight/70 mb-3 text-sm">
              The full PDF version will go deeper on:
            </p>
            <ul className="space-y-1 text-midnight/70 list-disc pl-5 text-sm">
              <li>Reference architectures for different brand sizes</li>
              <li>Tooling comparisons and trade‑offs</li>
              <li>Example dbt models and metric definitions</li>
              <li>Playbooks for rolling out AI safely on top of your data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connect to Revenue Intelligence Stack */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="bg-white border border-cool-gray rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-midnight mb-2">
            Want this stack implemented end‑to‑end?
          </h2>
          <p className="text-midnight/70 mb-4 text-sm max-w-xl mx-auto">
            Revenue Intelligence Stack is the implementation of this guide: warehouse, models,
            dashboards, and an AI layer on top so you can ask questions in plain English and get
            trusted answers.
          </p>
          <a
            href="/revenue-intelligence"
            className="inline-block bg-slate-blue text-white px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See Revenue Intelligence Stack
          </a>
        </div>
      </section>

      {/* Simple mock capture */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-cool-gray rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-midnight mb-4">Want the full guide when it&apos;s ready?</h2>
          <p className="text-midnight/70 mb-6 text-sm">
            This form is a mock for now — it doesn&apos;t save anything yet. When we wire it up, you&apos;ll
            be able to drop your email and get the full PDF plus a short walkthrough video.
          </p>
          {submitted ? (
            <p className="text-slate-blue font-medium">Thanks — this is just a preview state for now.</p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-2 border border-cool-gray rounded-md text-midnight focus:outline-none focus:border-slate-blue text-sm"
                />
                <button
                  type="submit"
                  className="bg-slate-blue text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity text-sm"
                >
                  Preview submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
