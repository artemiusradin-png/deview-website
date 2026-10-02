/** Primary inbox for inquiries (mailto links + form delivery). */
export const SITE_INQUIRY_EMAIL = "info@deviewai.com";

/** The registered company that operates DeView (Hong Kong Companies Registry). */
export const LEGAL_ENTITY = {
  name: "Covenant Desk Limited",
  registryNumber: "80827838",
  streetAddress: "Unit 2904-05, 29/F, Universal Trade Centre, 3 Arbuthnot Road",
  addressLocality: "Central",
  addressRegion: "Hong Kong",
  addressCountry: "HK",
} as const;

/** Booking page URL (e.g. cal.com/deview). Set to empty string to hide the calendar CTA. */
export const SITE_BOOKING_URL = "https://calendly.com/artemius-radin/new-meeting";

/** Plain-text body for Resend / Web3Forms (excludes name; name is a separate field). */
export function buildInquiryText(input: {
  email: string;
  company: string;
  details: string;
}): string {
  return `Work email: ${input.email}\nCompany: ${input.company || "-"}\n\n${input.details}`;
}

export function buildInquiryMailto(input: {
  name: string;
  email: string;
  company: string;
  details: string;
}): string {
  const subject = `DeView inquiry from ${input.name}`;
  const body = `Name: ${input.name}\n${buildInquiryText(input)}`;
  const encSubject = encodeURIComponent(subject.slice(0, 500));
  const encBody = encodeURIComponent(body.slice(0, 1900));
  return `mailto:${SITE_INQUIRY_EMAIL}?subject=${encSubject}&body=${encBody}`;
}
