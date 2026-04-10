"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dict-en";

type ServicesBlock = Dictionary["services"];
type ServiceItem = ServicesBlock["items"][number];

const wrapIndex = (index: number, length: number) => ((index % length) + length) % length;

function dataAttrForRole(role: "previous-far" | "previous" | "current" | "next" | "next-far") {
  if (role === "current") return { "data-current": "" as const };
  if (role === "next-far") return { "data-next-far": "" as const };
  if (role === "next") return { "data-next": "" as const };
  if (role === "previous-far") return { "data-previous-far": "" as const };
  return { "data-previous": "" as const };
}

type Props = {
  services: ServicesBlock;
};

export function ServicesVoyageSlider({ services: s }: Props) {
  const items = s.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const go = useCallback(
    (delta: number) => {
      setCurrentIndex((i) => wrapIndex(i + delta, items.length));
    },
    [items.length],
  );

  const cur = items[currentIndex];

  const slots: { service: ServiceItem; role: "previous-far" | "previous" | "current" | "next" | "next-far" }[] = [
    { service: items[wrapIndex(currentIndex - 2, items.length)], role: "previous-far" },
    { service: items[wrapIndex(currentIndex - 1, items.length)], role: "previous" },
    { service: cur, role: "current" },
    { service: items[wrapIndex(currentIndex + 1, items.length)], role: "next" },
    { service: items[wrapIndex(currentIndex + 2, items.length)], role: "next-far" },
  ];

  return (
    <div className="svoyage-slider">
      <button
        type="button"
        className="svoyage-slider__btn svoyage-slider__btn--prev"
        onClick={() => go(-1)}
        aria-label="Previous service"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div className="svoyage-slider__wrapper">
        <div className="svoyage-slider__stage">
          <div className="svoyage-slider__slides-layer">
            <div className="svoyage-slides">
              {slots.map(({ service, role }) => {
                const d = dataAttrForRole(role);
                const isCurrent = role === "current";
                return (
                  <div key={service.id} className={`svoyage-slide svoyage-slide--${role}`} {...d}>
                    <div className="svoyage-slide__inner">
                      <div className="svoyage-slide__panel" />
                      <div className="svoyage-slide__info">
                        <div className="svoyage-slide__label-line">
                          <span>{service.label}</span>
                        </div>
                        {isCurrent && (
                          <div className="svoyage-slide__details">
                            <div className="svoyage-slide__desc">{service.title}</div>
                            <div className="svoyage-slide__meta">
                              <span className="svoyage-slide__meta-k">{s.scope}</span>
                              {service.scope}
                            </div>
                            <p className="svoyage-slide__body">{service.body}</p>
                            <div className="svoyage-slide__chips" aria-label={s.sectionLabel}>
                              {service.bullets.map((bullet) => (
                                <span key={bullet} className="svoyage-slide__chip">
                                  {bullet}
                                </span>
                              ))}
                            </div>
                            <p className="svoyage-slide__status">{service.status}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="svoyage-slider__btn svoyage-slider__btn--next"
        onClick={() => go(1)}
        aria-label="Next service"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="svoyage-slider__rail" role="tablist" aria-label="Services">
        {items.map((service, index) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            className={`svoyage-slider__dot${index === currentIndex ? " is-active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span>{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
