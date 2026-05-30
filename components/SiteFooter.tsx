"use client";

import { useEffect, useState } from "react";
import Footer4Col from "@/components/ui/footer-column";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

type SiteFooterProps = {
  rootPrefix?: string;
};

export function SiteFooter({ rootPrefix = "" }: SiteFooterProps) {
  const { dict } = useLocaleContext();
  const f = dict.footer;

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--white-20)] bg-[var(--surface)] text-[var(--white-60)] shadow-lg transition-colors hover:border-[var(--white-40)] hover:text-[var(--white-100)] md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
      <Footer4Col
      rootPrefix={rootPrefix}
      brand={{
        name: "DeView",
        description: f.intro,
        location: f.loc,
      }}
      cta={{
        label: f.ctaLabel,
        copy: f.ctaCopy,
        primaryText: f.contactUs,
        primaryHref: "/contact",
        secondaryText: f.emailDirect,
        secondaryHref: `mailto:${SITE_INQUIRY_EMAIL}`,
      }}
      columns={[
        {
          title: f.about,
          links: [
            { text: f.links.aboutDeView, href: "/about" },
            { text: f.links.howWeWork, href: "/how-we-work" },
            { text: f.links.caseStudies, href: "/case-studies" },
            { text: f.links.clientPortal, href: "/client-portal" },
          ],
        },
        {
          title: f.explore,
          links: [
            { text: f.links.outcomes, href: "/outcomes" },
            { text: f.links.useCases, href: "/use-cases" },
            { text: f.links.roiCalculator, href: "/roi-calculator" },
            { text: "Tech Stack", href: "/stack" },
            { text: f.links.aiGuide, href: "/resources/ai-guide-lending", hasIndicator: true },
          ],
        },
        {
          title: f.moreInfo,
          links: [
            { text: f.links.insightsArticles, href: "/insights" },
            { text: "FAQ", href: "/faq" },
            { text: f.links.insuranceAi, href: "/industries/insurance" },
            { text: "Legal AI", href: "/industries/legal" },
            { text: f.inquiryForm, href: "/contact" },
          ],
        },
      ]}
      contact={{
        email: SITE_INQUIRY_EMAIL,
        inquiryLabel: f.inquiryForm,
      }}
      legal={{
        copyright: `© ${new Date().getFullYear()} DeView`,
        tagline: f.tagline,
      }}
    />
    </>
  );
}
