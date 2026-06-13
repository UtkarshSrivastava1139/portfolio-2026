import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useResumeModal } from "./ResumeModal";
import logo from "@/assets/utkarsh-logo.png";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#leadership", label: "Leadership" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { setOpen: setResumeOpen } = useResumeModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const hero = document.getElementById("top");
    const threshold = hero ? hero.offsetHeight * 0.6 : 400;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-cmd-palette"));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-rule)] bg-[rgba(10,10,10,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Utkarsh Srivastava — Home"
        >
          <img
            src={logo}
            alt="Utkarsh Srivastava"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#222] bg-[rgba(255,255,255,0.04)] px-2 py-1.5 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#1A1A1A] text-[#FAFAFA]"
                    : "text-[#666] hover:text-[#FAFAFA]"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-1.5 rounded-full border border-[var(--color-rule)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:text-ink md:inline-flex"
          >
            <span>⌘K</span>
          </button>
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="hidden rounded-full border border-[#333] bg-transparent px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-[#FF5E1A] md:inline-flex"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-rule)] md:hidden"
          >
            <span className="block h-px w-4 bg-ink shadow-[0_5px_0_var(--color-ink),0_-5px_0_var(--color-ink)]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--color-rule)] bg-[var(--color-base)] md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
            {links.map((l) => {
              const isActive = active === l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#1A1A1A] text-[#FAFAFA]"
                      : "text-muted hover:bg-[var(--color-elevated)] hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setResumeOpen(true);
              }}
              className="mt-2 rounded-full border border-[#333] px-4 py-2.5 text-center text-sm font-medium text-ink transition-colors hover:border-[#FF5E1A]"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
