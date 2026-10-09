"use client";

import { PageIntro } from "./PageIntro";
import { CapabilityDiagram } from "./CapabilityDiagram";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PRACTICE_IDS, type PracticeId } from "@/lib/practice-areas";
import styles from "./services-page.module.css";

/** Anchor id of the six-service grid lower on the /services page (see services/page.tsx). */
export const SERVICES_GRID_ID = "services";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Page intro plus one anchored section per practice area: the landing targets
 * for /services#ai-solutions, #software-engineering and #data-science. Each
 * section pairs a short heading and capability list with a large drawing.
 */
export function ServicesPracticeSections() {
  const { dict, localePath } = useLocaleContext();
  const p = dict.practices;

  const ctaHref = (id: PracticeId) =>
    id === "ai-solutions"
      ? `#${SERVICES_GRID_ID}`
      : localePath("/case-studies");

  return (
    <>
      <section className="section-gutter">
        <div className="mx-auto max-w-6xl">
          <PageIntro
            label="What we do"
            title={
              <>
                Built around
                <br />
                your business.
              </>
            }
          >
            <p>{p.intro}</p>
          </PageIntro>

          <nav aria-label="Practices" className={styles.index}>
            {PRACTICE_IDS.map((id, index) => (
              <a key={id} href={`#${id}`}>
                <span className={styles.indexMeta}>
                  {String(index + 1).padStart(2, "0")}
                  <span aria-hidden="true">↘</span>
                </span>
                <span className={styles.indexName}>
                  {p.items[index].heading}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {PRACTICE_IDS.map((id, index) => {
        const item = p.items[index];

        return (
          <section
            key={id}
            id={id}
            className={`section-gutter ${styles.practice} ${index % 2 ? styles.flip : ""}`}
          >
            <motion.div
              {...reveal}
              className={`mx-auto max-w-6xl ${styles.practiceGrid}`}
            >
              <div className={styles.practiceHead}>
                <p className="section-label">
                  {String(index + 1).padStart(2, "0")} / {item.heading}
                </p>
                <h2 className={styles.practiceTitle}>{item.title}</h2>
                <p className={styles.practiceBody}>{item.body}</p>
              </div>

              <div className={styles.practiceDiagram}>
                <CapabilityDiagram mode={index} />
              </div>

              <div className={styles.practiceDetails}>
                <p className="section-label">{p.detailCapabilitiesLabel}</p>
                <ul className={styles.capabilities}>
                  {item.subs.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
                <div className={styles.practiceFooter}>
                  <a href={ctaHref(id)}>
                    {item.ctaLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className={styles.proof}>{item.proof}</span>
                </div>
              </div>
            </motion.div>
          </section>
        );
      })}
    </>
  );
}
