"use client";

import * as React from "react";
import { Player } from "@remotion/player";
import { PerspectiveMarquee, type LogoItem } from "@/components/ui/perspective-marquee";

const CLIENT_LOGOS: LogoItem[] = [
  { name: "EVDEV",               src: "/client-logos/evdev.svg",         width: 96,  height: 19  },
  { name: "Fizkultura",          src: "/client-logos/fizkultura.png",    width: 118, height: 79  },
  { name: "Nextair",             src: "/client-logos/nextair.png",       width: 104, height: 100 },
  { name: "Grand Finance Group", src: "/client-logos/grandfg-white.png", width: 266, height: 62  },
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

type SceneProps = { logos: LogoItem[]; isDark: boolean };

function MarqueeScene({ logos, isDark }: SceneProps) {
  const bg = isDark ? "#050505" : "#fbf7ee";
  return (
    <PerspectiveMarquee
      logos={logos}
      isDark={isDark}
      background={bg}
      fadeColor={bg}
      pixelsPerFrame={1.8}
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      itemWidth={500}
      logoHeight={100}
    />
  );
}

export function SelectedProjectsLogoMarquee() {
  const isDark = useIsDark();

  return (
    <section
      aria-labelledby="selected-project-logos-title"
      className="selected-project-logos relative overflow-hidden bg-[var(--background)] py-10 md:py-14"
    >
      <div className="section-gutter mx-auto w-full max-w-6xl">
        <p id="selected-project-logos-title" className="section-label">
          SELECTED PROJECTS
        </p>
      </div>

      <div className="mt-8" style={{ height: "280px" }}>
        <Player
          component={MarqueeScene}
          inputProps={{ logos: CLIENT_LOGOS, isDark }}
          durationInFrames={9999}
          fps={30}
          compositionWidth={1280}
          compositionHeight={280}
          style={{ width: "100%", height: "100%" }}
          controls={false}
          autoPlay
          loop
          clickToPlay={false}
          acknowledgeRemotionLicense
        />
      </div>

      <p className="sr-only">
        Selected projects: {CLIENT_LOGOS.map((l) => l.name).join(", ")}.
      </p>
    </section>
  );
}
