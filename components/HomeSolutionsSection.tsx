"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { homeSectionCardMotion, homeSectionReveal, homeSectionStagger } from "@/lib/home-section-motion";
import { solutionAreaAccents } from "@/lib/i18n/solution-area-accents";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeSolutionsSectionProps = {
  variant?: "home" | "standalone";
};

export function HomeSolutionsSection({ variant = "home" }: HomeSolutionsSectionProps) {
  const { dict } = useLocaleContext();
  const sol = dict.solutions;
  const areas = sol.areas.map((area) => ({
    ...area,
    accent: solutionAreaAccents[area.id] ?? "rgba(148, 214, 255, 0.16)",
  }));

  const solutionCarouselRef = useRef<HTMLDivElement | null>(null);
  const solutionCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const solutionsSectionRef = useRef<HTMLElement | null>(null);
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [solutionsMarqueeOffset, setSolutionsMarqueeOffset] = useState(0);
  const [isSolutionsInView, setIsSolutionsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const carousel = solutionCarouselRef.current;

    if (!carousel) {
      return;
    }

    const updateActiveSolution = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const targetCenter = carouselRect.left + carouselRect.width / 2;
      let nextIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      solutionCardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - targetCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveSolutionIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    updateActiveSolution();
    carousel.addEventListener("scroll", updateActiveSolution, { passive: true });
    window.addEventListener("resize", updateActiveSolution);

    return () => {
      carousel.removeEventListener("scroll", updateActiveSolution);
      window.removeEventListener("resize", updateActiveSolution);
    };
  }, [areas.length]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const section = solutionsSectionRef.current;

    if (!section) {
      return;
    }

    const wideMq = window.matchMedia("(min-width: 768px)");

    const updateMarqueeOffset = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const inView = rect.bottom > 0 && rect.top < viewportHeight;
      setIsSolutionsInView(inView);

      if (!wideMq.matches) {
        setSolutionsMarqueeOffset(0);
        return;
      }

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const offset = (clampedProgress - 0.5) * -220;
      setSolutionsMarqueeOffset(offset);
    };

    updateMarqueeOffset();
    window.addEventListener("scroll", updateMarqueeOffset, { passive: true });
    window.addEventListener("resize", updateMarqueeOffset);
    wideMq.addEventListener("change", updateMarqueeOffset);

    return () => {
      window.removeEventListener("scroll", updateMarqueeOffset);
      window.removeEventListener("resize", updateMarqueeOffset);
      wideMq.removeEventListener("change", updateMarqueeOffset);
    };
  }, [prefersReducedMotion]);

  const scrollSolutions = (direction: "left" | "right") => {
    const carousel = solutionCarouselRef.current;

    if (!carousel) {
      return;
    }

    const frac = carousel.clientWidth < 640 ? 0.9 : 0.78;
    const amount = Math.max(carousel.clientWidth * frac, Math.min(320, carousel.clientWidth - 32));

    carousel.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const activeSolution = areas[activeSolutionIndex] ?? areas[0];
  const marqueeContent = `${activeSolution.title} • `.repeat(14);

  return (
    <section
      id={variant === "home" ? "solutions" : undefined}
      ref={solutionsSectionRef}
      className="solutions-section section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] section-gutter"
      style={
        {
          "--solutions-accent": activeSolution.accent,
          "--solutions-marquee-offset": `${solutionsMarqueeOffset}%`,
        } as CSSProperties
      }
    >
      <div
        className={`solutions-marquee-container ${isSolutionsInView ? "solutions-marquee-container-visible" : ""}`}
        aria-hidden="true"
      >
        {["top", "bottom"].map((position) => (
          <div key={`${position}-${activeSolution.id}`} className={`solutions-marquee solutions-marquee-${position}`}>
            <div className="solutions-marquee-track">{marqueeContent}</div>
          </div>
        ))}
      </div>
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="solutions-content mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
      >
        <div className="section-shell">
          <p className="section-label mb-3">{sol.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="mb-4 text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                {sol.titleL1}
                <br />
                {sol.titleL2}
              </h2>
              <p className="mb-4 text-sm text-[var(--text-muted)]">{sol.p1}</p>
              <p className="text-sm text-[var(--text-muted)]">{sol.p2}</p>
            </div>
            <div className="space-y-4 text-[0.72rem] text-[var(--white-80)] sm:text-xs">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">{sol.framing}</span>
                <span className="sm:text-right">{sol.framingBody}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">{sol.positioning}</span>
                <span className="sm:text-right">{sol.positioningBody}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">{sol.delivery}</span>
                <span className="sm:text-right">{sol.deliveryBody}</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={homeSectionStagger}
          initial="initial"
          whileInView="whileInView"
          viewport={homeSectionStagger.viewport}
          className="relative overflow-hidden"
        >
          <button
            type="button"
            aria-label={sol.scrollLeft}
            className="carousel-arrow carousel-arrow-left hidden md:inline-flex"
            onClick={() => scrollSolutions("left")}
          >
            ←
          </button>
          <button
            type="button"
            aria-label={sol.scrollRight}
            className="carousel-arrow carousel-arrow-right hidden md:inline-flex"
            onClick={() => scrollSolutions("right")}
          >
            →
          </button>
          <div className="carousel-fade-left" aria-hidden="true" />
          <div className="carousel-fade-right" aria-hidden="true" />
          <div
            ref={solutionCarouselRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-0 ps-1 pe-[max(1rem,env(safe-area-inset-right))] [-webkit-overflow-scrolling:touch] sm:gap-6 sm:px-6 sm:pe-4 md:px-8"
          >
            {areas.map((area, areaIndex) => (
              <motion.div
                key={area.id}
                ref={(node) => {
                  solutionCardRefs.current[areaIndex] = node;
                }}
                variants={homeSectionCardMotion}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                onMouseEnter={() => setActiveSolutionIndex(areaIndex)}
                onFocusCapture={() => setActiveSolutionIndex(areaIndex)}
                className={`solutions-card panel panel-interactive min-w-[min(85vw,calc(100vw-2.5rem))] max-w-[calc(100vw-2rem)] snap-start border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-5 sm:min-w-[360px] sm:max-w-none sm:px-5 sm:py-6 lg:min-w-[420px] ${
                  activeSolution.id === area.id ? "solutions-card-active" : "solutions-card-inactive"
                }`}
              >
                <p className="section-label mb-3 text-[0.65rem]">{area.sector}</p>
                <p
                  className={`solutions-card-title mb-3 text-sm text-[var(--white-100)] ${
                    activeSolution.id === area.id ? "solutions-card-title-active" : ""
                  }`}
                >
                  {area.title}
                </p>
                <p className="text-[0.8rem] text-[var(--text-muted)]">{area.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}