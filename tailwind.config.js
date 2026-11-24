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
        // Existing site colors
        midnight: '#1C1C1E',
        'soft-white': '#F5F5F7',
        'slate-blue': '#526CFF',
        'cool-gray': '#D5D7DC',
        
        // Creative Intelligence page - dark editorial design system
        ci: {
          bg: '#0A0B0F',
          surface: '#12141B',
          'surface-2': '#1A1D26',
          border: '#262A36',
          text: '#EDEEF2',
          muted: '#9BA3B4',
          subtle: '#7A8296',
          signal: '#D4FF3A', // lime accent
          'brand-soft': '#7C8CFF',
          win: '#3DDC97',
          warn: '#FFB547',
          loss: '#FF6B6B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

