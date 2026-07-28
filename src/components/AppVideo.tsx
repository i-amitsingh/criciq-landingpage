import type { CSSProperties } from 'react';

const VIDEO_URL = 'https://cdn.criciq.ai/pub/m/how_to.mp4';

function PhoneMockup() {
  const phoneW = 'min(260px, calc(100vw - 64px))';
  const btnStyle = (side: 'left' | 'right', top: number, h: number): CSSProperties => ({
    position: 'absolute',
    [side]: '-5px',
    top,
    width: '4px',
    height: h,
    borderRadius: side === 'left' ? '2px 0 0 2px' : '0 2px 2px 0',
    background: 'linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)',
    boxShadow: side === 'left' ? '-1px 0 3px rgba(0,0,0,0.7)' : '1px 0 3px rgba(0,0,0,0.7)',
  });

  return (
    <div className="relative flex-shrink-0" style={{ width: phoneW }}>
      {/* Glow behind phone */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(41,171,226,0.16) 0%, transparent 70%)',
          transform: 'scale(1.6)',
        }}
      />

      {/* ── Android phone frame ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '38px',
          padding: '3px',
          background:
            'linear-gradient(145deg, #3a3a3a 0%, #1e1e1e 30%, #2d2d2d 55%, #141414 80%, #252525 100%)',
          boxShadow:
            '0 0 0 0.5px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(255,255,255,0.05) inset, 0 40px 80px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.6)',
        }}
      >
        {/* LEFT — volume up */}
        <div style={btnStyle('left', 110, 38)} />
        {/* LEFT — volume down */}
        <div style={btnStyle('left', 158, 38)} />
        {/* RIGHT — power */}
        <div style={btnStyle('right', 130, 56)} />

        {/* ── Phone body ── */}
        <div
          style={{
            borderRadius: '36px',
            overflow: 'hidden',
            background: '#0c0c0c',
            position: 'relative',
          }}
        >
          {/* Screen */}
          <div style={{ position: 'relative', background: '#000' }}>
            {/* Status bar — Android: time left, icons right */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px 0',
                height: '36px',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <span
                style={{ fontSize: '12px', fontWeight: 600, color: '#fff', letterSpacing: '0.1px' }}
              >
                9:41
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {/* Signal bars */}
                <svg width="15" height="11" viewBox="0 0 17 12" fill="white">
                  <rect x="0" y="6" width="3" height="6" rx="0.5" />
                  <rect x="4.5" y="4" width="3" height="8" rx="0.5" />
                  <rect x="9" y="2" width="3" height="10" rx="0.5" />
                  <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.35" />
                </svg>
                {/* WiFi */}
                <svg width="14" height="11" viewBox="0 0 16 12" fill="white">
                  <circle cx="8" cy="10.5" r="1" />
                  <path
                    d="M4.5 7.5a5 5 0 0 1 7 0"
                    stroke="white"
                    strokeWidth="1.3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.5 4.5a9 9 0 0 1 13 0"
                    stroke="white"
                    strokeWidth="1.3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
                {/* Battery — Android style (horizontal, nub on right) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '10px',
                      border: '1px solid rgba(255,255,255,0.45)',
                      borderRadius: '2.5px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1.5px 1.5px',
                    }}
                  >
                    <div
                      style={{
                        width: '80%',
                        height: '100%',
                        background: '#4ade80',
                        borderRadius: '1.5px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: '2px',
                      height: '4px',
                      background: 'rgba(255,255,255,0.35)',
                      borderRadius: '0 1px 1px 0',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Punch-hole camera — centered at top */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#000',
                border: '1px solid #1a1a1a',
                boxShadow: 'inset 0 0 3px rgba(255,255,255,0.08)',
                zIndex: 20,
              }}
            />

            {/* Video — 9:16, margin pulls it behind status bar cleanly */}
            <div
              style={{
                aspectRatio: '9/16',
                overflow: 'hidden',
                background: '#000',
                marginTop: '-36px',
              }}
            >
              <div style={{ height: '36px' }} />
              <video
                src={VIDEO_URL}
                style={{
                  width: '100%',
                  height: 'calc(100% - 36px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div
        className="absolute hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/95 px-3 py-2.5 shadow-2xl"
        style={{
          top: '15%',
          right: 'calc(100% + 16px)',
          minWidth: '120px',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 flex-shrink-0">
          <svg
            className="h-4 w-4 text-sky-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-neutral-500 leading-none mb-0.5">Ball Speed</p>
          <p className="text-sm font-bold text-white leading-none">
            138 <span className="text-xs font-normal text-neutral-400">km/h</span>
          </p>
        </div>
      </div>

      <div
        className="absolute hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/95 px-3 py-2.5 shadow-2xl"
        style={{
          top: '42%',
          left: 'calc(100% + 16px)',
          minWidth: '120px',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 flex-shrink-0">
          <svg
            className="h-4 w-4 text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-neutral-500 leading-none mb-0.5">Accuracy</p>
          <p className="text-sm font-bold text-white leading-none">
            94 <span className="text-xs font-normal text-neutral-400">%</span>
          </p>
        </div>
      </div>

      <div
        className="absolute hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/95 px-3 py-2.5 shadow-2xl"
        style={{
          bottom: '20%',
          right: 'calc(100% + 16px)',
          minWidth: '120px',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 flex-shrink-0">
          <svg
            className="h-4 w-4 text-amber-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-neutral-500 leading-none mb-0.5">Analysis</p>
          <p className="text-sm font-bold text-white leading-none">
            3 <span className="text-xs font-normal text-neutral-400">sec</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AppVideo() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-4 py-16 dark:bg-black sm:py-24">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-sky-500/8 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-400">
            See It In Action
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Point. Analyse. <span className="text-brand-400">Improve.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Watch CricIQ analyse a real session — pitch maps, ball speed, biomechanics and AI
            coaching, all from one phone video.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
          {/* Phone */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
