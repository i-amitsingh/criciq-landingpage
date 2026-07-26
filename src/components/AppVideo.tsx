import { APP_VIDEO } from '../constants/content';

export default function AppVideo() {
  return (
    <section className="bg-neutral-50 px-4 py-10 dark:bg-neutral-950 sm:py-20">
      <div className="mx-auto flex max-w-6xl justify-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-90 rounded-[3rem] bg-brand-500/15 blur-3xl" />

          <div className="relative w-56 overflow-hidden rounded-[2.8rem] border-[7px] border-neutral-300 bg-black shadow-2xl dark:border-neutral-700 sm:w-64">
            <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
              <div className="h-6 w-24 rounded-b-2xl bg-black" />
            </div>

            <div className="absolute -left-[9px] top-24 h-10 w-[7px] rounded-l-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="absolute -left-[9px] top-36 h-14 w-[7px] rounded-l-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="absolute -right-[9px] top-28 h-16 w-[7px] rounded-r-full bg-neutral-300 dark:bg-neutral-700" />

            <div className="relative aspect-[9/19.5] overflow-hidden bg-neutral-900">
              <div className="h-full w-full bg-neutral-800" />
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/90 shadow-lg">
                  <svg className="ml-1 h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="mt-3 text-xs font-medium text-white/60">
                  {APP_VIDEO.placeholder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
