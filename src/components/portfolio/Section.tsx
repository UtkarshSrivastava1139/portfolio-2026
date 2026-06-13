import { useLayoutEffect, useRef, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
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
          const headerItems = gsap.utils.toArray<HTMLElement>("[data-section-header-item]");
          const body = sectionRef.current?.querySelector<HTMLElement>("[data-section-body]");

          gsap.from(headerItems, {
            y: 12,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          });

          if (body) {
            gsap.from(body, {
              y: 12,
              opacity: 0,
              duration: 0.7,
              delay: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: body,
                start: "top 82%",
                once: true,
              },
            });
          }
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
    <section ref={sectionRef} id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="mb-14 max-w-3xl md:mb-20">
          <div data-section-header-item className="mb-5 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
              {eyebrow}
            </span>
          </div>
          <h2 data-section-header-item className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em] text-ink">
            {title}
          </h2>
          {intro && (
            <p data-section-header-item className="mt-5 max-w-2xl text-balance text-[16px] leading-relaxed text-muted md:text-[18px]">
              {intro}
            </p>
          )}
        </div>
        <div data-section-body>
          {children}
        </div>
      </div>
    </section>
  );
}
