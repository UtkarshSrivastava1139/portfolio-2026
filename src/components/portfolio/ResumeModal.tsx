"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { useState, createContext, useContext } from "react";
import resumeUrl from "@/assets/utkarsh-srivastava-resume.pdf";

const ResumeModalContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

export function ResumeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <ResumeModalContext.Provider value={{ open, setOpen }}>
      {children}
      <ResumeModal open={open} onOpenChange={setOpen} />
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const ctx = useContext(ResumeModalContext);
  if (!ctx) throw new Error("useResumeModal must be used within ResumeModalProvider");
  return ctx;
}

function ResumeModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const pdfUrl = resumeUrl;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[900px] w-[92vw] gap-0 overflow-hidden border-[var(--color-rule-strong)] bg-[var(--color-elevated)] p-0 sm:rounded-2xl"
        style={{ maxHeight: "85vh" }}
      >
        <DialogHeader className="flex flex-row items-center justify-between border-b border-[var(--color-rule)] px-5 py-4 text-left">
          <div className="space-y-1">
            <DialogTitle className="font-display text-base font-semibold tracking-tight text-ink">
              Resume
            </DialogTitle>
            <DialogDescription className="text-[13px] text-muted">
              Utkarsh Srivastava — Full-stack Developer
            </DialogDescription>
          </div>
          <div className="flex items-center gap-2 pr-8">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-[13px] font-semibold text-[#0A0A0F] transition-transform hover:scale-[1.02]"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
          </div>
        </DialogHeader>

        <div className="relative w-full bg-[var(--color-base)]" style={{ height: "65vh" }}>
          <object
            data={`${pdfUrl}#view=FitH&toolbar=1`}
            type="application/pdf"
            className="h-full w-full"
          >
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.origin + pdfUrl : pdfUrl)}&embedded=true`}
              title="Utkarsh Srivastava Resume"
              className="h-full w-full"
              style={{ border: "none" }}
            />
            <div className="grid h-full w-full place-items-center p-6 text-center text-sm text-muted">
              Your browser can't display this PDF inline.{" "}
              <a href={pdfUrl} download className="ml-1 underline">
                Download it instead
              </a>
              .
            </div>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
}
