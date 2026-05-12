"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { FIRST_VISIT_INTRO_KEY } from "@/lib/first-visit-intro";
import { DeviewFirstVisitHero } from "./deview-first-visit-hero";

type Phase = "init" | "intro" | "main";

export function FirstVisitIntroGate({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("init");

  const completeIntro = useCallback(() => {
    try {
      localStorage.setItem(FIRST_VISIT_INTRO_KEY, "1");
    } catch {
      /* private mode / quota */
    }
    setPhase("main");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      try {
        localStorage.setItem(FIRST_VISIT_INTRO_KEY, "1");
      } catch {
        /* ignore */
      }
      setPhase("main");
      return;
    }

    try {
      setPhase(localStorage.getItem(FIRST_VISIT_INTRO_KEY) ? "main" : "intro");
    } catch {
      setPhase("main");
    }
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") completeIntro();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, completeIntro]);

  if (phase === "init") {
    return (
      <div
        className="min-h-[100dvh] bg-[#06050a]"
        aria-busy="true"
        aria-label="Loading"
      />
    );
  }

  if (phase === "intro") {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col bg-[#06050a] text-[#f5f3ee]">
        <div className="relative min-h-0 flex-1 w-full overflow-hidden">
          <DeviewFirstVisitHero />
        </div>
        <footer className="flex shrink-0 flex-col items-center gap-3 border-t border-white/10 bg-black/85 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm">
          <button
            type="button"
            onClick={completeIntro}
            className="w-full max-w-sm border border-white/35 bg-white/5 px-8 py-3.5 text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/95 transition-colors hover:border-white/55 hover:bg-white/10 sm:w-auto"
          >
            Enter site
          </button>
          <button
            type="button"
            onClick={completeIntro}
            className="text-[0.58rem] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white/70"
          >
            Skip
          </button>
          <p className="text-center text-[0.55rem] tracking-[0.12em] text-white/35">
            Press Esc to skip
          </p>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
}
