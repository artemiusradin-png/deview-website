"use client";

import { Mail, MapPin, MessageSquare } from "lucide-react";
import { FooterCtaBanner } from "@/components/FooterCtaBanner";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

import Link from "next/link";

type FooterLink = {
  text: string;
  href: string;
  hasIndicator?: boolean;
};

type FooterColumnProps = {
  rootPrefix?: string;
  brand: {
    name: string;
    description: string;
    location: string;
  };
  cta: {
    label: string;
    copy: string;
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
  /** Hide the top CTA banner (e.g. when it's relocated elsewhere on the page). Default true. */
  showCta?: boolean;
  columns: Array<{
    title: string;
    links: FooterLink[];
  }>;
  contact: {
    email: string;
    inquiryLabel: string;
  };
  legal: {
    copyright: string;
    tagline: string;
  };
};

const socialLinks = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/115044062" },
  { icon: Mail, label: "Email", href: `mailto:${SITE_INQUIRY_EMAIL}` },
];

function resolveHref(href: string, rootPrefix: string) {
  if (href.startsWith("#")) {
    return `${rootPrefix}${href}`;
  }

  return href;
}

function FooterNavLink({ item, rootPrefix }: { item: FooterLink; rootPrefix: string }) {
  const href = resolveHref(item.href, rootPrefix);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const content = (
    <>
      <span className="text-[var(--white-50)] transition group-hover:text-[var(--white-90)]">
        {item.text}
      </span>
      {item.hasIndicator ? (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping bg-[var(--white-60)] opacity-75" />
          <span className="relative inline-flex size-1.5 bg-[var(--white-80)]" />
        </span>
      ) : null}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className="group inline-flex items-center gap-1.5">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className="group inline-flex items-center gap-1.5">
      {content}
    </a>
  );
}

export default function Footer4Col({
  rootPrefix = "",
  brand,
  cta,
  columns,
  contact,
  legal,
  showCta = true,
}: FooterColumnProps) {
  return (
    <footer className="w-full place-self-end overflow-hidden border-t border-[var(--white-20)] bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto w-full max-w-none px-4 pb-4 pt-7 sm:px-6 sm:pt-10 sm:pb-5 lg:px-8 xl:px-10">

        {/* CTA banner (can be relocated elsewhere on the page via showCta={false}) */}
        {showCta ? (
          <div className="mb-6 sm:mb-9">
            <FooterCtaBanner {...cta} rootPrefix={rootPrefix} />
          </div>
        ) : null}

        {/* Main columns */}
        <div className="grid grid-cols-1 gap-5 sm:gap-7 lg:grid-cols-[1.1fr_2.4fr]">

          {/* Brand block */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--white-80)]">{brand.name}</span>
            </div>

            <p className="mt-5 max-w-md text-center text-[0.78rem] leading-relaxed text-[var(--white-40)] sm:max-w-sm sm:text-left">
              {brand.description}
            </p>

            <ul className="mt-6 flex justify-center gap-4 sm:justify-start md:gap-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[var(--white-30)] transition hover:text-[var(--white-70)]"
                    aria-label={label}
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-7 md:grid-cols-4">
            {columns.map((column, columnIndex) => (
              <div className="text-center sm:text-left" key={`${column.title}-${columnIndex}`}>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--white-60)] sm:text-[0.6rem] sm:tracking-[0.2em]">{column.title}</p>
                <ul className="mt-3 space-y-2 text-[0.7rem] sm:mt-4 sm:space-y-3 sm:text-xs">
                  {column.links.map((item, linkIndex) => (
                    <li key={`${column.title}-${item.href}-${item.text}-${linkIndex}`}>
                      <FooterNavLink item={item} rootPrefix={rootPrefix} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div className="text-center sm:text-left">
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--white-60)] sm:text-[0.6rem] sm:tracking-[0.2em]">Contact</p>
              <ul className="mt-3 space-y-2 text-[0.7rem] sm:mt-4 sm:space-y-3 sm:text-xs">
                <li>
                  <a
                    className="group flex items-center justify-center gap-1.5 sm:justify-start"
                    href={`mailto:${contact.email}`}
                  >
                    <Mail className="size-3.5 shrink-0 text-[var(--white-30)] transition group-hover:text-[var(--white-60)]" />
                    <span className="flex-1 text-[var(--white-50)] transition group-hover:text-[var(--white-90)]">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <Link
                    className="group flex items-center justify-center gap-1.5 sm:justify-start"
                    href={resolveHref("/contact", rootPrefix)}
                  >
                    <MessageSquare className="size-3.5 shrink-0 text-[var(--white-30)] transition group-hover:text-[var(--white-60)]" />
                    <span className="flex-1 text-[var(--white-50)] transition group-hover:text-[var(--white-90)]">{contact.inquiryLabel}</span>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                    <MapPin className="size-3.5 shrink-0 text-[var(--white-30)]" />
                    <address className="flex-1 text-[var(--white-40)] not-italic">
                      {brand.location}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-6 border-t border-[var(--white-10)] pt-4 sm:mt-9 sm:pt-5">
          <div className="text-center sm:flex sm:items-baseline sm:justify-between sm:text-left">
            <p className="text-[0.65rem] text-[var(--white-30)]">
              {legal.copyright}
            </p>
            <p className="mt-3 text-[0.65rem] text-[var(--white-30)] sm:mt-0">
              {legal.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
