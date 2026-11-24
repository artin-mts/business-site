import Link from 'next/link';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

export default function SwissFooter() {
  return (
    <footer className="border-t border-swiss-rule bg-swiss-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-swiss-ink text-lg tracking-tight mb-3">
              MTS Analytics
            </div>
            <p className="text-body-sm text-swiss-ink-muted max-w-xs">
              Creative intelligence for DTC brands on Meta. Know which ads to make next.
            </p>
          </div>

          {/* Offers */}
          <div>
            <div className="mono-label mb-4">Offers</div>
            <ul className="space-y-2">
              <li>
                <a href="#breakdown" className="text-body-sm text-swiss-ink-muted hover:text-swiss-ink transition-colors">
                  Free Breakdown
                </a>
              </li>
              <li>
                <Link href="/creative-intelligence/#offer" className="text-body-sm text-swiss-ink-muted hover:text-swiss-ink transition-colors">
                  30-Day Pilot
                </Link>
              </li>
              <li>
                <Link href="/revenue-intelligence/" className="text-body-sm text-swiss-ink-muted hover:text-swiss-ink transition-colors">
                  Data Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mono-label mb-4">Contact</div>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`mailto:${CI_CONFIG.leadEmail}`}
                  className="text-body-sm text-swiss-ink-muted hover:text-swiss-ink transition-colors"
                >
                  {CI_CONFIG.leadEmail}
                </a>
              </li>
              <li>
                <a 
                  href={CI_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-swiss-ink-muted hover:text-swiss-ink transition-colors"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="mono-label mb-4">Info</div>
            <ul className="space-y-2 text-body-sm text-swiss-ink-subtle">
              <li>Los Angeles, CA</li>
              <li>Senior engineer, no handoffs</li>
              <li>Registered in SAM.gov</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-swiss-rule flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-swiss-ink-subtle">
            © {new Date().getFullYear()} MTS Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-caption text-swiss-ink-subtle hover:text-swiss-ink transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
