import { AUDIENCE } from '../constants/content'

export default function ForWhom() {
  return (
    <section id="for-whom" className="bg-white px-4 py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent-500/10 px-4 py-1 text-sm font-semibold text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
            For Whom
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Built for every level of cricket
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Whether you coach a village side or run analytics for a national board, CricIQ scales to fit your needs and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {AUDIENCE.map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Decorative number */}
              <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-extrabold text-neutral-100 dark:text-neutral-800">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <div className="mb-4 text-4xl">{item.emoji}</div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
