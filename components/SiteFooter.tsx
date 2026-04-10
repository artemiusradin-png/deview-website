"use client";

import { DeviewWordmarkLogo } from "@/components/DeviewWordmarkLogo";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type SiteFooterProps = {
  rootPrefix?: string;
};

export function SiteFooter({ rootPrefix = "" }: SiteFooterProps) {
  const { dict } = useLocaleContext();
  const f = dict.footer;

  const companyLinks = [
    { label: f.links.aiStrategy, href: "#services" },
    { label: f.links.customSolutions, href: "#solutions" },
    { label: f.links.enterpriseAi, href: "#enterprise-ai" },
    { label: f.links.contact, href: "/contact" },
  ] as const;

  const helpLinks = [
    { label: f.links.process, href: "#process" },
    { label: f.links.outcomes, href: "/outcomes" },
    { label: f.links.useCases, href: "#solutions" },
    { label: f.links.sendInquiry, href: "/contact" },
  ] as const;

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return `${rootPrefix}${href}`;
    }

    return href;
  };

  return (
    <footer className="site-footer-inspired w-full overflow-x-hidden pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-9 sm:pt-10 md:pt-12">
      <div className="section-gutter flex w-full min-w-0 max-w-none flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-5 xl:gap-6">
          <div className="footer-inspired-lead min-w-0 flex-1 lg:max-w-none">
            <p className="section-label mb-1">{f.brand}</p>
            <h3 className="footer-inspired-headline max-w-[min(100%,52rem)] xl:max-w-[60rem]">{f.headline}</h3>
            <p className="footer-inspired-intro mt-1.5 max-w-[min(100%,34rem)] xl:max-w-[38rem]">{f.intro}</p>
          </div>

          <div className="footer-cta-panel w-full min-w-0 shrink-0 lg:w-[min(100%,24rem)] xl:w-[min(100%,25rem)]">
            <div className="footer-cta-kicker" aria-hidden="true" />
            <span className="section-label footer-cta-label">{f.ctaLabel}</span>
            <p className="footer-cta-copy">{f.ctaCopy}</p>
            <div className="footer-cta-actions">
              <a href={resolveHref("/contact")} className="btn-outline footer-cta-primary">
                {f.contactUs}
              </a>
              <a href="mailto:hello@deview.ai" className="btn-outline footer-cta-secondary">
                {f.emailDirect}
              </a>
            </div>
          </div>
        </div>

        <div className="rule footer-rule" aria-hidden="true" />

        <div className="footer-structure-grid">
          <section className="footer-structure-block footer-structure-block--brand">
            <div className="mb-3 text-[var(--text)]" aria-hidden="true">
              <DeviewWordmarkLogo className="h-6 w-auto max-w-[min(100%,12rem)] sm:h-7" />
            </div>
            <p className="footer-structure-copy footer-structure-copy--strong">{f.brandStrong}</p>
            <p className="footer-structure-copy">{f.loc}</p>
            <p className="footer-structure-copy">{f.stack}</p>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">{f.about}</h4>
            <p className="footer-structure-copy">{f.aboutCopy}</p>
            <div className="footer-button-row">
              <a href={resolveHref("/contact")} className="footer-chip">
                {f.moreInfo}
              </a>
              <a href="mailto:hello@deview.ai" className="footer-chip">
                {f.emailUs}
              </a>
            </div>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">{f.explore}</h4>
            <div className="footer-links-columns">
              <ul className="footer-links-list">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <a href={resolveHref(item.href)}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <ul className="footer-links-list">
                {helpLinks.map((item) => (
                  <li key={item.label}>
                    <a href={resolveHref(item.href)}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">{f.connect}</h4>
            <div className="footer-connect-actions">
              <a href="mailto:hello@deview.ai" className="footer-text-link">
                hello@deview.ai
              </a>
              <a href={resolveHref("/contact")} className="footer-text-link">
                {f.inquiryForm}
              </a>
            </div>
            <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder={f.emailPlaceholder}
                aria-label={f.emailPlaceholder}
                autoComplete="email"
              />
              <button type="submit">{f.subscribe}</button>
            </form>
            <p className="footer-structure-copy footer-structure-copy--compact">{f.compact}</p>
          </section>
        </div>

        <div className="rule footer-rule" aria-hidden="true" />

        <div className="footer-inspired-meta flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2.5">
          <small className="footer-inspired-copyright">© {new Date().getFullYear()} DeView</small>
          <p className="footer-inspired-tagline m-0">{f.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
