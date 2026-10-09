"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { SubpageNav } from "@/components/SubpageNav";

export function StackContent() {
  const { dict } = useLocaleContext();
  const s = dict.stackPage;

  return (
    <div className="section-gutter mx-auto max-w-6xl">
      <SubpageNav backHref="/" />

      <PageIntro
        label={s.sectionLabel}
        title={
          <>
            The right tools.
            <br />
            Working together.
          </>
        }
      >
        <p>{s.subtitle}</p>
      </PageIntro>

      {/* Stack layers */}
      <div className="mb-16 space-y-12">
        {s.layers.map((layer) => (
          <div key={layer.label}>
            <div className="mb-6">
              <p className="mb-1 text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                {layer.label}
              </p>
              <p className="text-[0.78rem] leading-snug text-[var(--text-muted)]">
                {layer.description}
              </p>
            </div>
            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-3">
              {layer.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 bg-[var(--background)] px-4 py-4"
                >
                  <p className="text-[0.78rem] text-[var(--white-80)]">
                    {item.name}
                  </p>
                  <p className="text-[0.68rem] leading-snug text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Compliance */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {s.complianceLabel}
        </p>
        <div className="rule mb-6" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--white-20)]">
                <th className="pb-3 pr-6 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {s.complianceColumns.framework}
                </th>
                <th className="pb-3 pr-6 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {s.complianceColumns.region}
                </th>
                <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {s.complianceColumns.coverage}
                </th>
              </tr>
            </thead>
            <tbody>
              {s.complianceRows.map((f, i) => (
                <tr
                  key={f.name}
                  className={`${i !== s.complianceRows.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
                >
                  <td className="py-4 pr-6 text-[0.78rem] text-[var(--white-80)]">
                    {f.name}
                  </td>
                  <td className="py-4 pr-6 text-[0.75rem] text-[var(--white-40)]">
                    {f.region}
                  </td>
                  <td className="py-4 text-[0.75rem] leading-snug text-[var(--text-muted)]">
                    {f.coverage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.68rem] text-[var(--text-muted)]">
          {s.footnote}
        </p>
      </div>

      {/* CTA */}
      <div className="border-t border-[var(--white-20)] pt-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              {s.ctaTitle}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {s.ctaBody}
            </p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <LocaleLink href="/contact" className="btn-outline">
              {s.ctaButton}
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
