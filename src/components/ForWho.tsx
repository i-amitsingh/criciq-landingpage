import { AUDIENCE, AUDIENCE_SECTION } from '../constants/content';

import playersImg from '../assets/who/young-man-bowling.webp';
import coachesImg from '../assets/who/Coach.webp';
import academiesImg from '../assets/who/cricket-academy.webp';

const AUDIENCE_IMAGES = [playersImg, coachesImg, academiesImg];

export default function ForWho() {
  return (
    <section id="for-who" className="bg-white px-4 py-12 dark:bg-neutral-950 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-500 dark:bg-brand-500/20">
            {AUDIENCE_SECTION.badge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {AUDIENCE_SECTION.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
            {AUDIENCE_SECTION.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {AUDIENCE.map((item, idx) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Media slot — swap img for video when ready */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={AUDIENCE_IMAGES[idx]}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white shadow">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                </div>
              </div>

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
  );
}
