export default function DownloadFAB() {
  return (
    <a
      href="#"
      aria-label="Download Beta"
      title="Download Beta"
      className="group fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 shadow-2xl shadow-brand-500/50 transition-all duration-200 hover:bg-brand-600 hover:scale-110 hover:shadow-brand-600/60 active:scale-95"
    >
      {/* Flat long-shadow effect via pseudo-layer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
      />
      <svg
        className="relative h-7 w-7 text-white drop-shadow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

      {/* Tooltip label */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 dark:bg-neutral-800">
        Download Beta
      </span>
    </a>
  )
}
