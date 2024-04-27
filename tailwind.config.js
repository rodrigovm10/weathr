/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffdf88',
          300: '#ffc84a',
          400: '#ffb62e',
          500: '#f98e07',
          600: '#dd6802',
          700: '#b74706',
          800: '#94350c',
          900: '#7a2c0d',
          950: '#461502'
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem'
        }
      }
    }
  },
  plugins: []
}
