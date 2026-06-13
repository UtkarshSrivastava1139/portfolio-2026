import { useState } from "react";
import resumeUrl from "@/assets/utkarsh-srivastava-resume.pdf";

const socials = [
  { label: "GitHub", url: "https://github.com/utkarshsrivastava1139", handle: "@utkarshsrivastava1139" },
  { label: "LinkedIn", url: "https://linkedin.com/in/utkarshsri1139", handle: "in/utkarshsri1139" },
  { label: "Twitter / X", url: "https://x.com/utkarshsri1139", handle: "@utkarshsri1139" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "utkarshsri1139@gmail.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-[var(--color-rule)] py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,122,77,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-elevated)] px-3.5 py-1.5">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-signal)]" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-muted">
            INBOX OPEN
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
          Let&apos;s build something <br />
          <span className="bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] bg-clip-text text-transparent">
            worth shipping.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-[620px] text-balance text-[16px] leading-relaxed text-muted md:text-[18px]">
          Currently open to SDE internships, research collaborations, and interesting problems. If you&apos;re working on something that matters — or hiring someone who does — my inbox is open.
        </p>

        <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:items-stretch">
          <button
            onClick={copy}
            className="group flex flex-1 items-center justify-between gap-3 rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-elevated)] px-5 py-4 text-left transition-all hover:bg-[var(--color-elevated-2)]"
          >
            <span className="truncate font-mono text-[13px] text-ink">{email}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(255,122,77,0.6)] transition-all hover:scale-[1.02]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))",
            }}
          >
            Download Resume
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-start gap-1 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[var(--color-rule-strong)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {s.label}
              </span>
              <span className="font-mono text-[13px] text-ink group-hover:text-accent">
                {s.handle} ↗
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-24 border-t border-[var(--color-rule)] pt-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
            © 2026 Utkarsh Srivastava · Built with intention · Noida, India
          </p>
        </footer>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mb-[0.12em] mt-16 w-full overflow-hidden text-center font-display text-[10vw] font-extrabold uppercase leading-[0.72] tracking-[-0.06em] text-ink opacity-[0.08]"
      >
        Utkarsh
      </div>
    </section>
  );
}
