import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { ScrollFX } from "./ScrollFX";

export type CaseStudyDecision = { title: string; body: string };
export type CaseStudyMetric = { value: string; label: string };

export type CaseStudyProps = {
  /** Project name, e.g. "e-Nivaran" */
  name: string;
  /** Tagline/eyebrow above the title, e.g. "Civic Infrastructure · 2026" */
  eyebrow: string;
  /** One-line outcome shown under the name */
  outcome: string;
  /** Role badge text, e.g. "Founder & Full-Stack Lead" */
  role: string;
  /** Stack tags */
  stack: string[];
  /** Optional hero image */
  image?: string;
  /** External live link */
  liveHref?: string;
  /** Optional GitHub repo */
  repoHref?: string;

  problem: string;
  myRole: string;
  architecture: string;
  /** Optional architecture diagram image URL */
  architectureImage?: string;
  decisions: CaseStudyDecision[];
  metrics: CaseStudyMetric[];
  outcomes: string;
  lesson: string;

  /** Next case study slug + label, for footer CTA */
  next: { slug: "enivaran" | "roots" | "hack4bihar" | "eventportal"; name: string };
};

function SectionBlock({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--color-rule)] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            {number} · {label}
          </div>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            {title}
          </h2>
        </div>
        <div className="text-[16px] leading-relaxed text-muted md:col-span-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export function CaseStudy(p: CaseStudyProps) {
  return (
    <div className="relative min-h-dvh bg-base text-ink antialiased">
      <ScrollFX />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-[1100px] -translate-x-1/2 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,122,77,0.18) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-[1100px] px-6">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-muted transition-colors hover:text-accent"
            >
              <span aria-hidden>←</span> Back to work
            </Link>

            <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {p.eyebrow}
                </p>
                <h1 className="mt-3 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
                  {p.name}
                </h1>
                <p className="mt-5 max-w-[640px] text-balance text-[18px] leading-relaxed text-muted md:text-[20px]">
                  {p.outcome}
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    Role
                  </div>
                  <div className="mt-1.5 font-display text-[15px] font-semibold text-ink">
                    {p.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Stack chips */}
            <div className="mt-8 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[var(--color-rule)] bg-[var(--color-elevated-2)] px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              {p.liveHref && (
                <a
                  href={p.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,122,77,0.55)]"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))",
                  }}
                >
                  View live ↗
                </a>
              )}
              {p.repoHref && (
                <a
                  href={p.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-elevated)] px-5 py-2.5 text-[13px] font-semibold text-ink"
                >
                  Source code ↗
                </a>
              )}
            </div>

            {/* Hero image */}
            {p.image && (
              <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--color-rule-strong)] bg-[var(--color-elevated)]">
                <img
                  src={p.image}
                  alt={`${p.name} project interface`}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
          </div>
        </section>

        <SectionBlock number="01" label="Problem" title="What was broken before this existed.">
          <p className="whitespace-pre-line">{p.problem}</p>
        </SectionBlock>

        <SectionBlock number="02" label="My Role" title="What I actually built.">
          <p className="whitespace-pre-line">{p.myRole}</p>
        </SectionBlock>

        <SectionBlock number="03" label="Architecture" title="How it works under the hood.">
          <p className="whitespace-pre-line">{p.architecture}</p>
          {p.architectureImage && (
            <div className="mt-8 overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-elevated)]">
              <img src={p.architectureImage} alt={`${p.name} architecture`} className="w-full" />
            </div>
          )}
          {!p.architectureImage && (
            <div className="mt-8 grid place-items-center rounded-xl border border-dashed border-[var(--color-rule-strong)] bg-[var(--color-elevated)] py-16 font-mono text-[12px] text-faint">
              Architecture summarized above
            </div>
          )}
        </SectionBlock>

        <SectionBlock number="04" label="Key Decisions" title="The trade-offs that mattered.">
          <ul className="space-y-6">
            {p.decisions.map((d, i) => (
              <li key={i} className="border-l-2 border-[var(--color-accent)] pl-5">
                <div className="font-display text-[18px] font-semibold text-ink">
                  {d.title}
                </div>
                <p className="mt-2 text-[15px] text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock number="05" label="Metrics & Outcomes" title="The hard numbers.">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {p.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-5"
              >
                <div className="font-display text-3xl font-semibold tracking-tight text-ink">
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-muted">{p.outcomes}</p>
        </SectionBlock>

        <SectionBlock number="06" label="Lessons" title="One honest takeaway.">
          <blockquote className="border-l-2 border-[var(--color-accent)] pl-5 font-display text-[20px] italic leading-relaxed text-ink md:text-[24px]">
            “{p.lesson}”
          </blockquote>
        </SectionBlock>

        {/* Footer CTA */}
        <section className="border-t border-[var(--color-rule)] py-20">
          <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                Next case study
              </div>
              <Link
                to="/work/$caseSlug"
                params={{ caseSlug: p.next.slug }}
                className="mt-2 inline-block font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-[-0.025em] text-ink transition-colors hover:text-accent"
              >
                {p.next.name} →
              </Link>
            </div>
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-elevated)] px-5 py-2.5 font-mono text-[12px] text-ink hover:border-[var(--color-accent)] hover:text-accent"
            >
              ← All work
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
