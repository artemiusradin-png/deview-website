"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dict-en";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { ServiceDiagram } from "./ServiceDiagram";
import styles from "./services-page.module.css";

type ServicesBlock = Dictionary["services"];

type Props = {
  services: ServicesBlock;
};

/** Six service cards, all visible at once: a drawing, a name and one line each. */
export function ServicesFeatureGrid({ services: s }: Props) {
  const { localePath } = useLocaleContext();

  return (
    <div className={styles.catalog}>
      {s.items.map((item, index) => (
        <motion.article
          key={item.id}
          id={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
          className={styles.service}
        >
          <div className={styles.serviceMeta}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.duration}>{item.duration}</span>
          </div>
          <div className={styles.serviceDrawing}>
            <ServiceDiagram id={item.id} />
          </div>
          <h3 className={styles.serviceName}>{item.name}</h3>
          <p className={styles.serviceLine}>{item.title}</p>
          <a className={styles.serviceLink} href={localePath("/contact")}>
            {s.contactCta}
            <span aria-hidden="true">↗</span>
          </a>
        </motion.article>
      ))}
    </div>
  );
}
