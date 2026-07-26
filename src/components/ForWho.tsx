import { AUDIENCE } from '../constants/content'

export default function ForWho() {
  return (
    <section id="for-who" className="bg-white px-4 py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-500 dark:bg-brand-500/20">
            Built For
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Cricket at every level
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
            Whether you're a weekend cricketer or running a national academy, CricIQ gives you the same AI tools the pros use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {AUDIENCE.map((item, idx) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Number badge */}
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white shadow">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {/* Title over image */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{item.subtitle}</p>
                  <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {item.cta}
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
