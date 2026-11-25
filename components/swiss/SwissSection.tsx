import { ReactNode } from 'react';

interface SwissSectionProps {
  id?: string;
  figNumber?: string;
  figTitle?: string;
  children: ReactNode;
  className?: string;
  warm?: boolean;
  noPadding?: boolean;
}

export default function SwissSection({ 
  id, 
  figNumber,
  figTitle,
  children, 
  className = '',
  warm = false,
  noPadding = false,
}: SwissSectionProps) {
  return (
    <section 
      id={id} 
      className={`
        ${warm ? 'bg-swiss-warm' : 'bg-swiss-white'}
        ${noPadding ? '' : 'py-16 md:py-24'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {(figNumber || figTitle) && (
          <div className="fig-label mb-6 md:mb-8">
            {figNumber && <span>{figNumber}</span>}
            {figNumber && figTitle && <span> — </span>}
            {figTitle && <span>{figTitle}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
