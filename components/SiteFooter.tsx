"use client";

const companyLinks = [
  { label: "AI strategy", href: "#services" },
  { label: "Custom solutions", href: "#solutions" },
  { label: "Enterprise AI", href: "#enterprise-ai" },
  { label: "Contact", href: "/contact" },
] as const;

const helpLinks = [
  { label: "Process", href: "#process" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Use cases", href: "#solutions" },
  { label: "Send inquiry", href: "/contact" },
] as const;

type SiteFooterProps = {
  rootPrefix?: string;
};

export function SiteFooter({ rootPrefix = "" }: SiteFooterProps) {
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return `${rootPrefix}${href}`;
    }

    return href;
  };

  return (
    <footer className="site-footer-inspired overflow-x-hidden pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-10 sm:pt-14 md:pt-16">
      <div className="section-gutter mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12 md:gap-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="footer-inspired-lead min-w-0 max-w-2xl lg:max-w-[42rem]">
            <p className="section-label mb-3">DeView</p>
            <h3 className="footer-inspired-headline max-w-xl lg:max-w-2xl">
              Enterprise AI systems built for real operational environments.
            </h3>
            <p className="footer-inspired-intro mt-4 max-w-xl">
              Strategy, implementation, and integration for teams that need useful AI with reliability,
              accountability, and workflow fit.
            </p>
          </div>

          <div className="footer-cta-panel w-full min-w-0 lg:max-w-[22rem] lg:shrink-0">
            <span className="section-label footer-cta-label">Start with a real workflow</span>
            <p className="footer-cta-copy">
              Share the process, current bottleneck, and desired outcome. We respond with a scoped next step.
            </p>
            <div className="footer-cta-actions">
              <a href={resolveHref("/contact")} className="btn-outline">
                Contact us
              </a>
              <a href="mailto:hello@deview.ai" className="btn-outline footer-btn-secondary">
                Email direct
              </a>
            </div>
          </div>
        </div>

        <div className="rule footer-rule" aria-hidden="true" />

        <div className="footer-structure-grid">
          <section className="footer-structure-block footer-structure-block--brand">
            <p className="footer-structure-copy footer-structure-copy--strong">DeView AI consulting</p>
            <p className="footer-structure-copy">
              Kharkiv, Ukraine and remote delivery for North American and European teams.
            </p>
            <p className="footer-structure-copy">
              We design production-grade AI systems, internal tools, and operational workflows that can be
              deployed into existing environments.
            </p>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">About</h4>
            <p className="footer-structure-copy">
              We work with organizations that need more than a prototype: clear scope, live integrations,
              evaluation, and production reliability.
            </p>
            <div className="footer-button-row">
              <a href={resolveHref("/contact")} className="footer-chip">
                More info
              </a>
              <a href="mailto:hello@deview.ai" className="footer-chip">
                Email us
              </a>
            </div>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">Explore</h4>
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
            <h4 className="footer-structure-title">Connect</h4>
            <div className="footer-connect-actions">
              <a href="mailto:hello@deview.ai" className="footer-text-link">
                hello@deview.ai
              </a>
              <a href={resolveHref("/contact")} className="footer-text-link">
                Inquiry form →
              </a>
            </div>
            <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="Email for updates"
                aria-label="Email address"
                autoComplete="email"
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="footer-structure-copy footer-structure-copy--compact">
              Use the inquiry form for projects; email for introductions and partnership questions.
            </p>
          </section>
        </div>

        <div className="rule footer-rule" aria-hidden="true" />

        <div className="footer-inspired-meta flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <small className="footer-inspired-copyright">© {new Date().getFullYear()} DeView</small>
          <p className="footer-inspired-tagline m-0">
            AI consulting and data engineering for production-grade systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
