export default function Footer() {
  return (
    <footer className="border-t border-cool-gray bg-soft-white mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-midnight mb-3">MTS Analytics</h3>
            <p className="text-sm text-midnight/70">
              Modern data pipelines & AI-powered analytics for DTC brands.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-midnight mb-3">Contact</h3>
            <p className="text-sm text-midnight/70">
              <a href="#contact" className="hover:text-slate-blue transition-colors">
                Get in touch
              </a>
            </p>
            <p className="text-sm text-midnight/70 mt-1">
              Based in Los Angeles
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-midnight mb-3">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="/guide" className="text-sm text-midnight/70 hover:text-slate-blue transition-colors">
                  Data Stack Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cool-gray">
          <p className="text-xs text-midnight/50 text-center">
            © {new Date().getFullYear()} MTS Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

