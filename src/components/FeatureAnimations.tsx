export function PitchMapAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <rect x="25" y="15" width="70" height="90" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="25" y1="55" x2="95" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <rect x="45" y="30" width="30" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <circle cx="52" cy="42" r="4" className="anim-ball-1 fill-brand-500" />
      <circle cx="68" cy="65" r="4" className="anim-ball-2 fill-brand-400" />
      <circle cx="58" cy="50" r="4" className="anim-ball-3 fill-brand-300" />
      <circle cx="72" cy="38" r="3" fill="currentColor" opacity="0.15" />
      <circle cx="48" cy="72" r="3" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

export function BallSpeedAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <path d="M 25 90 A 50 50 0 0 1 95 90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <path d="M 30 87 A 45 45 0 0 1 50 50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      <path d="M 50 50 A 45 45 0 0 1 70 42" fill="none" className="stroke-brand-400" strokeWidth="2" opacity="0.3" />
      <path d="M 70 42 A 45 45 0 0 1 90 87" fill="none" className="stroke-brand-500" strokeWidth="2" opacity="0.5" />
      <line x1="60" y1="88" x2="60" y2="48" className="anim-needle stroke-brand-500" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="88" r="4" className="fill-brand-500" />
      <text x="60" y="78" textAnchor="middle" className="fill-brand-500" fontSize="11" fontWeight="700">138</text>
      <text x="60" y="107" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.4">km/h</text>
    </svg>
  );
}

export function BiomechanicsAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Stick figure */}
      <circle cx="60" cy="25" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      <line x1="60" y1="32" x2="60" y2="65" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      <line x1="60" y1="42" x2="42" y2="55" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      <line x1="60" y1="42" x2="78" y2="35" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      <line x1="60" y1="65" x2="45" y2="90" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      <line x1="60" y1="65" x2="75" y2="90" stroke="currentColor" strokeWidth="1.5" className="anim-skeleton" />
      {/* Joint dots */}
      <circle cx="60" cy="42" r="2.5" className="fill-brand-500 anim-skeleton" />
      <circle cx="42" cy="55" r="2.5" className="fill-brand-400 anim-skeleton" />
      <circle cx="78" cy="35" r="2.5" className="fill-brand-400 anim-skeleton" />
      <circle cx="60" cy="65" r="2.5" className="fill-brand-500 anim-skeleton" />
      {/* Motion arcs */}
      <path d="M 78 35 Q 85 25 82 18" fill="none" className="stroke-brand-500" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      <path d="M 45 90 Q 38 95 35 100" fill="none" className="stroke-brand-400" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
    </svg>
  );
}

export function SwingSeamAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Stumps */}
      <line x1="55" y1="85" x2="55" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="60" y1="85" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="65" y1="85" x2="65" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="53" y1="85" x2="67" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Swing path */}
      <path d="M 30 20 Q 45 50 55 85" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="3 3" />
      <path d="M 30 20 Q 70 50 55 85" fill="none" className="stroke-brand-500" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 3" />
      {/* Ball */}
      <circle cx="45" cy="50" r="5" className="fill-brand-500 anim-swing" />
      <path d="M 42 48 Q 45 52 48 48" fill="none" stroke="white" strokeWidth="0.8" className="anim-swing" />
    </svg>
  );
}

export function LineLengthAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Grid */}
      {[0, 1, 2, 3, 4].map(r =>
        [0, 1, 2].map(c => (
          <rect
            key={`${r}-${c}`}
            x={35 + c * 18}
            y={15 + r * 20}
            width="16"
            height="18"
            rx="2"
            className={`anim-heat ${
              (r === 1 && c === 1) || (r === 2 && c === 1) ? 'fill-brand-500' :
              (r === 1 && c === 0) || (r === 2 && c === 2) ? 'fill-brand-400' :
              'fill-brand-300'
            }`}
            style={{
              opacity: (r === 1 && c === 1) ? 0.7 : (r === 2 && c === 1) ? 0.6 : 0.2,
              animationDelay: `${(r * 3 + c) * 0.15}s`,
            }}
          />
        ))
      )}
    </svg>
  );
}

export function Trajectory3DAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Ground plane */}
      <path d="M 10 90 L 60 105 L 110 90 L 60 75 Z" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="0.5" />
      {/* Trajectory arc */}
      <path d="M 20 80 Q 40 20 90 70" fill="none" className="stroke-brand-500 anim-trajectory" strokeWidth="2" strokeLinecap="round" />
      {/* Shadow on ground */}
      <ellipse cx="55" cy="92" rx="30" ry="4" fill="currentColor" opacity="0.08" />
      {/* Ball at end */}
      <circle cx="90" cy="70" r="5" className="fill-brand-500" opacity="0.8" />
      {/* Start point */}
      <circle cx="20" cy="80" r="3" fill="currentColor" opacity="0.3" />
      {/* Height line */}
      <line x1="50" y1="28" x2="50" y2="92" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.15" />
    </svg>
  );
}

export function InjuryRiskAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Body outline */}
      <ellipse cx="60" cy="22" rx="10" ry="12" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M 50 34 L 48 65 L 55 65 L 52 100" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M 70 34 L 72 65 L 65 65 L 68 100" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M 50 38 L 30 55" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M 70 38 L 90 55" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      {/* Pulse rings on shoulder */}
      <circle cx="70" cy="38" r="6" className="fill-brand-500 anim-heartbeat" opacity="0.4" />
      <circle cx="70" cy="38" r="10" fill="none" className="stroke-brand-500 anim-heartbeat" strokeWidth="1" opacity="0.2" />
      {/* Knee highlight */}
      <circle cx="52" cy="80" r="5" className="fill-brand-400 anim-heartbeat" opacity="0.3" style={{ animationDelay: '0.3s' }} />
    </svg>
  );
}

export function AICoachAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full anim-brain">
      {/* Chat bubble */}
      <rect x="20" y="20" width="80" height="55" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <polygon points="40,75 50,85 55,75" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      {/* Brain icon */}
      <path d="M 48 38 Q 42 30 48 25 Q 55 20 60 28 Q 65 20 72 25 Q 78 30 72 38" fill="none" className="stroke-brand-500" strokeWidth="1.5" />
      <path d="M 48 38 Q 45 45 50 50 Q 55 55 60 50 Q 65 55 70 50 Q 75 45 72 38" fill="none" className="stroke-brand-400" strokeWidth="1.5" />
      <line x1="60" y1="28" x2="60" y2="50" className="stroke-brand-500" strokeWidth="0.8" opacity="0.4" />
      {/* Sparkle dots */}
      <circle cx="35" cy="95" r="2" className="fill-brand-500" opacity="0.3" />
      <circle cx="85" cy="95" r="1.5" className="fill-brand-400" opacity="0.2" />
      <circle cx="60" cy="100" r="1" className="fill-brand-300" opacity="0.3" />
    </svg>
  );
}

export function PlayersAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Batsman */}
      <circle cx="55" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="55" y1="33" x2="55" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="55" y1="65" x2="42" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="55" y1="65" x2="68" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Bat */}
      <line x1="55" y1="45" x2="80" y2="30" className="stroke-brand-500" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="22" width="12" height="5" rx="1" className="fill-brand-500" transform="rotate(-30 84 24)" opacity="0.8" />
      {/* Ball incoming */}
      <circle cx="30" cy="40" r="4" className="fill-brand-400 anim-swing" />
      {/* Motion lines */}
      <line x1="22" y1="38" x2="15" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="22" y1="42" x2="15" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

export function CoachesAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Clipboard */}
      <rect x="30" y="20" width="60" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="45" y="14" width="30" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      {/* Chart lines */}
      <polyline points="40,75 50,60 60,65 70,45 80,50" fill="none" className="stroke-brand-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Chart dots */}
      <circle cx="50" cy="60" r="2.5" className="fill-brand-500 anim-skeleton" />
      <circle cx="60" cy="65" r="2.5" className="fill-brand-400 anim-skeleton" style={{ animationDelay: '0.2s' }} />
      <circle cx="70" cy="45" r="2.5" className="fill-brand-500 anim-skeleton" style={{ animationDelay: '0.4s' }} />
      {/* Baseline */}
      <line x1="38" y1="82" x2="82" y2="82" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      {/* Check marks */}
      <path d="M 40 38 L 44 42 L 52 34" fill="none" className="stroke-brand-400" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function AcademiesAnim() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      {/* Dashboard grid */}
      <rect x="15" y="20" width="40" height="35" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <rect x="65" y="20" width="40" height="35" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <rect x="15" y="65" width="90" height="35" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      {/* Bar chart in first card */}
      <rect x="22" y="42" width="6" height="8" rx="1" className="fill-brand-300 anim-heat" />
      <rect x="30" y="36" width="6" height="14" rx="1" className="fill-brand-400 anim-heat" style={{ animationDelay: '0.2s' }} />
      <rect x="38" y="30" width="6" height="20" rx="1" className="fill-brand-500 anim-heat" style={{ animationDelay: '0.4s' }} />
      {/* Number in second card */}
      <text x="85" y="42" textAnchor="middle" className="fill-brand-500" fontSize="14" fontWeight="700">42</text>
      <text x="85" y="50" textAnchor="middle" fill="currentColor" fontSize="6" opacity="0.3">players</text>
      {/* Progress bars in bottom card */}
      <rect x="22" y="75" width="76" height="4" rx="2" fill="currentColor" opacity="0.08" />
      <rect x="22" y="75" width="55" height="4" rx="2" className="fill-brand-500 anim-heat" opacity="0.5" />
      <rect x="22" y="85" width="76" height="4" rx="2" fill="currentColor" opacity="0.08" />
      <rect x="22" y="85" width="40" height="4" rx="2" className="fill-brand-400 anim-heat" opacity="0.4" style={{ animationDelay: '0.3s' }} />
    </svg>
  );
}
