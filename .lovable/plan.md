## Goal

Bring the Axisform composition + scroll-motion craft into the **Hero** and the **band before `FeaturedWork`**, while staying inside the current **dark product-site system** (bg `#0A0A0F`, ink `#FAFAFA`, accent `#FF7A4D→#FFB347`, Inter Tight + JetBrains Mono, Instrument Serif italic only for accents). No palette/type change.

New order before FeaturedWork:
```
Hero  →  Signals (new)  →  ProofStrip (restyled)  →  FeaturedWork
```

Memory note: I'll also update `mem://index.md` to remove the stale Dossier rule and replace it with the current Superlist/Pirsch-inspired dark rule.

---

## 1. Hero rebuild — `src/components/portfolio/Hero.tsx`

Keep: top meta rail, `CursorOrb`, grid overlay, ResumeModal wiring, hairline 4-cell spec rail, disc CTAs. Reorganise into three bands inside one section:

**Band A — top meta rail** (unchanged).

**Band B — main grid** (left 7 / right 5):
- Left: existing big `UTKARSH / SRIVASTAVA` stacked wordmark + `I build software that ships.` line + spec rail + CTAs (unchanged structure, refined timing).
- Right: replace the concentric-rings portrait with a **fanned card stack** (Axisform's signature):
  - 3 rounded cards (`rounded-[22px]`), offset rotation `-7° / 0° / +6°`, translated `-32px / 0 / +28px` x and `+24px / 0 / +18px` y.
  - Top card = portrait photo. Back cards = elevated surfaces (`bg-elevated-2`, `border border-rule-strong`) with a single Instrument Serif italic `★` glyph and a mono caption `FIELD 04 / 2026`.
  - Cards rise on load with the existing `blur-rise` keyframe (staggered 0 / 90 / 180ms).
  - Scroll-tied tilt via existing `data-parallax="0.12"` on the back cards; top card uses `0.04` so it leads.
  - Hover on the stack: top card lifts 8px and back cards splay apart by 2° each (CSS `:hover` on a wrapper, `transition: transform 420ms cubic-bezier(.2,.7,.2,1)`).

**Band C — anchored serif wordmark** (full-bleed at hero bottom):
- One line: `Utkarsh` in **Instrument Serif italic**, `clamp(6rem, 17vw, 16rem)`, color `ink/85`, leading `0.85`, kerning `-0.045em`, sitting against the hero's bottom edge (`overflow-hidden` on the section).
- Per-character split with staggered `blur-rise` (~25ms cadence).
- A floating mono chip docks at bottom-right: `★ SOFTWARE · AI · SYSTEMS / GLOBAL — FIELD 04 / 2026`, hairline border, `bg-elevated/60` + `backdrop-blur`.

Mobile (`<640px`): wordmark drops to `clamp(3.5rem, 22vw, 6rem)`; card stack collapses to a single card.

## 2. New section — `src/components/portfolio/Signals.tsx`

Mounted between `<Hero />` and `<ProofStrip />` in `src/routes/index.tsx`.

Layout (12-col, container `max-w-[1280px]`):
- Left col 4: accent dot + mono eyebrow `STUDIO METHOD`, then a short paragraph (`text-muted`, 14–15px): *"I work in loops — read the field, reduce the noise, ship the system, then sharpen what survives contact."*
- Right col 8: **five verbs stacked, each on its own line**, in **Instrument Serif italic** (the project's serif accent face), `clamp(3.25rem, 9vw, 8rem)`, `leading-[1]`, `tracking-[-0.03em]`, color `ink`, with progressive horizontal indent `0 / 14% / 4% / 20% / 8%`:
  ```
  observe
            compress
      prototype.
                  publish
        repeat
  ```
- Each verb: per-word slide-up + blur reveal (`240ms`, `90ms` stagger) when it enters the viewport via the existing `ScrollFX` `.reveal` observer; plus a small `data-parallax` horizontal drift so the column feels alive.
- Bottom hairline rail with mono meta: `LOOP 04 — 2026  ·  OBSERVE → REPEAT`. Accent dot pulses (use existing `signal` color or accent).

## 3. ProofStrip restyle — `src/components/portfolio/ProofStrip.tsx`

Borrow Axisform's "Systems" composition without losing the proof-bar purpose:
- Wrap the existing 4 proof tiles in a `relative` shell that hosts a **giant outlined numeral** behind them — `04` (matches "FIELD 04") in Instrument Serif italic, `clamp(16rem, 32vw, 28rem)`, `text-ink/[0.04]`, tracking `-0.04em`, slow parallax (`data-parallax="0.1"`).
- Top rail: left mono eyebrow `PROOF / 04 SIGNALS`, right mono `FIELD 04 / 2026`, separated from tiles by `border-t border-rule`.
- Tiles gain a staggered `.reveal-up` (delays `0 / 90 / 180 / 270`) and a small accent diagonal stroke in their top-right corner that draws in on hover (`width: 0 → 32px` over 280ms).

## 4. Motion primitives — `src/styles.css`

Reuse existing `@keyframes blur-rise` and `@keyframes word-fade-up`. Add only what's missing:
- `@keyframes card-float` — slow ±4px Y drift for back cards (8s ease-in-out infinite, only on `:not(:hover)`).
- `@keyframes mark-in` — `opacity 0→1` + `translateY(18px → 0)` + `filter: blur(8px → 0)` for Signals verbs.
- `.fan-card` utility — base radius, `border border-rule-strong`, layered `box-shadow` tuned for `bg-base`.
- `.serif-italic` utility — `font-family: var(--font-serif); font-style: italic; font-weight: 400;` (reused for hero wordmark + Signals verbs + Proof numeral).

All gated by `prefers-reduced-motion` — reduced motion = final state only.

## 5. Out of scope

- No palette / type system change (dark Superlist+Pirsch system stays).
- No edits to About / Experience / Research / Leadership / Recognition / Certificates / LifeBeyondCode / Contact / Footer / Resume modal / Nav / CommandPalette / Sidewriter.
- No new libraries (no GSAP / Framer Motion / Lenis). CSS keyframes + existing `ScrollFX` IntersectionObserver + `data-parallax` only.

---

## Files

- edit: `src/components/portfolio/Hero.tsx` — replace portrait block with fanned card stack; add bottom serif wordmark band.
- create: `src/components/portfolio/Signals.tsx` — new staggered-verbs manifesto section.
- edit: `src/components/portfolio/ProofStrip.tsx` — background numeral + meta rails + reveal stagger + hover stroke.
- edit: `src/routes/index.tsx` — mount `<Signals />` between Hero and ProofStrip.
- edit: `src/styles.css` — add `card-float`, `mark-in`, `.fan-card`, `.serif-italic`.
- edit: `mem://index.md` — replace stale Dossier rule with the current dark Superlist/Pirsch system note.
