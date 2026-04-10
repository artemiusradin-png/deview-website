"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeSectionCardMotion, homeSectionReveal, homeSectionStagger } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

const serviceClients = [
  { name: "EVDEV", href: "https://evdev.dev/", src: "/client-logos/evdev.svg", width: 96, height: 19 },
  { name: "Fizkultura", href: "https://fizkultura.com.ua/", src: "/client-logos/fizkultura.png", width: 118, height: 79 },
  { name: "Jetfans", href: "https://www.jetfans.eu/", src: "/client-logos/jetfans.avif", width: 160, height: 60 },
  { name: "Nextair", href: "https://nextair.com.ua/", src: "/client-logos/nextair.webp", width: 80, height: 80 },
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
          <p className="section-label">{s.clientsLabel}</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {serviceClients.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-[11.5rem] overflow-hidden border border-[var(--white-20)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--white-40)] hover:bg-[var(--surface-elevated)]"
                aria-label={client.name}
                title={client.name}
              >
                <div className="absolute inset-x-0 top-0 h-[78%] overflow-hidden border-b border-[var(--white-10)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(240,240,250,0.08),transparent_65%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-full w-full items-center justify-center px-5 py-5">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="max-h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="absolute left-0 bottom-[16%] z-10 -translate-x-[14%] overflow-hidden pointer-events-none select-none">
                  <span
                    className={`block text-[var(--white-100)] transition-transform duration-300 group-hover:translate-x-[6px] ${
                      client.name === "Fizkultura"
                        ? "text-[1.55rem] tracking-[0.02em]"
                        : "text-[1.3rem] tracking-[0.18em]"
                    }`}
                  >
                    {client.name}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex h-[22%] items-end justify-between px-3 pb-2">
                  <span className="text-[0.52rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                    Client
                  </span>
                  <span className="text-[0.8rem] text-[var(--white-40)] transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[var(--white-90)]">
                    ↗
                  </span>
                </div>
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
