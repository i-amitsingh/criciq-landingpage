import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from '../constants/content'
import type { Theme } from '../utils/types'
import logoLight from '../assets/CriciqLogo.png'
import logoDark from '../assets/CriciqLogoDark.png'

interface Props {
  theme: Theme
  onToggle: () => void
}

export default function Navbar({ theme, onToggle }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="CricIQ"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-500 dark:text-neutral-400 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a
            href="#"
            className="hidden rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
          >
            Download Beta
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 pb-4 dark:border-white/10 dark:bg-neutral-950 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-600"
            >
              Download Beta
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
