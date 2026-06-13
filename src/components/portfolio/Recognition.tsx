import { Section } from "./Section";
import { featuredAchievements, recognitionGrid } from "./data";

export function Recognition() {
  return (
    <Section
      id="recognition"
      eyebrow="07 · Recognition"
      title={
        <>
          Selected <span className="text-muted">moments</span> <br className="hidden md:block" />
          worth noting.
        </>
      }
    >
      {/* Tier 1 featured */}
      <div className="grid gap-4 md:grid-cols-2">
        {featuredAchievements.map((a) => (
          <article
            key={a.eyebrow}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-7 transition-all hover:border-[var(--color-rule-strong)] hover:bg-[var(--color-elevated-2)] md:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,122,77,0.5), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {a.eyebrow}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-[1.2] tracking-tight text-ink md:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{a.body}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Tier 2 table */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-[var(--color-rule)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-rule)] bg-[var(--color-elevated)]">
              <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-faint md:px-7">Achievement</th>
              <th className="hidden px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-faint sm:table-cell md:px-7">Organizer</th>
              <th className="px-5 py-4 text-right font-mono text-[10px] uppercase tracking-wider text-faint md:px-7">Result</th>
            </tr>
          </thead>
          <tbody>
            {recognitionGrid.map((r, i) => (
              <tr
                key={r.achievement}
                className={`border-b border-[var(--color-rule)] last:border-b-0 transition-colors hover:bg-[var(--color-elevated)] ${
                  i % 2 === 1 ? "bg-[color-mix(in_oklab,var(--color-elevated)_30%,transparent)]" : ""
                }`}
              >
                <td className="px-5 py-4 text-[14px] font-medium text-ink md:px-7">
                  {r.achievement}
                  <div className="mt-1 text-[12px] text-muted sm:hidden">{r.organizer}</div>
                </td>
                <td className="hidden px-5 py-4 text-[14px] text-muted sm:table-cell md:px-7">
                  {r.organizer}
                </td>
                <td className="px-5 py-4 text-right font-mono text-[12px] text-accent md:px-7">
                  {r.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
