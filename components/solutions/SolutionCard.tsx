import Image from "next/image";
import Link from "next/link";
import { assetById, solutionPath, type SolutionPage } from "@/lib/solutions";
import { coverPath } from "./covers";
import { getSolutionCategory } from "./categories";
import styles from "./solutions.module.css";

interface SolutionCardProps {
  page: SolutionPage;
  priority?: boolean;
}

export function SolutionCard({ page, priority = false }: SolutionCardProps) {
  const asset = assetById(page.assetId);
  const category = getSolutionCategory(page.slug, page.vertical);

  return (
    <article className={styles.cardItem}>
      <Link href={`/en${solutionPath(page.slug)}`} className={styles.cardAnchor}>
        <div className={styles.cardThumbnailWrapper}>
          <Image
            src={coverPath(page.slug)}
            alt={`Architecture blueprint for ${page.h1}`}
            width={640}
            height={400}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
            className={styles.cardImage}
          />
          <span className={styles.cardCategoryChip}>{category}</span>
        </div>
        <div className={styles.cardMain}>
          <h3 className={styles.cardHeading}>{page.h1}</h3>
          <p className={styles.cardExcerpt}>{page.seoDescription}</p>

          {asset ? (
            <div className={styles.cardAssetTag}>
              <svg
                className={styles.cardAssetIcon}
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M3 2.5h7l3 3V13.5H3V2.5z" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M10 2.5v3h3" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M5.5 8h5M5.5 10.5h3.5" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span className={styles.cardAssetText}>
                <strong>Included Spec:</strong> {asset.title}
              </span>
            </div>
          ) : null}

          <div className={styles.cardBottomRow}>
            <span>View Architecture & Spec</span>
            <span className={styles.cardArrowGlyph} aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

