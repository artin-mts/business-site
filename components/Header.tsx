import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-cool-gray bg-soft-white">
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
          <div className="flex items-center gap-6">
            <Link
              href="/revenue-intelligence"
              className="text-midnight hover:text-slate-blue transition-colors text-sm"
            >
              Revenue Intelligence Stack
            </Link>
            <Link
              href="/guide"
              className="text-midnight hover:text-slate-blue transition-colors text-sm hidden sm:inline"
            >
              Data Stack Guide
            </Link>
            <a
              href="mailto:artin@mts-analytics.com"
              className="bg-slate-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Talk to MTS Analytics
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

