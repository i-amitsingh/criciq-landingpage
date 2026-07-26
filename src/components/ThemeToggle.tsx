import type { Theme } from '../utils/types'

interface Props {
  theme: Theme
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-neutral-200 bg-neutral-100 transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <span
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-neutral-900 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-brand-400">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-amber-500">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
              const rad = (deg * Math.PI) / 180
              const x1 = 12 + 8 * Math.cos(rad)
              const y1 = 12 + 8 * Math.sin(rad)
              const x2 = 12 + 10 * Math.cos(rad)
              const y2 = 12 + 10 * Math.sin(rad)
              return (
                <line
                  key={deg}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                />
              )
            })}
          </svg>
        )}
      </span>
    </button>
  )
}
