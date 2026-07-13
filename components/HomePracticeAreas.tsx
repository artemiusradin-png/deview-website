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
      className="bg-[var(--background)] section-gutter pb-8 pt-4 sm:pb-10 sm:pt-5 md:pb-12 md:pt-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Mobile: horizontal snap-carousel that stays within the page's section-gutter
            (no more -mx-4/px-4 full-bleed, which pinned the first card ~2px off the left
            edge instead of the ~18px gutter every other block uses). sm+: static grid. */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:items-start sm:gap-x-8 sm:gap-y-8 sm:overflow-visible sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
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
                className={`group block w-[80vw] shrink-0 snap-start border-t border-[var(--white-20)] pt-6 transition-colors sm:w-auto sm:shrink ${
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
