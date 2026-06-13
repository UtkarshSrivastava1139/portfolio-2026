import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useResumeModal } from "./ResumeModal";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
  User,
  Award,
  FlaskConical,
  Users,
  GraduationCap,
  Image as ImageIcon,
  Home,
  Copy,
} from "lucide-react";
import { toast } from "sonner";

type Section = { id: string; label: string; icon: React.ComponentType<{ className?: string }> };

const sections: Section[] = [
  { id: "top", label: "Home", icon: Home },
  { id: "work", label: "Featured Work", icon: Briefcase },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "certificates", label: "Certificates", icon: GraduationCap },
  { id: "life", label: "Life Beyond Code", icon: ImageIcon },
  { id: "recognition", label: "Recognition", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const caseStudies = [
  { slug: "enivaran", label: "Enivaran — Civic Reporting" },
  { slug: "roots", label: "Roots — Heritage Platform" },
  { slug: "hack4bihar", label: "Hack4Bihar — Finalist" },
  { slug: "eventportal", label: "Event Portal" },
];

const EMAIL = "utkarshsrivastava1139@gmail.com";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setOpen: setResumeOpen } = useResumeModal();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cmd-palette", handler);
    return () => window.removeEventListener("open-cmd-palette", handler);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    // defer so dialog can close cleanly before navigating / opening another modal
    setTimeout(fn, 50);
  };

  const scrollTo = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate({ to: "/", hash: id });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = id;
  };

  return (
    <>
      {/* Floating trigger removed — ⌘K pill now lives in Nav.tsx */}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Sections">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <CommandItem
                  key={s.id}
                  value={`section ${s.label}`}
                  onSelect={() => run(() => scrollTo(s.id))}
                >
                  <Icon className="text-muted" />
                  <span>{s.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted" />
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Case Studies">
            {caseStudies.map((c) => (
              <CommandItem
                key={c.slug}
                value={`case ${c.label}`}
                onSelect={() =>
                  run(() => navigate({ to: "/work/$caseSlug", params: { caseSlug: c.slug } }))
                }
              >
                <Briefcase className="text-muted" />
                <span>{c.label}</span>
                <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted" />
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem value="action resume open" onSelect={() => run(() => setResumeOpen(true))}>
              <FileText className="text-muted" />
              <span>Open résumé</span>
            </CommandItem>
            <CommandItem
              value="action email copy"
              onSelect={() =>
                run(() => {
                  navigator.clipboard?.writeText(EMAIL);
                  toast.success("Email copied", { description: EMAIL });
                })
              }
            >
              <Copy className="text-muted" />
              <span>Copy email address</span>
            </CommandItem>
            <CommandItem
              value="action email send"
              onSelect={() => run(() => (window.location.href = `mailto:${EMAIL}`))}
            >
              <Mail className="text-muted" />
              <span>Send an email</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            <CommandItem
              value="link github"
              onSelect={() =>
                run(() =>
                  window.open("https://github.com/UtkarshSrivastava1139", "_blank", "noopener"),
                )
              }
            >
              <Github className="text-muted" />
              <span>GitHub</span>
            </CommandItem>
            <CommandItem
              value="link linkedin"
              onSelect={() =>
                run(() =>
                  window.open(
                    "https://www.linkedin.com/in/utkarsh-srivastava-1139/",
                    "_blank",
                    "noopener",
                  ),
                )
              }
            >
              <Linkedin className="text-muted" />
              <span>LinkedIn</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}