import Link from 'next/link';
import { CI_CONFIG } from '@/lib/creative-intelligence-config';

export default function CIFooter() {
  return (
    <footer className="border-t border-ci-border bg-ci-bg mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-ci-text mb-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-ci-signal">
                <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1"/>
                <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="currentColor"/>
                <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="currentColor" fillOpacity="0.5"/>
              </svg>
              <span className="font-semibold">MTS Analytics</span>
            </div>
            <p className="text-ci-muted text-sm max-w-sm">
              Creative Intelligence for DTC brands on Meta. Know which ads to make next.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-ci-text font-medium mb-3 text-sm">Offers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#breakdown" className="text-ci-muted text-sm hover:text-ci-text transition-colors">
                  Free Breakdown
                </a>
              </li>
              <li>
                <a href="#offer" className="text-ci-muted text-sm hover:text-ci-text transition-colors">
                  30-Day Pilot
                </a>
              </li>
              <li>
                <Link href="/revenue-intelligence" className="text-ci-muted text-sm hover:text-ci-text transition-colors">
                  Data Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ci-text font-medium mb-3 text-sm">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`mailto:${CI_CONFIG.leadEmail}`} 
                  className="text-ci-muted text-sm hover:text-ci-text transition-colors"
                >
                  {CI_CONFIG.leadEmail}
                </a>
              </li>
              <li>
                <a 
                  href={CI_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ci-muted text-sm hover:text-ci-text transition-colors"
                >
                  Book a call
                </a>
              </li>
              <li>
                <span className="text-ci-subtle text-sm">Based in Los Angeles</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-ci-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ci-subtle text-xs">
            © {new Date().getFullYear()} MTS Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="text-ci-muted hover:text-ci-text transition-colors">
              Home
            </Link>
            <span className="text-ci-subtle">Registered in SAM.gov</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
