"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PRACTICE_IDS } from "@/lib/practice-areas";

type HomePracticeAreasProps = {
  variant?: "home" | "standalone";
};

export function HomePracticeAreas({ variant = "home" }: HomePracticeAreasProps) {
  const { dict, localePath } = useLocaleContext();
  const p = dict.practices;

  return (
    <section
      id={variant === "home" ? "practices" : undefined}
      className="border-t border-[var(--white-20)] bg-[var(--background)] section-gutter pb-8 pt-4 sm:pb-10 sm:pt-5 md:pb-12 md:pt-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {PRACTICE_IDS.map((id, index) => {
            const item = p.items[index];
            return (
              <motion.a
                key={id}
                id={variant === "standalone" ? id : undefined}
                href={variant === "standalone" ? undefined : localePath(`/services#${id}`)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`group block border-t border-[var(--white-20)] pt-6 transition-colors ${
                  variant === "standalone" ? "scroll-margin-header" : ""
                }`}
              >
                <p className="text-[0.95rem] leading-relaxed text-[var(--white-90)] sm:text-base">
                  <span className="font-medium text-[var(--white-100)] underline decoration-[var(--white-20)] decoration-1 underline-offset-4 transition-colors group-hover:decoration-[var(--white-60)]">
                    {item.heading}.
                  </span>{" "}
                  {item.title}.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {item.subs.map((sub) => (
                    <li key={sub} className="text-[0.78rem] leading-snug text-[var(--text-muted)]">
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
