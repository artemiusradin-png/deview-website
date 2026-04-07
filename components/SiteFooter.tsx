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
    <footer className="site-footer-inspired overflow-x-hidden pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-10 sm:pt-12">
      <div className="section-gutter mx-auto flex max-w-7xl flex-col gap-8 px-1 sm:gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="footer-inspired-lead max-w-2xl">
            <p className="footer-inspired-eyebrow mb-3">DeView</p>
            <h3 className="footer-inspired-headline max-w-3xl leading-[0.98]">
              Enterprise AI systems built for real operational environments.
            </h3>
            <p className="footer-inspired-intro mt-4 max-w-xl leading-relaxed">
              Strategy, implementation, and integration for teams that need useful AI with reliability,
              accountability, and workflow fit.
            </p>
          </div>

          <div className="footer-cta-panel lg:max-w-sm">
            <span className="footer-inspired-cta-label">Start with a real workflow</span>
            <p className="footer-cta-copy">
              Share the process, current bottleneck, and desired outcome. We respond with a scoped next step.
            </p>
            <div className="footer-cta-actions">
              <a href="/contact" className="btn-outline footer-inspired-btn">
                Contact us
              </a>
              <a href="mailto:hello@deview.ai" className="btn-outline footer-inspired-btn footer-inspired-btn--muted">
                Email direct
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider footer-inspired-line" />

        <div className="footer-structure-grid">
          <section className="footer-structure-block footer-structure-block--brand">
            <p className="footer-structure-copy footer-structure-copy--strong">DeView AI Consulting</p>
            <p className="footer-structure-copy">
              Kharkiv, Ukraine and remote delivery for North American and European teams.
            </p>
            <p className="footer-structure-copy">
              We design production-grade AI systems, internal tools, and operational workflows that can be
              deployed into existing environments.
            </p>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">About Company</h4>
            <p className="footer-structure-copy">
              We work with organizations that need more than a prototype: clear scope, live integrations,
              evaluation, and production reliability.
            </p>
            <div className="footer-button-row">
              <a href="/contact" className="footer-chip">
                More info
              </a>
              <a href="mailto:hello@deview.ai" className="footer-chip">
                Contact us
              </a>
            </div>
          </section>

          <section className="footer-structure-block">
            <h4 className="footer-structure-title">Help Us</h4>
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
            <h4 className="footer-structure-title">Newsletter</h4>
            <div className="footer-social-row" aria-label="Social links">
              <a href="mailto:hello@deview.ai" className="footer-social-link" aria-label="Email DeView">
                @
              </a>
              <a href="/contact" className="footer-social-link" aria-label="Open contact form">
                →
              </a>
            </div>
            <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" name="email" placeholder="your email" aria-label="Email address" />
              <button type="submit">Go</button>
            </form>
            <p className="footer-structure-copy">
              Use the inquiry form for projects, or email directly for introductions and partnership questions.
            </p>
          </section>
        </div>

        <div className="footer-divider footer-inspired-line" />

        <div className="footer-inspired-meta flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <small className="footer-inspired-copyright">© {new Date().getFullYear()} DeView</small>
          <p className="footer-inspired-tagline m-0">AI consulting and data engineering for production-grade systems.</p>
        </div>
      </div>
    </footer>
  );
}
