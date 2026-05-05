"use client";

import * as React from "react";
import { PerspectiveMarquee, type LogoItem } from "@/components/ui/perspective-marquee";

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

export function SelectedProjectsLogoMarquee() {
  const isDark = useIsDark();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      aria-labelledby="selected-project-logos-title"
      className="selected-project-logos relative overflow-hidden bg-[var(--background)] py-10 md:py-14"
    >
      <div className="section-gutter mx-auto w-full max-w-6xl">
        <p id="selected-project-logos-title" className="section-label">
          TRUSTED PARTNERS
        </p>
      </div>

      <div className="mt-8" style={{ height: "280px" }}>
        <PerspectiveMarquee
          logos={CLIENT_LOGOS}
          isDark={isDark}
          pixelsPerFrame={isMobile ? 2.8 : 1.8}
          rotateY={-28}
          rotateX={8}
          perspective={1200}
          itemWidth={isMobile ? 360 : 500}
          logoHeight={isMobile ? 70 : 100}
        />
      </div>

      <p className="sr-only">
        Selected projects: {CLIENT_LOGOS.map((l) => l.name).join(", ")}.
      </p>
    </section>
  );
}
