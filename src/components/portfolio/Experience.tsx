import { Section } from "./Section";
import { experience } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="05 · Experience"
      title={
        <>
          Where I&rsquo;ve worked, <br className="hidden md:block" />
          <span className="text-muted">what I shipped there.</span>
        </>
      }
      intro="Internships and roles that pushed me from playing with code to shipping production systems on real deadlines."
    >
      <ol className="relative space-y-6 md:space-y-8">
        {experience.map((e, idx) => (
          <li
            key={e.company}
            className="group relative grid items-start gap-6 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-6 transition-all hover:border-[var(--color-rule-strong)] md:grid-cols-12 md:gap-10 md:p-10"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {String(idx + 1).padStart(2, "0")} · {e.period}
              </div>
              <div className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {e.company}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent">
                {e.role}
              </div>
            </div>
            <ul className="space-y-3 md:col-span-8">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}