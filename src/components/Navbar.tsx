import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '../utils/types';
import { NAV_ITEMS, HERO } from '../constants/content';
import logoLight from '../assets/CriciqLogo.png';
import logoDark from '../assets/CriciqLogoDark.png';

interface Props {
  theme: Theme;
  onToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ theme, onToggle, currentPage, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (item: (typeof NAV_ITEMS)[number]) => {
    setMenuOpen(false);
    if (item.page) {
      onNavigate(item.page);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate('home')} className="flex items-center">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="CricIQ"
            className={`h-9 w-auto object-contain ${theme === 'light' ? 'mix-blend-multiply' : ''}`}
          />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
            item.page ? (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className={`text-sm font-medium transition-colors hover:text-brand-500 dark:hover:text-brand-400 ${
                  currentPage === item.page
                    ? 'text-brand-500 dark:text-brand-400'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href!}
                onClick={() => currentPage !== 'home' && onNavigate('home')}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-500 dark:text-neutral-400 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a
            href="#"
            className="hidden rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
          >
            {HERO.ctaPrimary}
          </a>
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

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 pb-4 dark:border-white/10 dark:bg-neutral-950 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map((item) =>
              item.page ? (
                <button
                  key={item.label}
                  onClick={() => handleNav(item)}
                  className="rounded-md px-3 py-2 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href="#"
              className="mt-2 rounded-md bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-600"
            >
              {HERO.ctaPrimary}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
