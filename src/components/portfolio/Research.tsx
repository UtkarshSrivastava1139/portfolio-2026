import { useLayoutEffect, useRef } from "react";
import { Section } from "./Section";

export function Research() {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !cardRef.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.fromTo(
            "[data-research-border]",
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                once: true,
              },
            },
          );
        }, cardRef);
        cleanup = () => context.revert();
      },
    );

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <Section
      id="research"
      eyebrow="05 · Research"
      title={
        <>
          <span className="text-muted">What if</span> a $300 device <br className="hidden md:block" />
          could bring AI-powered education <br className="hidden md:block" />
          to a classroom with <span className="text-muted">no internet?</span>
        </>
      }
    >
      <div ref={cardRef} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-elevated)] to-[var(--color-base)] p-8 md:p-12">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <rect
            data-research-border
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            rx="24"
            pathLength="1"
            fill="none"
            stroke="var(--color-accent)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="1"
            strokeDashoffset="0"
          />
        </svg>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,122,77,0.4), transparent 70%)",
          }}
        />

        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Primary Author · ICSETI 2026 · Scopus Indexed
            </div>
            <p className="mt-6 text-[17px] leading-[1.7] text-muted md:text-[18px]">
              That&apos;s the question this paper answers. Most EdTech innovation assumes connectivity, hardware budgets, and infrastructure that rural India simply doesn&apos;t have. I designed a low-cost, fully offline Edge-AI architecture that brings gesture recognition, speech processing, and real-time engagement analytics to classrooms in underserved regions — all running locally, preserving student privacy, at approximately $300 per classroom.
            </p>
            <p className="mt-5 text-[17px] leading-[1.7] text-ink md:text-[18px]">
              Published in IEEE conference proceedings at ICSETI 2026 and indexed in Scopus — as primary author, in my second year of undergraduate study.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-3">
              {[
                { k: "Conference", v: "ICSETI 2026" },
                { k: "Indexing", v: "IEEE · Scopus" },
                { k: "Role", v: "Primary Author" },
                { k: "Hardware Cost", v: "~$300 / classroom" },
                { k: "Connectivity", v: "Fully Offline" },
                { k: "Status", v: "In Press" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-4 border-b border-[var(--color-rule)] py-3 last:border-b-0"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                    {row.k}
                  </span>
                  <span className="text-right text-[14px] font-medium text-ink">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
