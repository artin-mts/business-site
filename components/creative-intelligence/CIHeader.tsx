'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

export default function CIHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ci-bg/95 backdrop-blur-lg border-b border-ci-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo / Home link */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-ci-text hover:text-ci-signal transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-ci-signal">
              <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1"/>
              <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="currentColor"/>
              <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="currentColor" fillOpacity="0.5"/>
            </svg>
            <span className="font-semibold">MTS Analytics</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-ci-muted hover:text-ci-text transition-colors"
            >
              Home
            </Link>
            <Link
              href="/revenue-intelligence"
              className="text-sm text-ci-muted hover:text-ci-text transition-colors"
            >
              Data Foundation
            </Link>
            <a
              href="#offer"
              className="text-sm text-ci-muted hover:text-ci-text transition-colors"
            >
              Pricing
            </a>
            <a
              href="#breakdown"
              className="bg-ci-signal text-ci-bg px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-ci-signal/25 transition-all"
            >
              Free breakdown
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#breakdown"
              className="bg-ci-signal text-ci-bg px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              Free breakdown
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ci-text"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[64px] bg-ci-bg/98 backdrop-blur-lg z-40"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-5 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-ci-text hover:text-ci-signal transition-colors text-lg font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/revenue-intelligence"
              onClick={() => setIsOpen(false)}
              className="text-ci-text hover:text-ci-signal transition-colors text-lg font-medium py-2"
            >
              Data Foundation
            </Link>
            <a
              href="#offer"
              onClick={() => setIsOpen(false)}
              className="text-ci-text hover:text-ci-signal transition-colors text-lg font-medium py-2"
            >
              Pricing
            </a>
            <a
              href={CI_CONFIG.calendlyUrl}
              onClick={() => setIsOpen(false)}
              className="text-ci-muted hover:text-ci-text transition-colors text-lg font-medium py-2"
            >
              Book a call
            </a>
            <div className="pt-4 border-t border-ci-border">
              <a
                href="#breakdown"
                onClick={() => setIsOpen(false)}
                className="block bg-ci-signal text-ci-bg py-3 px-4 rounded-lg font-semibold text-center"
              >
                Get a free breakdown
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
