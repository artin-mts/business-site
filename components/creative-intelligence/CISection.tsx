'use client';

import { ReactNode } from 'react';

interface CISectionProps {
  id?: string;
  figLabel?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function CISection({ 
  id, 
  figLabel, 
  children, 
  className = '',
  noPadding = false 
}: CISectionProps) {
  return (
    <section 
      id={id} 
      className={`
        relative
        ${noPadding ? '' : 'py-20 md:py-32'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {figLabel && (
          <div className="mb-8">
            <span className="ci-mono-label text-ci-subtle text-[10px]">{figLabel}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
