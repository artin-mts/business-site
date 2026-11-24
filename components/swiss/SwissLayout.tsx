import SwissHeader from './SwissHeader';
import SwissFooter from './SwissFooter';

interface SwissLayoutProps {
  children: React.ReactNode;
}

export default function SwissLayout({ children }: SwissLayoutProps) {
  return (
    <div className="swiss-page min-h-screen bg-swiss-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SwissHeader />
      <main id="main-content" className="pt-14 md:pt-16">
        {children}
      </main>
      <SwissFooter />
    </div>
  );
}
