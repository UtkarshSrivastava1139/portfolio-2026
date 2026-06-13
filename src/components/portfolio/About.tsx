import { Section } from "./Section";
import { images } from "./data";

const skills = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js 15", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Django", "GraphQL"] },
  { group: "AI / ML", items: ["YOLOv8", "Scikit-Learn", "Gemini API", "OpenAI", "TF-IDF NLP"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB Atlas", "Prisma", "Supabase", "MySQL"] },
  { group: "Infra", items: ["Docker", "AWS", "Vercel", "Netlify", "Git / GitHub", "Postman"] },
];

const paragraphs = [
  "I didn't choose Computer Science — I was already doing it. Before my first semester, I'd built and shipped websites for schools as a freelancer, charging real money for real work. College didn't introduce me to development; it gave me a framework for what I was already drawn to. What it did introduce me to was research and community — and those two things changed the trajectory completely.",
  "I'm not a build-first person. I plan — concisely, but properly — before a single line of code gets written. Then I prototype, put it in front of real people, collect honest feedback, and iterate until it's actually good. That cycle is how civic infrastructure ends up at Bharat Mandapam and how a hackathon platform handles 25,000 visitors without breaking. I'm also building toward something of my own — a product, a company, something that matters. When an idea hits at 2am, I'm working at 2am.",
  "The version of me that started college was quiet — someone who had the knowledge but not the confidence to fill a room with it. Communities changed that. IEEE, EDC, RAC — they taught me how to lead, how to disagree productively and still ship together. Today I lead teams of hundreds and I still think that transformation was the most important thing my undergraduate years gave me.",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="04 · About"
      title={
        <>
          The person <br className="hidden md:block" />
          <span className="text-muted">behind the work.</span>
        </>
      }
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-rule-strong)] bg-[var(--color-elevated)]">
              <img
                src={images.profile}
                alt="Utkarsh Srivastava"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Noida, India · B.Tech CSE (Data Science) · 2024–2028
                </div>
                <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                  Utkarsh Srivastava
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-6">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Current Focus
              </div>
              <ul className="mt-4 space-y-3 text-[14px] text-muted">
                <li className="flex gap-3"><span className="text-accent">→</span> Scalable web apps with Next.js & Node.js</li>
                <li className="flex gap-3"><span className="text-accent">→</span> AI/ML integration in real products</li>
                <li className="flex gap-3"><span className="text-accent">→</span> Building toward something of my own</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="space-y-7 text-[17px] leading-[1.7] text-ink md:text-[18px]">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:mt-1" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-[var(--color-rule)] pt-10">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-wider text-faint">
              Stack & Tooling
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {s.group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <span
                        key={i}
                        className="rounded-md border border-[var(--color-rule)] bg-[var(--color-elevated)] px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
