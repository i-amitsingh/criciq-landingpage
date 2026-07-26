import { FEATURES } from '../constants/content'

export default function Features() {
  return (
    <section id="features" className="bg-neutral-50 px-4 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Features
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Everything you need to win
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            From live ball-by-ball feeds to AI-driven strategy recommendations — CricIQ gives every stakeholder the right data at the right moment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-primary-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-colors group-hover:bg-primary-100 dark:bg-primary-900/30 dark:group-hover:bg-primary-900/50">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
