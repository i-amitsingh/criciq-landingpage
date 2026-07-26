import { FEATURES } from '../constants/content';

export default function Features() {
  return (
    <section id="features" className="bg-neutral-50 px-4 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
            Features
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Every tool your game needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Professional cricket analysis — ball speed, biomechanics, pitch maps, 3D trajectory,
            swing detection, and AI coaching — all from one smartphone video.
          </p>
        </div>

        {/* 4-col grid on desktop, 2-col on tablet, 1-col on mobile */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-brand-600"
            >
              {/* Feature image */}
              {feature.image && (
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={feature.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Icon badge over image */}
                  <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100/90 text-xl shadow dark:bg-neutral-950/90">
                    {feature.icon}
                  </span>
                </div>
              )}

              <div className="p-5">
                <h3 className="mb-1.5 text-base font-bold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA card — same style as CTABanner */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1f4f] via-brand-800 to-brand-600 px-8 py-12 text-center shadow-2xl sm:px-14 sm:py-14">
          <span className="pointer-events-none absolute -top-10 -left-10 h-44 w-44 rounded-2xl border border-white/10 bg-white/5 rotate-12" />
          <span className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-2xl border border-white/10 bg-white/5 -rotate-12" />
          <span className="pointer-events-none absolute top-4 right-16 h-10 w-10 rounded-xl border border-white/10 bg-white/5 rotate-45" />
          <div className="relative z-10">
            <p className="text-xl font-extrabold text-white sm:text-2xl">
              Ready to level up your cricket?
            </p>
            <p className="mt-2 text-sm text-white/70">
              All 8 modules included in every plan. No hardware required.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                <svg
                  width="15"
                  height="15"
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
          </div>
        </div>
      </div>
    </section>
  );
}
