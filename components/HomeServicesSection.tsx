"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesVoyageSlider } from "@/components/ServicesVoyageSlider";
import { homeSectionReveal } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

const serviceClients = [
  { name: "EVDEV",      src: "/client-logos/evdev.svg",      width: 96,  height: 19, logoH: "h-8",  accent: "rgba(168, 214, 255, 0.2)" },
  { name: "Fizkultura", src: "/client-logos/fizkultura.png", width: 118, height: 79, logoH: "h-16", accent: "rgba(255, 219, 169, 0.2)" },
  { name: "Jetfans",    src: "/client-logos/jetfans.avif",   width: 160, height: 60, logoH: "h-14", accent: "rgba(197, 230, 255, 0.18)" },
  { name: "Nextair",    src: "/client-logos/nextair.webp",   width: 80,  height: 80, logoH: "h-16", accent: "rgba(215, 255, 190, 0.18)" },
] as const;

export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
  const { dict } = useLocaleContext();
  const s = dict.services;

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
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {serviceClients.map((client, idx) => (
              <div key={client.name} className="service-client">
                <div
                  className="service-client__tile"
                  style={{ "--service-client-accent": client.accent } as CSSProperties}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className={`service-client__logo ${client.logoH} w-auto max-w-full object-contain`}
                  />
                </div>
                <div className="service-client__caption overflow-hidden">
                  <motion.span
                    initial={{ translateY: "100%" }}
                    whileInView={{ translateY: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 + idx * 0.08 }}
                    className="block"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.18em",
                    }}
                  >
                    {client.name}
                  </motion.span>
                </div>
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

        <div className="w-full" aria-live="polite">
          <ServicesVoyageSlider services={s} />
        </div>
      </motion.div>
    </section>
  );
}
