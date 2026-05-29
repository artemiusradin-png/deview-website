"use client";

import * as React from "react";
import { PerspectiveMarquee, type LogoItem } from "@/components/ui/perspective-marquee";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const CLIENT_LOGOS: LogoItem[] = [
  { name: "EVDEV",               src: "/client-logos/evdev.svg",         width: 96,  height: 19  },
  { name: "Fizkultura",          src: "/client-logos/fizkultura.png",    width: 118, height: 79  },
  { name: "Nextair",             src: "/client-logos/nextair.png",       width: 104, height: 100 },
  { name: "Lending Platform",    src: "/client-logos/grandfg-white.png", width: 266, height: 62  },
];

function useIsDark() {
  const [isDark, setIsDark] = React.useState(true);
  React.useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.dataset.theme !== "light");
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => obs.disconnect();
  }, []);
  return isDark;
}

function useIsMobileMarquee() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function SelectedProjectsLogoMarquee() {
  const { dict } = useLocaleContext();
  const isDark = useIsDark();
  const isMobile = useIsMobileMarquee();
  const logoFilter = (name: string) => {
    if (name === "Grand Finance Group") return isDark ? "none" : "invert(1)";
    return isDark
      ? "grayscale(1) brightness(0) invert(1)"
      : "grayscale(1) brightness(0)";
  };

  return (
    <section
      aria-labelledby="selected-project-logos-title"
      className="selected-project-logos relative overflow-hidden bg-[var(--background)] py-10 md:py-14"
    >
      <div className="section-gutter mx-auto w-full max-w-6xl">
        <p id="selected-project-logos-title" className="section-label">
          {dict.partners.sectionLabel}
        </p>
      </div>

      <div className="selected-project-logos__marquee mt-8">
        <PerspectiveMarquee
          logos={CLIENT_LOGOS}
          isDark={isDark}
          pixelsPerFrame={isMobile ? 1.2 : 1.8}
          rotateY={isMobile ? 0 : -28}
          rotateX={isMobile ? 0 : 8}
          perspective={1200}
          itemWidth={isMobile ? 280 : 500}
          logoHeight={isMobile ? 64 : 100}
          blurMultiplier={isMobile ? 0 : 5}
        />
      </div>

      <p className="sr-only">
        {dict.partners.selectedProjects} {CLIENT_LOGOS.map((l) => l.name).join(", ")}.
      </p>
    </section>
  );
}
