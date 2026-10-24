export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <svg width="29" height="29" viewBox="8 8 48 48" fill="none" aria-hidden="true">
        <path
          d="M44 17.5a19 19 0 1 0 0 29"
          stroke="var(--brand-symbol, currentColor)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <circle cx="46" cy="32" r="5" fill="#53D643" />
      </svg>
      <span>
        collect<span className="brand-ke">ke</span>
        <span className="brand-period">.</span>
      </span>
    </span>
  );
}
