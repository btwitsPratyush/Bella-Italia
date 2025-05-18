/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'amber': {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        'red': {
          600: '#DC2626',
          700: '#B91C1C',
        },
        'green': {
          500: '#10B981',
          600: '#059669',
        },
        'stone': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};