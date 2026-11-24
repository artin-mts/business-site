'use client';

interface ComparisonRow {
  feature: string;
  saas: string;
  agency: string;
  mts: string;
  highlight?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Grades ads on',
    saas: 'Platform-reported metrics',
    agency: 'Gut + platform metrics',
    mts: 'Your Shopify orders, new-customer revenue, margin',
    highlight: true,
  },
  {
    feature: 'Where data lives',
    saas: "Vendor's cloud",
    agency: 'Agency decks',
    mts: 'Your warehouse. You own it',
    highlight: true,
  },
  {
    feature: 'Concept taxonomy',
    saas: "Vendor's generic tags",
    agency: 'Varies by strategist',
    mts: 'Built for your brand, versioned',
  },
  {
    feature: 'Competitor intel',
    saas: 'Library browsing / AI summaries',
    agency: 'Manual swipe files',
    mts: 'Scored signals: longevity, variant bursts, cross-brand spread',
  },
  {
    feature: 'Cost model',
    saas: 'Per-seat / per-spend SaaS',
    agency: '10-15%+ of spend or big retainers',
    mts: 'Fixed build + flat monthly',
  },
  {
    feature: 'Works with your tools',
    saas: 'n/a',
    agency: 'n/a',
    mts: 'Yes: complements Motion/Foreplay',
  },
];

interface ComparisonTableProps {
  className?: string;
}

export default function ComparisonTable({ className = '' }: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      {/* Desktop table */}
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-4 text-ci-subtle ci-mono-label text-[10px] border-b border-ci-border w-1/4">
              Feature
            </th>
            <th className="text-left py-4 px-4 text-ci-subtle ci-mono-label text-[10px] border-b border-ci-border w-1/4">
              Creative SaaS
            </th>
            <th className="text-left py-4 px-4 text-ci-subtle ci-mono-label text-[10px] border-b border-ci-border w-1/4">
              Agency
            </th>
            <th className="text-left py-4 px-4 text-ci-signal ci-mono-label text-[10px] border-b border-ci-border border-l border-ci-signal/30 w-1/4 bg-ci-signal/5">
              MTS Creative Intelligence
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, i) => (
            <tr key={i} className="hover:bg-ci-surface-2/30 transition-colors">
              <td className="py-4 px-4 text-ci-muted text-sm border-b border-ci-border font-medium">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-ci-muted/70 text-sm border-b border-ci-border">
                {row.saas}
              </td>
              <td className="py-4 px-4 text-ci-muted/70 text-sm border-b border-ci-border">
                {row.agency}
              </td>
              <td className={`py-4 px-4 text-sm border-b border-ci-border border-l border-ci-signal/30 bg-ci-signal/5 ${row.highlight ? 'text-ci-signal font-medium' : 'text-ci-text'}`}>
                {row.mts}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((row, i) => (
          <div key={i} className="bg-ci-surface border border-ci-border rounded-xl p-4">
            <div className="text-ci-muted ci-mono-label text-[10px] mb-3">{row.feature}</div>
            <div className="space-y-3">
              <div>
                <div className="text-ci-subtle text-[10px] mb-1">Creative SaaS</div>
                <div className="text-ci-muted/70 text-sm">{row.saas}</div>
              </div>
              <div>
                <div className="text-ci-subtle text-[10px] mb-1">Agency</div>
                <div className="text-ci-muted/70 text-sm">{row.agency}</div>
              </div>
              <div className="bg-ci-signal/5 -mx-4 -mb-4 mt-3 p-4 rounded-b-xl border-t border-ci-signal/20">
                <div className="text-ci-signal text-[10px] ci-mono-label mb-1">MTS Creative Intelligence</div>
                <div className={`text-sm ${row.highlight ? 'text-ci-signal font-medium' : 'text-ci-text'}`}>
                  {row.mts}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
