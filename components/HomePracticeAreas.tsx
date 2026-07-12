"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PRACTICE_IDS, practiceMeta } from "@/lib/practice-areas";

type HomePracticeAreasProps = {
  variant?: "home" | "standalone";
};

export function HomePracticeAreas({ variant = "home" }: HomePracticeAreasProps) {
  const { dict, localePath } = useLocaleContext();
  const p = dict.practices;

  return (
    <section
      id={variant === "home" ? "practices" : undefined}
      className="border-t border-[var(--white-20)] bg-[var(--background)] section-gutter py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">{p.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
              {p.titleL1}
              <br />
              {p.titleL2}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{p.intro}</p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {PRACTICE_IDS.map((id, index) => {
            const item = p.items[index];
            const meta = practiceMeta[id];
            return (
              <motion.a
                key={id}
                id={variant === "standalone" ? id : undefined}
                href={variant === "standalone" ? undefined : localePath(`/services#${id}`)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`group flex flex-col overflow-hidden rounded-lg border border-[var(--white-20)] bg-[var(--surface)] transition-colors hover:border-[var(--white-40)] ${
                  variant === "standalone" ? "scroll-margin-header" : ""
                }`}
              >
                <div className="relative h-44 overflow-hidden border-b border-[var(--white-10)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={meta.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${meta.accent}, transparent 60%)` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--white-60)]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-medium leading-snug text-[var(--white-100)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                  <ul className="mt-5 space-y-2">
                    {item.subs.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-start gap-2 text-[0.8rem] leading-snug text-[var(--white-80)]"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[var(--white-40)]" aria-hidden="true" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
                      {item.proof}
                    </p>
                    {variant === "home" ? (
                      <span className="mt-4 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors group-hover:text-[var(--white-100)]">
                        {p.explore}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    ) : null}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
