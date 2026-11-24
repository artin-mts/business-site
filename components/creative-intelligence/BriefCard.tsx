'use client';

interface BriefItem {
  type: 'winning' | 'fatiguing' | 'make-next';
  concept: string;
  evidence: string;
  confidence?: 'high' | 'medium';
}

interface BriefCardProps {
  brandName: string;
  items: BriefItem[];
  isIllustrative?: boolean;
  className?: string;
}

export default function BriefCard({ 
  brandName, 
  items, 
  isIllustrative = true,
  className = '' 
}: BriefCardProps) {
  const getIcon = (type: BriefItem['type']) => {
    switch (type) {
      case 'winning':
        return { symbol: '▲', color: 'text-ci-win', bg: 'bg-ci-win/10', label: 'WINNING' };
      case 'fatiguing':
        return { symbol: '▼', color: 'text-ci-warn', bg: 'bg-ci-warn/10', label: 'FATIGUING' };
      case 'make-next':
        return { symbol: '◆', color: 'text-ci-brand-soft', bg: 'bg-ci-brand-soft/10', label: 'MAKE NEXT' };
    }
  };

  return (
    <div className={`bg-ci-surface border border-ci-border rounded-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-ci-border flex items-center justify-between">
        <div>
          <div className="ci-mono-label text-ci-subtle text-[10px] mb-1">Weekly Creative Brief</div>
          <div className="text-ci-text font-semibold">{brandName}</div>
        </div>
        <div className="ci-mono-label text-ci-subtle text-[10px]">Monday, 9:00 AM</div>
      </div>

      {/* Brief items */}
      <div className="divide-y divide-ci-border">
        {items.map((item, i) => {
          const icon = getIcon(item.type);
          return (
            <div key={i} className="px-5 py-4 hover:bg-ci-surface-2/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${icon.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`${icon.color} font-bold text-sm`}>{icon.symbol}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`ci-mono-label ${icon.color} text-[10px]`}>{icon.label}</span>
                    {item.confidence && (
                      <span className={`
                        text-[9px] px-1.5 py-0.5 rounded-full
                        ${item.confidence === 'high' ? 'bg-ci-win/20 text-ci-win' : 'bg-ci-muted/20 text-ci-muted'}
                      `}>
                        {item.confidence} confidence
                      </span>
                    )}
                  </div>
                  <div className="text-ci-text font-medium text-sm mb-1">"{item.concept}"</div>
                  <div className="text-ci-muted text-xs">{item.evidence}</div>
                </div>
                {/* Thumbnail placeholder */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ci-surface-2 to-ci-border flex-shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {isIllustrative && (
        <div className="px-5 py-3 bg-ci-surface-2/50 border-t border-ci-border">
          <span className="text-[10px] text-ci-subtle italic">
            Illustrative example: fictional brand and numbers
          </span>
        </div>
      )}
    </div>
  );
}
