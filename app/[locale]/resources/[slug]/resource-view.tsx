"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import type { LeadMagnetResource } from "@/lib/oil-gas/resources";
import {
  emitAnalyticsEvent,
  getAttributionContext,
} from "@/lib/analytics/events";

interface Props {
  resource: LeadMagnetResource;
  locale: string;
}

function localizePath(path: string, locale: string): string {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) return path;
  const clean = path.replace(/^\/(?:en|zh-TW|zh-CN|es|fr|de|ar)(?=\/|$)/, "").replace(/^\/+/, "");
  return `/${locale}/${clean}`;
}

export function ResourceInteractiveView({ resource, locale }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [downloadUrlState, setDownloadUrlState] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState<boolean>(false);

  useEffect(() => {
    // PRD Section 20.2: resource_preview event
    emitAnalyticsEvent("resource_preview", {
      source_asset_id: "hub-oil-gas",
      resource_id: resource.id,
    });
  }, [resource.id]);

  const totalPossibleScore = (resource.assessmentQuestions?.length || 0) * 25;
  const currentScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const scorePercentage = totalPossibleScore > 0 ? Math.round((currentScore / totalPossibleScore) * 100) : 0;

  async function handleDownloadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDownloadStatus("submitting");
    setDownloadError(null);

    const formData = new FormData(e.currentTarget);
    const honeypot = String(formData.get("b_comment") || formData.get("honeypot") || "").trim();
    if (honeypot) {
      setDownloadStatus("success");
      return;
    }

    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const attribution = getAttributionContext();
    const consentTimestamp = consentChecked ? new Date().toISOString() : null;

    const payload = {
      name: formData.get("name"),
      email,
      company,
      industry: "Oil & Gas / Energy",
      source: resource.slug,
      challenge: `Readiness score: ${scorePercentage}%. Download request for ${resource.fileDeliverable}`,
      assessmentScore: scorePercentage,
      attribution,
      consent: consentChecked,
      consentTimestamp,
      locale,
    };

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Unable to process download request. Please check your email address.");
      }

      const json = await res.json().catch(() => ({}));
      const fileUrl = json.downloadUrl || `/downloads/resources/${resource.fileDeliverable}`;
      setDownloadUrlState(fileUrl);
      setDownloadStatus("success");

      // PRD Section 20.2: Emit compliant resource_download event
      emitAnalyticsEvent("resource_download", {
        resource_id: resource.id,
        version: "2026.1",
        locale,
        lead_id: consentChecked ? email : undefined,
      });

      // Legacy fallback
      emitAnalyticsEvent("lead_magnet_download", {
        resourceId: resource.id,
        resourceSlug: resource.slug,
        fileDeliverable: resource.fileDeliverable,
        scorePercentage,
        qualificationTier: json.qualificationTier || "subscriber",
      });

      // Automated client download trigger
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = resource.fileDeliverable;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: unknown) {
      setDownloadStatus("error");
      setDownloadError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Assessment Section if available */}
      {resource.assessmentQuestions && resource.assessmentQuestions.length > 0 && (
        <section
          style={{
            padding: "36px",
            background: "#fff",
            border: "1px solid var(--ds-line, #ded5c5)",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ds-accent, #ff3b00)",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            INTERACTIVE CAPABILITY DIAGNOSTIC
          </div>
          <h2
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 500,
              margin: "0 0 12px",
            }}
          >
            Calculate Your Organization&apos;s Readiness Score
          </h2>
          <p style={{ fontSize: "14px", color: "var(--ds-muted, #555047)", margin: "0 0 28px", lineHeight: 1.6 }}>
            Select the statement that best reflects your current asset infrastructure:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {resource.assessmentQuestions.map((q, qIdx) => (
              <div
                key={qIdx}
                style={{
                  padding: "20px",
                  background: "var(--ds-canvas, #fbf7ee)",
                  border: "1px solid var(--ds-line, #ded5c5)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "var(--ds-muted, #726b5f)",
                    marginBottom: "6px",
                  }}
                >
                  {q.category}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "var(--ds-ink, #12100e)" }}>
                  {q.question}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = answers[qIdx] === opt.score;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => {
                          const nextAnswers = { ...answers, [qIdx]: opt.score };
                          setAnswers(nextAnswers);

                          // PRD Section 20.2: Emit assessment_complete only when all questions are answered
                          const totalQuestions = resource.assessmentQuestions?.length || 0;
                          if (totalQuestions > 0 && Object.keys(nextAnswers).length === totalQuestions) {
                            const totalScore = Object.values(nextAnswers).reduce((sum, v) => sum + v, 0);
                            const maxScore = totalQuestions * 25;
                            const pct = Math.round((totalScore / maxScore) * 100);
                            const scoreBand: "advanced" | "moderate" | "foundation" =
                              pct >= 75 ? "advanced" : pct >= 50 ? "moderate" : "foundation";

                            emitAnalyticsEvent("assessment_complete", {
                              resource_id: resource.id,
                              score_band: scoreBand,
                              locale,
                            });
                          }
                        }}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px",
                          background: isSelected ? "var(--ds-ink, #12100e)" : "#fff",
                          color: isSelected ? "#fff" : "var(--ds-ink, #12100e)",
                          border: `1px solid ${isSelected ? "var(--ds-ink, #12100e)" : "var(--ds-line, #ded5c5)"}`,
                          cursor: "pointer",
                          fontSize: "13px",
                          lineHeight: 1.5,
                          transition: "all 0.15s ease",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span>{opt.label}</span>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            padding: "2px 8px",
                            background: isSelected ? "var(--ds-accent, #ff3b00)" : "rgba(18, 16, 14, 0.05)",
                            color: isSelected ? "#fff" : "var(--ds-muted, #726b5f)",
                          }}
                        >
                          +{opt.score} pts
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Score Card */}
          <div
            style={{
              marginTop: "28px",
              padding: "24px",
              background: "rgba(255, 59, 0, 0.04)",
              border: "1px solid var(--ds-accent, #ff3b00)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ds-accent, #ff3b00)" }}>
                YOUR READINESS BENCHMARK
              </div>
              <div style={{ fontSize: "28px", fontWeight: 600, color: "var(--ds-ink, #12100e)", marginTop: "4px" }}>
                {scorePercentage}% Maturity ({currentScore} / {totalPossibleScore} points)
              </div>
              <p style={{ fontSize: "13px", color: "var(--ds-muted, #555047)", margin: "4px 0 0" }}>
                {scorePercentage >= 75
                  ? "Advanced: Ready for end-to-end automated platform orchestration."
                  : scorePercentage >= 50
                  ? "Moderate: Core telemetry established; middleware abstraction and data harmonization required."
                  : "Foundation Stage: Critical gaps in sensor integration, telemetry diodes, or residency posture."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Ungated Sections & Specifications */}
      <section style={{ marginBottom: "56px" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ds-accent, #ff3b00)",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          COMPREHENSIVE SPECIFICATION CRITERIA
        </div>
        <h2
          style={{
            fontFamily: "var(--font-clash), sans-serif",
            fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
            fontWeight: 500,
            margin: "0 0 28px",
          }}
        >
          Workbook Structure & Standard Requirements
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {resource.sections.map((sec, sIdx) => (
            <div
              key={sIdx}
              style={{
                padding: "28px",
                background: "#fff",
                border: "1px solid var(--ds-line, #ded5c5)",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px", color: "var(--ds-ink, #12100e)" }}>
                {sec.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--ds-muted, #555047)", margin: "0 0 16px", lineHeight: 1.6 }}>
                {sec.description}
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx} style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--ds-ink, #12100e)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gated Download Form Section */}
      <section
        id="download"
        style={{
          padding: "48px 36px",
          background: "#fff",
          border: "2px solid var(--ds-accent, #ff3b00)",
          marginBottom: "56px",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ds-accent, #ff3b00)",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            OFFICIAL WORKBOOK DELIVERABLE
          </div>
          <h3
            style={{
              fontFamily: "var(--font-clash), sans-serif",
              fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
              fontWeight: 500,
              margin: "0 0 12px",
            }}
          >
            Download {resource.fileDeliverable}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--ds-muted, #555047)", margin: "0 0 32px", lineHeight: 1.6 }}>
            Receive the fully editable spreadsheet workbook containing evaluation scoring matrices,
            vendor RFP requirement tables, and operational audit criteria.
          </p>

          {downloadStatus === "success" ? (
            <div
              style={{
                padding: "32px 24px",
                background: "#f7faf7",
                border: "1px solid #2e7d32",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#e8f5e9",
                  color: "#2e7d32",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                ✓
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px", color: "#1b5e20" }}>
                Your Workbook Is Ready
              </h4>
              <p style={{ fontSize: "14px", margin: "0 auto 24px", maxWidth: "560px", lineHeight: 1.6, color: "var(--ds-ink, #12100e)" }}>
                Your download for <strong>{resource.fileDeliverable}</strong> has started automatically. If the download did not begin, click the direct download button below:
              </p>
              <a
                href={downloadUrlState || `/downloads/resources/${resource.fileDeliverable}`}
                download={resource.fileDeliverable}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  background: "var(--ds-accent, #ff3b00)",
                  color: "#fff",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Download {resource.fileDeliverable} Now ↓
              </a>
            </div>
          ) : (
            <form onSubmit={handleDownloadSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--ds-line, #ded5c5)",
                      fontSize: "14px",
                      background: "var(--ds-canvas, #fbf7ee)",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@operator.com"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--ds-line, #ded5c5)",
                      fontSize: "14px",
                      background: "var(--ds-canvas, #fbf7ee)",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                  Operating Company / Concession *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="e.g. Gulf Offshore Operations / West Africa Gas Consortium"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--ds-line, #ded5c5)",
                    fontSize: "14px",
                    background: "var(--ds-canvas, #fbf7ee)",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <input
                type="text"
                name="b_comment"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
              />

              <div style={{ padding: "12px 14px", background: "rgba(18, 16, 14, 0.03)", border: "1px solid var(--ds-line, #ded5c5)", fontSize: "12px", color: "var(--ds-muted, #555047)", lineHeight: 1.5 }}>
                Workbook file delivery is immediate. Your work email is used solely to transmit the spreadsheet workbook download link.
              </div>

              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "12px", color: "var(--ds-muted, #555047)", cursor: "pointer", marginTop: "4px" }}>
                <input
                  type="checkbox"
                  name="marketing_consent"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                  }}
                  style={{ marginTop: "2px" }}
                />
                <span>
                  <strong>Optional:</strong> I consent to receiving technical briefings, benchmark reports, and architectural scoping follow-up from Deview&apos;s energy practice. (You can download the workbook without opting in).
                </span>
              </label>

              {downloadError && (
                <div style={{ color: "#d92020", fontSize: "13px" }}>{downloadError}</div>
              )}

              <button
                type="submit"
                disabled={downloadStatus === "submitting"}
                style={{
                  marginTop: "8px",
                  padding: "16px 32px",
                  background: "var(--ds-accent, #ff3b00)",
                  color: "#fff",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {downloadStatus === "submitting" ? "Processing..." : `Download ${resource.fileDeliverable} →`}
              </button>
              <p style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)", textAlign: "center", margin: "4px 0 0" }}>
                Zero marketing spam. We use your details only to send the workbook and follow up on architectural scoping.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Commercial Follow-Up */}
      <section
        style={{
          padding: "48px 36px",
          background: "var(--ds-ink, #12100e)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-clash), sans-serif",
            fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
            fontWeight: 500,
            margin: "0 0 16px",
          }}
        >
          {resource.commercialFollowUp.title}
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "640px",
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          {resource.commercialFollowUp.description}
        </p>
        <Link
          href={localizePath(resource.commercialFollowUp.ctaHref, locale)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 36px",
            background: "var(--ds-accent, #ff3b00)",
            color: "#fff",
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {resource.commercialFollowUp.ctaLabel} →
        </Link>
      </section>
    </div>
  );
}

