import { useEffect, useRef } from "react";

/**
 * Global scroll-driven effects:
 *  - A top progress bar tracking page scroll
 *  - Light parallax on elements with `data-parallax="0.2"` (speed factor).
 */
export function ScrollFX() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Progress bar
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      }

      // Parallax
      if (!reduce) {
        const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
        els.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.15");
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
          el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        transform: "scaleX(0)",
        background:
          "linear-gradient(90deg, var(--color-accent-from), var(--color-accent-to))",
        boxShadow: "0 0 12px rgba(255,122,77,0.6)",
        transition: "transform 80ms linear",
      }}
      ref={barRef}
    />
  );
}
