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
      <div className="fixed inset-0 z-[200] flex min-h-0 flex-col bg-[#06050a]">
        <div className="relative min-h-0 flex-1 w-full overflow-hidden">
          <DeviewFirstVisitHero onEnded={completeIntro} />
        </div>
        <div className="flex shrink-0 justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2">
          <button
            type="button"
            onClick={completeIntro}
            className="text-[0.62rem] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
          >
            Skip
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
