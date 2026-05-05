"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, FileText, Mail, Send, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const INSIGHTS = [
  "The four safest AI pilots to run before connecting anything to core loan systems",
  "Where document review, borrower follow-up, and CRM handoffs usually waste the most hours",
  "A practical testing path for borrower data, approvals, permissions, and auditability",
];

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "mail.com",
  "gmx.com",
  "zoho.com",
  "yandex.com",
]);

function isLikelyWorkEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && domain.includes(".") && !PERSONAL_EMAIL_DOMAINS.has(domain));
}

export function AnimatedFeatureSpotlightDemo() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLikelyWorkEmail(email)) {
      setStatus("error");
      setFeedback("Please use a work email so we can send the lending guide to the right business contact.");
      return;
    }

    setStatus("sending");
    setFeedback(null);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website visitor",
          email,
          company: "",
          industry: "Lending / Financial Services",
          challenge: "Homepage lead magnet",
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (response.ok || data.ok) {
        setStatus("sent");
        return;
      }

      setStatus("error");
      setFeedback(
        data.error === "work_email_required"
          ? "Please use a work email so we can send the lending guide to the right business contact."
          : "Something went wrong. Please try again.",
      );
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="w-full bg-[var(--background)] px-3 py-5 md:px-6 md:py-9 xl:px-8">
      <div className="relative mx-auto grid w-full max-w-[94rem] overflow-hidden border border-[var(--white-20)] bg-[linear-gradient(135deg,rgba(26,51,128,0.18),rgba(128,184,255,0.04)_34%,rgba(255,255,255,0.01))] lg:grid-cols-[1.45fr_0.72fr]">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(128,184,255,0.65),transparent)]" />

        <div className="relative flex flex-col justify-center p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="mb-3 inline-flex w-fit items-center gap-2 border border-[#80b8ff]/40 bg-[#80b8ff]/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#80b8ff]">
            <FileText className="h-3.5 w-3.5" />
            <span>Free AI automation guide for lenders</span>
          </div>

          <h2 className="mb-2 max-w-5xl text-[clamp(1.25rem,4.2vw,2.6rem)] font-semibold leading-[1.02] tracking-tight text-foreground md:mb-3 md:leading-[1]">
            Prioritize the <span className="text-primary">10 lending workflows</span> AI can automate safely
          </h2>

          <p className="line-clamp-2 max-w-3xl text-[0.84rem] leading-relaxed text-muted-foreground sm:line-clamp-none md:text-sm">
            A practical field guide for small and mid-sized lending teams. Use it to identify manual-work bottlenecks,
            choose lower-risk pilots, and set borrower-data controls before automation reaches production.
          </p>

          <div className="mt-3 grid gap-2 md:mt-4 md:gap-2.5">
            {INSIGHTS.map((item, index) => (
              <div key={item} className={`grid grid-cols-[2rem_1fr] items-start gap-3${index >= 1 ? " hidden sm:grid" : ""}`}>
                <span className="flex h-8 w-8 items-center justify-center border border-[#80b8ff]/35 bg-[#80b8ff]/10 text-[0.65rem] font-semibold text-[#80b8ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs leading-relaxed text-[var(--white-80)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 hidden flex-wrap gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[var(--white-80)] sm:flex md:mt-5">
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Risk-scored</span>
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Pilot-ready</span>
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Borrower-data aware</span>
          </div>
        </div>

        <div className="relative grid gap-0 border-t border-[var(--white-20)] bg-[var(--surface)] lg:border-l lg:border-t-0">
          <div className="p-4 md:p-5">
            {status === "sent" ? (
              <div className="flex min-h-[12rem] flex-col justify-center">
                <CheckCircle2 className="mb-3 h-8 w-8 text-[#80b8ff]" />
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Information sent
                </p>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Check your email.</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  We sent the AI use-case guide to {email}. The DeView team may follow up with a short note
                  if your company looks like a fit for an AI workflow audit.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#80b8ff]" />
                    <p className="text-sm font-medium text-foreground">Get the guide by email</p>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-[#80b8ff]" />
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="lead-magnet-email" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Work email
                    </Label>
                    <div className="relative">
                      <Input
                        id="lead-magnet-email"
                        className="h-12 border-[var(--white-20)] bg-[var(--background)] pe-12"
                        placeholder="name@company.com"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <button
                        type="submit"
                        className="absolute inset-y-1 end-1 flex h-10 w-10 items-center justify-center bg-[#80b8ff] text-black outline-offset-2 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label={status === "sending" ? "Sending guide" : "Send guide"}
                        disabled={status === "sending"}
                      >
                        <Send size={16} strokeWidth={2} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {feedback ? <p className="text-xs leading-relaxed text-red-400">{feedback}</p> : null}

                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center bg-[#80b8ff] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send me the guide"}
                  </button>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    No newsletter signup. We send the guide and, only if useful, one practical next-step option for your lending workflow.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
