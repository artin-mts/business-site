'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

const navItems = [
  { number: '01', label: 'Offers', href: '/#offers' },
  { number: '02', label: 'Creative Intelligence', href: '/creative-intelligence/' },
  { number: '03', label: 'Data Foundation', href: '/revenue-intelligence/' },
  { number: '04', label: 'About', href: '/#about' },
];

export default function SwissHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-swiss-white border-b border-swiss-rule' : 'bg-swiss-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-swiss-ink text-lg tracking-tight">
            MTS Analytics
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-swiss-ink-muted hover:text-swiss-ink transition-colors"
              >
                <span className="font-mono text-mono-sm text-swiss-ink-subtle group-hover:text-swiss-accent transition-colors">
                  {item.number}
                </span>
                <span className="text-body-sm">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href={CI_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap text-swiss-ink font-medium text-body-sm border-b border-swiss-ink hover:border-swiss-accent hover:text-swiss-accent transition-colors"
            >
              Book a call
              <span aria-hidden="true">↗</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-swiss-ink"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {isOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-swiss-white z-40 border-t border-swiss-rule">
          <nav className="px-5 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline gap-3 py-3 border-b border-swiss-rule text-swiss-ink"
              >
                <span className="font-mono text-mono-sm text-swiss-ink-subtle">{item.number}</span>
                <span className="text-lg">{item.label}</span>
              </Link>
            ))}
            <div className="pt-6">
              <a
                href={CI_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full gap-2 bg-swiss-accent text-swiss-white font-semibold py-3 px-6 hover:bg-swiss-accent-hover transition-colors"
              >
                Book a 30-minute call
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
