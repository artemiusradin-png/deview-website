"use client";

import { useEffect, useRef } from "react";
import { emitAnalyticsEvent } from "@/lib/analytics/events";

interface SolutionEngagementTrackerProps {
  assetId: string;
  solution: string;
  locale: string;
}

export function SolutionEngagementTracker({
  assetId,
  solution,
  locale,
}: SolutionEngagementTrackerProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (firedRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = (scrollY / docHeight) * 100;
      if (scrollPercent >= 50) {
        firedRef.current = true;
        emitAnalyticsEvent("seo_solution_engagement", {
          asset_id: assetId,
          solution,
          locale,
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [assetId, solution, locale]);

  return null;
}
