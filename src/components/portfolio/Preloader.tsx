import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const SESSION_KEY = "portfolio-preloader-seen-v3";

export function Preloader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLHeadingElement>(null);
  const signatureRef = useRef<SVGTextElement>(null);
  const signatureFillRef = useRef<SVGTextElement>(null);
  const flourishRef = useRef<SVGPathElement>(null);
  const penRef = useRef<SVGCircleElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hasPlayed = window.sessionStorage.getItem(SESSION_KEY) === "true";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasPlayed || reducedMotion) {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setLoading(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.sessionStorage.setItem(SESSION_KEY, "true");
    let cancelled = false;
    let cleanup = () => {};

    void import("gsap").then(({ gsap }) => {
      if (cancelled || !overlayRef.current) return;

      const counter = { value: 0 };
      const context = gsap.context(() => {
        gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(sweepRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(monogramRef.current, { autoAlpha: 0, y: 44, scale: 0.92 });
        gsap.set(signatureRef.current, { strokeDasharray: 1100, strokeDashoffset: 1100 });
        gsap.set(signatureFillRef.current, { autoAlpha: 0 });
        gsap.set(flourishRef.current, { strokeDasharray: 520, strokeDashoffset: 520 });
        gsap.set(penRef.current, { autoAlpha: 0, x: -250 });
        gsap.set(statusRef.current, { autoAlpha: 0, y: 12 });
        gsap.set(footerRef.current, { autoAlpha: 0, x: 16 });

        const timeline = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = previousOverflow;
            setLoading(false);
          },
        });

        timeline
          .to(monogramRef.current, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          })
          .to(signatureRef.current, {
            strokeDashoffset: 0,
            duration: 1.25,
            ease: "power1.inOut",
          }, 0.42)
          .to(signatureFillRef.current, { autoAlpha: 1, duration: 0.45, ease: "power1.out" }, 1.28)
          .to(flourishRef.current, { strokeDashoffset: 0, duration: 0.72, ease: "power2.inOut" }, 1.18)
          .to(penRef.current, { autoAlpha: 1, duration: 0.08 }, 1.18)
          .to(penRef.current, { x: 250, duration: 0.72, ease: "power2.inOut" }, 1.18)
          .to(penRef.current, { autoAlpha: 0, duration: 0.12 }, 1.86)
          .to(statusRef.current, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.72)
          .to(footerRef.current, { autoAlpha: 1, x: 0, duration: 0.4, ease: "power2.out" }, 0.82)
          .to(
            counter,
            {
              value: 100,
              duration: 1.7,
              ease: "power3.inOut",
              onUpdate: () => {
                if (counterRef.current) {
                  counterRef.current.textContent = Math.round(counter.value)
                    .toString()
                    .padStart(3, "0");
                }
              },
            },
            0.65,
          )
          .to(
            progressRef.current,
            { scaleX: 1, duration: 1.7, ease: "power3.inOut" },
            0.65,
          )
          .to(sweepRef.current, { scaleX: 1, duration: 0.45, ease: "power3.inOut" }, 2.18)
          .to(contentRef.current, { autoAlpha: 0, y: -18, duration: 0.28, ease: "power2.in" }, 2.42)
          .to(overlayRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.75,
            ease: "power4.inOut",
          }, 2.52);
      }, overlayRef);

      cleanup = () => context.revert();
    });

    return () => {
      cancelled = true;
      cleanup();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={loading}
        className={loading ? "pointer-events-none opacity-0" : "opacity-100"}
      >
        {children}
      </div>

      {loading && (
        <div
          ref={overlayRef}
          role="status"
          aria-label="Loading portfolio"
          className="preloader-shell fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-preloader"
        >
          <div className="preloader-grid absolute inset-0" aria-hidden="true" />
          <div className="preloader-glow absolute left-1/2 top-1/2 size-[min(76vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />

          <div ref={contentRef} className="relative z-10 flex flex-col items-center px-6">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.38em] text-faint sm:text-[10px]">
              Full-stack developer · India
            </p>
            <div className="relative grid place-items-center">
              <h1
                ref={monogramRef}
                className="preloader-mark font-display text-[clamp(6.5rem,19vw,15rem)] font-bold leading-[0.72] tracking-[-0.09em] text-ink"
              >
                US<span className="text-preloader-accent">.</span>
              </h1>
              <svg
                className="pointer-events-none absolute left-1/2 top-1/2 w-[clamp(18rem,50vw,44rem)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
                viewBox="0 0 720 180"
                aria-hidden="true"
              >
                <text
                  ref={signatureRef}
                  x="360"
                  y="112"
                  textAnchor="middle"
                  className="preloader-signature-stroke"
                >
                  Utkarsh Srivastava
                </text>
                <text
                  ref={signatureFillRef}
                  x="360"
                  y="112"
                  textAnchor="middle"
                  className="preloader-signature-fill"
                >
                  Utkarsh Srivastava
                </text>
                <path
                  ref={flourishRef}
                  d="M110 133 C245 158 466 151 610 124 C564 149 539 154 503 154"
                  className="preloader-signature-flourish"
                />
                <circle ref={penRef} cx="360" cy="145" r="3.5" className="fill-preloader-accent" />
              </svg>
            </div>

            <div ref={statusRef} className="preloader-status mt-12 w-[min(72vw,240px)] sm:mt-14">
              <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-muted">
                <span>Initialising</span>
                <span><span ref={counterRef} className="tabular-nums text-ink">000</span>%</span>
              </div>
              <span className="block h-px w-full overflow-hidden bg-[var(--color-rule-strong)]">
                <span ref={progressRef} className="preloader-progress block h-full w-full bg-preloader-accent" />
              </span>
            </div>
          </div>

          <span ref={sweepRef} className="preloader-sweep absolute inset-x-0 bottom-0 z-20 h-1 bg-preloader-accent" aria-hidden="true" />

          <div ref={footerRef} className="preloader-footer absolute inset-x-6 bottom-6 flex items-end justify-between font-mono text-[8px] uppercase tracking-[0.22em] text-faint sm:inset-x-10 sm:bottom-9 sm:text-[9px]">
            <span className="hidden sm:block">36.92° N / 80.95° E</span>
            <span className="ml-auto flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-rule-strong)]" />
              Portfolio / 2026
            </span>
          </div>
        </div>
      )}
    </>
  );
}