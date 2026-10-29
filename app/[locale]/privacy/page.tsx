import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { LEGAL_ENTITY, SITE_INQUIRY_EMAIL } from "@/lib/site-contact";

/** Plain privacy notice. Not linked from the navigation and kept out of search and the sitemap;
 *  it exists for visitors who look for it and for Google's OAuth consent screen. */
export const metadata: Metadata = withSocialMetadata({
  title: "Privacy policy | Deview",
  description: "How Deview handles personal data.",
  alternates: { canonical: "/en/privacy" },
  robots: { index: false, follow: false },
});

const address = `${LEGAL_ENTITY.streetAddress}, ${LEGAL_ENTITY.addressLocality}, ${LEGAL_ENTITY.addressRegion}`;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-16 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pt-24">
      <div className="section-gutter mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--text-muted)]">
        <h1 className="text-xl font-medium text-[var(--text)]">Privacy policy</h1>
        <p>Last updated 28 October 2026.</p>

        <p>
          Deview (deviewai.com) is operated by {LEGAL_ENTITY.name}, {address}. Questions or requests:{" "}
          <a className="underline" href={`mailto:${SITE_INQUIRY_EMAIL}`}>
            {SITE_INQUIRY_EMAIL}
          </a>
          .
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">What this website collects</h2>
        <p>
          We collect personal data submitted directly through our forms: the contact form (name, email, company,
          message), technical workbook requests (name, business email, company, diagnostic assessment inputs, and
          explicit marketing consent where granted), and newsletter subscriptions (email). We use this information to
          respond to your inquiry, deliver the requested technical deliverable, and—strictly where you have granted
          unambiguous opt-in consent—provide relevant engineering updates. You may opt out of marketing follow-up at
          any time. The site remembers your visual theme preference in your browser.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">Technical metadata &amp; security logs</h2>
        <p>
          When you interact with our forms or download technical resources, our servers automatically log technical
          request metadata, including your IP address, HTTP User-Agent header, referring URL, and request timestamps.
          Your browser also notes, for the current visit only, the page your visit started on and how you arrived
          (referring site or campaign tags); this is sent to us only together with a form you submit.
        </p>
        <p>
          <strong>Purposes:</strong> Infrastructure defense, distributed rate limiting to prevent denial-of-service and
          form abuse, audit trail compliance, and server-side acquisition attribution.
        </p>
        <p>
          <strong>Lawful basis:</strong> Legitimate Interest under GDPR Article 6(1)(f) and equivalent global data
          protection frameworks (specifically, ensuring network and information security and preventing fraudulent or
          automated form abuse).
        </p>
        <p>
          <strong>Retention periods:</strong> Technical rate-limiting records and security logs are retained for a
          maximum of 90 days before automated purge. Qualified inquiry and commercial communication records are
          retained for up to 12 months, or as required by applicable commercial accounting laws.
        </p>

        <h2 className="text-base font-medium text-[var(--text)]">Analytics &amp; consent preferences</h2>
        <p>
          We use non-invasive first-party analytics to measure regional traffic, evaluate resource downloads, and
          improve page performance. Analytics tracking is disabled by default and requires your explicit opt-in via
          our consent banner. When consent is granted, telemetry is transmitted without cross-site profiling or third-party
          advertising cookies. You can revoke or change your analytics preferences at any time.
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
