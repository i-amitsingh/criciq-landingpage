import { FEATURES } from '../constants/content'

export default function Features() {
  return (
    <section id="features" className="bg-neutral-50 px-4 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
            Analysis Modules
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Every tool your game needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Professional cricket analysis — ball speed, biomechanics, pitch maps, 3D trajectory, swing detection, and AI coaching — all from one smartphone video.
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-100/90 dark:to-neutral-950/90" />
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

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-8 text-center dark:border-brand-900 dark:bg-brand-900/20 sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">Ready to level up your cricket?</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">All modules included in every plan. No hardware required.</p>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-600 hover:-translate-y-0.5"
          >
            Download Beta — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
