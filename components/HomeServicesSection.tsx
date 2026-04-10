"use client";

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
  { name: "EVDEV",      src: "/client-logos/evdev.svg",      width: 96,  height: 19, logoH: "h-8"  },
  { name: "Fizkultura", src: "/client-logos/fizkultura.png", width: 118, height: 79, logoH: "h-16" },
  { name: "Jetfans",    src: "/client-logos/jetfans.avif",   width: 160, height: 60, logoH: "h-14" },
  { name: "Nextair",    src: "/client-logos/nextair.webp",   width: 80,  height: 80, logoH: "h-16" },
  { name: "FACT",       src: "/client-logos/fact.png",       width: 492, height: 96, logoH: "h-10" },
  { name: "Novarise",   src: "/client-logos/novarise.svg",   width: 283, height: 42, logoH: "h-10" },
] as const;

function EvdevLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="96"
      height="19"
      viewBox="0 0 96 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EVDEV"
      role="img"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.491 18.789V15.2996H4.30454V10.9513H12.9938V7.56928H4.30454V3.48938H14.1435V0H0V18.789H14.491ZM27.5686 18.789L35.6697 0H31.3652L25.5901 13.4207L19.8953 0H15.2165L23.2908 18.789H27.5686ZM38.166 0H46.6794C48.714 0 50.5077 0.393674 52.0605 1.18102C53.6311 1.95048 54.8447 3.04203 55.7014 4.45567C56.576 5.86932 57.0132 7.5156 57.0132 9.39449C57.0132 11.2734 56.576 12.9197 55.7014 14.3333C54.8447 15.747 53.6311 16.8475 52.0605 17.6348C50.5077 18.4043 48.714 18.789 46.6794 18.789H38.166V0ZM46.4652 15.2191C48.3392 15.2191 49.8295 14.7001 50.9361 13.6623C52.0605 12.6065 52.6227 11.1839 52.6227 9.39449C52.6227 7.60507 52.0605 6.19142 50.9361 5.15355C49.8295 4.09779 48.3392 3.56991 46.4652 3.56991H42.503V15.2191H46.4652ZM74.7942 15.2996V18.789H60.284V0H74.4462V3.48938H64.5942V7.56928H73.295V10.9513H64.5942V15.2996H74.7942ZM87.8891 18.789L96.0009 0H91.6906L85.908 13.4207L80.2056 0H75.5206L83.6056 18.789H87.8891Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-10">
            {serviceClients.map((client) => (
              <div key={client.name} className="service-client">
                <motion.div
                  initial={{ opacity: 0, translateY: 18 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="service-client__logo-wrap"
                >
                  {client.name === "EVDEV" ? (
                    <EvdevLogo className={`service-client__logo service-client__logo--evdev ${client.logoH} w-auto max-w-full`} />
                  ) : (
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className={`service-client__logo ${client.name === "Fizkultura" ? "service-client__logo--fizkultura" : ""} ${client.logoH} w-auto max-w-full object-contain`}
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
          <div className="max-w-2xl">
            <p className="section-label mb-3">{s.sectionLabel}</p>
            <h2 className="text-[clamp(1.85rem,5vw,2.85rem)] leading-snug text-[var(--white-100)]">
              {s.titleL1}
              <br />
              {s.titleL2}
            </h2>
          </div>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--text-muted)] md:text-[1.125rem]">
            {s.intro}
          </p>
        </div>

        <div className="w-full" aria-live="polite">
          <ServicesVoyageSlider services={s} />
        </div>
      </motion.div>
    </section>
  );
}
