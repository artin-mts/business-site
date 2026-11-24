'use client';

import { ciFaqItems } from '@/lib/creative-intelligence-faq';

interface CIFAQProps {
  className?: string;
}

export default function CIFAQ({ className = '' }: CIFAQProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {ciFaqItems.map((item, i) => (
        <details 
          key={i} 
          className="group bg-ci-surface border border-ci-border rounded-xl overflow-hidden"
        >
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-ci-text font-medium hover:bg-ci-surface-2/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span className="pr-4">{item.question}</span>
            <span className="text-ci-muted group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-4 text-ci-muted text-sm leading-relaxed border-t border-ci-border pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
