/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Swiss Instrument design system
        swiss: {
          white: '#FFFFFF',
          paper: '#FAFAFA',
          warm: '#F5F0E8',       // Warm off-white for About section
          ink: '#0A0A0A',        // Near-black for text
          'ink-muted': '#525252', // Muted text
          'ink-subtle': '#8A8A8A', // Subtle text / captions
          rule: '#E5E5E5',       // Hairline rules
          'rule-dark': '#D4D4D4', // Darker rules
          orange: '#E85A1C',     // Data marks, key data, primary CTA
          'orange-hover': '#D14D12',
          win: '#16A34A',        // Green for positive
          warn: '#DC2626',       // Red for negative/fatiguing
        },
      },
      fontFamily: {
        sans: ['var(--font-schibsted)', 'Schibsted Grotesk', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Swiss type scale
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
        'mono-sm': ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
      },
      spacing: {
        'grid': '1.5rem', // 24px grid unit
      },
      borderWidth: {
        'hairline': '1px',
      },
    },
  },
  plugins: [],
}

