import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { ProofStrip } from "@/components/portfolio/ProofStrip";

import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { CurrentlyBuilding } from "@/components/portfolio/CurrentlyBuilding";
import { About } from "@/components/portfolio/About";
import { Research } from "@/components/portfolio/Research";
import { Leadership } from "@/components/portfolio/Leadership";
import { Recognition } from "@/components/portfolio/Recognition";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Certificates } from "@/components/portfolio/Certificates";
import { LifeBeyondCode } from "@/components/portfolio/LifeBeyondCode";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollFX } from "@/components/portfolio/ScrollFX";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { Sidewriter } from "@/components/portfolio/Sidewriter";
import { MotionProvider } from "@/components/portfolio/MotionProvider";
import { Preloader } from "@/components/portfolio/Preloader";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Utkarsh Srivastava — Developer who ships things that matter" },
      {
        name: "description",
        content:
          "Full-stack developer with production systems, published IEEE research, and government-showcased work. Portfolio of Utkarsh Srivastava.",
      },
      {
        property: "og:title",
        content: "Utkarsh Srivastava — Developer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Production systems, IEEE-published research, Bharat Mandapam finalist. Editorial portfolio of Utkarsh Srivastava.",
      },
      {
        property: "og:url",
        content: "https://utkarshs-crafted-opus.lovable.app/",
      },
      {
        property: "og:image",
        content: "https://utkarshs-crafted-opus.lovable.app/og/home.jpg",
      },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      {
        property: "og:image:alt",
        content: "Utkarsh Srivastava — Developer who ships things that matter",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://utkarshs-crafted-opus.lovable.app/og/home.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://utkarshs-crafted-opus.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Utkarsh Srivastava",
          jobTitle: "Full-Stack Developer",
          url: "https://utkarshs-crafted-opus.lovable.app/",
          sameAs: [
            "https://github.com/utkarshsri1139",
            "https://www.linkedin.com/in/utkarshsri1139",
            "https://twitter.com/utkarshsri1139",
          ],
          description:
            "Full-stack developer with production systems, published IEEE research, and government-showcased work.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Preloader>
      <MotionProvider>
        <div className="relative min-h-dvh bg-base text-ink antialiased">
          <CustomCursor />
          <ScrollFX />
          <Nav />
          <CommandPalette />
          <Sidewriter />
          <main id="main">
            <Hero />
            <ProofStrip />
            <FeaturedWork />
            <CurrentlyBuilding />
            <About />
            <Experience />
            <Research />
            <Leadership />
            <Recognition />
            <Certificates />
            <LifeBeyondCode />
            <Contact />
          </main>
          <ScrollToTop />
        </div>
      </MotionProvider>
    </Preloader>
  );
}
