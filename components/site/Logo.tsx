/**
 * The Tayel AI Labs mark — the planet only, without the wordmark.
 *
 * Rebuilt as SVG from the owner's logo image (supplied 2026-10-16 as a raster;
 * the original vector has not been provided). Geometry: a sphere with an orbit
 * ellipse rotated -38deg, so the ring passes behind the planet at the top-left
 * and crosses its face on the way to the spark at the upper-right tip.
 *
 * The sphere reads as near-black on a light page, so its two gradient stops are
 * theme tokens — on the dark theme it lifts above the page instead of
 * disappearing into it. Ring and spark are the DS Secondary and Accent ramps.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Tayel AI Labs"
    >
      <defs>
        <radialGradient id="tayel-sphere" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="var(--logo-sphere-from)" />
          <stop offset="100%" stopColor="var(--logo-sphere-to)" />
        </radialGradient>
        <linearGradient id="tayel-orbit" x1="10%" y1="85%" x2="90%" y2="15%">
          <stop offset="0%" stopColor="var(--color-secondary-400)" />
          <stop offset="55%" stopColor="var(--color-secondary-300)" />
          <stop offset="100%" stopColor="var(--color-accent-400)" />
        </linearGradient>
      </defs>

      {/* Far side of the orbit. Only the part clear of the planet survives. */}
      <g transform="rotate(-38 50 47)">
        <ellipse
          cx="50"
          cy="47"
          rx="42"
          ry="13"
          fill="none"
          stroke="url(#tayel-orbit)"
          strokeWidth="2"
          opacity="0.75"
        />
      </g>

      <circle cx="50" cy="47" r="29" fill="url(#tayel-sphere)" />

      {/* Near side, drawn over the planet's face. */}
      <g transform="rotate(-38 50 47)">
        <path
          d="M 92 47 A 42 13 0 0 1 8 47"
          fill="none"
          stroke="url(#tayel-orbit)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>

      {/* Four-point spark at the orbit's upper tip. */}
      <path
        d="M 84 11 Q 85.6 18.4 92 20 Q 85.6 21.6 84 29 Q 82.4 21.6 76 20 Q 82.4 18.4 84 11 Z"
        fill="var(--color-accent-400)"
      />
    </svg>
  );
}
