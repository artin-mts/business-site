'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cool-gray/50 bg-soft-white/80 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-mts-analytics.svg"
              alt="MTS Analytics"
              width={200}
              height={32}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/revenue-intelligence"
              className="text-midnight hover:text-slate-blue transition-colors text-sm"
            >
              Revenue Intelligence Stack
            </Link>
            <a
              href="mailto:artin@mts-analytics.com"
              className="bg-slate-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-slate-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Talk to MTS Analytics
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-midnight cursor-pointer"
            aria-label="Toggle navigation menu"
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
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-cool-gray/50"
          >
            <div className="px-6 py-4 flex flex-col gap-4 bg-soft-white/95 backdrop-blur-lg">
              <Link
                href="/revenue-intelligence"
                onClick={() => setIsOpen(false)}
                className="text-midnight hover:text-slate-blue transition-colors text-sm font-medium"
              >
                Revenue Intelligence Stack
              </Link>
              <a
                href="mailto:artin@mts-analytics.com"
                className="bg-slate-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:brightness-110 transition-all duration-200 text-center cursor-pointer"
              >
                Talk to MTS Analytics
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
