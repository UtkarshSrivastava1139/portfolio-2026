import { useLayoutEffect, useRef } from "react";

const STATS = [
  { display: "INDIA", label: ["Represented India", "IEEE YESIST12 Global Finale", "Malaysia"] },
  { display: "TOP 10%", label: ["IEEEXtreme 19.0", "19,000+ Participants"] },
  { display: "BHARAT", label: ["Mandapam", "Selected by Govt. of Delhi", "India Innovates 2026"] },
  { display: "10+", label: ["Hackathon Finalist"] },
];

export function ProofStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !sectionRef.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          const counters = gsap.utils.toArray<HTMLElement>("[data-proof-count]");
          counters.forEach((counter, index) => {
            const stat = STATS[index];
            if (!stat) return;
            gsap.fromTo(counter, {
              opacity: 0,
              y: 20,
            }, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
            });
          });
        }, sectionRef);
        cleanup = () => context.revert();
      },
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Proof"
      className="relative overflow-hidden border-y border-[var(--color-rule)] bg-[color-mix(in_oklab,var(--color-elevated)_50%,transparent)]"
    >
      {/* Background numeral */}
      <span
        aria-hidden
        data-parallax="0.1"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display font-extrabold text-ink/[0.05]"
        style={{
          fontSize: "clamp(16rem, 32vw, 28rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        04
      </span>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Top meta rail */}
        <div className="flex items-center justify-between border-b border-[var(--color-rule)] py-4 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Proof / 04 Signals
          </span>
          <span className="text-faint">Field 02 / 2026</span>
        </div>
        <div className="grid grid-cols-1 divide-y divide-[var(--color-rule)] sm:grid-cols-2 sm:divide-y-0 sm:[&>*]:border-r sm:[&>*]:border-[var(--color-rule)] sm:[&>*:nth-child(2n)]:border-r-0 lg:grid-cols-4 lg:[&>*:nth-child(2n)]:border-r lg:[&>*:last-child]:border-r-0">
          {STATS.map((s) => (
            <div
              key={s.display}
              className="proof-tile group relative flex flex-col gap-3 px-2 py-10 sm:px-8 sm:py-12"
            >
              <span
                aria-hidden
                className="proof-tile__stroke pointer-events-none absolute right-4 top-4 h-px w-0 bg-[var(--color-accent)] origin-right rotate-[-35deg] transition-all duration-300 group-hover:w-8"
              />
              <span
                data-proof-count
                className="max-w-full break-words font-display font-extrabold leading-[0.88] tracking-[-0.055em] text-ink"
                style={{
                  fontSize: "clamp(2.35rem, 4.8vw, 4.75rem)",
                }}
              >
                {s.display}
              </span>
              <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                {s.label.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
