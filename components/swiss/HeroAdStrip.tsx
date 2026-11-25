'use client';

import { useEffect, useState, useRef } from 'react';
import { CI_STATS } from '@/lib/creative-intelligence-config';

const TOTAL_ADS = 1392;
const WINNING_ADS = 19;

// Spread across the strip, kept away from the edges so none sit on the frame.
const winningIndices = new Set([
  43, 110, 196, 252, 337, 404, 468, 552, 611, 694,
  756, 829, 910, 993, 1045, 1120, 1204, 1285, 1346,
]);

// Deterministic pseudo-random heights (mulberry32) so the server render and
// the client hydrate to the same marks — Math.random() in render did not.
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = seeded(1392);
const MARKS = Array.from({ length: TOTAL_ADS }, (_, i) => ({
  i,
  x: i + 0.5,
  win: winningIndices.has(i),
  h: 20 + rand() * 30,
}));

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

  const visible = revealed || prefersReducedMotion;

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

      {/* Ad strip visualization.
          SVG scaled to the container width so all 1,392 marks always fit
          (the old 1.5px-per-mark flex row was ~2,088px wide and got clipped).
          non-scaling-stroke keeps every mark a crisp 1px (2px for winners)
          on screen at any width; winners are drawn last so they sit on top. */}
      <div
        ref={stripRef}
        className="relative w-full h-16 md:h-20"
        role="img"
        aria-label={`Visualization: Of ${TOTAL_ADS.toLocaleString()} ads the median DTC brand ran in 90 days, only ${WINNING_ADS} took at least 1% of spend.`}
      >
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox={`0 0 ${TOTAL_ADS} 100`}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <g
            stroke="var(--swiss-rule-dark)"
            strokeWidth={1}
            style={{
              opacity: visible ? 1 : 0,
              transition: prefersReducedMotion ? 'none' : 'opacity 600ms ease-out',
            }}
          >
            {MARKS.filter((m) => !m.win).map((m) => (
              <line
                key={m.i}
                x1={m.x}
                x2={m.x}
                y1={100}
                y2={100 - m.h}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
          <g
            stroke="var(--swiss-orange)"
            strokeWidth={2}
            data-mark="winning"
            style={{
              opacity: visible ? 1 : 0,
              transition: prefersReducedMotion ? 'none' : 'opacity 400ms ease-out 500ms',
            }}
          >
            {MARKS.filter((m) => m.win).map((m) => (
              <line
                key={m.i}
                x1={m.x}
                x2={m.x}
                y1={100}
                y2={0}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
        </svg>
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
