import { useEffect, useState } from "react";
import { Award, Calendar, Code, Globe, Quote, Star, Trophy, Users, type LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { lifeGallery, type LifeGalleryItem } from "./data";

const ICONS: Record<string, LucideIcon> = {
  trophy: Trophy,
  calendar: Calendar,
  globe: Globe,
  star: Star,
  users: Users,
  code: Code,
  award: Award,
};

function useCarouselIndex(length: number, interval: number, enabled: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!enabled || length <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval, enabled]);
  return index;
}

function ImageCarouselCard({ item }: { item: Extract<LifeGalleryItem, { type: "image-carousel" }> }) {
  const index = useCarouselIndex(item.content.length, item.interval, true);
  const slide = item.content[index];
  const Icon = ICONS[slide.iconName] ?? Star;
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-base)]/60 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-accent" />
        </div>
          <div key={slide.title}>
            <div className="font-display text-lg font-semibold leading-tight tracking-tight text-ink md:text-xl">
              {slide.title}
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              {slide.subtitle}
            </div>
          </div>
        {item.content.length > 1 && (
          <div className="mt-4 flex gap-1.5">
            {item.content.map((_, i) => (
              <span
                key={i}
                className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
                  i === index ? "bg-accent" : "bg-[var(--color-rule)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCarouselCard({ item }: { item: Extract<LifeGalleryItem, { type: "stat-carousel" }> }) {
  const index = useCarouselIndex(item.content.length, item.interval, true);
  const slide = item.content[index];
  const isAccent = item.variant === "accent";
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-6 md:p-8 ${
        isAccent ? "bg-[var(--color-accent)] text-[var(--color-base)]" : "bg-[var(--color-elevated)] text-ink"
      }`}
    >
      <div className={`font-mono text-[11px] uppercase tracking-wider ${isAccent ? "opacity-80" : "text-muted"}`}>
        {slide.title}
      </div>
        <div key={slide.value} className="my-2">
          <div className="font-display text-5xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">
            {slide.value}
          </div>
          <div className={`mt-3 text-sm ${isAccent ? "opacity-90" : "text-muted"}`}>
            {slide.subtitle}
          </div>
        </div>
      {item.content.length > 1 && (
        <div className="flex gap-1.5">
          {item.content.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
                i === index
                  ? isAccent ? "bg-[var(--color-base)]" : "bg-accent"
                  : isAccent ? "bg-[var(--color-base)]/30" : "bg-[var(--color-rule)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function QuoteCard({ item }: { item: Extract<LifeGalleryItem, { type: "quote" }> }) {
  const slide = item.content[0];
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[var(--color-elevated)] p-6 md:p-8">
      <Quote className="h-7 w-7 text-accent" />
      <blockquote className="font-display text-lg font-medium italic leading-snug tracking-tight text-ink md:text-xl">
        &ldquo;{slide.text}&rdquo;
      </blockquote>
      <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
        — {slide.author}
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: LifeGalleryItem }) {
  if (item.type === "image-carousel") return <ImageCarouselCard item={item} />;
  if (item.type === "stat-carousel") return <StatCarouselCard item={item} />;
  return <QuoteCard item={item} />;
}

export function LifeBeyondCode() {
  return (
    <Section
      id="life"
      eyebrow="09 · Life Beyond Code"
      title={
        <>
          Hackathons, talks, <br className="hidden md:block" />
          <span className="text-muted">communities, milestones.</span>
        </>
      }
      intro="Capturing moments from hackathons, tech events, and the people who&rsquo;ve made the journey worth it."
    >
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:gap-5">
        {lifeGallery.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-elevated)] transition-transform duration-500 hover:-translate-y-1 ${item.colSpan} ${item.rowSpan}`}
          >
            <GalleryCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}