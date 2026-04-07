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
      <div className="footer-card mx-auto flex max-w-6xl flex-col gap-8 px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.9fr)] lg:items-end">
          <div className="footer-inspired-lead max-w-2xl">
            <p className="footer-inspired-eyebrow mb-3">DeView / AI Consulting</p>
            <h3 className="footer-inspired-headline max-w-3xl leading-[0.98]">
              Production-grade AI systems for companies that need reliability, integration, and business utility.
            </h3>
            <p className="footer-inspired-intro mt-4 max-w-xl leading-relaxed">
              We scope, build, and deploy enterprise AI with operational discipline, from use-case definition
              to production rollout.
            </p>
          </div>

          <div className="footer-cta-panel">
            <span className="footer-inspired-cta-label">Start with a real workflow</span>
            <p className="footer-cta-copy">
              Send the process, constraints, and intended outcome. We reply with a scoped next step.
            </p>
            <div className="footer-cta-actions">
              <a href="/contact" className="btn-outline footer-inspired-btn">
                Start a project
              </a>
              <a href="mailto:hello@deview.ai" className="btn-outline footer-inspired-btn footer-inspired-btn--muted">
                hello@deview.ai
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
            <p className="footer-column-title">Services</p>
            <p className="footer-summary-copy">
              Advisory and implementation work for teams moving from exploration to production.
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
            <p className="footer-column-title">Delivery</p>
            <p className="footer-summary-copy">
              Work is structured around measurable business outcomes, live workflow fit, and system reliability.
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
            <p className="footer-column-title">Contact</p>
            <p className="footer-summary-copy">
              Best fit for mid-market and enterprise organizations with operational complexity, legacy systems,
              or compliance requirements.
            </p>
            <div className="footer-link-stack">
              <a href="mailto:hello@deview.ai" className="footer-link-row">
                <span>hello@deview.ai</span>
              </a>
              <a href="/contact" className="footer-link-row">
                <span>Project inquiry form</span>
              </a>
              <div className="footer-button-row">
                <a href="mailto:hello@deview.ai" className="footer-chip">
                  Email
                </a>
                <a href="/contact" className="footer-chip">
                  Contact
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
