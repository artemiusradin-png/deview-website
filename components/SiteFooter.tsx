"use client";

import Footer4Col from "@/components/ui/footer-column";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

type SiteFooterProps = {
  rootPrefix?: string;
};

export function SiteFooter({ rootPrefix = "" }: SiteFooterProps) {
  const { dict } = useLocaleContext();
  const f = dict.footer;

  return (
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
  );
}
