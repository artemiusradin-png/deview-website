"use client";

import { Mail, MapPin, MessageSquare, Send } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/deview-ai" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/deview-ai" },
  { icon: Mail, label: "Email", href: "mailto:deview.info@gmail.com" },
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
}: FooterColumnProps) {
  return (
    <footer className="w-full place-self-end overflow-hidden border-t border-[var(--white-20)] bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto w-full max-w-none px-4 pb-5 pt-10 sm:px-6 lg:px-8 xl:px-10">

        {/* CTA banner */}
        <div className="mb-9 border border-[var(--white-20)] p-4 md:p-5">
          <div className="grid items-stretch gap-4 md:grid-cols-[minmax(13rem,0.45fr)_minmax(0,1fr)]">
            <div className="flex items-center border-b border-[var(--white-10)] pb-4 md:border-b-0 md:border-r md:border-[var(--white-20)] md:pb-0 md:pr-5">
              <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                {cta.label}
              </p>
            </div>
            <div className="bg-[var(--background)] p-4 md:flex md:items-center md:justify-between md:gap-6">
              <p className="max-w-3xl text-sm font-semibold leading-snug text-[var(--white-90)] md:text-base">
                {cta.copy}
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
                <Link
                  href={resolveHref(cta.primaryHref, rootPrefix)}
                  className="inline-flex min-h-9 items-center justify-center gap-2 border border-[var(--white-90)] bg-[var(--white-90)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[var(--background)] transition hover:bg-[var(--white-70)] hover:border-[var(--white-70)]"
                >
                  {cta.primaryText}
                  <Send className="size-3" />
                </Link>
                <a
                  href={cta.secondaryHref}
                  className="inline-flex min-h-9 items-center justify-center gap-2 border border-[var(--white-20)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[var(--white-70)] transition hover:border-[var(--white-40)] hover:text-[var(--white-90)]"
                >
                  {cta.secondaryText}
                  <Mail className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.1fr_2.4fr]">

          {/* Brand block */}
          <div>
            <div className="flex justify-center gap-3 sm:justify-start">
              <div className="flex size-7 items-center justify-center border border-[var(--white-20)] text-[0.65rem] font-semibold tracking-[0.1em] text-[var(--white-70)]">
                DV
              </div>
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
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-2 md:grid-cols-4">
            {columns.map((column, columnIndex) => (
              <div className="text-center sm:text-left" key={`${column.title}-${columnIndex}`}>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--white-60)]">{column.title}</p>
                <ul className="mt-4 space-y-3 text-xs">
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
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--white-60)]">Contact</p>
              <ul className="mt-4 space-y-3 text-xs">
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
        <div className="mt-9 border-t border-[var(--white-10)] pt-5">
          <div className="text-center sm:flex sm:items-baseline sm:justify-between sm:text-left">
            <p className="text-[0.65rem] text-[var(--white-30)]">
              {legal.copyright}
            </p>
            <p className="mt-3 text-[0.65rem] text-[var(--white-25)] sm:mt-0">
              {legal.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
