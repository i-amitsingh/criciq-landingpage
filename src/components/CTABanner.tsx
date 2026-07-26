export default function CTABanner() {
  return (
    <section className="bg-neutral-50 px-4 py-16 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1f4f] via-brand-800 to-brand-600 px-8 py-16 text-center shadow-2xl sm:px-16 sm:py-20">
          {/* Decorative floating shapes */}
          <span className="pointer-events-none absolute -top-12 -left-12 h-56 w-56 rounded-2xl border border-white/10 bg-white/5 rotate-12" />
          <span className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-2xl border border-white/10 bg-white/5 -rotate-12" />
          <span className="pointer-events-none absolute top-1/2 left-8 h-20 w-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 rotate-6" />
          <span className="pointer-events-none absolute top-6 right-20 h-12 w-12 rounded-xl border border-white/10 bg-white/5 rotate-45" />

          {/* Content */}
          <div className="relative z-10">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
              Now in Beta - Free to Join
            </span>

            <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Analyse smarter.
              <br />
              <span className="text-brand-200">Play better.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70">
              Join players, coaches, and academies already using CricIQ. Point your phone - get
              professional-grade analytics instantly. No hardware. No wearables.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-white/30"
              >
                <svg
                  width="16"
                  height="16"
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
                Download Beta
              </a>
            </div>

            <p className="mt-6 text-xs text-white/40">
              No credit card required · Available on iOS & Android
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
