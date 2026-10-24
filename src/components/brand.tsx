export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <svg width="29" height="29" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3v9M16 20v9M3 16h9m8 0h9M6.8 6.8l6.4 6.4m5.6 5.6 6.4 6.4M6.8 25.2l6.4-6.4m5.6-5.6 6.4-6.4"
          stroke="currentColor"
          strokeWidth="3.5"
        />
        <path d="m16 10 6 6-6 6-6-6 6-6Z" fill="currentColor" />
      </svg>
      <span>
        collect<span className="brand-ke">ke</span>
        <span className="brand-period">.</span>
      </span>
    </span>
  );
}
