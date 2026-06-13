# Hi, I'm Utkarsh! 👋

I'm a Full-Stack Developer and builder specializing in high-performance software, AI integrations, and scalable systems. Currently pursuing my B.Tech in CSE (Data Science), I serve as the Vice President of EDC JSSUN, IEEE JSSUN SB Webmaster & UP Section Co-Lead for the IEEE Xtreme 20.0, and student coordinator for the CSE Technical Council. 

My work bridges the gap between research and production—having built civic AI tools showcased to the Government of Delhi at Bharat Mandapam, climate-math verification models representing India at the IEEE YESIST12 Grand Finals in Malaysia, and production event portals handling active real-time WebSocket bidding.

Below are the details of my portfolio codebase that you may explore:

---

# Portfolio — Utkarsh Srivastava


[![Stack](https://img.shields.io/badge/Framework-TanStack%20Start-FF4154?style=for-the-badge&logo=react)](https://tanstack.com/router/v1/docs/start/overview)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Runtime](https://img.shields.io/badge/Runtime-Bun-fbf0df?style=for-the-badge&logo=bun)](https://bun.sh/)
[![Build Tool](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)

A premium, highly interactive digital portfolio showcasing full-stack systems, published IEEE research, and award-winning products. The design features a dark product-site aesthetic inspired by platforms like *Superlist* and *Pirsch*, powered by modern web technologies, smooth inertial animations, and developer-centric interactions.

---

## ✨ Design & Aesthetic Highlights

- **Dark Product-Site Theme:** Sleek dark background (`#0A0A0F`) paired with vibrant brand accents (orange-peach gradient, `#FF7A4D`), clean borders, and minimalist typography.
- **Inertial Smooth Scrolling:** Integrated with **Lenis Scroll** for custom-tuned scrolling inertia.
- **Micro-Animations & Transitions:** Orchestrated with **GSAP (GreenSock)** and CSS-first transitions for responsive card hovers, fade-ins, and element tracking.
- **SVG Signature Preloader:** An immersive intro animation showcasing an animated drawing of the author's signature and loading progress.
- **Custom Interactive Cursor:** A magnetic custom cursor tracker that responds differently depending on the active element type (link, text input, button, or canvas).
- **Command Palette:** Keyboard-friendly `Cmd+K` / `Ctrl+K` navigation interface allowing users to toggle animations, view resumes, navigate sections, or start chats.

---

## 🛠️ Tech Stack

### Core Frameworks & Routing
- **[TanStack Start](https://tanstack.com/router/v1/docs/start/overview):** Next-generation React framework supporting full-stack server-side rendering (SSR), hydration, and file-based routing.
- **[TanStack Router](https://tanstack.com/router/v1):** Strict type-safe routing using directory-based layouts (`src/routes`).
- **[React 19](https://react.dev/):** Utilizes the latest React features and optimizations.
- **[TypeScript](https://www.typescriptlang.org/):** Fully typed components, routes, data mappings, and animation structures.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/):** Exploits Tailwind's new CSS-first engine (`@theme` definitions inside `styles.css`) for seamless customization, custom variants, and rapid layouts.
- **[Radix UI Primitives](https://www.radix-ui.com/):** Headless, accessible UI elements like Accordions, Dialogs, Tooltips, and Menus.
- **[Lucide React](https://lucide.dev/):** Premium modern icons for navigation and info blocks.

### Animation & Visuals
- **[GSAP](https://gsap.com/):** Powerhouse animation engine driving layout transformations.
- **[Lenis](https://lenis.darkroom.engineering/):** Smooth scrolling library configuration.
- **[Recharts](https://recharts.org/):** Declarative charts used for displaying data constraints and stats dynamically.

---

## 📂 Project Architecture

```filepath
.
├── src/
│   ├── assets/              # Static assets (images, logos, certificates)
│   ├── components/
│   │   ├── portfolio/       # Core layout components and portfolio sections
│   │   │   ├── About.tsx             # Interactive profile and bio
│   │   │   ├── CaseStudy.tsx         # Structured, beautiful case study template
│   │   │   ├── Certificates.tsx      # Carousel of verified credentials
│   │   │   ├── CommandPalette.tsx    # Cmd+K custom terminal widget
│   │   │   ├── Contact.tsx           # Validated contact form
│   │   │   ├── CustomCursor.tsx      # SVG magnetic mouse tracker
│   │   │   ├── FeaturedWork.tsx      # Detailed cards highlighting prime projects
│   │   │   ├── Hero.tsx              # Card stack fan-out entry
│   │   │   ├── Leadership.tsx        # Section detailing community leading roles
│   │   │   ├── LifeBeyondCode.tsx    # Slide collage of community milestones
│   │   │   ├── Nav.tsx               # Magnetic floating nav header
│   │   │   ├── Preloader.tsx         # Animated custom signature loader
│   │   │   ├── data.ts               # Core database object for the portfolio
│   │   │   └── ...                   # Layout helper providers
│   │   └── ui/              # Reusable UI component blocks (Dialog, Tooltip, etc.)
│   ├── routes/              # TanStack Router folder
│   │   ├── __root.tsx       # Root layout defining headers, portals, and HTML shell
│   │   ├── index.tsx        # Portfolio home route `/` containing all sections
│   │   └── work.$caseSlug.tsx# Dynamic case study route `/work/:caseSlug`
│   ├── styles.css           # Global CSS stylesheet & Tailwind theme directives
│   ├── main.tsx             # Client entrypoint
│   └── routeTree.gen.ts     # Auto-generated TanStack Router output
├── tsconfig.json            # TypeScript settings configuration
└── vite.config.ts           # Vite server plugin setup
```

---

## 🚀 Key Sections & Features

1. **Hero Header & Fan Stack:** An interactive showcase showcasing the latest accomplishments stacked on top of each other. Hovering fans the cards outward using custom 3D CSS transforms.
2. **Featured Work & Case Studies:** Showcases core engineering highlights, structured around:
   - **e-Nivaran:** Civic AI system showcased to the Government of Delhi at Bharat Mandapam.
   - **ROOTS:** Climate verification system utilizing YOLOv8 computer vision and LLMs, representing India at IEEE YESIST12 Global Finals.
   - **Hack4Bihar:** Migrated dynamic national hackathon site, serving over 25,000+ visits.
   - **Event Portal:** End-to-end WebSocket-based live auction and participant coordinator platform.
3. **Research Publications:** Details published Scopus-indexed research paper on Edge AI for rural classrooms.
4. **Community & Leadership:** Showcases role as Vice President of EDC JSSUN, Webmaster & UP Section Co-lead at IEEE, and research coordinator.
5. **Certificates & Life Beyond Code:** High-quality carousel arrays demonstrating professional credentials alongside a visual slider collage of talks, panels, and international events.

---

## ⚙️ Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
It is highly recommended to use **Bun** for rapid package management, though **npm** or **yarn** are fully supported.
```bash
# Check if bun is installed
bun --version
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/UtkarshSrivastava1139/portfolio-2026.git
   ```
2. Navigate to the project root:
   ```bash
   cd portfolio-2026
   ```
3. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

### Development Scripts
Run the local dev server using Vite:
```bash
bun dev
# or
npm run dev
```

Build the production-optimized static bundles (Nitro SSR server bundle + React client assets):
```bash
bun run build
# or
npm run build
```

Preview the production build locally:
```bash
bun run preview
# or
npm run preview
```

---

## 🔍 SEO & Web Standards

- **Semantic Layouts:** Structured explicitly with HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`).
- **OpenGraph & Social Metadata:** Fully configured metadata for rich indexing on LinkedIn, Twitter, and Search engines.
- **Schema Markup:** Implements JSON-LD schemas representing a `Person` profile and dynamic `Article` configurations for case study routes.
- **Preloader Optimizations:** Handled via custom React state hooks preventing page flicker and ensuring rapid initial load speeds.
