import { Section } from "./Section";
import { leadership } from "./data";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="06 · Leadership"
      title={
        <>
          Built rooms, <br className="hidden md:block" />
          <span className="text-muted">led teams, shipped events.</span>
        </>
      }
    >
      <div className="space-y-5">
        {leadership.map((r) => (
          <article
            key={r.org}
            className="group grid items-start gap-6 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-6 transition-all hover:border-[var(--color-rule-strong)] md:grid-cols-12 md:gap-10 md:p-10"
          >
            <div className="md:col-span-3">
              <div className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {r.org}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                {r.period}
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {r.title}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold leading-[1.2] tracking-tight text-ink md:text-2xl">
                {r.headline}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{r.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
