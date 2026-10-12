/**
 * Placeholder mark. The real logo has not been provided as a vector — swap
 * this file's contents for the owner's SVG when it arrives, and nothing else
 * needs to change.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--color-primary-500)" />
      <path
        d="M12 15h16M20 15v12"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
