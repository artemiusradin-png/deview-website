"use client";

import { useEffect, useState } from "react";
import Footer4Col from "@/components/ui/footer-column";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

type SiteFooterProps = {
  rootPrefix?: string;
  /** Hide the footer's top CTA banner (used when it's relocated higher up the page). */
  hideCta?: boolean;
};

export function SiteFooter({ rootPrefix = "", hideCta = false }: SiteFooterProps) {
  const { dict, localePath } = useLocaleContext();
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
      showCta={!hideCta}
      brand={{
        name: "DeView",
        description: f.intro,
        location: f.loc,
      }}
      cta={{
        label: f.ctaLabel,
        copy: f.ctaCopy,
        primaryText: f.contactUs,
        primaryHref: localePath("/contact"),
        secondaryText: f.emailDirect,
        secondaryHref: `mailto:${SITE_INQUIRY_EMAIL}`,
      }}
      columns={[
        {
          title: f.about,
          links: [
            { text: f.links.aboutDeView, href: localePath("/about") },
            { text: f.links.howWeWork, href: localePath("/how-we-work") },
            { text: f.links.caseStudies, href: localePath("/case-studies") },
            { text: f.links.clientPortal, href: localePath("/client-portal") },
          ],
        },
        {
          title: f.explore,
          links: [
            { text: f.links.services, href: localePath("/services") },
            { text: f.links.pricing, href: localePath("/pricing") },
            { text: f.links.outcomes, href: localePath("/outcomes") },
            { text: f.links.useCases, href: localePath("/use-cases") },
            { text: f.links.roiCalculator, href: localePath("/roi-calculator") },
            { text: "Tech Stack", href: localePath("/stack") },
            { text: f.links.aiGuide, href: localePath("/resources/ai-guide-lending"), hasIndicator: true },
          ],
        },
        {
          title: f.moreInfo,
          links: [
            { text: f.links.insightsArticles, href: localePath("/insights") },
            { text: "FAQ", href: localePath("/faq") },
            { text: f.links.insuranceAi, href: localePath("/industries/insurance") },
            { text: "Legal AI", href: localePath("/industries/legal") },
            { text: f.inquiryForm, href: localePath("/contact") },
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
