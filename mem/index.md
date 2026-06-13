# Project Memory

## Core
Portfolio v3 for Utkarsh Srivastava — dark product-site aesthetic inspired by Superlist + Pirsch. NEVER revert to the old Editorial Dossier (paper palette) — user explicitly rejected it.
Palette: base #0A0A0F, elevated #14141B / #1B1B25, ink #FAFAFA, muted #8B8B95, faint #5A5A65, rule rgba(255,255,255,0.08), accent #FF7A4D (→ #FFB347 amber), signal #22C55E.
Type stack: Inter Tight (display + body), JetBrains Mono (tags/labels/marginalia), Instrument Serif italic ONLY for accents (numerals, big wordmarks, manifesto verbs).
Content sourced verbatim from Notion PORTFOLIO MASTER DOCUMENT v2 — never invent copy.
Section order (do not reorder): Hero → Signals → ProofStrip → FeaturedWork → CurrentlyBuilding → About → Experience → Research → Leadership → Recognition → Certificates → LifeBeyondCode → Contact.
Build portfolio components from scratch under src/components/portfolio/ — do not pull shadcn/Radix into portfolio surfaces.
Resume PDF served from /utkarsh-srivastava-resume.pdf — placeholder until user provides real file.
Motion: CSS keyframes + existing ScrollFX (IntersectionObserver + data-parallax). No GSAP / Framer Motion / Lenis. Always gate animations on prefers-reduced-motion.
