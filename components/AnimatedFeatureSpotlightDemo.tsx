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
    <section className="w-full bg-[var(--background)] px-3 py-10 md:px-6 md:py-14 xl:px-8">
      <div className="relative mx-auto grid w-full max-w-[94rem] overflow-hidden border border-[var(--white-20)] bg-[linear-gradient(135deg,rgba(141,231,189,0.12),rgba(255,255,255,0.035)_34%,rgba(255,255,255,0.02))] lg:grid-cols-[1.45fr_0.72fr]">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(141,231,189,0.75),transparent)]" />

        <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12 xl:p-14">
          <div className="mb-5 inline-flex w-fit items-center gap-2 border border-[#8de7bd]/40 bg-[#8de7bd]/10 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8de7bd]">
            <FileText className="h-3.5 w-3.5" />
            <span>Free AI automation guide for lenders</span>
          </div>

          <h2 className="mb-4 max-w-5xl text-[clamp(1.75rem,4vw,3.65rem)] font-semibold leading-[0.98] tracking-tight text-foreground">
            Prioritize the <span className="text-primary">10 lending workflows</span> AI can automate safely
          </h2>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A practical field guide for small and mid-sized lending teams. Use it to identify manual-work bottlenecks,
            choose lower-risk pilots, and set borrower-data controls before automation reaches production.
          </p>

          <div className="mt-6 grid gap-3">
            {INSIGHTS.map((item, index) => (
              <div key={item} className="grid grid-cols-[2rem_1fr] items-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center border border-[#8de7bd]/35 bg-[#8de7bd]/10 text-[0.65rem] font-semibold text-[#8de7bd]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs leading-relaxed text-[var(--white-80)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--white-80)]">
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Risk-scored</span>
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Pilot-ready</span>
            <span className="border border-[var(--white-20)] bg-[var(--white-10)] px-2.5 py-1">Borrower-data aware</span>
          </div>
        </div>

        <div className="relative grid gap-0 border-t border-[var(--white-20)] bg-[var(--surface)] lg:border-l lg:border-t-0">
          <div
            className="min-h-[12rem] bg-cover bg-center lg:min-h-[15rem]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85')",
            }}
            aria-label="Financial documents and lending workflow preview"
            role="img"
          >
            <div className="flex h-full min-h-[12rem] items-end p-5 lg:min-h-[15rem]">
              <div className="border border-white/20 bg-black/45 px-3 py-2 backdrop-blur-sm">
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-white/55">Inside the guide</p>
                <p className="mt-1 text-2xl font-semibold text-white">10 use cases</p>
              </div>
            </div>
          </div>

          <div className="p-5">
            {status === "sent" ? (
              <div className="flex min-h-[12rem] flex-col justify-center">
                <CheckCircle2 className="mb-3 h-8 w-8 text-[#8de7bd]" />
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
                    <Mail className="h-4 w-4 text-[#8de7bd]" />
                    <p className="text-sm font-medium text-foreground">Get the guide by email</p>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-[#8de7bd]" />
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
                        className="absolute inset-y-1 end-1 flex h-10 w-10 items-center justify-center bg-[#8de7bd] text-black outline-offset-2 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="inline-flex min-h-11 w-full items-center justify-center bg-[#8de7bd] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
