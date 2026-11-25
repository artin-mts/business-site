'use client';

import { useEffect, useState, useRef } from 'react';
import { CI_STATS } from '@/lib/creative-intelligence-config';

const TOTAL_TILES = 1392;
const WINNING_TILES = 19;
const GRID_COLS = 48;

const winningIndices = new Set([
  45, 89, 134, 201, 267, 312, 389, 423, 501, 567, 
  634, 712, 789, 856, 923, 1001, 1089, 1167, 1245
]);

interface HeroAdGridProps {
  className?: string;
}

export default function HeroAdGrid({ className = '' }: HeroAdGridProps) {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'dimmed' | 'highlighted' | 'brief'>('initial');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (hasAnimated.current || prefersReducedMotion) {
      setAnimationPhase('brief');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          runAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const runAnimation = () => {
    setAnimationPhase('initial');
    
    setTimeout(() => setAnimationPhase('dimmed'), 800);
    setTimeout(() => setAnimationPhase('highlighted'), 1600);
    setTimeout(() => setAnimationPhase('brief'), 3200);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div 
        className="relative aspect-[4/3] max-w-[500px] mx-auto"
        role="img"
        aria-label={`Of ${CI_STATS.mhi.stat} ads the median DTC brand ran in 90 days, only ${WINNING_TILES} took at least 1% of spend.`}
      >
        {/* Grid of tiles */}
        <div 
          className="absolute inset-0 grid gap-[1px] p-4"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          }}
          aria-hidden="true"
        >
          {Array.from({ length: TOTAL_TILES }).map((_, i) => {
            const isWinning = winningIndices.has(i);
            return (
              <div
                key={i}
                className={`
                  aspect-square rounded-[1px] transition-all
                  ${animationPhase === 'initial' 
                    ? 'bg-ci-muted/30' 
                    : animationPhase === 'dimmed' || animationPhase === 'highlighted' || animationPhase === 'brief'
                      ? isWinning 
                        ? 'bg-ci-signal scale-110' 
                        : 'bg-ci-muted/10'
                      : 'bg-ci-muted/30'
                  }
                `}
                style={{
                  transitionDuration: prefersReducedMotion ? '0ms' : isWinning ? '400ms' : '300ms',
                  transitionDelay: prefersReducedMotion ? '0ms' : isWinning ? `${(i % 19) * 50}ms` : '0ms',
                }}
              />
            );
          })}
        </div>

        {/* Labels overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-ci-bg/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-ci-border">
            <div className="ci-mono-label text-ci-muted mb-1">
              {animationPhase === 'initial' ? 'Analyzing...' : animationPhase === 'dimmed' ? 'Finding winners...' : 'Result'}
            </div>
            <div className="text-ci-text font-semibold text-sm">
              {animationPhase === 'brief' ? (
                <span>
                  <span className="text-ci-signal">{WINNING_TILES}</span> took ≥1% of spend
                </span>
              ) : (
                <span>{TOTAL_TILES.toLocaleString()} ads with spend · 90 days</span>
              )}
            </div>
          </div>
        </div>

        {/* Brief card - slides in at the end */}
        {animationPhase === 'brief' && (
          <div 
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-ci-surface border border-ci-border rounded-xl p-4 w-[280px]
              shadow-2xl shadow-ci-signal/10
              ${prefersReducedMotion ? '' : 'animate-fade-in'}
            `}
          >
            <div className="ci-mono-label text-ci-muted mb-3">Weekly Brief</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs">
                <span className="text-ci-win font-bold">▲</span>
                <div>
                  <span className="text-ci-text font-medium">WINNING</span>
                  <span className="text-ci-muted ml-2">"Founder-story, kitchen POV"</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <span className="text-ci-warn font-bold">▼</span>
                <div>
                  <span className="text-ci-text font-medium">FATIGUING</span>
                  <span className="text-ci-muted ml-2">"Before/after split"</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <span className="text-ci-brand-soft font-bold">◆</span>
                <div>
                  <span className="text-ci-text font-medium">MAKE NEXT</span>
                  <span className="text-ci-muted ml-2">"Ingredient close-up"</span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-ci-border">
              <span className="text-[10px] text-ci-subtle italic">Illustrative example</span>
            </div>
          </div>
        )}
      </div>

      {/* Citation */}
      <div className="mt-4 text-center">
        <p className="ci-mono-label text-[10px] text-ci-subtle">
          Median of 73 DTC brands, 90 days to Oct 28, 2026.{' '}
          <a 
            href={CI_STATS.mhi.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ci-muted transition-colors"
          >
            Source: {CI_STATS.mhi.source}
          </a>
        </p>
      </div>
    </div>
  );
}

export function HeroAdGridStatic() {
  return (
    <div className="relative aspect-[4/3] max-w-[500px] mx-auto">
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center bg-ci-surface rounded-xl border border-ci-border p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-ci-signal mb-2">19</div>
            <div className="text-ci-muted text-sm">of 1,392 ads took ≥1% of spend</div>
            <div className="text-ci-subtle text-xs mt-2">Median DTC brand, 90 days</div>
          </div>
        </div>
      </noscript>
    </div>
  );
}
