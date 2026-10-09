"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PageIntro } from "@/components/PageIntro";
import { PhaseDiagram } from "@/components/PhaseDiagram";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "./how-we-work.module.css";

/** Timeline bar sizes, roughly in proportion to each phase's typical duration:
 *  flex weights on wide screens, bar widths when the rows stack on phones. */
const PHASE_SIZE: Record<string, { grow: number; width: string }> = {
  "01": { grow: 3, width: "40%" },
  "02": { grow: 1.6, width: "22%" },
  "03": { grow: 6, width: "100%" },
  "04": { grow: 1.6, width: "22%" },
};

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

const phaseName = (label: string) =>
  label.charAt(0) + label.slice(1).toLowerCase();

export function HowWeWorkContent() {
  const { dict } = useLocaleContext();
  const h = dict.howWeWorkPage;
  const marks: Record<string, { text: string; className?: string }> = {
    "01": { text: h.timelineMarks.start },
    "02": { text: "", className: styles.markEmpty },
    "03": { text: h.timelineMarks.price },
    "04": { text: h.timelineMarks.end, className: styles.markEnd },
  };

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />
          <PageIntro
            label={h.sectionLabel}
            title={
              <>
                From first idea
                <br />
                to everyday work.
              </>
            }
          >
            <p>{h.subtitle}</p>
          </PageIntro>

          <nav aria-label={h.timelineLabel} className={styles.timeline}>
            <p className={`section-label ${styles.timelineLabel}`}>
              {h.timelineLabel}
            </p>
            <ol className={styles.track}>
              {h.phases.map((p) => {
                const mark = marks[p.number];
                return (
                  <li
                    key={p.number}
                    className={p.number === "03" ? styles.accent : undefined}
                    style={
                      {
                        "--grow": PHASE_SIZE[p.number].grow,
                        "--w": PHASE_SIZE[p.number].width,
                      } as CSSProperties
                    }
                  >
                    <a href={`#phase-${p.number}`}>
                      <span
                        className={`${styles.mark} ${mark.className ?? ""}`}
                      >
                        {mark.text}
                      </span>
                      <span className={styles.bar} aria-hidden="true" />
                      <span className={styles.phaseMeta}>
                        {p.number}
                        <span>{p.duration}</span>
                      </span>
                      <span className={styles.phaseName}>
                        {phaseName(p.label)}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        {h.phases.map((p, index) => (
          <section
            key={p.number}
            id={`phase-${p.number}`}
            className={`section-gutter ${styles.phase} ${index % 2 ? styles.flip : ""}`}
          >
            <motion.div
              {...reveal}
              className={`mx-auto max-w-6xl ${styles.phaseGrid}`}
            >
              <div className={styles.phaseHead}>
                <div className={styles.kicker}>
                  <p className="section-label">
                    {p.number} / {phaseName(p.label)}
                  </p>
                  <span className={styles.duration}>{p.duration}</span>
                </div>
                <h2 className={styles.phaseTitle}>{p.title}</h2>
                <p className={styles.phaseBody}>{p.body}</p>
              </div>

              <div className={styles.phaseDiagram}>
                <PhaseDiagram phase={p.number} />
              </div>

              <dl className={styles.facts}>
                <div>
                  <dt className="section-label">
                    {h.columnLabels.deliverable}
                  </dt>
                  <dd>{p.deliverable}</dd>
                </div>
                <div>
                  <dt className="section-label">{h.columnLabels.whoJoins}</dt>
                  <dd>{p.whoJoins}</dd>
                </div>
              </dl>
            </motion.div>
          </section>
        ))}

        <section className="section-gutter">
          <motion.div
            {...reveal}
            className={`mx-auto max-w-6xl ${styles.promises}`}
          >
            <p className="section-label">{h.promisesLabel}</p>
            <h2 className={styles.promisesTitle}>{h.promisesTitle}</h2>
            <div className={styles.promiseGrid}>
              {h.promises.map((item, index) => (
                <div key={item.title}>
                  <span className={styles.promiseNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.promiseText}>
                    <h3 className={styles.promiseTitle}>{item.title}</h3>
                    <p className={styles.promiseBody}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
