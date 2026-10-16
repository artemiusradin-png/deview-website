import type { Metadata } from "next";
import Link from "next/link";
import { GatedGuide } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/solutions/solutions.module.css";
import { SOLUTION_ASSETS, assetById, solutionPath } from "@/lib/solutions";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; asset: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_ASSETS.map((a) => ({ asset: a.id }));
}

/** Behind the sign-up form on the solution page, so kept out of search results. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asset } = await params;
  const found = assetById(asset);
  return {
    title: found ? `${found.title} | DeView` : "DeView",
    robots: { index: false, follow: true },
  };
}

export default async function SolutionAssetGuide({ params }: Props) {
  const { asset: id } = await params;
  const asset = assetById(id);
  if (!asset) notFound();

  return (
    <>
      <main className={styles.page}>
        <GatedGuide accessKey={asset.accessKey} signupPath={solutionPath(asset.primaryPage)}>
          <div className={styles.container}>
            <header className={styles.guideHead}>
              <span className={styles.kicker}>{asset.kicker}</span>
              <h1 className={styles.guideTitle}>{asset.title}</h1>
              <span className={styles.intro}>{asset.lead}</span>
            </header>

            <section className={styles.section} aria-label="Requirement areas">
              <div className={styles.areaGrid}>
                {asset.areas.map((area, index) => (
                  <div key={area.title}>
                    <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                    <h2>{area.title}</h2>
                    <ul className={styles.checklist}>
                      {area.checks.map((check) => (
                        <li key={check}>{check}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section} aria-labelledby="questions-title">
              <span className={styles.kicker}>Before you choose</span>
              <h2 id="questions-title" className={styles.sectionTitle}>
                {asset.questionsTitle}.
              </h2>
              <ol className={styles.questions}>
                {asset.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
            </section>

            <section className={styles.cta} aria-labelledby="cta-title">
              <span className={styles.kicker}>Next step</span>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Want a second pair of eyes on your requirements?
              </h2>
              <span className={styles.body}>
                Send us what you have. An engineer reads it and replies within 1–2 business days.
              </span>
              <Link href="/en/contact" className={styles.button}>
                Talk to an engineer <span aria-hidden="true">↗</span>
              </Link>
            </section>
            <div style={{ height: 56 }} />
          </div>
        </GatedGuide>
      </main>
      <SiteFooter />
    </>
  );
}
