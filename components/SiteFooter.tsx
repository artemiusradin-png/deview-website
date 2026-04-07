"use client";

import { useState } from "react";

const footerQuickLinks = [
  { id: "services", label: "Services", href: "#services" },
  { id: "solutions", label: "Use cases", href: "#solutions" },
  { id: "inquire", label: "Inquire", href: "/contact" },
] as const;

type SiteFooterProps = {
  rootPrefix?: string;
};

export function SiteFooter({ rootPrefix = "" }: SiteFooterProps) {
  const [footerQuickActive, setFooterQuickActive] = useState<(typeof footerQuickLinks)[number]["id"]>("services");

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return `${rootPrefix}${href}`;
    }

    return href;
  };

  return (
    <footer className="site-footer-inspired section-gutter overflow-x-hidden pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-8 sm:pt-10">
      <div className="footer-card mx-auto flex max-w-6xl flex-col gap-8 px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="footer-inspired-lead max-w-xl">
            <p className="footer-inspired-eyebrow mb-3">DeView</p>
            <h3 className="footer-inspired-headline max-w-lg leading-[1.05]">
              Enterprise AI work that fits the constraints of real operations.
            </h3>
            <p className="footer-inspired-intro mt-4 max-w-md leading-relaxed">
              Strategy, implementation, and system integration for teams that need useful AI in production,
              not another internal demo.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
            <span className="footer-inspired-cta-label">Start with a real workflow</span>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-outline footer-inspired-btn">
                Send inquiry →
              </a>
              <a
                href="https://ai-consulting-task-manager.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline footer-inspired-btn footer-inspired-btn--muted"
              >
                Internal
              </a>
            </div>
          </div>
        </div>

        <ul className="footer-third-row" aria-label="Quick links">
          {footerQuickLinks.map((item) => (
            <li key={item.id} className={footerQuickActive === item.id ? "active-1" : ""}>
              <a href={resolveHref(item.href)} onClick={() => setFooterQuickActive(item.id)}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-divider footer-inspired-line" />

        <div className="footer-summary-grid">
          <article className="footer-summary-card">
            <p className="footer-column-title">What We Do</p>
            <p className="footer-summary-copy">
              We help companies identify high-value AI opportunities, scope the right system, and implement
              custom solutions that fit real operational constraints.
            </p>
            <div className="footer-link-stack">
              <a href={resolveHref("#services")} className="footer-link-row">
                <span>AI strategy and use-case selection</span>
              </a>
              <a href={resolveHref("#solutions")} className="footer-link-row">
                <span>Custom copilots, workflows, and internal tools</span>
              </a>
              <a href={resolveHref("#enterprise-ai")} className="footer-link-row">
                <span>Production implementation and integration</span>
              </a>
            </div>
          </article>

          <article className="footer-summary-card">
            <p className="footer-column-title">How We Deliver</p>
            <p className="footer-summary-copy">
              Engagements move from problem definition to production rollout with evaluation, reliability,
              and business utility treated as first-order requirements.
            </p>
            <div className="footer-link-stack">
              <a href={resolveHref("#process")} className="footer-link-row">
                <span>Discovery, scoping, and implementation planning</span>
              </a>
              <a href={resolveHref("#process")} className="footer-link-row">
                <span>Build, test, and launch in live workflows</span>
              </a>
              <a href={resolveHref("#outcomes")} className="footer-link-row">
                <span>Monitoring, iteration, and operational handoff</span>
              </a>
            </div>
          </article>

          <article className="footer-summary-card">
            <p className="footer-column-title">Who It&apos;s For</p>
            <p className="footer-summary-copy">
              Built for mid-market and enterprise teams dealing with scale, compliance, legacy systems, and
              the need for accountable outputs.
            </p>
            <div className="footer-link-stack">
              <a href={resolveHref("#enterprise-ai")} className="footer-link-row">
                <span>Enterprise AI beyond demos</span>
              </a>
              <a href={resolveHref("#enterprise-ai")} className="footer-link-row">
                <span>Integration into existing stacks and processes</span>
              </a>
              <div className="footer-button-row">
                <a href="mailto:hello@deview.ai" className="footer-chip">
                  hello@deview.ai
                </a>
                <a href="/contact" className="footer-chip">
                  Contact Form
                </a>
              </div>
            </div>
          </article>
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
