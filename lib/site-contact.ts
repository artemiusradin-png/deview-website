/** Primary inbox for inquiries (mailto links + form delivery). */
export const SITE_INQUIRY_EMAIL = "deview.info@gmail.com";

export function buildInquiryMailto(input: {
  name: string;
  email: string;
  company: string;
  details: string;
}): string {
  const subject = `DeView inquiry from ${input.name}`;
  const body = `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || "—"}\n\n${input.details}`;
  const encSubject = encodeURIComponent(subject.slice(0, 500));
  const encBody = encodeURIComponent(body.slice(0, 1900));
  return `mailto:${SITE_INQUIRY_EMAIL}?subject=${encSubject}&body=${encBody}`;
}
