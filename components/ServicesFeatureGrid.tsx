"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dict-en";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type ServicesBlock = Dictionary["services"];

type Props = {
  services: ServicesBlock;
};

/** Flat, static grid of service cards: all six visible at once, no slider. */
export function ServicesFeatureGrid({ services: s }: Props) {
  const { localePath } = useLocaleContext();

  return (
    <div className="service-catalog">
      {s.items.map((item, index) => (
        <motion.article
          key={item.id}
          id={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
          className="group flex flex-col overflow-hidden rounded-lg border border-[var(--white-20)] bg-[var(--surface)] transition-colors hover:border-[var(--white-40)]"
        >
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              {item.label}
            </p>
            <h3 className="mt-2 text-base font-medium leading-snug text-[var(--white-100)]">
              {item.title}
            </h3>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-[var(--text-muted)]">
              {item.body}
            </p>
            <ul className="mt-4 space-y-1.5">
              {item.bullets.slice(0, 2).map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-[0.72rem] leading-snug text-[var(--white-70)]"
                >
                  <span
                    className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-[var(--white-40)]"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-3 pt-5 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
              <span>
                {s.duration}: {item.duration}
              </span>
              <span
                className="h-1 w-1 rounded-full bg-[var(--white-30)]"
                aria-hidden="true"
              />
              <span className="truncate">{item.scope}</span>
            </div>
            <a className="service-contact" href={localePath("/contact")}>
              Discuss this service <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
