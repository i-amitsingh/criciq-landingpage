import { HERO } from '../constants/content'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 pt-20 dark:bg-neutral-950">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary-100 opacity-60 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-400/20 opacity-50 blur-3xl dark:bg-accent-600/20" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-100/80 opacity-40 blur-3xl dark:bg-primary-900/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
          {HERO.badge}
        </div>

        {/* Headline */}
        <h1 className="mb-6 whitespace-pre-line text-5xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
          {HERO.headline}
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-primary-500/40 hover:-translate-y-0.5 dark:shadow-primary-900/40"
          >
            {HERO.ctaPrimary}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-7 py-3.5 text-base font-semibold text-neutral-700 transition-all hover:border-primary-300 hover:bg-neutral-50 hover:-translate-y-0.5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-primary-700 dark:hover:bg-neutral-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {HERO.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-neutral-200 rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/60">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-6 px-4">
              <span className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
