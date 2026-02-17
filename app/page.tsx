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
            Limited spots available this month
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-midnight mb-6">
            Turn Scattered Data Into Actionable Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 mb-4 max-w-3xl mx-auto">
            We help organizations unify their data, optimize performance, and scale with clarity.
          </p>
          <p className="text-lg text-midnight/60 mb-8 max-w-2xl mx-auto">
            Stop switching between siloed platforms. Get one unified dashboard that shows true performance metrics and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#contact"
              className="bg-slate-blue text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Book a Free 60-Minute Audit
            </a>
            <a
              href="/guide"
              className="bg-transparent border border-midnight/20 text-midnight px-8 py-4 rounded-md font-medium hover:border-midnight/40 transition-colors text-lg"
            >
              Get the Data Stack Guide
            </a>
          </div>
          <p className="text-sm text-midnight/50">
            No sales pitch. Just a roadmap to fix your data stack.
          </p>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-4">
            What We Do
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            We solve the data problems that cost organizations time and money: fragmented sources, conflicting metrics, and inefficient reporting.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Marketing Data Unification"
            tech={['BigQuery', 'Snowflake', 'dbt']}
            features={[
              'Connect Meta, Google Ads, TikTok, GA4, Shopify, Klaviyo',
              'Fix iOS14 attribution loss with custom models',
              'De-duplicate conversions across channels',
              'Push POAS (Profit on Ad Spend) into ad platforms',
            ]}
            description="Stop wondering which ROAS number is right. Get one source of truth that matches your actual revenue—so you can optimize ad spend with confidence."
            delay={0}
          />
          <ServiceCard
            title="Unified Marketing Dashboards"
            features={[
              'True ROAS by channel, campaign, creative',
              'LTV analysis by cohort, product, segment',
              'CAC payback periods & forecasting',
              'Creative performance deep-dives',
            ]}
            description="See all your KPIs in one place. No more switching between platforms. Make decisions faster with dashboards your team actually uses."
            delay={0.1}
          />
          <ServiceCard
            title="Conversational AI with Your Data"
            features={[
              'Securely chat with your data in natural language',
              'Ask: "What was our performance last quarter?"',
              'Automated insights & anomaly detection',
              'Instant answers for non-technical stakeholders',
            ]}
            description="Empower your team to ask questions and get answers instantly. No complex BI training required—just conversation."
            delay={0.2}
          />
          <ServiceCard
            title="Fractional Data Team"
            features={[
              'Monthly retainer: maintenance & enhancements',
              'New dashboards, models, and ad-hoc analysis',
              'Flexible: pause or adjust anytime',
              'Weeks to deliver, not months',
            ]}
            description="Ongoing expertise without hiring a full team. Flexible support for maintenance, enhancements, and new initiatives."
            delay={0.3}
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
            title="10+ Years Experience"
            description="Built analytics at scale for high-growth organizations. I know your problems because I've solved them—from complex attribution to large-scale infrastructure."
            delay={0}
          />
          <MetricCard
            title="AI-Driven Insights"
            description="Conversational interfaces that answer questions, detect anomalies, and surface insights automatically. Empower your team with instant answers."
            delay={0.1}
          />
        </div>
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
            Recent Wins
          </h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto">
            Real results from organizations we've helped scale with better data.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CaseStudyCard
            title="Marketing Data Unification for Multi-Channel Brand"
            challenge="Organization couldn't trust their data—Facebook, Google, and GA4 all showed different numbers. Fragmented sources led to wasted ad spend and confusion about what was actually working."
            solution="Built a unified data pipeline connecting all sources into a single warehouse of truth. Standardized metrics across channels and implemented identity resolution for actual customer tracking."
            results={[
              'Single source of truth matching actual revenue',
              '15% improvement in spend efficiency within 3 months',
              'Automated daily reporting replacing 10+ hours/week manual work',
              'Unified view ensuring optimization for profit, not just clicks',
            ]}
            delay={0}
          />
          <CaseStudyCard
            title="Conversational AI Implementation for Enterprise Team"
            challenge="Team spent hours pulling reports and couldn't answer leadership questions quickly. BI tool adoption was low due to complexity."
            solution="Deployed a secure conversational AI interface connected to the data warehouse. Stakeholders ask questions in natural language and receive instant, accurate answers."
            results={[
              '80% reduction in time spent pulling reports',
              'High adoption across non-technical teams',
              'Anomaly alerts caught issues 3x faster',
              'Leadership gets instant answers without waiting for analysts',
            ]}
            delay={0.1}
          />
          <CaseStudyCard
            title="Subscription Forecasting for Supply Chain Optimization"
            challenge="DTC subscription brand struggled with inventory forecasting. Manual Excel models were inaccurate, leading to stockouts during peak seasons and overstock during slow periods."
            solution="Built automated forecasting model using historical cohorts, seasonality, and churn patterns. Integrated with 3PL systems for automated reorder recommendations."
            results={[
              '2900% improvement in data freshness (daily vs. monthly)',
              '20+ hours saved per month on manual forecasting',
              'Reduced stockouts by 40% during BFCM',
              'Improved cash flow through better inventory planning',
            ]}
            delay={0.2}
          />
          <CaseStudyCard
            title="End-to-End Data Infrastructure & AI Layer"
            challenge="High-growth organization struggled with fragmented data ingestion and stale reporting. Manual excel flows prevented timely decision making and AI adoption."
            solution="Architected full modern data stack: automated ingestion (ELT), robust transformation layer (dbt), cloud warehousing, and a conversational AI interface for end-users."
            results={[
              'Fully automated pipeline from source to insight',
              'Reduced reporting latency from days to minutes',
              'Enabled self-serve analytics for 50+ users',
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
              I'm a data engineer and analytics consultant with 10+ years building data infrastructure for high-growth organizations. During that time, I led analytics through massive scaling phases, managed complex optimization projects, and built the pipelines that powered critical business decisions.
            </p>
            <p className="text-midnight/80 mb-4 text-lg">
              I started MTS Analytics because I saw too many organizations struggling with the same problems: fragmented data sources, conflicting metrics between departments, and infrastructure costs that outpace value. Generic dashboards often fail to answer specific business questions.
            </p>
            <p className="text-midnight/80 text-lg">
              That's why I focus on delivering tailored data solutions. Whether you're a scaling brand or an established enterprise, I build systems that provide a single source of truth and clarity—so you can make confident decisions based on real data.
            </p>
          </div>
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
          Frequently Asked Questions
        </motion.h2>
        <FAQ
          items={[
            {
              question: 'Do I need a data team to work with you?',
              answer: 'No. We act as your fractional data team—perfect for businesses that don\'t have in-house analytics expertise. You get enterprise-level data infrastructure without hiring a full team.',
            },
            {
              question: 'How fast can you deliver results?',
              answer: 'We move fast because we utilize proven patterns and modern tools. We focus on delivering immediate value through iterative improvements rather than long, drawn-out waterfall projects.',
            },
            {
              question: 'What if my data is a mess?',
              answer: 'That\'s exactly what we fix. We start with a free 60-minute audit where we review your stack, identify gaps, and share a prioritized roadmap. Most clients come to us because their data is scattered—we specialize in cleaning it up.',
            },
            {
              question: 'How do you handle data security?',
              answer: 'We follow industry best practices: encrypted connections, secure cloud infrastructure (BigQuery, Snowflake), and GDPR/CCPA compliance. Your data stays in your warehouse—we never store it ourselves. We can sign NDAs and security agreements as needed.',
            },
            {
              question: 'Can you work with our existing tools?',
              answer: 'Yes. We integrate with your existing stack: Shopify, Klaviyo, Meta, Google Ads, GA4, and more. We\'ll connect everything to a modern warehouse (BigQuery or Snowflake) and build dashboards that work with what you already have.',
            },
            {
              question: 'What\'s the difference between a one-time project and a retainer?',
              answer: 'One-time projects are for specific builds (like a new dashboard or pipeline migration). Retainers are for ongoing support: maintenance, enhancements, new dashboards, and ad-hoc analysis. You can pause or adjust retainers anytime—no long-term commitments.',
            },
            {
              question: 'Who do you work with?',
              answer: 'We work with high-growth brands, agencies, and organizations facing data complexity. Our expertise applies to anyone who needs to unify scattered data sources and drive decisions with accurate analytics.',
            },
            {
              question: 'What if I need help after the project is done?',
              answer: 'That\'s what our fractional retainer is for. Most clients start with a one-time project, then move to a monthly retainer for ongoing support. You can also book ad-hoc hours as needed. We\'re flexible—no rigid contracts.',
            },
          ]}
        />
      </section>

      {/* Final CTA Section */}
      <CTASection
        title="Ready to Fix Your Data Stack?"
        description="Book a free 60-minute audit. We'll review your current setup, identify gaps, and share a prioritized roadmap—no sales pitch, just actionable insights."
        buttonText="Book a Free Consultation"
        buttonHref="#contact"
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
            Let's Talk
          </h2>
          <p className="text-lg text-midnight/70 mb-8">
            If you're spending too much time pulling reports or can't answer basic questions about performance, let's talk.
          </p>
          <a
            href="mailto:hello@mtsanalytics.com"
            className="inline-block bg-slate-blue text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            hello@mtsanalytics.com
          </a>
        </motion.div>
      </section>
    </div>
  )
}

