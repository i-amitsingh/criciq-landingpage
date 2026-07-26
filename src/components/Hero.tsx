import { HERO } from '../constants/content';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Stadium background — swap src with your own image */}
      <img
        src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/52 to-white/68 dark:from-neutral-950/55 dark:via-neutral-950/68 dark:to-neutral-950/82" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h1 className="mb-6 whitespace-pre-line text-5xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
          {HERO.headline}
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-brand-500/40"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {HERO.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
