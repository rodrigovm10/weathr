/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#0C0A09',
        card: '#FFFFFF',
        'card-foreground': '#0C0A09',
        popover: '#FFFFFF',
        'popover-foreground': '#0C0A09',
        primary: '#2563EB',
        'primary-foreground': '#FAFAF9',
        secondary: '#F5F5F4',
        'secondary-foreground': '#1C1917',
        muted: '#F5F5F4',
        'muted-foreground': '#78716C',
        accent: '#F5F5F4',
        'accent-foreground': '#1C1917',
        destructive: '#EF4444',
        'destructive-foreground': '#FAFAF9',
        border: '#E7E5E4',
        input: '#E7E5E4',
        ring: '#2563EB',
        radius: '0.5rem'
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
  },
  plugins: [animations]
}
