/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#09090B',
        card: '#FFFFFF',
        'card-foreground': '#09090B',
        popover: '#FFFFFF',
        'popover-foreground': '#09090B',
        primary: '#18181B',
        'primary-foreground': '#FAFAFA',
        secondary: '#F4F4F5',
        'secondary-foreground': '#18181B',
        muted: '#F4F4F5',
        'muted-foreground': '#71717A',
        accent: '#F4F4F5',
        'accent-foreground': '#18181B',
        destructive: '#EF4444',
        'destructive-foreground': '#FAFAFA',
        border: '#E4E4E7',
        input: '#E4E4E7',
        ring: '#18181B',
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
  plugins: []
}
