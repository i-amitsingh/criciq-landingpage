export const COLORS = {
  brand: {
    50:  '#e6f6fd',
    100: '#c1e8f9',
    200: '#96d8f5',
    400: '#3bbbec',
    500: '#29ABE2',  // CricIQ sky blue
    600: '#1a8fca',
    700: '#1271a8',
  },
  ball: {
    500: '#E62229',  // cricket ball red
    600: '#c41d23',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#0a0f1a',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
} as const

export const BORDER_RADIUS = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
} as const

export const BORDER = {
  width: {
    thin: '1px',
    base: '1.5px',
    thick: '2px',
  },
  colorLight: '#e5e7eb',
  colorDark: '#1f2937',
} as const

export const FONT = {
  family: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    heading: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    tight: '1.2',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
  },
} as const

export const SHADOW = {
  sm: '0 1px 3px rgba(0,0,0,0.08)',
  md: '0 4px 16px rgba(0,0,0,0.10)',
  lg: '0 8px 32px rgba(0,0,0,0.12)',
  glow: '0 0 40px rgba(99,102,241,0.25)',
} as const

export const TRANSITION = {
  fast: '150ms ease',
  base: '250ms ease',
  slow: '400ms ease',
} as const
