"use client";

import { useState } from "react";
import "./more-info.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { useLocaleContext } from "@/lib/i18n/locale-context";

/* ─────────────────────────────────────────
   SVG Diagrams (rendered as raw HTML for
   full attribute fidelity)
───────────────────────────────────────── */

const SVG_ARCH = `<svg width="820" height="390" viewBox="0 0 820 390" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <defs><marker id="mi-a1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#3f3f46"/></marker></defs>
  <rect x="20" y="10" width="780" height="60" rx="8" fill="#16162a" stroke="#6366f1" stroke-width="1.5"/>
  <text x="42" y="34" fill="#818cf8" font-size="10" font-weight="700" letter-spacing="1.8">LAYER 5 — BUSINESS</text>
  <text x="42" y="55" fill="#a1a1aa" font-size="13">Business Processes · Strategic Goals · KPI Dashboards · Executive Reporting · ROI Tracking</text>
  <line x1="410" y1="70" x2="410" y2="86" stroke="#3f3f46" stroke-width="2" marker-end="url(#mi-a1)"/>
  <rect x="20" y="86" width="780" height="60" rx="8" fill="#111118" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="42" y="110" fill="#60a5fa" font-size="10" font-weight="700" letter-spacing="1.8">LAYER 4 — APPLICATION</text>
  <text x="42" y="131" fill="#a1a1aa" font-size="13">User Interfaces · ERP (SAP / Oracle) · CRM (Salesforce / HubSpot) · Slack · Document Platforms</text>
  <line x1="410" y1="146" x2="410" y2="162" stroke="#3f3f46" stroke-width="2" marker-end="url(#mi-a1)"/>
  <rect x="20" y="162" width="780" height="60" rx="8" fill="#111118" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="42" y="186" fill="#22d3ee" font-size="10" font-weight="700" letter-spacing="1.8">LAYER 3 — DATA FOUNDATION</text>
  <text x="42" y="207" fill="#a1a1aa" font-size="13">Data Sources · ETL Pipelines · Data Integration · Vector Stores · Feature Engineering · Data Quality</text>
  <line x1="410" y1="222" x2="410" y2="238" stroke="#3f3f46" stroke-width="2" marker-end="url(#mi-a1)"/>
  <rect x="20" y="238" width="780" height="60" rx="8" fill="#111118" stroke="#22c55e" stroke-width="1.5"/>
  <text x="42" y="262" fill="#4ade80" font-size="10" font-weight="700" letter-spacing="1.8">LAYER 2 — INFRASTRUCTURE</text>
  <text x="42" y="283" fill="#a1a1aa" font-size="13">Security &amp; Access Control · Cloud / On-Premises · MLOps · Audit Logging · Monitoring &amp; Alerting</text>
  <line x1="410" y1="298" x2="410" y2="314" stroke="#3f3f46" stroke-width="2" marker-end="url(#mi-a1)"/>
  <rect x="20" y="314" width="780" height="60" rx="8" fill="#1a1428" stroke="#a855f7" stroke-width="1.5"/>
  <text x="42" y="338" fill="#c084fc" font-size="10" font-weight="700" letter-spacing="1.8">LAYER 1 — AI / ML CORE</text>
  <text x="42" y="359" fill="#a1a1aa" font-size="13">LLMs · ML Classifiers · Model Registry · Serving Infrastructure · Evaluation Framework · Embeddings</text>
</svg>`;

const SVG_DATA = `<svg width="840" height="310" viewBox="0 0 840 310" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <defs>
    <marker id="mi-b1" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#3f3f46"/></marker>
    <marker id="mi-b2" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#3b82f6"/></marker>
    <marker id="mi-b3" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#a855f7"/></marker>
    <marker id="mi-b4" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#22c55e"/></marker>
  </defs>
  <text x="95" y="20" fill="#52525b" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">CLIENT SYSTEMS</text>
  <text x="320" y="20" fill="#52525b" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">ETL PIPELINE</text>
  <text x="560" y="20" fill="#52525b" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">AI LAYER</text>
  <text x="750" y="20" fill="#52525b" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">OUTPUTS</text>
  <rect x="20" y="32" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="54" fill="#e4e4e7" font-size="12" text-anchor="middle">CRM (Salesforce)</text>
  <rect x="20" y="76" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="98" fill="#e4e4e7" font-size="12" text-anchor="middle">ERP (SAP / Oracle)</text>
  <rect x="20" y="120" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="142" fill="#e4e4e7" font-size="12" text-anchor="middle">Document Storage</text>
  <rect x="20" y="164" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="186" fill="#e4e4e7" font-size="12" text-anchor="middle">SQL Databases</text>
  <rect x="20" y="208" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="230" fill="#e4e4e7" font-size="12" text-anchor="middle">Slack / Email</text>
  <rect x="20" y="252" width="150" height="34" rx="6" fill="#111118" stroke="#3f3f46" stroke-width="1"/><text x="95" y="274" fill="#e4e4e7" font-size="12" text-anchor="middle">BI Tools</text>
  <line x1="170" y1="49" x2="238" y2="122" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <line x1="170" y1="93" x2="238" y2="135" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <line x1="170" y1="137" x2="238" y2="148" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <line x1="170" y1="181" x2="238" y2="162" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <line x1="170" y1="225" x2="238" y2="175" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <line x1="170" y1="269" x2="238" y2="185" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-b1)"/>
  <rect x="238" y="100" width="164" height="110" rx="8" fill="#0f1729" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="320" y="126" fill="#60a5fa" font-size="13" text-anchor="middle" font-weight="600">Extract</text>
  <text x="320" y="148" fill="#71717a" font-size="12" text-anchor="middle">↓ Transform</text>
  <text x="320" y="168" fill="#71717a" font-size="12" text-anchor="middle">↓ Validate</text>
  <text x="320" y="188" fill="#71717a" font-size="12" text-anchor="middle">↓ Load</text>
  <line x1="402" y1="155" x2="460" y2="155" stroke="#3b82f6" stroke-width="2" marker-end="url(#mi-b2)"/>
  <rect x="460" y="75" width="190" height="60" rx="8" fill="#1a1428" stroke="#a855f7" stroke-width="1.5"/>
  <text x="555" y="101" fill="#c084fc" font-size="13" text-anchor="middle" font-weight="600">LLM / ML Models</text>
  <text x="555" y="120" fill="#71717a" font-size="11" text-anchor="middle">Vector DB · Model Serving</text>
  <rect x="460" y="155" width="190" height="60" rx="8" fill="#1a1428" stroke="#a855f7" stroke-width="1.5"/>
  <text x="555" y="181" fill="#c084fc" font-size="13" text-anchor="middle" font-weight="600">Evaluation Layer</text>
  <text x="555" y="200" fill="#71717a" font-size="11" text-anchor="middle">Scoring · Drift Detection</text>
  <rect x="460" y="235" width="190" height="60" rx="8" fill="#1a1428" stroke="#a855f7" stroke-width="1.5"/>
  <text x="555" y="261" fill="#c084fc" font-size="13" text-anchor="middle" font-weight="600">Audit Logger</text>
  <text x="555" y="280" fill="#71717a" font-size="11" text-anchor="middle">Every action recorded</text>
  <line x1="650" y1="105" x2="695" y2="105" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-b3)"/>
  <line x1="650" y1="185" x2="695" y2="175" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-b3)"/>
  <line x1="650" y1="265" x2="695" y2="255" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-b3)"/>
  <rect x="695" y="80" width="130" height="38" rx="6" fill="#111118" stroke="#22c55e" stroke-width="1.5"/><text x="760" y="104" fill="#4ade80" font-size="12" text-anchor="middle">Insights &amp; Reports</text>
  <rect x="695" y="156" width="130" height="38" rx="6" fill="#111118" stroke="#22c55e" stroke-width="1.5"/><text x="760" y="175" fill="#4ade80" font-size="12" text-anchor="middle">Automated Actions</text><text x="760" y="190" fill="#52525b" font-size="10" text-anchor="middle">CRM updates, tickets</text>
  <rect x="695" y="232" width="130" height="38" rx="6" fill="#111118" stroke="#22c55e" stroke-width="1.5"/><text x="760" y="256" fill="#4ade80" font-size="12" text-anchor="middle">Compliance Logs</text><text x="760" y="271" fill="#52525b" font-size="10" text-anchor="middle">Exportable audit trail</text>
</svg>`;

const SVG_SEC = `<svg width="820" height="290" viewBox="0 0 820 290" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <defs>
    <marker id="mi-c1" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#f59e0b"/></marker>
    <marker id="mi-c2" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0 L0,5 L5,2.5 z" fill="#a855f7"/></marker>
  </defs>
  <rect x="10" y="10" width="225" height="268" rx="8" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="122" y="32" fill="#60a5fa" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">CLIENT BROWSER</text>
  <rect x="28" y="42" width="189" height="38" rx="6" fill="#0f1729" stroke="#3b82f6" stroke-width="1"/><text x="122" y="66" fill="#93c5fd" font-size="12" text-anchor="middle">React UI (Next.js)</text>
  <rect x="28" y="92" width="189" height="38" rx="6" fill="#0f1729" stroke="#3b82f6" stroke-width="1"/><text x="122" y="116" fill="#93c5fd" font-size="12" text-anchor="middle">Public keys only (safe)</text>
  <rect x="28" y="142" width="189" height="38" rx="6" fill="#0f1729" stroke="#3b82f6" stroke-width="1"/><text x="122" y="166" fill="#93c5fd" font-size="12" text-anchor="middle">localStorage (UI state)</text>
  <text x="122" y="258" fill="#3f3f46" font-size="11" text-anchor="middle">No sensitive keys exposed</text>
  <text x="272" y="148" fill="#f59e0b" font-size="22" text-anchor="middle">🔒</text>
  <text x="272" y="168" fill="#71717a" font-size="10" text-anchor="middle">HTTPS only</text>
  <line x1="235" y1="140" x2="300" y2="140" stroke="#f59e0b" stroke-width="2" marker-end="url(#mi-c1)"/>
  <rect x="300" y="10" width="245" height="268" rx="8" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="422" y="32" fill="#4ade80" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">SERVER (Node.js API)</text>
  <rect x="318" y="42" width="209" height="38" rx="6" fill="#0a1a0a" stroke="#22c55e" stroke-width="1"/><text x="422" y="66" fill="#86efac" font-size="12" text-anchor="middle">Input validation + sanitize</text>
  <rect x="318" y="92" width="209" height="38" rx="6" fill="#0a1a0a" stroke="#22c55e" stroke-width="1"/><text x="422" y="116" fill="#86efac" font-size="12" text-anchor="middle">Honeypot spam detection</text>
  <rect x="318" y="142" width="209" height="38" rx="6" fill="#0a1a0a" stroke="#22c55e" stroke-width="1"/><text x="422" y="158" fill="#86efac" font-size="12" text-anchor="middle">Secret env vars only</text><text x="422" y="173" fill="#52525b" font-size="10" text-anchor="middle">Never exposed to browser</text>
  <rect x="318" y="196" width="209" height="38" rx="6" fill="#0a1a0a" stroke="#22c55e" stroke-width="1"/><text x="422" y="220" fill="#86efac" font-size="12" text-anchor="middle">API route auth guards</text>
  <text x="422" y="258" fill="#3f3f46" font-size="11" text-anchor="middle">Zero trust between zones</text>
  <line x1="545" y1="95" x2="598" y2="95" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-c2)"/>
  <line x1="545" y1="155" x2="598" y2="155" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-c2)"/>
  <line x1="545" y1="215" x2="598" y2="215" stroke="#a855f7" stroke-width="1.5" marker-end="url(#mi-c2)"/>
  <rect x="598" y="10" width="212" height="268" rx="8" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="704" y="32" fill="#c084fc" font-size="10" font-weight="700" letter-spacing="1.2" text-anchor="middle">THIRD-PARTY SERVICES</text>
  <rect x="616" y="68" width="176" height="38" rx="6" fill="#1a0a2a" stroke="#a855f7" stroke-width="1"/><text x="704" y="92" fill="#d8b4fe" font-size="12" text-anchor="middle">Supabase (PostgreSQL)</text>
  <rect x="616" y="128" width="176" height="38" rx="6" fill="#1a0a2a" stroke="#a855f7" stroke-width="1"/><text x="704" y="152" fill="#d8b4fe" font-size="12" text-anchor="middle">LLM / AI APIs</text>
  <rect x="616" y="188" width="176" height="38" rx="6" fill="#1a0a2a" stroke="#a855f7" stroke-width="1"/><text x="704" y="212" fill="#d8b4fe" font-size="12" text-anchor="middle">Email / Notifications</text>
  <text x="704" y="258" fill="#3f3f46" font-size="11" text-anchor="middle">Server-proxied — never direct</text>
</svg>`;

const SVG_MLOPS = `<svg width="720" height="280" viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <defs><marker id="mi-d1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#3f3f46"/></marker></defs>
  <rect x="270" y="18" width="180" height="56" rx="8" fill="#0f1729" stroke="#3b82f6" stroke-width="2"/>
  <text x="360" y="44" fill="#60a5fa" font-size="14" text-anchor="middle" font-weight="700">🚀 Deploy</text>
  <text x="360" y="63" fill="#71717a" font-size="11" text-anchor="middle">Model goes to production</text>
  <path d="M450 46 Q570 46 570 118" fill="none" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-d1)"/>
  <rect x="560" y="118" width="150" height="56" rx="8" fill="#111118" stroke="#06b6d4" stroke-width="2"/>
  <text x="635" y="144" fill="#22d3ee" font-size="14" text-anchor="middle" font-weight="700">👁 Monitor</text>
  <text x="635" y="163" fill="#71717a" font-size="11" text-anchor="middle">Performance tracked</text>
  <path d="M635 174 Q635 230 570 242" fill="none" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-d1)"/>
  <rect x="395" y="224" width="180" height="56" rx="8" fill="#111118" stroke="#f59e0b" stroke-width="2"/>
  <text x="485" y="250" fill="#fbbf24" font-size="14" text-anchor="middle" font-weight="700">📊 Evaluate</text>
  <text x="485" y="269" fill="#71717a" font-size="11" text-anchor="middle">Accuracy &amp; drift scored</text>
  <path d="M395 252 Q270 252 210 205" fill="none" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-d1)"/>
  <rect x="68" y="150" width="150" height="56" rx="8" fill="#111118" stroke="#a855f7" stroke-width="2"/>
  <text x="143" y="176" fill="#c084fc" font-size="14" text-anchor="middle" font-weight="700">🔄 Retrain</text>
  <text x="143" y="195" fill="#71717a" font-size="11" text-anchor="middle">Model improved</text>
  <path d="M143 150 Q143 46 270 46" fill="none" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#mi-d1)"/>
  <text x="360" y="168" fill="#27272a" font-size="14" text-anchor="middle" font-weight="600">Continuous</text>
  <text x="360" y="190" fill="#27272a" font-size="14" text-anchor="middle" font-weight="600">improvement loop</text>
</svg>`;

/* ─────────────────────────────────────────
   FAQ item
───────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq${open ? " faq-open" : ""}`}>
      <div className="faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="faq-ch">▼</span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────
   Flow helper
───────────────────────────────────────── */
function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flow">
      {steps.map((s, i) => (
        <span key={i}>
          <span className="fs">{s}</span>
          {i < steps.length - 1 && <span className="fa">→</span>}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function MoreInfoPage() {
  const { dict } = useLocaleContext();
  const m = dict.moreInfoPage;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] pb-16 pt-[calc(5.5rem+env(safe-area-inset-top))]">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* ── Guide wrapper ── */}
          <div className="gw">

            {/* ════════════════════════════════
                MODULE 1 — THE BIG PICTURE
            ════════════════════════════════ */}
            <div className="module" id="mi-m1">
              <div className="module-header">
                <div className="module-tag">{m.m1Tag}</div>
                <h1 className="module-title">{m.m1Title}</h1>
                <p className="module-desc">{m.m1Desc}</p>
              </div>

              <h2 className="sh">{m.archHeading}</h2>
              <p className="intro-p">{m.archIntro}</p>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_ARCH }} />
                <p className="diag-cap">{m.archCaption}</p>
              </div>

              <h2 className="sh">{m.modesHeading}</h2>
              <div className="g2">
                {m.modes.map((mode, i) => (
                  <div className="card" key={i}>
                    <div className="card-title">
                      {mode.icon} {mode.name}{" "}
                      <span className={`badge ${i === 0 ? "b-blue" : i === 1 ? "b-green" : i === 2 ? "b-purple" : "b-cyan"}`}>
                        {mode.badge}
                      </span>
                    </div>
                    <p>{mode.desc}</p>
                    <div style={{ marginTop: 10 }}>
                      {mode.tags.map((tag, j) => (
                        <span className="tag" key={j}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="sh">{m.prodHeading}</h2>
              <div className="co co-info">
                <strong>{m.prodTip}</strong> {m.prodTipText}
              </div>
              <table className="dt">
                <thead>
                  <tr>
                    <th>{m.prodColumns.dimension}</th>
                    <th>{m.prodColumns.poc}</th>
                    <th>{m.prodColumns.production}</th>
                  </tr>
                </thead>
                <tbody>
                  {m.prodRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.dim}</td>
                      <td className="comp-bad">{row.poc}</td>
                      <td className="comp-good">✓ {row.prod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 2 — SERVICES
            ════════════════════════════════ */}
            <div className="module" id="mi-m2">
              <div className="module-header">
                <div className="module-tag">{m.m2Tag}</div>
                <h1 className="module-title">{m.m2Title}</h1>
                <p className="module-desc">{m.m2Desc}</p>
              </div>

              <h2 className="sh">① {m.svc1Heading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc1WhatTitle}</div>
                  <p>{m.svc1WhatBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc1RecTitle}</div>
                  <ul className="cl">
                    {m.svc1RecItems.map((item, i) => {
                      const [bold, ...rest] = item.split(" ");
                      return (
                        <li key={i}><strong>{bold}</strong> {rest.join(" ")}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Flow steps={m.svc1Flow.map((s, i) => {
                const icons = ["📋", "🔍", "📊", "🎯", "📄"];
                return `${icons[i] ?? ""} ${s}`;
              })} />

              <div className="divider" />

              <h2 className="sh">② {m.svc2Heading}</h2>
              <div className="co co-info">
                <strong>{m.svc2Concept}</strong> {m.svc2ConceptBody}
              </div>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc2RagTitle}</div>
                  <p>{m.svc2RagBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc2ConnTitle}</div>
                  <ul className="cl">
                    {m.svc2ConnItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Flow steps={m.svc2Flow.map((s, i) => {
                const icons = ["📁", "✂️", "🗄️", "❓", "🔍", "💬"];
                return `${icons[i] ?? ""} ${s}`;
              })} />

              <div className="divider" />

              <h2 className="sh">③ {m.svc3Heading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc3AutoTitle}</div>
                  <p>{m.svc3AutoBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc3LoopTitle}</div>
                  <p>{m.svc3LoopBody}</p>
                </div>
              </div>
              <Flow steps={m.svc3Flow.map((s, i) => {
                const icons = ["📄", "🔤", "🤖", "✅", "🔀", "⚙️"];
                return `${icons[i] ?? ""} ${s}`;
              })} />

              <div className="divider" />

              <h2 className="sh">④ {m.svc4Heading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc4RoutTitle}</div>
                  <p>{m.svc4RoutBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc4CrmTitle}</div>
                  <ul className="cl">
                    {m.svc4CrmItems.map((item, i) => {
                      const parts = item.split(" ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong> {parts.slice(1).join(" ")}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Flow steps={m.svc4Flow.map((s, i) => {
                const icons = ["📨", "🎯", "📚", "💬", "📝"];
                return `${icons[i] ?? ""} ${s}`;
              })} />

              <div className="divider" />

              <h2 className="sh">⑤ {m.svc5Heading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc5ReplTitle}</div>
                  <p>{m.svc5ReplBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc5ConnTitle}</div>
                  <ul className="cl">
                    {m.svc5ConnItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Flow steps={m.svc5Flow.map((s, i) => {
                const icons = ["🔗", "⏰", "🤖", "📊", "📧"];
                return `${icons[i] ?? ""} ${s}`;
              })} />

              <div className="divider" />

              <h2 className="sh">⑥ {m.svc6Heading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.svc6DiffTitle}</div>
                  <p>{m.svc6DiffBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.svc6DimTitle}</div>
                  <ul className="cl">
                    {m.svc6DimItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 3 — DATA INFRASTRUCTURE
            ════════════════════════════════ */}
            <div className="module" id="mi-m3">
              <div className="module-header">
                <div className="module-tag">{m.m3Tag}</div>
                <h1 className="module-title">{m.m3Title}</h1>
                <p className="module-desc">{m.m3Desc}</p>
              </div>

              <h2 className="sh">{m.dataMapHeading}</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_DATA }} />
                <p className="diag-cap">{m.dataMapCaption}</p>
              </div>

              <h2 className="sh">{m.deployHeading}</h2>
              <div className="g3">
                <div className="card">
                  <div className="card-title"><span className="badge b-blue">{m.deployCloud}</span></div>
                  <p style={{ marginTop: 8 }}>{m.deployCloudBody}</p>
                </div>
                <div className="card">
                  <div className="card-title"><span className="badge b-green">{m.deployOnPrem}</span></div>
                  <p style={{ marginTop: 8 }}>{m.deployOnPremBody}</p>
                </div>
                <div className="card">
                  <div className="card-title"><span className="badge b-amber">{m.deployHybrid}</span></div>
                  <p style={{ marginTop: 8 }}>{m.deployHybridBody}</p>
                </div>
              </div>

              <h2 className="sh">{m.isoHeading}</h2>
              <div className="co co-ok">
                <strong>{m.isoCallout}</strong> {m.isoCalloutBody}
              </div>
              <ul className="cl">
                {m.isoItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 4 — SECURITY
            ════════════════════════════════ */}
            <div className="module" id="mi-m4">
              <div className="module-header">
                <div className="module-tag">{m.m4Tag}</div>
                <h1 className="module-title">{m.m4Title}</h1>
                <p className="module-desc">{m.m4Desc}</p>
              </div>

              <h2 className="sh">{m.secMapHeading}</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_SEC }} />
                <p className="diag-cap">{m.secMapCaption}</p>
              </div>

              <h2 className="sh">{m.secMeasuresHeading}</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">🔑 {m.secAccess}</div>
                  <ul className="cl">
                    {m.secAccessItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title">📋 {m.secAudit}</div>
                  <ul className="cl">
                    {m.secAuditItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title">🛡️ {m.secInput}</div>
                  <ul className="cl">
                    {m.secInputItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title">🤖 {m.secAi}</div>
                  <ul className="cl">
                    {m.secAiItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <h2 className="sh">{m.regHeading}</h2>
              <div className="co co-warn">
                <strong>{m.regTip}</strong> {m.regTipText}
              </div>
              <table className="dt">
                <thead>
                  <tr>
                    <th>{m.regColumns.regulation}</th>
                    <th>{m.regColumns.who}</th>
                    <th>{m.regColumns.how}</th>
                  </tr>
                </thead>
                <tbody>
                  {m.regRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.reg}</td>
                      <td>{row.who}</td>
                      <td>{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 5 — MLOPS
            ════════════════════════════════ */}
            <div className="module" id="mi-m5">
              <div className="module-header">
                <div className="module-tag">{m.m5Tag}</div>
                <h1 className="module-title">{m.m5Title}</h1>
                <p className="module-desc">{m.m5Desc}</p>
              </div>

              <h2 className="sh">{m.mlopsHeading}</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_MLOPS }} />
                <p className="diag-cap">{m.mlopsCaption}</p>
              </div>

              <div className="g2">
                <div className="card">
                  <div className="card-title" style={{ color: "var(--gi-cyan)" }}>👁 {m.monitorTitle}</div>
                  <ul className="cl">
                    {m.monitorItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title" style={{ color: "var(--gi-amber)" }}>📊 {m.evaluateTitle}</div>
                  <ul className="cl">
                    {m.evaluateItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <h2 className="sh">{m.driftHeading}</h2>
              <div className="co co-warn">
                <strong>{m.driftCallout}</strong> {m.driftCalloutBody}
              </div>
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.dataDrift}</div>
                  <p>{m.dataDriftBody}</p>
                </div>
                <div className="card">
                  <div className="card-title">{m.conceptDrift}</div>
                  <p>{m.conceptDriftBody}</p>
                </div>
              </div>

              <h2 className="sh">{m.hitlHeading}</h2>
              <Flow steps={m.hitlFlow} />
              <div className="co co-ok">
                <strong>{m.hitlCallout}</strong> {m.hitlCalloutBody}
              </div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 6 — DEVIEW STACK
            ════════════════════════════════ */}
            <div className="module" id="mi-m6">
              <div className="module-header">
                <div className="module-tag">{m.m6Tag}</div>
                <h1 className="module-title">{m.m6Title}</h1>
                <p className="module-desc">{m.m6Desc}</p>
              </div>

              <table className="dt">
                <thead>
                  <tr>
                    <th>{m.stackColumns.layer}</th>
                    <th>{m.stackColumns.tech}</th>
                    <th>{m.stackColumns.version}</th>
                    <th>{m.stackColumns.purpose}</th>
                  </tr>
                </thead>
                <tbody>
                  {m.stackRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.layer}</td>
                      <td><strong>{row.tech}</strong></td>
                      <td>{row.version}</td>
                      <td>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="sh">{m.portalHeading}</h2>
              <Flow steps={m.portalFlow} />
              <div className="g2">
                <div className="card">
                  <div className="card-title">{m.portalViewTitle}</div>
                  <ul className="cl">
                    {m.portalViewItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card">
                  <div className="card-title">{m.portalSecTitle}</div>
                  <ul className="cl">
                    {m.portalSecItems.map((item, i) => {
                      const parts = item.split(" — ");
                      return (
                        <li key={i}><strong>{parts[0]}</strong>{parts[1] ? ` — ${parts[1]}` : ""}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="co co-info">
                <strong>{m.portalCredibility}</strong> {m.portalCredibilityBody}
              </div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 7 — FAQ
            ════════════════════════════════ */}
            <div className="module" id="mi-m7">
              <div className="module-header">
                <div className="module-tag">{m.m7Tag}</div>
                <h1 className="module-title">{m.m7Title}</h1>
                <p className="module-desc">{m.m7Desc}</p>
              </div>

              {m.faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>

            <div style={{ height: 40 }} />
          </div>
          {/* end .gw */}
        </div>
      </main>

      <SiteFooter rootPrefix="/" />
    </>
  );
}
