import { Section } from "./Section";
import { certificates } from "./data";

export function Certificates() {
  // duplicate for seamless marquee
  const row1 = [...certificates, ...certificates];
  const row2 = [...certificates.slice().reverse(), ...certificates.slice().reverse()];

  return (
    <Section
      id="certificates"
      eyebrow="08 · Certificates"
      title={
        <>
          30+ certificates, <br className="hidden md:block" />
          <span className="text-muted">awards & recognitions.</span>
        </>
      }
      intro="A scrolling wall of hackathons, ambassador roles, internships, and competitions — receipts for the work."
    >
      <div className="-mx-6 lg:-mx-10">
        {[row1, row2].map((row, i) => (
          <div key={i} className="group relative overflow-hidden py-3">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-base)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-base)] to-transparent"
            />
            <div
              className="flex w-max gap-5"
              style={{
                animation: `marquee ${i === 0 ? 90 : 110}s linear infinite`,
                animationDirection: i === 1 ? "reverse" : "normal",
              }}
            >
              {row.map((c, idx) => (
                <figure
                  key={`${i}-${idx}-${c.title}`}
                  className="group/card relative w-[300px] flex-none overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-elevated)] transition-all hover:border-[var(--color-rule-strong)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--color-base)]">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="p-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-accent">
                      <span>{c.category}</span>
                      <span className="text-faint">·</span>
                      <span className="text-faint">{c.year}</span>
                    </div>
                    <div className="mt-2 line-clamp-2 text-[13px] font-semibold leading-snug text-ink">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[12px] text-muted">{c.org}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}