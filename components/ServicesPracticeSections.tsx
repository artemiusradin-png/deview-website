"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PRACTICE_IDS, practiceMeta, type PracticeId } from "@/lib/practice-areas";

/** Anchor id of the six-service grid lower on the /services page (see services/page.tsx). */
export const SERVICES_GRID_ID = "services";

/**
 * Each practice maps to one of the theme accent tokens. We reference the `-raw`
 * triplets (e.g. `141 231 189`) rather than the bare `--color-*` vars: the raw
 * values are concretely defined in both light and dark themes, so
 * `rgb(var(--color-green-raw) / a)` resolves reliably for solids and glows alike.
 */
const ACCENT_RAW: Record<PracticeId, string> = {
  "ai-solutions": "var(--color-green-raw)",
  "software-engineering": "var(--color-blue-raw)",
  "data-science": "var(--color-gold-raw)",
};

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Rich, anchored detail sections for the three practice areas — the landing
 * targets for /services#ai-solutions, #software-engineering and #data-science.
 * Replaces the thin standalone practice cards with a header, a described
 * capabilities grid, a proof band and a contextual CTA per practice.
 */
export function ServicesPracticeSections() {
  const { dict, localePath } = useLocaleContext();
  const p = dict.practices;

  const ctaHref = (id: PracticeId) =>
    id === "ai-solutions" ? `#${SERVICES_GRID_ID}` : localePath("/case-studies");

  return (
    <>
      {/* Region header — reuses the existing translated practices intro copy. */}
      <section className="section-gutter pt-2 pb-2">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">{p.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="text-[clamp(1.6rem,5vw,2.5rem)] font-medium leading-[1.1] tracking-tight text-[var(--white-100)]">
              <span>{p.titleL1} </span>
              <span className="text-[var(--white-50)]">{p.titleL2}</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{p.intro}</p>
          </div>
        </div>
      </section>

      {PRACTICE_IDS.map((id, index) => {
        const item = p.items[index];
        const accent = ACCENT_RAW[id];
        const solid = `rgb(${accent})`;
        const meta = practiceMeta[id];

        return (
          <section
            key={id}
            id={id}
            className="scroll-margin-header relative overflow-hidden border-t border-[var(--white-10)] section-gutter py-11 md:py-16"
          >
            {/* Soft accent glow anchored to the top-left of each section. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(760px 340px at 4% -18%, rgb(${accent} / 0.13), transparent 70%)`,
              }}
            />

            <motion.div {...reveal} className="relative mx-auto max-w-6xl">
              {/* Heading row + supporting image (image is desktop-only to keep phones light). */}
              <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-center md:gap-12">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold tabular-nums" style={{ color: solid }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="section-label">{item.label}</p>
                  </div>
                  <h2 className="mt-3 text-[clamp(1.5rem,4.5vw,2.4rem)] font-medium leading-[1.1] tracking-tight text-[var(--white-100)]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                    {item.body}
                  </p>
                </div>

                <div className="hidden md:block">
                  <div className="relative overflow-hidden rounded-lg border border-[var(--white-10)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={meta.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover opacity-70"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Capabilities — the sub-areas, each with a one-line description. */}
              <div className="mt-9 md:mt-12">
                <p className="section-label mb-4">{p.detailCapabilitiesLabel}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {item.subs.map((sub, i) => (
                    <div
                      key={sub}
                      className="rounded-lg border border-[var(--white-10)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--white-20)]"
                    >
                      <span
                        className="mb-3 block h-1 w-6 rounded-full"
                        style={{ backgroundColor: solid }}
                        aria-hidden="true"
                      />
                      <h3 className="text-[0.9rem] font-medium leading-snug text-[var(--white-100)]">
                        {sub}
                      </h3>
                      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-[var(--text-muted)]">
                        {item.capabilityNotes[i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proof + contextual CTA. */}
              <div className="mt-8 flex flex-col gap-4 border-t border-[var(--white-10)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2.5 text-[0.8rem] leading-snug text-[var(--white-70)]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: solid }}
                    aria-hidden="true"
                  />
                  {item.proof}
                </p>
                <a
                  href={ctaHref(id)}
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-[var(--white-40)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--white-100)] transition-colors hover:border-[var(--white-80)]"
                >
                  {item.ctaLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </section>
        );
      })}
    </>
  );
}
