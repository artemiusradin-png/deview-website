"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, FileText } from "lucide-react";

const INSIGHTS = [
  "The four safest AI pilots to run before connecting anything to core loan systems",
  "Where document review, borrower follow-up, and CRM handoffs usually waste the most hours",
  "A practical testing path for borrower data, approvals, permissions, and auditability",
];

const CHIPS = ["Risk-scored", "Pilot-ready", "Borrower-data aware"];

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
  // Accept any well-formed email (personal providers allowed).
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && domain.includes("."));
}

/** Email input with a mouse-tracking radial highlight on its top/bottom edges. */
function GlowInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [mx, setMx] = useState(0);
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative w-full">
      <input
        {...props}
        className="peer relative z-10 h-12 w-full rounded-md border border-[rgba(128,184,255,0.2)] bg-[rgb(13,15,28)] px-4 text-base text-[var(--white-90)] outline-none transition-colors duration-200 placeholder:text-[var(--white-30)] focus:border-[rgba(128,184,255,0.55)] sm:text-sm"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setMx(e.clientX - r.left);
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
      {hovering && (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] overflow-hidden rounded-t-md"
            style={{
              background: `radial-gradient(32px circle at ${mx}px 0px, #80b8ff 0%, transparent 70%)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[2px] overflow-hidden rounded-b-md"
            style={{
              background: `radial-gradient(32px circle at ${mx}px 2px, #80b8ff 0%, transparent 70%)`,
            }}
          />
        </>
      )}
    </div>
  );
}

export function AnimatedFeatureSpotlightDemo() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const [glowOn, setGlowOn] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLikelyWorkEmail(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setFeedback(null);

    const GUIDE_URL = "/resources/ai-guide-lending/guide";

    // Record the lead (Supabase via server route — best-effort).
    void fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Website visitor",
        email,
        company: "",
        industry: "Lending / Financial Services",
        challenge: "Homepage lead magnet — 10 AI lending use cases guide",
      }),
    }).catch(() => {});

    // Notify the team with the captured email (Web3Forms client-side —
    // the server-side path is blocked on the free plan).
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      void fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: "[DeView] Lending guide requested",
          from_name: "DeView website",
          name: "Website visitor",
          email,
          replyto: email,
          message: `Lending guide (10 AI use cases) requested by: ${email}`,
        }),
      }).catch(() => {});
    }

    // Deliver the document: unlock the gated guide and open it.
    try {
      sessionStorage.setItem("deview-guide-lending", "1");
    } catch {
      /* ignore */
    }
    setStatus("sent");
    window.location.href = GUIDE_URL;
  }

  return (
    <section className="w-full bg-[var(--background)] px-3 py-5 md:px-6 md:py-9 xl:px-8">
      <div
        className="relative mx-auto grid w-full max-w-[94rem] overflow-hidden rounded-lg border border-[rgba(128,184,255,0.16)] lg:grid-cols-[1.4fr_0.85fr]"
        style={{
          background:
            "radial-gradient(ellipse at 22% 8%, rgba(128,184,255,0.1), transparent 55%), radial-gradient(ellipse at 85% 92%, rgba(26,51,128,0.34), transparent 52%), linear-gradient(160deg, rgba(26,51,128,0.18) 0%, rgba(13,15,28,0) 60%), rgb(13, 15, 28)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(128,184,255,0.4),transparent)]" />

        {/* Left: content + form, with mouse-follow glow */}
        <div
          className="relative overflow-hidden p-5 md:p-8 lg:p-10"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setGlow({ x: e.clientX - r.left, y: e.clientY - r.top });
          }}
          onMouseEnter={() => setGlowOn(true)}
          onMouseLeave={() => setGlowOn(false)}
        >
          <div
            className={`pointer-events-none absolute h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(128,184,255,0.18),rgba(26,51,128,0.1)_45%,transparent_65%)] blur-3xl transition-opacity duration-300 ${
              glowOn ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translate(${glow.x - 250}px, ${glow.y - 250}px)`,
              transition: "transform 0.1s ease-out, opacity 0.3s ease",
            }}
          />

          <div className="relative z-10">
            {status === "sent" ? (
              <div className="flex min-h-[16rem] flex-col justify-center">
                <CheckCircle2 className="mb-3 h-8 w-8 text-[var(--white-70)]" />
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Information sent
                </p>
                <h3 className="mb-3 text-2xl font-semibold text-[var(--white-100)]">Check your email.</h3>
                <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                  We sent the AI use-case guide to {email}. The DeView team may follow up with a short
                  note if your company looks like a fit for an AI workflow audit.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="mb-3 inline-flex w-fit items-center gap-2 rounded-md border border-[rgba(128,184,255,0.22)] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#9fc4ff]"
                  style={{
                    background:
                      "radial-gradient(ellipse at 70% 130%, rgba(26,51,128,0.4), transparent 62%), rgb(13, 15, 28)",
                  }}
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Free AI automation guide for lenders</span>
                </div>

                <h2 className="mb-3 max-w-2xl text-[clamp(1.25rem,4.2vw,2.4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--white-100)]">
                  Prioritize the{" "}
                  <span className="text-[#9fc4ff] underline decoration-[rgba(128,184,255,0.4)] decoration-1 underline-offset-4">
                    10 lending workflows
                  </span>{" "}
                  AI can automate safely
                </h2>

                <p className="max-w-xl text-[0.84rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
                  A practical field guide for small and mid-sized lending teams. Use it to identify
                  manual-work bottlenecks, choose lower-risk pilots, and set borrower-data controls
                  before automation reaches production.
                </p>

                <div className="mt-4 grid gap-2.5">
                  {INSIGHTS.map((item, i) => (
                    <div key={item} className="grid grid-cols-[2rem_1fr] items-start gap-3">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-[rgba(128,184,255,0.22)] text-[0.65rem] font-semibold text-[#9fc4ff]"
                        style={{
                          background:
                            "radial-gradient(ellipse at 60% 130%, rgba(26,51,128,0.45), transparent 65%), rgb(13, 15, 28)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs leading-relaxed text-[var(--white-80)]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[var(--white-80)]">
                  {CHIPS.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-[rgba(128,184,255,0.2)] px-2.5 py-1 text-[#bcd4f5]"
                      style={{
                        background:
                          "radial-gradient(ellipse at 75% 130%, rgba(26,51,128,0.38), transparent 62%), rgb(13, 15, 28)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <form className="mt-7 max-w-md space-y-3" onSubmit={handleSubmit}>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">Work email</p>
                  <GlowInput
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {feedback ? (
                    <p className="text-xs leading-relaxed text-red-400">{feedback}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group/button relative inline-flex w-full items-center justify-center overflow-hidden rounded-md border border-[rgba(128,184,255,0.3)] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[#cfe0ff] shadow-lg shadow-[rgba(26,51,128,0.35)] transition-all duration-300 ease-in-out hover:border-[rgba(128,184,255,0.55)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 130%, rgba(26,51,128,0.55), transparent 60%), rgb(13, 15, 28)",
                    }}
                  >
                    <span className="relative z-10">
                      {status === "sending" ? "Sending..." : "Send me the guide"}
                    </span>
                    <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <span className="relative h-full w-12 bg-[rgba(128,184,255,0.22)]" />
                    </span>
                  </button>

                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    No newsletter signup. We send the guide and, only if useful, one practical
                    next-step option for your lending workflow.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Right: image */}
        <div className="relative hidden overflow-hidden border-l border-[rgba(128,184,255,0.16)] lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgb(13,15,28),transparent_58%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(13,15,28,0.55)] via-[rgba(26,51,128,0.28)] to-[rgba(128,184,255,0.14)]" />
        </div>
      </div>
    </section>
  );
}
