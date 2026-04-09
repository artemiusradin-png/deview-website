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
    <footer className="site-footer-inspired w-full overflow-x-hidden pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-9 sm:pt-10 md:pt-12">
      <div className="section-gutter flex w-full min-w-0 max-w-none flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-5 xl:gap-6">
          <div className="footer-inspired-lead min-w-0 flex-1 lg:max-w-none">
            <p className="section-label mb-1">DeView</p>
            <h3 className="footer-inspired-headline max-w-[min(100%,52rem)] xl:max-w-[60rem]">
              Enterprise AI built for real operations.
            </h3>
            <p className="footer-inspired-intro mt-1.5 max-w-[min(100%,34rem)] xl:max-w-[38rem]">
              Strategy, build, and integration — reliable, accountable, workflow-aligned.
            </p>
          </div>

          <div className="footer-cta-panel w-full min-w-0 shrink-0 lg:w-[min(100%,24rem)] xl:w-[min(100%,25rem)]">
            <div className="footer-cta-kicker" aria-hidden="true" />
            <span className="section-label footer-cta-label">Start with a workflow</span>
            <p className="footer-cta-copy">
              Send the process, bottleneck, and goal — we reply with a scoped next step.
            </p>
            <div className="footer-cta-actions">
              <a href={resolveHref("/contact")} className="btn-outline footer-cta-primary">
                Contact us
              </a>
              <a href="mailto:hello@deview.ai" className="btn-outline footer-cta-secondary">
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
              Hong Kong · remote for North America and Europe.
            </p>
            <p className="footer-structure-copy">
              Production-grade AI, tools, and workflows in your existing stack.
            </p>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">About</h4>
            <p className="footer-structure-copy">
              Beyond prototypes: clear scope, live integrations, and production reliability.
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
              Form for projects; email for intros and partnerships.
            </p>
          </section>
        </div>

        <div className="rule footer-rule" aria-hidden="true" />

        <div className="footer-inspired-meta flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2.5">
          <small className="footer-inspired-copyright">© {new Date().getFullYear()} DeView</small>
          <p className="footer-inspired-tagline m-0">
            AI consulting and data engineering for production systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
