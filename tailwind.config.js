/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#e6f6fd',
          100: '#c1e8f9',
          200: '#96d8f5',
          300: '#60c7f0',
          400: '#3bbbec',
          500: '#29ABE2',  // CricIQ blue
          600: '#1a8fca',
          700: '#1271a8',
          800: '#0c5585',
          900: '#073b63',
        },
        ball: {
          400: '#ef4444',
          500: '#E62229',  // cricket ball red
          600: '#c41d23',
        },
        neutral: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a1628',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}

