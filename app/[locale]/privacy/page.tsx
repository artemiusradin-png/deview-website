import type { Metadata } from "next";
import { LEGAL_ENTITY, SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

/** Plain privacy notice. Not linked from the navigation and kept out of search and the sitemap;
 *  it exists for visitors who look for it and for Google's OAuth consent screen. */
export const metadata: Metadata = {
  title: "Privacy policy | Deview",
  description: "How Deview handles personal data.",
  alternates: { canonical: "/en/privacy" },
  robots: { index: false, follow: false },
};

const address = `${LEGAL_ENTITY.streetAddress}, ${LEGAL_ENTITY.addressLocality}, ${LEGAL_ENTITY.addressRegion}`;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-16 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pt-24">
      <div className="section-gutter mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--text-muted)]">
        <h1 className="text-xl font-medium text-[var(--text)]">Privacy policy</h1>
        <p>Last updated 14 October 2026.</p>

        <p>
          Deview (deviewai.com) is operated by {LEGAL_ENTITY.name}, {address}. Questions or requests:{" "}
          <a className="underline" href={`mailto:${SITE_INQUIRY_EMAIL}`}>
            {SITE_INQUIRY_EMAIL}
          </a>
          .
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">What this website collects</h2>
        <p>
          Only what you type into a form: the contact form (name, email, company, message), guide downloads
          (email, and name and company if you give them) and the newsletter (email). We use it to reply to you,
          send what you asked for and, for the newsletter, send occasional updates you can unsubscribe from at any
          time. The site remembers your light or dark theme in your browser. It uses no advertising or analytics
          cookies.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">Business email</h2>
        <p>
          We may write to companies at the business email addresses they publish, about our services. Every such
          email says who we are and how to opt out, and opt-outs are honoured straight away.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">Google Calendar</h2>
        <p>
          Our scheduling assistant connects, with consent, only to the Google Calendar of Deview&apos;s own team. It
          reads free and busy times to suggest meeting slots and creates the meeting invitation when a client agrees
          to a time. It does not access anyone else&apos;s Google account. Suggested times may be included in email
          drafts prepared through our AI provider&apos;s API, which does not use the data to train models. Google
          data is used only for this scheduling, is never sold or used for advertising, and is not shared except to
          send the invitation. Our use of information received from Google APIs adheres to the{" "}
          <a
            className="underline"
            href="https://developers.google.com/terms/api-services-user-data-policy"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">Who processes the data</h2>
        <p>
          Vercel (website hosting), Supabase (form storage), Resend and Web3Forms (form email delivery), our email
          host, OpenAI (drafting email replies) and Google (calendar). Some of them store data outside Hong Kong.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">How long and your rights</h2>
        <p>
          We keep personal data only as long as needed for your request and any work together, then delete it. You
          can ask to see, correct or delete your data at any time by writing to {SITE_INQUIRY_EMAIL}.
        </p>
      </div>
    </main>
  );
}
