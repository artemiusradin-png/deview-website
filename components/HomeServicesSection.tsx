"use client";

import { motion } from "framer-motion";
import { ServicesFeatureGrid } from "@/components/ServicesFeatureGrid";
import { homeSectionReveal } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import styles from "./services-page.module.css";

/** Six productised AI services grid. Rendered on /services with the `#services`
 *  anchor so the AI Solutions detail CTA can scroll here. */
export function HomeServicesSection() {
  const { dict } = useLocaleContext();
  const s = dict.services;

  return (
    <section
      id="services"
      className={`scroll-margin-header section-gutter ${styles.catalogSection}`}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...homeSectionReveal}
          transition={{ duration: 0.5 }}
          className={styles.catalogHeading}
        >
          <div>
            <p className="section-label">{s.sectionLabel}</p>
            <h2 className={styles.catalogTitle}>
              {s.titleL1}
              <br />
              <span>{s.titleL2}</span>
            </h2>
          </div>
          <p className={styles.catalogIntro}>{s.intro}</p>
        </motion.div>

        <ServicesFeatureGrid services={s} />
      </div>
    </section>
  );
}
