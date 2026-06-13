import { useLayoutEffect, useRef } from "react";
import { images } from "./data";
import { useResumeModal } from "./ResumeModal";

const specs = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Field", value: "Software · AI · Systems" },
  { label: "Based in", value: "India · IST" },
  { label: "Status", value: "Available · 2026" },
];

export function Hero() {
  const { setOpen: setResumeOpen } = useResumeModal();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup = () => {};

    void import("gsap").then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      const context = gsap.context(() => {
        gsap.fromTo(
          "[data-hero-reveal]",
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
          },
        );
      }, sectionRef);
      cleanup = () => context.revert();
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-dvh overflow-hidden pt-24 md:pt-28"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-16 lg:px-10">
        <div
          data-hero-reveal
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted"
        >
          <div className="inline-flex items-center gap-2">
            <span className="hero-availability-dot h-2 w-2 rounded-full bg-[var(--color-signal)]" />
            <span>Available — 2026 Internships</span>
          </div>
          <span className="hidden text-faint sm:block">Based in India · IST</span>
        </div>

        <div className="grid flex-1 items-center gap-16 py-12 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-16 lg:py-8">
          <div>
            <h1
              data-hero-reveal
              className="font-display text-[clamp(3.25rem,7.2vw,5.5rem)] font-extrabold leading-[0.88] tracking-[-0.03em] text-ink"
            >
              <span className="block">UTKARSH</span>
              <span className="mt-2 block text-hero-muted">SRIVASTAVA</span>
            </h1>

            <p
              data-hero-reveal
              className="mt-8 font-display text-[22px] font-medium tracking-[-0.02em] text-ink"
            >
              I build software that <span className="text-preloader-accent">ships.</span>
            </p>

            <dl
              data-hero-reveal
              className="mt-10 grid grid-cols-2 border-t border-[var(--color-rule-strong)] sm:grid-cols-4"
            >
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="hero-spec-cell flex min-h-16 flex-col gap-1.5 border-b border-[var(--color-rule)] py-3 sm:px-4 sm:first:pl-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {spec.label}
                  </dt>
                  <dd className="text-[13px] font-medium leading-snug text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div data-hero-reveal className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="disc-btn group">
                <span>View My Work</span>
                <span className="disc-btn__disc" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="disc-btn disc-btn--ghost group"
              >
                <span>Open Resume</span>
                <span className="disc-btn__disc" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 4v12M6 12l6 6 6-6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div data-hero-reveal className="relative mx-auto w-full max-w-[470px] lg:mr-0">
            <div className="hero-photo group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-rule-strong)] bg-elevated">
              <img
                src={images.profile}
                alt="Portrait of Utkarsh Srivastava"
                width={940}
                height={1175}
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
              <div aria-hidden="true" className="hero-photo-shade absolute inset-0" />
              <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
                Portrait · 01
              </span>
            </div>

            <div className="absolute -bottom-6 left-4 border border-[var(--color-rule-strong)] bg-[color-mix(in_oklab,var(--color-elevated)_88%,transparent)] px-5 py-4 backdrop-blur-xl sm:-left-8">
              <div className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">25,000+</div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Product visits shipped
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}