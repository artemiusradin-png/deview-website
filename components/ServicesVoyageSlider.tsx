"use client";

import { Fragment, useCallback, useState } from "react";
import type { CSSProperties } from "react";
import type { Dictionary } from "@/lib/i18n/dict-en";

type ServicesBlock = Dictionary["services"];
type ServiceItem = ServicesBlock["items"][number];

const wrapIndex = (index: number, length: number) => ((index % length) + length) % length;

const SERVICE_IMAGES: Record<string, string> = {
  "workflow-audit":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "knowledge-assistant":
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80",
  "document-automation":
    "https://images.unsplash.com/photo-1568667256549-094888797f96?auto=format&fit=crop&w=1400&q=80",
  "support-assistant":
    "https://images.unsplash.com/photo-1533759280709-50f15c913492?auto=format&fit=crop&w=1400&q=80",
  "reporting-copilot":
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
  "implementation-advisory":
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
};

function slideImage(service: ServiceItem) {
  return SERVICE_IMAGES[service.id] ?? SERVICE_IMAGES["workflow-audit"];
}

function dataAttrForRole(role: "previous" | "current" | "next") {
  if (role === "current") return { "data-current": "" as const };
  if (role === "next") return { "data-next": "" as const };
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
  const prev = items[wrapIndex(currentIndex - 1, items.length)];
  const next = items[wrapIndex(currentIndex + 1, items.length)];

  const slots: { service: ServiceItem; role: "previous" | "current" | "next" }[] = [
    { service: prev, role: "previous" },
    { service: cur, role: "current" },
    { service: next, role: "next" },
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
                const src = slideImage(service);
                const d = dataAttrForRole(role);
                return (
                  <Fragment key={service.id}>
                    <div className={`svoyage-slide svoyage-slide--${role}`} {...d}>
                      <div className="svoyage-slide__inner">
                        <div className="svoyage-slide__image-wrap">
                          <img className="svoyage-slide__image" src={src} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`svoyage-slide__bg svoyage-slide__bg--${role}`}
                      style={{ "--sv-bg": `url(${src})` } as CSSProperties}
                      {...d}
                    />
                  </Fragment>
                );
              })}
            </div>

            <div className="svoyage-slides-infos">
              {slots.map(({ service, role }) => {
                const d = dataAttrForRole(role);
                return (
                  <div key={`info-${service.id}`} className={`svoyage-slide-info svoyage-slide-info--${role}`} {...d}>
                    <div className="svoyage-slide-info__inner">
                      <div className="svoyage-slide-info__text-wrap">
                        <div className="svoyage-slide-info__text svoyage-slide-info__text--title">
                          <span>{service.label}</span>
                        </div>
                        <div className="svoyage-slide-info__text svoyage-slide-info__text--subtitle">
                          <span>
                            {s.duration} · {service.duration}
                          </span>
                        </div>
                        <div className="svoyage-slide-info__text svoyage-slide-info__text--desc">
                          <span>{service.title}</span>
                        </div>
                        <p className="svoyage-slide-info__meta">
                          <span className="svoyage-slide-info__meta-k">{s.scope}</span> {service.scope}
                        </p>
                        {role === "current" && (
                          <>
                            <p className="svoyage-slide-info__body">{service.body}</p>
                            <div className="svoyage-slide-info__chips" aria-label={s.sectionLabel}>
                              {service.bullets.map((bullet) => (
                                <span key={bullet} className="svoyage-slide-info__chip">
                                  {bullet}
                                </span>
                              ))}
                            </div>
                            <p className="svoyage-slide-info__status">{service.status}</p>
                          </>
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
