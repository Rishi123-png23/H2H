/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8B1538',
          secondary: '#F7E7EB',
          accent: '#A0153E',
          gold: '#D4AF37',
          cream: '#F4E4C1',
          dark: '#1F1F1F',
          light: '#FAFAFA',
        },
      },
      gradientColorStops: {
        brand: {
          fromSoft: '#FBE9EF',
          toSoft: '#F3CCD6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 8px 24px rgba(160, 21, 62, 0.25)',
      },
      borderRadius: {
        xl: '0.85rem',
        '2xl': '1.25rem',
        pill: '9999px',
      },
      letterSpacing: {
        wide: '0.02em',
        wider: '0.04em',
      },
    },
  },
  plugins: [],
};
