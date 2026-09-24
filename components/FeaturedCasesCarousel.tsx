"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const AUTOPLAY_MS = 8000;

export function FeaturedCasesCarousel({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const slides = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const selectSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2 || isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className="featured-cases-carousel relative overflow-hidden bg-black"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div
        className="featured-cases-carousel__track flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
          >
            {slide}
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="featured-cases-carousel__controls" aria-label="Carousel controls">
          <button
            type="button"
            onClick={() => selectSlide(activeIndex - 1)}
            aria-label="Previous deployment"
          >
            <ArrowLeft aria-hidden="true" />
          </button>

          <div className="featured-cases-carousel__pages">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === activeIndex ? "is-active" : undefined}
                onClick={() => selectSlide(index)}
                aria-label={`Show deployment ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => selectSlide(activeIndex + 1)}
            aria-label="Next deployment"
          >
            <ArrowRight aria-hidden="true" />
          </button>

          <span className="featured-cases-carousel__progress" aria-hidden="true">
            <span
              key={activeIndex}
              className={isPaused || prefersReducedMotion ? "is-paused" : undefined}
            />
          </span>
        </div>
      ) : null}
    </div>
  );
}
