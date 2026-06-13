import { useLayoutEffect, useRef } from "react";
import { Section } from "./Section";
import { featuredProjects, compactProjects, tier3Projects } from "./data";
import { Link } from "@tanstack/react-router";

export function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !sectionRef.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-featured-project]").forEach((project) => {
            const visual = project.querySelector<HTMLElement>("[data-project-visual]");
            const details = project.querySelector<HTMLElement>("[data-project-details]");
            if (!visual || !details) return;

            gsap.from([visual, details], {
              x: (index) => (index === 0 ? -30 : 30),
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project,
                start: "top 80%",
                once: true,
              },
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
    <Section
      id="work"
      eyebrow="03 · Featured Work"
      title={
        <>
          Things I&apos;ve built — <br className="hidden md:block" />
          <span className="text-muted">that actually shipped.</span>
        </>
      }
      intro="A selection of production systems, hackathon platforms, and research-grade tools. Real users, real deadlines, real outcomes."
    >
      {/* Tier 1 — alternating big blocks */}
      <div ref={sectionRef} className="space-y-24 md:space-y-32">
        {featuredProjects.map((p, i) => (
          <article
            key={p.slug}
            data-featured-project
            className="group/project grid items-center gap-10 rounded-2xl border border-transparent p-3 transition-[transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-[color-mix(in_oklab,var(--color-accent)_20%,transparent)] md:grid-cols-12 md:gap-14 md:p-5"
          >
            <div data-project-visual className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group/img relative block overflow-hidden rounded-2xl border border-[var(--color-rule-strong)] bg-[var(--color-elevated)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover/img:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(255,122,77,0.18), transparent 50%)",
                  }}
                />
                <img
                  src={p.image}
                  alt={`${p.name} project interface — ${p.headline}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover/img:scale-[1.03]"
                />
              </a>
            </div>

            <div data-project-details className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {p.label}
              </div>
              <div className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                {p.name}
              </div>
              <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
                {p.headline}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.body}</p>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {p.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-faint"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[var(--color-rule)] bg-[var(--color-elevated-2)] px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  to="/work/$caseSlug"
                  params={{ caseSlug: p.caseSlug }}
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold text-accent transition-colors hover:text-[var(--color-accent-to)]"
                >
                  Read case study <span aria-hidden className="transition-transform duration-200 group-hover/project:translate-x-1">→</span>
                </Link>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] text-muted transition-colors hover:text-ink"
                  >
                    View live ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Tier 2 — compact grid */}
      <div className="mt-32 border-t border-[var(--color-rule)] pt-16">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            More work
          </h3>
          <a
            href="https://github.com/utkarshsrivastava1139"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-muted hover:text-accent"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {compactProjects.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] transition-all hover:-translate-y-1 hover:border-[var(--color-rule-strong)] hover:bg-[var(--color-elevated-2)]"
            >
              <a
                href={c.href ?? c.repoHref ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[var(--color-rule)] bg-[var(--color-base)]"
              >
                <img
                  src={c.image}
                  alt={`${c.name} project interface`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  {c.tag}
                </div>
                <div className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                  {c.name}
                </div>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">
                  {c.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[var(--color-rule)] px-2 py-0.5 font-mono text-[10px] text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-accent hover:text-[var(--color-accent-to)]"
                    >
                      Live →
                    </a>
                  )}
                  {c.repoHref && (
                    <a
                      href={c.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-faint hover:text-muted"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* And more — sleek CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-8 md:flex-row">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
              And more
            </div>
            <p className="mt-2 text-[15px] text-muted">
              {tier3Projects.join(" · ")}
            </p>
          </div>
          <a
            href="https://github.com/utkarshsrivastava1139"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-elevated-2)] px-5 py-2.5 font-mono text-[12px] text-ink transition-all hover:border-[var(--color-accent)] hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Check on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
