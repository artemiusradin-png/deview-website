"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeSectionReveal } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

const serviceClients = [
  { name: "EVDEV",     href: "https://evdev.dev/",            src: "/client-logos/evdev.svg",     width: 96,  height: 19, lightBg: true  },
  { name: "Fizkultura",href: "https://fizkultura.com.ua/",    src: "/client-logos/fizkultura.png", width: 118, height: 79, lightBg: false },
  { name: "Jetfans",   href: "https://www.jetfans.eu/",       src: "/client-logos/jetfans.avif",  width: 160, height: 60, lightBg: false },
  { name: "Nextair",   href: "https://nextair.com.ua/",       src: "/client-logos/nextair.webp",  width: 80,  height: 80, lightBg: false },
] as const;

const serviceThemes = [
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02) 48%, rgba(0,0,0,0.12)), radial-gradient(circle at 18% 18%, rgba(255,255,255,0.24), transparent 30%), linear-gradient(135deg, #202734, #050608 72%)",
    glow: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.28), transparent 62%)",
    line: "linear-gradient(90deg, rgba(255,255,255,0.16), rgba(255,255,255,0.72), rgba(255,255,255,0.08))",
  },
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 44%, rgba(0,0,0,0.14)), radial-gradient(circle at 78% 18%, rgba(255,210,156,0.26), transparent 28%), linear-gradient(135deg, #2d2019, #070505 74%)",
    glow: "radial-gradient(circle at 58% 38%, rgba(255,210,156,0.28), transparent 58%)",
    line: "linear-gradient(90deg, rgba(255,224,188,0.12), rgba(255,214,160,0.75), rgba(255,224,188,0.08))",
  },
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 48%, rgba(0,0,0,0.12)), radial-gradient(circle at 22% 74%, rgba(162,205,255,0.22), transparent 32%), linear-gradient(135deg, #142536, #060708 72%)",
    glow: "radial-gradient(circle at 42% 54%, rgba(162,205,255,0.26), transparent 62%)",
    line: "linear-gradient(90deg, rgba(180,217,255,0.1), rgba(180,217,255,0.72), rgba(180,217,255,0.06))",
  },
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 44%, rgba(0,0,0,0.14)), radial-gradient(circle at 76% 74%, rgba(212,255,184,0.18), transparent 28%), linear-gradient(135deg, #162319, #060706 72%)",
    glow: "radial-gradient(circle at 60% 62%, rgba(212,255,184,0.22), transparent 58%)",
    line: "linear-gradient(90deg, rgba(215,255,190,0.08), rgba(215,255,190,0.66), rgba(215,255,190,0.06))",
  },
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 44%, rgba(0,0,0,0.14)), radial-gradient(circle at 28% 24%, rgba(224,184,255,0.22), transparent 30%), linear-gradient(135deg, #261533, #050507 76%)",
    glow: "radial-gradient(circle at 44% 34%, rgba(224,184,255,0.24), transparent 60%)",
    line: "linear-gradient(90deg, rgba(226,198,255,0.08), rgba(226,198,255,0.74), rgba(226,198,255,0.06))",
  },
  {
    shell: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 44%, rgba(0,0,0,0.14)), radial-gradient(circle at 80% 18%, rgba(255,244,163,0.22), transparent 28%), linear-gradient(135deg, #2f2812, #080705 72%)",
    glow: "radial-gradient(circle at 58% 40%, rgba(255,244,163,0.26), transparent 58%)",
    line: "linear-gradient(90deg, rgba(255,244,163,0.08), rgba(255,244,163,0.7), rgba(255,244,163,0.05))",
  },
] as const;

const wrapIndex = (index: number, length: number) => (index + length) % length;

export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
  const { dict } = useLocaleContext();
  const s = dict.services;
  const items = s.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(wrapIndex(index, items.length));
  };

  const previousIndex = wrapIndex(currentIndex - 1, items.length);
  const nextIndex = wrapIndex(currentIndex + 1, items.length);

  return (
    <section
      id={variant === "home" ? "services" : undefined}
      className="section-fullscreen relative overflow-hidden border-t border-[var(--white-20)] bg-[var(--background)] section-gutter"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,214,138,0.08),transparent_28%)] opacity-60" />

      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 py-8 md:gap-10 md:py-10"
      >
        <div className="grid gap-4 border-b border-[var(--white-20)] pb-6 md:gap-5 md:pb-8">
          <p className="section-label">{s.clientsLabel}</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {serviceClients.map((client, idx) => (
              <div key={client.name} className="flex flex-col gap-2">
                {/* Name above the card */}
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ translateY: "100%" }}
                    whileInView={{ translateY: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 + idx * 0.08 }}
                    className="block font-bold tracking-widest text-[var(--white-100)]"
                    style={{
                      fontSize: client.name.length > 8 ? "1.55rem" : "2rem",
                      fontFamily: 'var(--font-red-rose, "Red Rose", serif)',
                    }}
                  >
                    {client.name}
                  </motion.span>
                </div>

                {/* Card */}
                <a
                  href={client.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-[13rem] overflow-hidden border border-[var(--white-20)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--white-40)]"
                  style={{ background: client.lightBg ? "#f5f5f5" : "var(--surface)" }}
                  aria-label={client.name}
                  title={client.name}
                >
                  {/* Logo */}
                  <div className="absolute inset-x-0 top-0 flex h-[78%] items-center justify-center border-b border-[var(--white-10)] px-6 py-5">
                    {!client.lightBg && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(240,240,250,0.08),transparent_65%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="relative max-h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Footer */}
                  <div className="absolute inset-x-0 bottom-0 flex h-[22%] items-end justify-between px-3 pb-2">
                    <span
                      className="text-[0.52rem] uppercase tracking-[0.22em]"
                      style={{ color: client.lightBg ? "rgba(0,0,0,0.35)" : "var(--white-40)" }}
                    >
                      Client
                    </span>
                    <span
                      className="text-[0.8rem] transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      style={{ color: client.lightBg ? "rgba(0,0,0,0.35)" : "var(--white-40)" }}
                    >
                      ↗
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="section-shell">
          <p className="section-label mb-3">{s.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
              {s.titleL1}
              <br />
              {s.titleL2}
            </h2>
            <p className="max-w-md text-[0.8rem] text-[var(--text-muted)] md:text-sm">{s.intro}</p>
          </div>
        </div>

        <div className="services-slider">
          <div className="services-slider__chrome">
            <div className="services-slider__count">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="services-slider__count-divider" />
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>
            <div className="services-slider__actions">
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                className="services-slider__btn"
                aria-label="Previous service"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                className="services-slider__btn"
                aria-label="Next service"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="services-slider__stage">
            <div className="services-slider__backgrounds" aria-hidden="true">
              {items.map((service, index) => {
                const theme = serviceThemes[index % serviceThemes.length];
                const isActive = index === currentIndex;

                return (
                  <div
                    key={`${service.id}-bg`}
                    className={`services-slider__bg${isActive ? " is-active" : ""}`}
                    style={{ backgroundImage: `${theme.glow}, ${theme.shell}` }}
                  />
                );
              })}
            </div>

            <div className="services-slider__layout">
              <div className="services-slider__slides" aria-live="polite">
                {items.map((service, index) => {
                  const theme = serviceThemes[index % serviceThemes.length];
                  let state = "is-hidden";

                  if (index === currentIndex) {
                    state = "is-current";
                  } else if (index === previousIndex) {
                    state = "is-previous";
                  } else if (index === nextIndex) {
                    state = "is-next";
                  }

                  return (
                    <article
                      key={service.id}
                      className={`services-slide ${state}`}
                      aria-hidden={index !== currentIndex}
                    >
                      <div className="services-slide__inner">
                        <div className="services-slide__visual" style={{ backgroundImage: theme.shell }}>
                          <span className="services-slide__eyebrow">{service.label}</span>
                          <div className="services-slide__visual-grid">
                            <span>{service.duration}</span>
                            <span>{service.scope}</span>
                          </div>
                          <div className="services-slide__visual-core" style={{ backgroundImage: theme.glow }} />
                          <div className="services-slide__visual-line" style={{ backgroundImage: theme.line }} />
                          <div className="services-slide__pillars">
                            {service.bullets.map((bullet) => (
                              <span key={bullet}>{bullet}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="services-slider__info-wrap">
                {items.map((service, index) => {
                  let state = "is-hidden";

                  if (index === currentIndex) {
                    state = "is-current";
                  } else if (index === previousIndex) {
                    state = "is-previous";
                  } else if (index === nextIndex) {
                    state = "is-next";
                  }

                  return (
                    <article key={`${service.id}-info`} className={`services-slide-info ${state}`} aria-hidden={index !== currentIndex}>
                      <div className="services-slide-info__inner">
                        <div className="services-slide-info__text">
                          <p className="services-slide-info__label">{service.label}</p>
                          <h3 className="services-slide-info__title">{service.title}</h3>
                          <p className="services-slide-info__body">{service.body}</p>
                        </div>
                        <div className="services-slide-info__meta">
                          <div>
                            <span className="services-slide-info__meta-label">{s.duration}</span>
                            <span className="services-slide-info__meta-value">{service.duration}</span>
                          </div>
                          <div>
                            <span className="services-slide-info__meta-label">{s.scope}</span>
                            <span className="services-slide-info__meta-value">{service.scope}</span>
                          </div>
                        </div>
                        <div className="services-slide-info__chips">
                          {service.bullets.map((bullet) => (
                            <span key={bullet}>{bullet}</span>
                          ))}
                        </div>
                        <p className="services-slide-info__status">{service.status}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="services-slider__rail" aria-label="Service slides">
            {items.map((service, index) => (
              <button
                key={`${service.id}-dot`}
                type="button"
                onClick={() => goTo(index)}
                className={`services-slider__dot${index === currentIndex ? " is-active" : ""}`}
                aria-label={`${service.title} ${index === currentIndex ? "(current)" : ""}`.trim()}
                aria-pressed={index === currentIndex}
              >
                <span>{service.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
