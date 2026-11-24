'use client';

import { useEffect, useState, useRef } from 'react';
import { CI_STATS } from '@/lib/creative-intelligence-config';

const TOTAL_ADS = 1392;
const WINNING_ADS = 19;

const winningIndices = new Set([
  23, 67, 142, 198, 276, 334, 412, 489, 567, 645, 
  723, 801, 879, 957, 1034, 1112, 1190, 1268, 1346
]);

interface HeroAdStripProps {
  className?: string;
  showCaption?: boolean;
}

export default function HeroAdStrip({ className = '', showCaption = true }: HeroAdStripProps) {
  const [revealed, setRevealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), 300);
        }
      },
      { threshold: 0.5 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div className={className}>
      {/* Figure label */}
      {showCaption && (
        <div className="flex items-baseline justify-between mb-3 font-mono text-mono-sm text-swiss-ink-subtle">
          <span>
            FIG. 1 — {TOTAL_ADS.toLocaleString()} ADS WITH SPEND, 90 DAYS (MEDIAN DTC BRAND). 
            <span className="text-swiss-orange ml-1">{WINNING_ADS} TOOK ≥1% OF SPEND.</span>
          </span>
          <span className="hidden sm:inline">
            SOURCE: <a 
              href={CI_STATS.mhi.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-swiss-ink transition-colors"
            >
              MHI META BENCHMARKS, {CI_STATS.mhi.date.toUpperCase()}
            </a>
          </span>
        </div>
      )}

      {/* Ad strip visualization */}
      <div 
        ref={stripRef}
        className="relative w-full h-16 md:h-20 overflow-hidden"
        role="img"
        aria-label={`Visualization: Of ${TOTAL_ADS.toLocaleString()} ads the median DTC brand ran in 90 days, only ${WINNING_ADS} took at least 1% of spend.`}
      >
        {/* Container for marks */}
        <div 
          className="absolute inset-0 flex items-end"
          aria-hidden="true"
        >
          {Array.from({ length: TOTAL_ADS }).map((_, i) => {
            const isWinning = winningIndices.has(i);
            const height = isWinning ? '100%' : `${20 + Math.random() * 30}%`;
            
            return (
              <div
                key={i}
                className={`
                  flex-shrink-0 transition-all
                  ${isWinning ? 'bg-swiss-orange' : 'bg-swiss-rule-dark'}
                  ${revealed || prefersReducedMotion ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  width: '1px',
                  height: isWinning ? '100%' : height,
                  marginRight: '0.5px',
                  transitionDuration: prefersReducedMotion ? '0ms' : '400ms',
                  transitionDelay: prefersReducedMotion ? '0ms' : `${Math.floor(i / 50) * 20}ms`,
                }}
              />
            );
          })}
        </div>

        {/* Gradient fade on edges */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-swiss-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-swiss-white to-transparent pointer-events-none" />
      </div>

      {/* Mobile source citation */}
      {showCaption && (
        <div className="sm:hidden mt-2 font-mono text-mono-sm text-swiss-ink-subtle">
          SOURCE: <a 
            href={CI_STATS.mhi.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-swiss-ink transition-colors"
          >
            MHI, {CI_STATS.mhi.date.toUpperCase()}
          </a>
        </div>
      )}
    </div>
  );
}
