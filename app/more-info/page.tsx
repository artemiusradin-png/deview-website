"use client";

import { useState } from "react";
import "./more-info.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

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
                <div className="module-tag">Module 01</div>
                <h1 className="module-title">The Big Picture</h1>
                <p className="module-desc">What DeView builds, how our architecture is structured, and why production-grade AI is different from a demo.</p>
              </div>

              <h2 className="sh">The DeView Enterprise AI Architecture</h2>
              <p className="intro-p">Every DeView engagement operates within a five-layer model. Understanding these layers lets you explain exactly where our work sits inside a client&apos;s existing technology estate.</p>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_ARCH }} />
                <p className="diag-cap">Fig 1.1 — DeView&apos;s five-layer enterprise AI architecture. Every engagement touches all five layers.</p>
              </div>

              <h2 className="sh">The Four AI Operating Modes</h2>
              <div className="g2">
                <div className="card">
                  <div className="card-title">📈 Predictive <span className="badge b-blue">Data-driven</span></div>
                  <p>Uses historical and real-time data to forecast outcomes. Examples: inventory demand forecasting, fraud detection scoring, credit risk assessment, workforce capacity planning.</p>
                  <div style={{marginTop: 10}}><span className="tag">ML models</span><span className="tag">time-series</span><span className="tag">scoring APIs</span></div>
                </div>
                <div className="card">
                  <div className="card-title">💬 Conversational <span className="badge b-green">User-facing</span></div>
                  <p>AI-powered interfaces that respond to natural language. Examples: internal knowledge assistants, customer support bots, HR policy Q&amp;A, procurement request handling.</p>
                  <div style={{marginTop: 10}}><span className="tag">LLMs</span><span className="tag">RAG</span><span className="tag">chat APIs</span></div>
                </div>
                <div className="card">
                  <div className="card-title">✍️ Generative <span className="badge b-purple">Content</span></div>
                  <p>AI that creates new documents at scale. Examples: automated report generation, loan application summaries, contract drafting, compliance document review.</p>
                  <div style={{marginTop: 10}}><span className="tag">LLMs</span><span className="tag">templates</span><span className="tag">structured output</span></div>
                </div>
                <div className="card">
                  <div className="card-title">🔬 Analytical <span className="badge b-cyan">Insight</span></div>
                  <p>AI that surfaces hidden patterns. Examples: customer churn signals, pipeline health scoring, document classification, sentiment analysis on support tickets.</p>
                  <div style={{marginTop: 10}}><span className="tag">NLP</span><span className="tag">classification</span><span className="tag">embeddings</span></div>
                </div>
              </div>

              <h2 className="sh">Production-Grade vs. Proof-of-Concept</h2>
              <div className="co co-info"><strong>Sales tip:</strong> Most prospects have already seen an AI demo. The real question they&apos;re asking is: &ldquo;Can this actually work inside our environment, with our data, under our security policies?&rdquo;</div>
              <table className="dt">
                <thead><tr><th>Dimension</th><th>Proof-of-Concept</th><th>DeView Production-Grade</th></tr></thead>
                <tbody>
                  <tr><td>Data</td><td className="comp-bad">Sample CSV or synthetic data</td><td className="comp-good">✓ Live integrations with real CRM / ERP</td></tr>
                  <tr><td>Security</td><td className="comp-bad">No auth, shared API keys</td><td className="comp-good">✓ Role-based access, audit logs, isolated tenants</td></tr>
                  <tr><td>Reliability</td><td className="comp-bad">Demo environment, no SLA</td><td className="comp-good">✓ Uptime monitoring, error handling, fallback logic</td></tr>
                  <tr><td>Monitoring</td><td className="comp-bad">None</td><td className="comp-good">✓ Drift detection, evaluation pipelines, alerting</td></tr>
                  <tr><td>Integration</td><td className="comp-bad">Standalone, copy-paste workflow</td><td className="comp-good">✓ Embedded in existing tools and workflows</td></tr>
                  <tr><td>Compliance</td><td className="comp-bad">Not considered</td><td className="comp-good">✓ Designed for regulated industries from day one</td></tr>
                  <tr><td>Ownership</td><td className="comp-bad">Vendor lock-in, hosted platform</td><td className="comp-good">✓ Deployed in your environment — you own the system</td></tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 2 — SERVICES
            ════════════════════════════════ */}
            <div className="module" id="mi-m2">
              <div className="module-header">
                <div className="module-tag">Module 02</div>
                <h1 className="module-title">Services Deep Dive</h1>
                <p className="module-desc">A technical breakdown of each DeView service — how it works, what it connects to, and what the client receives.</p>
              </div>

              <h2 className="sh">① AI Workflow Audit</h2>
              <div className="g2">
                <div className="card"><div className="card-title">What it is</div><p>A structured analysis of one business process to identify the highest-value AI automation entry point. Delivered as a scoped report with a concrete, costed implementation pathway.</p></div>
                <div className="card"><div className="card-title">What the client receives</div><ul className="cl"><li><strong>Process map</strong> annotated with bottleneck markers</li><li><strong>Automation score</strong> per process step (effort vs. impact)</li><li><strong>Top use case</strong> with rough ROI estimate</li><li><strong>Implementation roadmap</strong> phased into 3 stages</li></ul></div>
              </div>
              <Flow steps={["📋 Process intake interview","🔍 Bottleneck mapping","📊 Automation scoring","🎯 Use case prioritization","📄 Roadmap delivery"]} />

              <div className="divider" />

              <h2 className="sh">② Internal Knowledge Assistant</h2>
              <div className="co co-info"><strong>Key concept — RAG:</strong> Instead of guessing answers, the AI searches your company&apos;s actual documents, retrieves the most relevant sections, then answers — grounded only in those specific documents, with citations.</div>
              <div className="g2">
                <div className="card"><div className="card-title">How RAG works (for clients)</div><p>Think of it as giving the AI a private search engine over your company&apos;s documents. When someone asks a question, the AI searches first, finds the right policy or procedure, then answers — quoting the source. It never makes up an answer that isn&apos;t in your documents.</p></div>
                <div className="card"><div className="card-title">What gets connected</div><ul className="cl"><li><strong>Confluence / Notion</strong> — internal wikis and runbooks</li><li><strong>SharePoint / Google Drive</strong> — file storage and policies</li><li><strong>PDF / Word documents</strong> — procedures and compliance docs</li><li><strong>Slack history</strong> — surfacing institutional knowledge</li></ul></div>
              </div>
              <Flow steps={["📁 Company docs ingested","✂️ Chunked & vectorized","🗄️ Stored in vector DB","❓ User asks question","🔍 Relevant chunks retrieved","💬 LLM answers with citations"]} />

              <div className="divider" />

              <h2 className="sh">③ Document Automation</h2>
              <div className="g2">
                <div className="card"><div className="card-title">What it automates</div><p>Repetitive document processing: extracting structured data from forms, classifying incoming document types, generating outputs from unstructured text, routing documents to the correct downstream workflow.</p></div>
                <div className="card"><div className="card-title">Human-in-the-loop (a feature, not a limitation)</div><p>When AI confidence falls below the configured threshold, the document is flagged for human review rather than processed automatically. The system never silently makes a high-stakes mistake.</p></div>
              </div>
              <Flow steps={["📄 Document received","🔤 OCR / text extraction","🤖 LLM parsing & classification","✅ Confidence check","🔀 Auto-process or human review","⚙️ Downstream system updated"]} />

              <div className="divider" />

              <h2 className="sh">④ Customer Support Assistant</h2>
              <div className="g2">
                <div className="card"><div className="card-title">How intelligent routing works</div><p>The AI classifies each message by intent and confidence score. High-confidence intents are handled automatically; ambiguous ones escalate to a human agent with full conversation context pre-populated.</p></div>
                <div className="card"><div className="card-title">CRM integration behaviour</div><ul className="cl"><li><strong>Reads</strong> full customer history before composing a reply</li><li><strong>Logs</strong> every AI interaction to the CRM record</li><li><strong>Creates</strong> tickets or updates case records automatically</li><li><strong>Escalates</strong> with conversation context pre-loaded</li></ul></div>
              </div>
              <Flow steps={["📨 Customer message","🎯 Intent classification","📚 KB + CRM lookup","💬 AI response generated","📝 CRM record updated"]} />

              <div className="divider" />

              <h2 className="sh">⑤ Reporting &amp; Research Copilot</h2>
              <div className="g2">
                <div className="card"><div className="card-title">What it replaces</div><p>Hours of manual data gathering, spreadsheet consolidation, and report drafting. The AI connects directly to data sources, queries them on schedule, summarizes findings in your preferred format, and delivers the report automatically.</p></div>
                <div className="card"><div className="card-title">Data connectors</div><ul className="cl"><li><strong>SQL databases</strong> — direct query via read-only credentials</li><li><strong>BI tools</strong> — Tableau, Power BI, Looker exports</li><li><strong>APIs</strong> — internal and third-party data feeds</li><li><strong>Spreadsheets</strong> — Google Sheets, Excel via scheduled sync</li></ul></div>
              </div>
              <Flow steps={["🔗 Data source connected","⏰ Scheduled data pull","🤖 LLM summarizes & formats","📊 Report structured","📧 Delivered to stakeholders"]} />

              <div className="divider" />

              <h2 className="sh">⑥ AI Implementation Advisory</h2>
              <div className="g2">
                <div className="card"><div className="card-title">What makes this different</div><p>Recommendations scoped to the client&apos;s actual tech stack, team capabilities, and data readiness. Output is a prioritised roadmap with effort/impact scoring — not a slide deck full of buzzwords.</p></div>
                <div className="card"><div className="card-title">Assessment dimensions</div><ul className="cl"><li><strong>Data readiness</strong> — quality, availability, governance</li><li><strong>Integration feasibility</strong> — existing systems audit</li><li><strong>Team capability</strong> — skill gaps and training needs</li><li><strong>ROI modelling</strong> — time and cost savings per use case</li></ul></div>
              </div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 3 — DATA INFRASTRUCTURE
            ════════════════════════════════ */}
            <div className="module" id="mi-m3">
              <div className="module-header">
                <div className="module-tag">Module 03</div>
                <h1 className="module-title">Data Infrastructure</h1>
                <p className="module-desc">How client data flows from existing source systems through DeView&apos;s AI pipelines — and back into the business.</p>
              </div>

              <h2 className="sh">Data Integration Map</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_DATA }} />
                <p className="diag-cap">Fig 3.1 — Data flow from client source systems through the ETL pipeline into the AI layer and back to business outputs.</p>
              </div>

              <h2 className="sh">Deployment Models</h2>
              <div className="g3">
                <div className="card"><div className="card-title"><span className="badge b-blue">Cloud-hosted</span></div><p style={{marginTop:8}}>Deployed within the client&apos;s own AWS, GCP, or Azure account. Data never leaves their cloud environment. DeView manages the deployment — not the data.</p></div>
                <div className="card"><div className="card-title"><span className="badge b-green">On-premises</span></div><p style={{marginTop:8}}>Fully air-gapped within the client&apos;s physical or virtual infrastructure. Uses open-source models (Llama 3, Mistral) running locally. Required for highly regulated environments.</p></div>
                <div className="card"><div className="card-title"><span className="badge b-amber">Hybrid</span></div><p style={{marginTop:8}}>Sensitive regulated data stays on-premises; non-sensitive processing uses cloud inference. Common in lending where some datasets are regulated and others aren&apos;t.</p></div>
              </div>

              <h2 className="sh">Data Isolation &amp; Ownership</h2>
              <div className="co co-ok"><strong>Key assurance for enterprise procurement:</strong> Each client deployment is fully isolated. No shared model learns from one client&apos;s data and applies it to another. Your data is never used to train general-purpose models.</div>
              <ul className="cl">
                <li>Separate database schema or dedicated instance per client</li>
                <li>API keys and credentials scoped exclusively to each deployment</li>
                <li>Audit logs are client-specific and fully exportable on request</li>
                <li>Data retention policies configurable per engagement agreement</li>
                <li>Client retains full ownership — system lives in their environment</li>
              </ul>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 4 — SECURITY
            ════════════════════════════════ */}
            <div className="module" id="mi-m4">
              <div className="module-header">
                <div className="module-tag">Module 04</div>
                <h1 className="module-title">Security &amp; Compliance</h1>
                <p className="module-desc">How DeView handles data security, access control, audit trails, and regulated industry requirements.</p>
              </div>

              <h2 className="sh">Security Boundary Map</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_SEC }} />
                <p className="diag-cap">Fig 4.1 — Security boundaries. Sensitive credentials exist only server-side. The client never touches secrets directly.</p>
              </div>

              <h2 className="sh">Security Measures</h2>
              <div className="g2">
                <div className="card"><div className="card-title">🔑 Access Control</div><ul className="cl"><li><strong>Role-based permissions</strong> — users see only what they need</li><li><strong>Service accounts</strong> — systems talk with scoped keys only</li><li><strong>Row-level security</strong> enforced at database layer</li><li><strong>Admin access</strong> server-side only, never client-side</li></ul></div>
                <div className="card"><div className="card-title">📋 Audit &amp; Traceability</div><ul className="cl"><li><strong>Every AI action logged</strong> — who, when, what input, what output</li><li><strong>Immutable records</strong> — logs cannot be retroactively altered</li><li><strong>Export available</strong> — full audit trail for compliance review</li><li><strong>Timestamps</strong> — created_at / updated_at on all records</li></ul></div>
                <div className="card"><div className="card-title">🛡️ Input Security</div><ul className="cl"><li><strong>Server-side validation</strong> — all input sanitised before processing</li><li><strong>Length limits</strong> — prevent injection and overflow attempts</li><li><strong>Honeypot fields</strong> — bot and spam detection on all endpoints</li><li><strong>Domain validation</strong> — rejects personal emails for B2B flows</li></ul></div>
                <div className="card"><div className="card-title">🤖 AI-Specific Security</div><ul className="cl"><li><strong>Prompt injection mitigation</strong> — input sanitised before LLM</li><li><strong>Output filtering</strong> — AI responses screened before delivery</li><li><strong>Domain guardrails</strong> — model constrained to defined scope</li><li><strong>Confidence thresholds</strong> — low-confidence outputs escalate to humans</li></ul></div>
              </div>

              <h2 className="sh">Regulatory Compliance Context</h2>
              <div className="co co-warn"><strong>Sales guidance:</strong> DeView does not currently hold SOC 2 or ISO 27001 certifications. When a prospect asks, pivot to architecture: &ldquo;We&apos;re designed with these frameworks in mind and can provide full documentation for your security review team.&rdquo;</div>
              <table className="dt">
                <thead><tr><th>Regulation</th><th>Who it applies to</th><th>How DeView addresses it</th></tr></thead>
                <tbody>
                  <tr><td>GDPR</td><td>EU-based clients or clients handling EU personal data</td><td>Data stays in client-controlled cloud; data processing agreements available</td></tr>
                  <tr><td>PDPO</td><td>Hong Kong personal data processing</td><td>Primary jurisdiction; data residency options built into HK deployments</td></tr>
                  <tr><td>MAS TRM</td><td>Singapore financial institutions</td><td>Audit trail requirements met; model risk documentation available</td></tr>
                  <tr><td>HKMA</td><td>HK banks and licensed lenders</td><td>On-premises deployment for regulated data; full audit exports</td></tr>
                  <tr><td>SOC 2</td><td>US enterprise and SaaS buyers</td><td>Architecture follows SOC 2 principles; formal certification on roadmap</td></tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 5 — MLOPS
            ════════════════════════════════ */}
            <div className="module" id="mi-m5">
              <div className="module-header">
                <div className="module-tag">Module 05</div>
                <h1 className="module-title">MLOps &amp; Monitoring</h1>
                <p className="module-desc">How DeView ensures AI systems keep working correctly after they go live. Use this to answer &ldquo;what happens after deployment?&rdquo;</p>
              </div>

              <h2 className="sh">The MLOps Lifecycle</h2>
              <div className="diag">
                <div dangerouslySetInnerHTML={{ __html: SVG_MLOPS }} />
                <p className="diag-cap">Fig 5.1 — MLOps lifecycle: Deploy → Monitor → Evaluate → Retrain → back to Deploy.</p>
              </div>

              <div className="g2">
                <div className="card"><div className="card-title" style={{color:"var(--gi-cyan)"}}>👁 Monitor — What is tracked</div><ul className="cl"><li><strong>Response latency</strong> — is the AI responding within SLA?</li><li><strong>Error rates</strong> — are requests failing or timing out?</li><li><strong>Input distribution</strong> — are query types shifting?</li><li><strong>Output consistency</strong> — are answers staying on-topic?</li></ul></div>
                <div className="card"><div className="card-title" style={{color:"var(--gi-amber)"}}>📊 Evaluate — What is scored</div><ul className="cl"><li><strong>Accuracy</strong> — are answers factually correct?</li><li><strong>Relevance</strong> — are answers appropriate for each query?</li><li><strong>Drift score</strong> — how far has performance shifted from baseline?</li><li><strong>Human feedback</strong> — thumbs up/down signals from end users</li></ul></div>
              </div>

              <h2 className="sh">Model Drift — Explained Simply</h2>
              <div className="co co-warn"><strong>What is drift?</strong> An AI model trained on last year&apos;s data may become less accurate as the world changes. A lending risk model trained before a rate hike may score applications differently than intended after the hike. Drift monitoring catches this before it causes problems.</div>
              <div className="g2">
                <div className="card"><div className="card-title">Data drift</div><p>Incoming data starts looking different from the training data. Example: new product categories appear in queries the model wasn&apos;t trained on. Detected by comparing statistical distributions of inputs over time.</p></div>
                <div className="card"><div className="card-title">Concept drift</div><p>The relationship between input and correct output changes. Example: customer sentiment language evolves and the model no longer interprets it correctly. Detected by declining accuracy scores on sampled outputs.</p></div>
              </div>

              <h2 className="sh">Human-in-the-Loop Escalation</h2>
              <Flow steps={["AI generates output","Confidence scored","High confidence → auto-deliver","Low confidence → human review","Human approves / corrects","Correction logged for retraining"]} />
              <div className="co co-ok"><strong>Why this matters in sales:</strong> Human-in-the-loop is a professional risk management feature. Frame it as governance, not a limitation.</div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 6 — DEVIEW STACK
            ════════════════════════════════ */}
            <div className="module" id="mi-m6">
              <div className="module-header">
                <div className="module-tag">Module 06</div>
                <h1 className="module-title">DeView&apos;s Own Technical Stack</h1>
                <p className="module-desc">The infrastructure DeView runs on — demonstrating we operate with the same engineering standards we build for clients.</p>
              </div>

              <table className="dt">
                <thead><tr><th>Layer</th><th>Technology</th><th>Version</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td>Frontend</td><td><strong>Next.js + React</strong></td><td>16.2 / 19.2</td><td>Server-side rendering, App Router, API routes</td></tr>
                  <tr><td>Language</td><td><strong>TypeScript</strong></td><td>5.x strict</td><td>Type-safe development — catches errors at compile time</td></tr>
                  <tr><td>Styling</td><td><strong>Tailwind CSS</strong></td><td>4.x</td><td>Utility-first design system</td></tr>
                  <tr><td>Animation</td><td><strong>Framer Motion</strong></td><td>11.x</td><td>Scroll-triggered reveals, reduced-motion support</td></tr>
                  <tr><td>Database</td><td><strong>Supabase (PostgreSQL)</strong></td><td>Latest</td><td>Client portal data, lead capture, project milestones</td></tr>
                  <tr><td>Email</td><td><strong>Resend + Web3Forms</strong></td><td>—</td><td>Multi-tier fallback delivery chain</td></tr>
                  <tr><td>Hosting</td><td><strong>Netlify</strong></td><td>—</td><td>Serverless deployment, global CDN, automatic deploys</td></tr>
                  <tr><td>Runtime</td><td><strong>Node.js</strong></td><td>20 LTS</td><td>Server-side API route execution</td></tr>
                  <tr><td>i18n</td><td><strong>Custom context system</strong></td><td>—</td><td>English + Traditional Chinese (zh-HK)</td></tr>
                </tbody>
              </table>

              <h2 className="sh">Client Portal Architecture</h2>
              <Flow steps={["Client receives reference code","Enters code on portal page","API call to /api/client-portal","Server queries Supabase (RLS bypassed server-side only)","Portal + milestones returned","Timeline rendered with Framer Motion"]} />
              <div className="g2">
                <div className="card"><div className="card-title">What clients see in their portal</div><ul className="cl"><li><strong>Project title</strong> and client name from Supabase</li><li><strong>Current stage indicator</strong> — which phase the engagement is in</li><li><strong>Milestone timeline</strong> — done / active / upcoming with animations</li><li><strong>Progress bar</strong> — currentStage ÷ total milestones</li></ul></div>
                <div className="card"><div className="card-title">Security design</div><ul className="cl"><li><strong>Reference code</strong> acts as access token — no password required</li><li><strong>Server-side queries only</strong> — Supabase key never in browser</li><li><strong>is_active flag</strong> — any portal disabled instantly</li><li><strong>Fallback resilience</strong> — Task Manager API if Supabase unavailable</li></ul></div>
              </div>
              <div className="co co-info"><strong>Credibility point:</strong> When a prospect asks &ldquo;have you built production systems like this before?&rdquo; — walk them through DeView&apos;s own infrastructure. A bilingual (English / Traditional Chinese) client portal backed by a production PostgreSQL database with proper access controls is a working demonstration of our engineering standards.</div>
            </div>

            <div className="divider" />

            {/* ════════════════════════════════
                MODULE 7 — FAQ
            ════════════════════════════════ */}
            <div className="module" id="mi-m7">
              <div className="module-header">
                <div className="module-tag">Module 07</div>
                <h1 className="module-title">Sales FAQ</h1>
                <p className="module-desc">The 15 most common technical questions from enterprise prospects — with answers your sales team can use immediately.</p>
              </div>

              <FaqItem q="Where is our data stored?" a="Your data stays in your own environment. For cloud deployments, we deploy into your existing AWS, GCP, or Azure account — we never have persistent access to your data. For on-premises deployments, nothing leaves your physical network. DeView does not store client data in DeView-owned infrastructure." />
              <FaqItem q="Can this connect to our existing CRM or ERP?" a="Yes. DeView builds native integrations with Salesforce, HubSpot, SAP, Oracle, and most SQL databases via standard APIs and connectors. Integration scope is agreed upfront during the AI Implementation Advisory phase so there are no surprises mid-project." />
              <FaqItem q="What LLM do you use — is it OpenAI / ChatGPT?" a="We are model-agnostic and select the best option for your use case and compliance requirements. Options include OpenAI GPT-4o, Anthropic Claude, Google Gemini, or open-source models like Llama 3 and Mistral for fully on-premises deployments where zero data leaves your network." />
              <FaqItem q="Who has access to our data?" a="Access is scoped by role and enforced at both application and database level. Only the service accounts required for each specific integration have access. No DeView engineers hold standing access to production client data — any deployment access is time-limited and logged in full." />
              <FaqItem q="What happens if the AI gives a wrong answer?" a="Every DeView deployment includes a human-in-the-loop escalation path. When the AI's confidence score falls below the threshold for your use case, it flags the item for human review rather than delivering a low-confidence answer automatically. All AI outputs are logged so any errors can be traced, corrected, and used to improve the model." />
              <FaqItem q="Is this GDPR / PDPO compliant?" a="Our architecture is designed to support compliance with GDPR and Hong Kong's PDPO. Data stays in client-controlled environments, data processing agreements are available on request, data retention is configurable, and audit trails are fully exportable. We recommend your DPO review our architecture documentation as part of procurement." />
              <FaqItem q="Can we run this on-premises?" a="Yes. For clients in regulated industries or with strict data residency requirements, we deploy fully air-gapped solutions using open-source models such as Llama 3 or Mistral. The AI never calls an external API — all inference runs locally on your infrastructure." />
              <FaqItem q="What is the typical integration timeline?" a="An AI Workflow Audit delivers in 1–2 weeks. A fully deployed Internal Knowledge Assistant typically takes 4–8 weeks end-to-end. The AI Implementation Advisory phase (2 weeks) runs first and produces a detailed timeline specific to your stack and access approval process." />
              <FaqItem q="How do we know it's working correctly after go-live?" a="Every production deployment includes monitoring dashboards showing AI performance metrics, accuracy scores, and drift indicators in real time. We also configure evaluation pipelines that run on a schedule and alert your team if performance degrades below agreed thresholds." />
              <FaqItem q="What's the difference between this and us just using ChatGPT ourselves?" a="ChatGPT is a general-purpose tool with no access to your internal data, no integration with your systems, no audit trail, and no reliability guarantees. A DeView deployment is purpose-built: it knows your company's specific data, integrates with your CRM and documents, enforces your access controls, and includes monitoring. The gap is between a consumer tool and an enterprise system." />
              <FaqItem q="Does your AI learn from our data and share it with other clients?" a="No. Each client deployment is fully isolated. Your data is never used to train shared models, and outputs from your deployment never influence another client's system. This is an architectural guarantee — there is no shared model layer across client deployments." />
              <FaqItem q="Do you have SOC 2 or ISO 27001 certification?" a="We do not currently hold these certifications, though our architecture is built with their requirements in mind. For enterprise procurement, we can provide a detailed security architecture document, data flow diagrams, and completed security questionnaire responses for your security team." />
              <FaqItem q="What happens to our AI system if we stop working with DeView?" a="Because deployments live in your own cloud account or on-premises infrastructure, you retain full ownership. The code, models, configuration, and data are all yours. DeView provides complete handover documentation. You are not locked into a DeView-controlled platform." />
              <FaqItem q="Can the AI handle our industry-specific terminology?" a="Yes. During implementation we configure prompts and retrieval systems using the client's own internal documents, policy glossaries, and operational procedures. For lending clients, the assistant understands LTV, DSR, HIBOR, and facility terms because it's trained on your materials — not generic internet text." />
              <FaqItem q="What level of support do we get after launch?" a="Post-launch support includes monitoring setup, a defined escalation path for performance issues, and scheduled review cycles to assess drift and retraining needs. DeView offers both a managed service model (DeView monitors and maintains) and a handover model (client team owns operations with DeView on retainer for major updates)." />
            </div>

            <div style={{height: 40}} />
          </div>
          {/* end .gw */}
        </div>
      </main>

      <SiteFooter rootPrefix="/" />
    </>
  );
}
