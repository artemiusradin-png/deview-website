"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { homeSectionCardMotion, homeSectionReveal, homeSectionStagger } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

const serviceClients = [
  { name: "EVDEV", href: "https://evdev.dev/", mark: "EVDEV", accent: "software" },
  { name: "Fizkultura", href: "https://fizkultura.com.ua/", mark: "Fizkultura", accent: "fitness" },
  { name: "Jetfans", href: "https://www.jetfans.eu/", mark: "JETFANS", accent: "aviation" },
  { name: "Nextair", href: "https://nextair.com.ua/", mark: "NEXTAIR", accent: "air" },
] as const;

export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
  const { dict } = useLocaleContext();
  const s = dict.services;
  const items = s.items;
  const [activeServiceId, setActiveServiceId] = useState<string>(() => items[0].id);

  return (
    <section
      id={variant === "home" ? "services" : undefined}
      className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter"
    >
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
      >
        <div className="grid gap-4 border-b border-[var(--white-20)] pb-6 md:gap-5 md:pb-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label mb-2">{s.clientsLabel}</p>
              <p className="max-w-xl text-[0.8rem] text-[var(--text-muted)] md:text-sm">{s.clientsIntro}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
            {serviceClients.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-[5.5rem] overflow-hidden border border-[var(--white-20)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface-elevated)_86%,transparent),color-mix(in_srgb,var(--surface)_94%,transparent))] px-4 py-3 transition-all duration-200 hover:border-[var(--white-40)] hover:bg-[var(--surface-elevated)]"
                aria-label={client.name}
                title={client.name}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,240,250,0.34),transparent)] opacity-70" />
                <span className="flex w-full flex-col justify-between">
                  <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-40)]">
                    {client.accent}
                  </span>
                  <span
                    className={`text-[var(--white-100)] transition-transform duration-200 group-hover:translate-x-[2px] ${
                      client.name === "Fizkultura"
                        ? "text-[1.15rem] tracking-[0.01em]"
                        : "text-[0.95rem] tracking-[0.22em]"
                    }`}
                  >
                    {client.mark}
                  </span>
                </span>
              </a>
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

        <motion.div
          variants={homeSectionStagger}
          initial="initial"
          whileInView="whileInView"
          viewport={homeSectionStagger.viewport}
          className="grid gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-4"
        >
          {items.map((service) => (
            <motion.article
              key={service.id}
              variants={homeSectionCardMotion}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setActiveServiceId(service.id)}
              className={`group panel panel-interactive relative overflow-hidden border px-4 py-5 transition-all duration-200 ${
                activeServiceId === service.id
                  ? "border-[var(--white-40)] bg-[var(--surface-elevated)] shadow-[0_20px_45px_rgba(0,0,0,0.14)]"
                  : "border-[var(--white-20)] bg-[var(--surface)]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-[2px] transition-opacity duration-200 ${
                  activeServiceId === service.id ? "bg-[var(--white-90)] opacity-100" : "bg-[var(--white-40)] opacity-0"
                }`}
              />
              <button
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className="flex w-full flex-col border-0 bg-transparent p-0 text-left text-inherit"
                aria-pressed={activeServiceId === service.id}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="section-label text-[0.6rem]">{service.label}</p>
                  <span
                    className={`text-[0.9rem] transition-all duration-200 ${
                      activeServiceId === service.id
                        ? "translate-x-[2px] -translate-y-[2px] text-[var(--white-100)]"
                        : "text-[var(--white-60)]"
                    }`}
                  >
                    ↗
                  </span>
                </div>
                <p className="mb-3 text-sm text-[var(--white-100)]">{service.title}</p>
                <div className="mb-4 space-y-1 text-[0.7rem] text-[var(--white-80)]">
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">{s.duration}</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">{s.scope}</span>
                    <span className="text-right">{service.scope}</span>
                  </div>
                </div>
                <p className="mb-4 text-[0.75rem] leading-relaxed text-[var(--text-muted)]">{service.body}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex min-h-[1.7rem] items-center whitespace-nowrap border border-[var(--white-20)] px-[0.55rem] py-[0.22rem] text-[0.58rem] leading-none tracking-[0.12em] text-[var(--white-80)] uppercase"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">{service.status}</p>
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
