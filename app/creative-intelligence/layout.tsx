import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | MTS Analytics',
    default: 'Creative Intelligence Agent | MTS Analytics',
  },
};

export default function CreativeIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
