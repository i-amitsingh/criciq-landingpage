export default function AppVideo() {
  return (
    <section className="bg-neutral-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-brand-500/20 px-4 py-1 text-sm font-semibold text-brand-300">
              See It In Action
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Point. Analyse.
              <br />
              <span className="text-brand-400">Improve.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Watch how CricIQ analyses a full session in real-time — pitch maps, ball speed,
              biomechanics and AI coaching insights, all from a single smartphone video.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Just record with your phone — no extra gear',
                'AI processes every ball in seconds',
                'Full coaching report with drills and benchmarks',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="#29ABE2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:-translate-y-0.5"
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

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 scale-90 rounded-[3rem] bg-brand-500/15 blur-3xl" />

              {/* Phone shell */}
              <div className="relative w-64 overflow-hidden rounded-[2.8rem] border-[7px] border-neutral-700 bg-black shadow-2xl">
                {/* Dynamic island / notch */}
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
                  <div className="h-6 w-24 rounded-b-2xl bg-black" />
                </div>

                {/* Side buttons */}
                <div className="absolute -left-[9px] top-24 h-10 w-[7px] rounded-l-full bg-neutral-700" />
                <div className="absolute -left-[9px] top-36 h-14 w-[7px] rounded-l-full bg-neutral-700" />
                <div className="absolute -right-[9px] top-28 h-16 w-[7px] rounded-r-full bg-neutral-700" />

                {/* Screen */}
                <div className="relative aspect-[9/19.5] overflow-hidden bg-neutral-900">
                  {/* Video — update src when ready */}
                  <video
                    src=""
                    poster="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80"
                    className="h-full w-full object-cover"
                    playsInline
                    controls
                    preload="none"
                  />
                  {/* Play overlay when no video src */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/60">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/90 shadow-lg">
                      <svg
                        className="ml-1 h-6 w-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="mt-3 text-xs font-medium text-white/60">
                      App walkthrough coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
