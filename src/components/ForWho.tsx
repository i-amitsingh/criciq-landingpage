import { AUDIENCE, AUDIENCE_SECTION } from '../constants/content';
import { PlayersAnim, CoachesAnim, AcademiesAnim } from './FeatureAnimations';
import type { ReactNode } from 'react';

const AUDIENCE_ANIM: (() => ReactNode)[] = [PlayersAnim, CoachesAnim, AcademiesAnim];

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
          {AUDIENCE.map((item, idx) => {
            const Anim = AUDIENCE_ANIM[idx];
            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-brand-50 to-transparent dark:from-brand-500/5 dark:to-transparent">
                  <div className="h-28 w-28 text-neutral-400 dark:text-neutral-500">
                    {Anim ? <Anim /> : null}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      {item.subtitle}
                    </p>
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
