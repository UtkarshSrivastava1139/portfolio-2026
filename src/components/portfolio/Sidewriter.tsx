export function Sidewriter() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <span
        className="block whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.32em] text-muted"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          opacity: 0.4,
        }}
      >
        Utkarsh Srivastava · Portfolio 2026
      </span>
    </div>
  );
}