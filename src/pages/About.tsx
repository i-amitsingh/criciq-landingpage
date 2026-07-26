const TEAM = [
  {
    name: 'Parthiv Patel',
    role: 'Investor & Advisor',
    bio: 'Former Indian International Wicketkeeper-Batsman who played 25 Tests and 38 ODIs for India. Parthiv brings deep on-field experience and an elite cricketing network to CricIQ.',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Kunal Sinha',
    role: 'Investor & Advisor',
    bio: 'Co-founder of GlowRoad (acquired by Amazon India). Kunal brings deep expertise in scaling consumer tech products and building high-growth startups in the Indian market.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b1f4f] via-brand-800 to-brand-600 px-4 pb-24 pt-32 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
          About CricIQ
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Making elite cricket analytics <span className="text-brand-200">accessible to everyone</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          CricIQ by SportZengage Technology Pvt. Ltd. is an AI-powered cricket analysis platform built in Bengaluru, India. We believe every cricketer — from a weekend warrior to a national-team hopeful — deserves access to the same technology used by professional franchises.
        </p>
      </section>

      {/* Mission */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                Our Mission
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Democratise professional-grade cricket analytics
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Professional cricket teams spend millions on analysis tools that require specialist hardware, trained operators, and dedicated video teams. CricIQ collapses that entire stack into a smartphone. Point your camera, hit record — CricIQ does the rest.
              </p>
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                Our Technology
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Computer vision + LLM coaching
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                CricIQ combines state-of-the-art computer vision models with large language models to deliver 8 analysis modules — ball speed, pitch map, 3D trajectory, biomechanics, swing analysis, line & length, injury risk, and AI coaching insights — all computed entirely on-device or in the cloud from a standard video recording.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-12 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: '8+', label: 'Analysis Modules' },
            { value: '0', label: 'Hardware Required' },
            { value: '2', label: 'Expert Advisors' },
            { value: 'BLR', label: 'Headquartered' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-brand-500">{s.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
              Backed By
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Our investors & advisors
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((person) => (
              <div
                key={person.name}
                className="flex gap-5 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <p className="font-extrabold text-neutral-900 dark:text-white">{person.name}</p>
                  <p className="mb-2 text-sm font-semibold text-brand-500">{person.role}</p>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              SportZengage Technology Pvt. Ltd.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
              The company behind CricIQ. A sports-tech startup incorporated in India, building AI tools for the global cricket community.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            {[
              { icon: '📍', label: 'Headquarters', value: 'Bengaluru, Karnataka, India' },
              { icon: '🏢', label: 'Entity', value: 'SportZengage Technology Pvt. Ltd.' },
              { icon: '📧', label: 'Contact', value: 'hello@criciq.app' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 dark:border-neutral-800 dark:bg-neutral-950">
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-neutral-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1f4f] via-brand-800 to-brand-600 px-8 py-14 text-center shadow-2xl">
            <span className="pointer-events-none absolute -top-10 -left-10 h-44 w-44 rounded-2xl border border-white/10 bg-white/5 rotate-12" />
            <span className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-2xl border border-white/10 bg-white/5 -rotate-12" />
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Join us on the journey</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
                CricIQ is in beta — free for early adopters. Be part of building the future of cricket analytics.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Download Beta — Free
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
