import { TESTIMONIAL } from '../constants/content'

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-4 py-20 dark:bg-black">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Quote mark */}
        <svg className="mx-auto mb-6 h-10 w-10 text-brand-500 opacity-60" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
        </svg>

        <blockquote className="mb-8 text-xl font-medium leading-relaxed text-white sm:text-2xl">
          "{TESTIMONIAL.quote}"
        </blockquote>

        <div className="flex flex-col items-center gap-1">
          {/* Parthiv Patel avatar placeholder */}
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 ring-2 ring-brand-500/40">
            <span className="text-2xl">🏏</span>
          </div>
          <p className="font-bold text-white">{TESTIMONIAL.name}</p>
          <p className="text-sm text-neutral-400">{TESTIMONIAL.role}</p>
        </div>
      </div>
    </section>
  )
}
