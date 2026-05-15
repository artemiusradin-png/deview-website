"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type IndustryItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const INDUSTRIES: IndustryItem[] = [
  {
    id: 1,
    title: "Lending & Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Insurance",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Legal Services",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Professional Services",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
];

function AccordionPanel({
  item,
  isActive,
  onMouseEnter,
  onClick,
}: {
  item: IndustryItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  return (
    <div
      className={`industries-accordion-panel group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-in-out ${
        isActive
          ? "industries-accordion-panel--active"
          : "industries-accordion-panel--collapsed"
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <span
        className={`absolute text-sm font-medium uppercase tracking-[0.18em] text-white/90 transition-all duration-500 ease-in-out sm:text-base ${
          isActive
            ? "bottom-6 left-6 rotate-0 opacity-100"
            : "bottom-20 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap opacity-80"
        }`}
      >
        {item.title}
      </span>
    </div>
  );
}

export function IndustriesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="industries"
      className="industries-section scroll-margin-header bg-[var(--background)] section-gutter"
    >
      <div className="mx-auto max-w-6xl py-20 md:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:w-[42%]"
          >
            <p className="section-label mb-4">INDUSTRIES WE SERVE</p>
            <div className="rule mb-6" />
            <h2 className="hero-heading mb-6 text-[clamp(1.5rem,4.5vw,2.5rem)] leading-[1.1] text-[var(--white-100)]">
              Deep expertise where
              <br />
              AI delivers the most value.
            </h2>
            <p className="max-w-md text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
              We focus on industries with high document volumes, complex
              compliance requirements, and repeatable decision workflows — where
              AI creates measurable operational impact from day one.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-outline inline-block text-center"
              >
                INQUIRE
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:w-[58%]"
          >
            <div className="industries-accordion-row flex gap-2 sm:gap-3">
              {INDUSTRIES.map((item, index) => (
                <AccordionPanel
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
