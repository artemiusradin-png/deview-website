"use client";

import { motion } from "framer-motion";
import { homeSectionCardMotion, homeSectionReveal, homeSectionStagger } from "@/lib/home-section-motion";
import { homeServices } from "@/lib/services";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};

export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
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
        <div className="section-shell">
          <p className="section-label mb-3">SERVICES</p>
          <div className="rule mb-6" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
              End-to-end services for
              <br />
              implementing AI in business operations.
            </h2>
            <p className="max-w-md text-[0.8rem] text-[var(--text-muted)] md:text-sm">
              From selecting the right use case to building, integrating, and operating the final system, we work across
              the full implementation lifecycle.
            </p>
          </div>
        </div>

        <motion.div
          variants={homeSectionStagger}
          initial="initial"
          whileInView="whileInView"
          viewport={homeSectionStagger.viewport}
          className="grid gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-4"
        >
          {homeServices.map((service) => (
            <motion.article
              key={service.id}
              variants={homeSectionCardMotion}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
              className="panel panel-interactive border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5"
            >
              <p className="section-label mb-3 text-[0.6rem]">{service.label}</p>
              <p className="mb-3 text-sm text-[var(--white-100)]">{service.title}</p>
              <div className="mb-4 space-y-1 text-[0.7rem] text-[var(--white-80)]">
                <div className="flex justify-between gap-2">
                  <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">DURATION</span>
                  <span>{service.duration}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">SCOPE</span>
                  <span className="text-right">{service.scope}</span>
                </div>
              </div>
              <p className="mb-3 text-[0.75rem] leading-relaxed text-[var(--text-muted)]">{service.body}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">{service.status}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
