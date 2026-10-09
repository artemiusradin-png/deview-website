"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { PageIntro } from "@/components/PageIntro";
import { NewsletterDialog } from "@/components/ui/newsletter-dialog";

type HomeSolutionsSectionProps = { variant?: "home" | "standalone" };

export function HomeSolutionsSection({
  variant = "home",
}: HomeSolutionsSectionProps) {
  const { dict } = useLocaleContext();
  const sol = dict.solutions;

  return (
    <section
      id={variant === "home" ? "solutions" : undefined}
      className="use-cases-section section-gutter"
    >
      <div className="mx-auto max-w-6xl">
        {variant === "standalone" ? (
          <PageIntro
            label={sol.sectionLabel}
            title={
              <>
                Real work.
                <br />
                Useful AI.
              </>
            }
          >
            <p>{sol.p1}</p>
            <p>{sol.p2}</p>
          </PageIntro>
        ) : (
          <div className="mb-12">
            <p className="section-label">{sol.sectionLabel}</p>
            <h2>
              {sol.titleL1}
              <br />
              {sol.titleL2}
            </h2>
            <p>{sol.p1}</p>
            <p>{sol.p2}</p>
          </div>
        )}
        <div className="use-case-grid">
          {sol.areas.map((area, index) => (
            <article key={area.id}>
              <div className="use-case-meta">
                <span>0{index + 1}</span>
                <span>{area.sector}</span>
              </div>
              <h2>{area.title}</h2>
              <p>{area.body}</p>
              <NewsletterDialog
                trigger={
                  <button type="button" className="use-case-link">
                    Get insights <span aria-hidden="true">↗</span>
                  </button>
                }
                title={area.title}
                description={`Subscribe to receive insights and examples for ${area.sector.toLowerCase()}.`}
                source={`use-case-${area.id}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
