import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy, type CaseStudyProps } from "@/components/portfolio/CaseStudy";
import { images } from "@/components/portfolio/data";

type Slug = "enivaran" | "roots" | "hack4bihar" | "eventportal";

const SITE = "https://utkarshs-crafted-opus.lovable.app";

const CASES: Record<Slug, CaseStudyProps & { metaDescription: string }> = {
  enivaran: {
    name: "e-Nivaran",
    eyebrow: "Civic Infrastructure · 2026",
    outcome:
      "An AI-powered citizen complaint platform that reached the Grand Finale of Hack4Delhi at Bharat Mandapam — Top 30 of 1,500+ teams, showcased to the Government of Delhi.",
    role: "Founder & Full-Stack Lead",
    stack: ["Next.js 15", "TypeScript", "MongoDB Atlas", "FastAPI", "Tailwind CSS"],
    image: images.enivaran,
    liveHref: "https://www.enivaran.app/",
    problem:
      "Citizen complaint systems are often fragmented across departments, slow to route urgent cases, and opaque after submission. Residents need one place to report issues, understand their status, and surface problems that demand faster attention.",
    myRole:
      "I led the product and full-stack architecture from idea to public release. I built the complaint workflow, connected the classification service, designed severity-based routing and community upvoting, and prepared the platform for its Government of Delhi showcase.",
    architecture:
      "A Next.js 15 application handles the citizen experience and operational views. FastAPI serves the complaint-classification layer, while MongoDB Atlas stores complaint state. Severity scores and community upvotes contribute to escalation so urgent, widely felt issues become visible sooner.",
    decisions: [
      {
        title: "Separate product and classification services",
        body: "Keeping the FastAPI classifier independent from the Next.js application made the ML workflow easier to iterate without coupling it to the citizen-facing release cycle.",
      },
      {
        title: "Combine severity with community signal",
        body: "Classification alone can miss local impact, so escalation also considers upvotes. The trade-off is added moderation responsibility, but the result better reflects what residents experience.",
      },
      {
        title: "Make status visible",
        body: "Complaint tracking was treated as a core product feature rather than an administrative detail, giving citizens a clearer view of routing and progress after submission.",
      },
    ],
    metrics: [
      { value: "Top 30", label: "of 1,500+ teams" },
      { value: "1,500+", label: "platform visits" },
      { value: "Govt.", label: "of Delhi showcase" },
    ],
    outcomes:
      "e-Nivaran reached the Hack4Delhi Grand Finale at Bharat Mandapam, placing among the top 30 of more than 1,500 teams. The public platform received 1,500+ visits and was demonstrated to Government of Delhi representatives.",
    lesson:
      "Civic technology earns trust through visible follow-through; intelligent routing matters only when citizens can also see what happens next.",
    next: { slug: "roots", name: "ROOTS — For a better earth" },
    metaDescription:
      "Case study of e-Nivaran — civic AI platform that reached the Bharat Mandapam Grand Finale. Built by Utkarsh Srivastava.",
  },
  roots: {
    name: "ROOTS",
    eyebrow: "Climate AI · 2025",
    outcome:
      "A computer-vision-verified sustainability platform that calculates real carbon saved. Represented India at the IEEE YESIST12 Grand Finale in Malaysia — Top 30 of 3,000+ teams globally.",
    role: "Co-founder · ML & Backend",
    stack: ["Next.js", "Flask", "YOLOv8", "Gemini API", "Scikit-Learn"],
    image: images.roots,
    liveHref: "https://roots4abetterearth.xyz",
    problem:
      "Many sustainability platforms rely entirely on self-reported actions. Without evidence or consistent carbon calculations, impact claims are difficult to verify and users have little reason to trust the totals they see.",
    myRole:
      "As co-founder for ML and backend, I trained the YOLOv8 model on eco-action data, built the photo-verification pipeline, integrated Gemini for contextual cross-checking, and shipped the engine that converts verified actions into carbon-savings estimates.",
    architecture:
      "A user uploads a photo and description of an environmental action. YOLOv8 classifies the image, Gemini cross-references the visual result with the description, and the verified action is mapped to a carbon-coefficient table before the calculated savings appear on the dashboard.",
    decisions: [
      {
        title: "Use a task-specific vision model",
        body: "YOLOv8 provided control over the eco-action classes and training data instead of making verification depend entirely on a generic hosted vision response.",
      },
      {
        title: "Cross-check ambiguous evidence",
        body: "The image prediction is compared with the user's description through Gemini. This second signal reduces false confidence when a photo can reasonably represent more than one action.",
      },
      {
        title: "Keep carbon math inspectable",
        body: "Verified actions map to a defined coefficient table, separating evidence verification from impact calculation and making estimates easier to review and refine.",
      },
    ],
    metrics: [
      { value: "Top 30", label: "of 3,000+ globally" },
      { value: "100+", label: "active users" },
      { value: "Malaysia", label: "represented India" },
    ],
    outcomes:
      "ROOTS represented India at the IEEE YESIST12 Grand Finale in Malaysia, finishing among the top 30 of more than 3,000 teams worldwide. The platform went on to serve 100+ active users.",
    lesson:
      "Impact numbers are only persuasive when the evidence and calculation behind them are understandable, not merely impressive.",
    next: { slug: "hack4bihar", name: "Hack4Bihar" },
    metaDescription:
      "Case study of ROOTS — AI sustainability platform, IEEE YESIST12 Global Finalist. Built by Utkarsh Srivastava.",
  },
  hack4bihar: {
    name: "Hack4Bihar",
    eyebrow: "National Hackathon Platform · 2025",
    outcome:
      "Migrated and rebuilt the entire frontend for a national hackathon under a live deadline. Scaled to 25,000+ visits and 5,000+ registrations with zero downtime.",
    role: "Frontend Lead",
    stack: ["Next.js", "Django", "Python", "Tailwind CSS", "REST APIs"],
    image: images.hack4bihar,
    problem:
      "The existing static site was difficult to extend and was not ready for the registration volume of a national hackathon. The team needed a maintainable frontend, reliable API integration, and stronger search visibility without interrupting an active event campaign.",
    myRole:
      "As frontend lead, I migrated the complete experience to Next.js, rebuilt every public page, integrated the Django REST registration endpoints, and coordinated the release under a fixed live-event deadline.",
    architecture:
      "The rebuilt Next.js frontend uses server-rendered, search-friendly pages and communicates with a Django API for registration workflows. Static assets are delivered through a CDN, keeping the public experience fast while the backend remains focused on event data.",
    decisions: [
      {
        title: "Replace the static frontend cleanly",
        body: "A focused rewrite removed accumulated page-level constraints and created one reusable system for content, registration calls, and future event updates.",
      },
      {
        title: "Preserve discoverability during migration",
        body: "Server-rendered page structure and deliberate metadata kept the new experience crawlable, contributing to a 40% SEO improvement after launch.",
      },
      {
        title: "Prioritize the critical registration path",
        body: "With a fixed deadline, reliability and clarity on the participant journey took priority over nonessential visual experimentation.",
      },
    ],
    metrics: [
      { value: "25,000+", label: "platform visits" },
      { value: "5,000+", label: "registrations" },
      { value: "+40%", label: "SEO improvement" },
    ],
    outcomes:
      "The rebuilt platform handled more than 25,000 visits and 5,000 registrations with zero downtime. Its reusable Next.js foundation also gave the event team a maintainable base for future updates.",
    lesson:
      "Under a live deadline, a clear migration boundary and a protected critical path are more valuable than trying to perfect every page at once.",
    next: { slug: "eventportal", name: "Event Portal" },
    metaDescription:
      "Case study of Hack4Bihar — national hackathon platform rebuilt in Next.js. 25,000+ visits. Built by Utkarsh Srivastava.",
  },
  eventportal: {
    name: "Event Portal",
    eyebrow: "End-to-End Event Platform · 2026",
    outcome:
      "Built a production-grade event management platform with a real-time WebSocket auction module, then ran Founder's Pit 2026 on it. 270+ participants. 75+ teams. Zero failures.",
    role: "Founder & Full-Stack Engineer",
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "WebSockets", "Supabase"],
    image: images.eventPortal,
    liveHref: "https://events.edcjssun.com/",
    problem:
      "Off-the-shelf event platforms were costly, generic, and unable to support the live auction format required for Founder's Pit. The organizing team needed registration, team submissions, operational oversight, and real-time bidding in one system.",
    myRole:
      "I founded and built the platform end to end: participant registration, team submissions, the live operations dashboard, and the WebSocket auction. I also operated the system during Founder's Pit 2026, turning production feedback into live-event decisions.",
    architecture:
      "A React and Vite client powers participant and organizer workflows. Node.js and WebSockets handle auction events and presence, while PostgreSQL stores registrations, teams, and submissions. The operations dashboard brings real-time activity and event data into one view.",
    decisions: [
      {
        title: "Use WebSockets for the auction",
        body: "Bids and presence had to reach every participant immediately. A persistent connection avoided polling delays and kept the shared auction state responsive during the live event.",
      },
      {
        title: "Design operations around visibility",
        body: "The organizer dashboard exposed live activity and system state in one place, making it easier to detect issues and coordinate the event before they affected participants.",
      },
      {
        title: "Model teams separately from submissions",
        body: "Separating team identity, membership, and submitted work kept registration data reusable across event stages and reduced duplication in organizer workflows.",
      },
    ],
    metrics: [
      { value: "270+", label: "participants" },
      { value: "75+", label: "teams" },
      { value: "4,500+", label: "platform visits" },
    ],
    outcomes:
      "Founder's Pit 2026 ran on the platform for 270+ participants and 75+ teams without a production failure. The system received more than 4,500 visits and now provides a foundation for future EDC events.",
    lesson:
      "Software used in a live room must make its own health visible; operational clarity is part of the product, not an afterthought.",
    next: { slug: "enivaran", name: "e-Nivaran" },
    metaDescription:
      "Case study of Event Portal — end-to-end event platform with real-time WebSocket auction. Built by Utkarsh Srivastava.",
  },
};

function isSlug(s: string): s is Slug {
  return s === "enivaran" || s === "roots" || s === "hack4bihar" || s === "eventportal";
}

export const Route = createFileRoute("/work/$caseSlug")({
  beforeLoad: ({ params }) => {
    if (!isSlug(params.caseSlug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.caseSlug as Slug;
    const data = CASES[slug];
    if (!data) return { meta: [] };
    const title = `${data.name} — Case Study · Utkarsh Srivastava`;
    const url = `${SITE}/work/${slug}`;
    const ogImage = `${SITE}/og/${slug}.jpg`;
    return {
      meta: [
        { title },
        { name: "description", content: data.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: data.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1216" },
        { property: "og:image:height", content: "640" },
        { property: "og:image:alt", content: `${data.name} — case study` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${data.name} — Case Study`,
            description: data.metaDescription,
            image: ogImage,
            url,
            author: {
              "@type": "Person",
              name: "Utkarsh Srivastava",
              url: SITE,
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: CaseStudyRoute,
  notFoundComponent: () => (
    <div className="grid min-h-dvh place-items-center bg-base text-ink">
      <div className="text-center">
        <h1 className="font-display text-4xl">Case study not found</h1>
        <a href="/#work" className="mt-4 inline-block font-mono text-accent">← Back to work</a>
      </div>
    </div>
  ),
});

function CaseStudyRoute() {
  const { caseSlug } = Route.useParams();
  const data = CASES[caseSlug as Slug];
  return <CaseStudy {...data} />;
}
