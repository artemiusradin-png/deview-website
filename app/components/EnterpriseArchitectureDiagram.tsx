/**
 * Enterprise AI Architecture Diagram
 * Monochromatic, editorial — matches DeView design system.
 * Layout mirrors the reference: Business Layer (top-left), Application Layer (mid-left),
 * Data Foundation (center column), Infrastructure (top-right), AI/ML Core (bottom-right).
 */
export function EnterpriseArchitectureDiagram({ className = "" }: { className?: string }) {
  const W = 940;
  const H = 400;

  // Zone x boundaries
  const col1W = 298; // Business + App layers
  const gap = 16;
  const col2X = col1W + gap; // 314
  const col2W = 206; // Data Foundation
  const col3X = col2X + col2W + gap; // 536
  const col3W = W - col3X; // 404

  // Zone y boundaries
  const topH = 136; // Business Layer / Infrastructure height
  const rowGap = 14;
  const midY = topH + rowGap; // 150 — where Application Layer / AI/ML Core begin
  const midH = H - midY; // 250 — Application Layer / AI/ML Core height

  // Stroke palette
  const zoneBorder = "rgba(240,240,250,0.13)";
  const boxBorder = "rgba(240,240,250,0.28)";
  const boxFill = "rgba(240,240,250,0.03)";
  const boxFillBright = "rgba(240,240,250,0.06)";
  const arrowColor = "rgba(240,240,250,0.5)";
  const arrowFaint = "rgba(240,240,250,0.28)";
  const labelColor = "rgba(240,240,250,0.35)";
  const textColor = "rgba(240,240,250,0.88)";
  const subColor = "rgba(240,240,250,0.42)";

  const FONT = "D-DIN, 'IBM Plex Sans', Arial, sans-serif";

  return (
    <figure
      className={`enterprise-arch-diagram ${className}`.trim()}
      aria-labelledby="enterprise-arch-title"
    >
      <figcaption id="enterprise-arch-title" className="sr-only">
        Enterprise AI Architecture: Business Layer and Application Layer feed into Data Foundation, which connects to
        AI/ML Core. Infrastructure spans and supports the AI/ML layer.
      </figcaption>

      {/* ── Desktop SVG ── */}
      <svg
        className="hidden w-full md:block"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-hidden
        style={{ background: "var(--background)" }}
      >
        <defs>
          <marker
            id="arch-arrowhead"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill={arrowColor} />
          </marker>
          <marker
            id="arch-arrowhead-faint"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill={arrowFaint} />
          </marker>
        </defs>

        {/* ═══════════════════════════════════
            ZONE BORDERS
        ═══════════════════════════════════ */}

        {/* 1 — Business Layer */}
        <rect x={0} y={0} width={col1W} height={topH} fill="none" stroke={zoneBorder} strokeWidth="1" />
        <text x={10} y={15} fontSize="7" letterSpacing="0.16em" fill={labelColor} fontFamily={FONT}>
          BUSINESS LAYER
        </text>

        {/* 2 — Application Layer */}
        <rect x={0} y={midY} width={col1W} height={midH} fill="none" stroke={zoneBorder} strokeWidth="1" />
        <text x={10} y={midY + 15} fontSize="7" letterSpacing="0.16em" fill={labelColor} fontFamily={FONT}>
          APPLICATION LAYER
        </text>

        {/* 3 — Data Foundation (full height) */}
        <rect x={col2X} y={0} width={col2W} height={H} fill="none" stroke={zoneBorder} strokeWidth="1" />
        <text x={col2X + 10} y={15} fontSize="7" letterSpacing="0.16em" fill={labelColor} fontFamily={FONT}>
          DATA FOUNDATION
        </text>

        {/* 4 — Infrastructure */}
        <rect x={col3X} y={0} width={col3W} height={topH} fill="none" stroke={zoneBorder} strokeWidth="1" />
        <text x={col3X + 10} y={15} fontSize="7" letterSpacing="0.16em" fill={labelColor} fontFamily={FONT}>
          INFRASTRUCTURE
        </text>

        {/* 5 — AI/ML Core */}
        <rect x={col3X} y={midY} width={col3W} height={midH} fill="none" stroke={zoneBorder} strokeWidth="1" />
        <text x={col3X + 10} y={midY + 15} fontSize="7" letterSpacing="0.16em" fill={labelColor} fontFamily={FONT}>
          AI/ML CORE
        </text>

        {/* ═══════════════════════════════════
            INNER BOXES — BUSINESS LAYER
        ═══════════════════════════════════ */}

        {/* Business Processes */}
        <rect x={10} y={28} width={132} height={96} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={76} y={74} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          BUSINESS
        </text>
        <text x={76} y={87} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          PROCESSES
        </text>

        {/* Strategic Goals */}
        <rect x={156} y={28} width={132} height={96} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={222} y={74} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          STRATEGIC
        </text>
        <text x={222} y={87} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          GOALS
        </text>

        {/* ═══════════════════════════════════
            INNER BOXES — APPLICATION LAYER
        ═══════════════════════════════════ */}

        {/* User Interfaces */}
        <rect x={10} y={midY + 28} width={132} height={96} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={76} y={midY + 74} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          USER
        </text>
        <text x={76} y={midY + 87} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          INTERFACES
        </text>

        {/* Enterprise Apps */}
        <rect x={156} y={midY + 28} width={132} height={96} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={222} y={midY + 69} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          ENTERPRISE
        </text>
        <text x={222} y={midY + 82} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          APPS
        </text>
        <text x={222} y={midY + 95} textAnchor="middle" fontSize="7" letterSpacing="0.08em" fill={subColor} fontFamily={FONT}>
          ERP, CRM, etc.
        </text>

        {/* ═══════════════════════════════════
            INNER BOXES — DATA FOUNDATION
        ═══════════════════════════════════ */}

        {/* Data Sources */}
        <rect x={col2X + 10} y={26} width={186} height={80} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col2X + 103} y={60} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          DATA SOURCES
        </text>
        <text x={col2X + 103} y={75} textAnchor="middle" fontSize="7" letterSpacing="0.09em" fill={subColor} fontFamily={FONT}>
          Internal &amp; External
        </text>

        {/* Arrow: Data Sources → ETL */}
        <line
          x1={col2X + 103} y1={106} x2={col2X + 103} y2={128}
          stroke={arrowColor} strokeWidth="1" markerEnd="url(#arch-arrowhead)"
        />

        {/* ETL Pipelines */}
        <rect x={col2X + 10} y={130} width={186} height={66} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col2X + 103} y={167} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          ETL PIPELINES
        </text>

        {/* Arrow: ETL → Data Lake */}
        <line
          x1={col2X + 103} y1={196} x2={col2X + 103} y2={218}
          stroke={arrowColor} strokeWidth="1" markerEnd="url(#arch-arrowhead)"
        />

        {/* Data Lake / Warehouse */}
        <rect x={col2X + 10} y={220} width={186} height={80} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col2X + 103} y={255} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          DATA LAKE /
        </text>
        <text x={col2X + 103} y={269} textAnchor="middle" fontSize="8.5" letterSpacing="0.11em" fill={textColor} fontFamily={FONT}>
          WAREHOUSE
        </text>

        {/* ═══════════════════════════════════
            INNER BOXES — INFRASTRUCTURE
        ═══════════════════════════════════ */}

        {/* Security & Governance */}
        <rect x={col3X + 10} y={26} width={118} height={100} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col3X + 69} y={68} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          SECURITY &amp;
        </text>
        <text x={col3X + 69} y={81} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          GOVERNANCE
        </text>

        {/* Cloud / On-Prem Compute */}
        <rect x={col3X + 142} y={26} width={118} height={100} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col3X + 201} y={65} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          CLOUD /
        </text>
        <text x={col3X + 201} y={78} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          ON-PREM
        </text>
        <text x={col3X + 201} y={91} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          COMPUTE
        </text>

        {/* Monitoring & MLOps */}
        <rect x={col3X + 274} y={26} width={118} height={100} fill={boxFill} stroke={boxBorder} strokeWidth="1" />
        <text x={col3X + 333} y={68} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          MONITORING &amp;
        </text>
        <text x={col3X + 333} y={81} textAnchor="middle" fontSize="8" letterSpacing="0.09em" fill={textColor} fontFamily={FONT}>
          MLOPS
        </text>

        {/* ═══════════════════════════════════
            INNER BOXES — AI/ML CORE
        ═══════════════════════════════════ */}

        {/* AI Models */}
        <rect x={col3X + 10} y={midY + 28} width={150} height={82} fill={boxFillBright} stroke="rgba(240,240,250,0.4)" strokeWidth="1" />
        <text x={col3X + 85} y={midY + 74} textAnchor="middle" fontSize="9" letterSpacing="0.12em" fill={textColor} fontFamily={FONT} fontWeight="500">
          AI MODELS
        </text>

        {/* Arrow: AI Models → Model Registry */}
        <line
          x1={col3X + 85} y1={midY + 110} x2={col3X + 85} y2={midY + 134}
          stroke={arrowColor} strokeWidth="1" markerEnd="url(#arch-arrowhead)"
        />

        {/* Model Registry */}
        <rect x={col3X + 10} y={midY + 136} width={150} height={74} fill={boxFillBright} stroke="rgba(240,240,250,0.4)" strokeWidth="1" />
        <text x={col3X + 85} y={midY + 177} textAnchor="middle" fontSize="9" letterSpacing="0.12em" fill={textColor} fontFamily={FONT} fontWeight="500">
          MODEL
        </text>
        <text x={col3X + 85} y={midY + 191} textAnchor="middle" fontSize="9" letterSpacing="0.12em" fill={textColor} fontFamily={FONT} fontWeight="500">
          REGISTRY
        </text>

        {/* Arrow: Model Registry → Model Serving */}
        <line
          x1={col3X + 160} y1={midY + 173} x2={col3X + 184} y2={midY + 173}
          stroke={arrowColor} strokeWidth="1" markerEnd="url(#arch-arrowhead)"
        />

        {/* Model Serving */}
        <rect x={col3X + 186} y={midY + 136} width={206} height={74} fill={boxFillBright} stroke="rgba(240,240,250,0.4)" strokeWidth="1" />
        <text x={col3X + 289} y={midY + 177} textAnchor="middle" fontSize="9" letterSpacing="0.12em" fill={textColor} fontFamily={FONT} fontWeight="500">
          MODEL SERVING
        </text>

        {/* Feedback arrow: Model Serving → AI Models (dashed loop inside zone) */}
        <path
          d={`M ${col3X + 392} ${midY + 173} L ${col3X + 402} ${midY + 173} L ${col3X + 402} ${midY + 69} L ${col3X + 160} ${midY + 69}`}
          fill="none"
          stroke={arrowFaint}
          strokeWidth="1"
          strokeDasharray="4 3"
          markerEnd="url(#arch-arrowhead-faint)"
        />

        {/* ═══════════════════════════════════
            CROSS-LAYER CONNECTION ARROWS
        ═══════════════════════════════════ */}

        {/* Business Layer → Data Foundation (at center of BL row, y≈76) */}
        <line
          x1={col1W} y1={76} x2={col2X} y2={76}
          stroke={arrowFaint} strokeWidth="1" markerEnd="url(#arch-arrowhead-faint)"
        />

        {/* Application Layer → Data Foundation (at center of AL row) */}
        <line
          x1={col1W} y1={midY + 76} x2={col2X} y2={midY + 76}
          stroke={arrowFaint} strokeWidth="1" markerEnd="url(#arch-arrowhead-faint)"
        />

        {/* Data Foundation → AI/ML Core (diagonal from Data Lake right edge to AI Models) */}
        <path
          d={`M ${col2X + col2W} 260 L ${col3X} 260 L ${col3X} ${midY + 69}`}
          fill="none"
          stroke={arrowColor}
          strokeWidth="1"
          markerEnd="url(#arch-arrowhead)"
        />

        {/* Infrastructure → AI/ML Core (3 vertical arrows) */}
        <line
          x1={col3X + 69} y1={topH} x2={col3X + 69} y2={midY}
          stroke={arrowFaint} strokeWidth="1" markerEnd="url(#arch-arrowhead-faint)"
        />
        <line
          x1={col3X + 201} y1={topH} x2={col3X + 201} y2={midY}
          stroke={arrowFaint} strokeWidth="1" markerEnd="url(#arch-arrowhead-faint)"
        />
        <line
          x1={col3X + 333} y1={topH} x2={col3X + 333} y2={midY}
          stroke={arrowFaint} strokeWidth="1" markerEnd="url(#arch-arrowhead-faint)"
        />
      </svg>

      {/* ── Mobile fallback (stacked flow) ── */}
      <div className="block space-y-2 md:hidden">
        <MobileZone label="BUSINESS LAYER">
          <MobileBox>Business Processes</MobileBox>
          <MobileBox>Strategic Goals</MobileBox>
        </MobileZone>
        <MobileArrow />
        <MobileZone label="APPLICATION LAYER">
          <MobileBox>User Interfaces</MobileBox>
          <MobileBox sub="ERP, CRM, etc.">Enterprise Apps</MobileBox>
        </MobileZone>
        <MobileArrow />
        <MobileZone label="DATA FOUNDATION">
          <MobileBox>Data Sources — Internal &amp; External</MobileBox>
          <MobileArrow />
          <MobileBox>ETL Pipelines</MobileBox>
          <MobileArrow />
          <MobileBox>Data Lake / Warehouse</MobileBox>
        </MobileZone>
        <MobileArrow />
        <MobileZone label="INFRASTRUCTURE">
          <MobileBox>Security &amp; Governance</MobileBox>
          <MobileBox>Cloud / On-Prem Compute</MobileBox>
          <MobileBox>Monitoring &amp; MLOps</MobileBox>
        </MobileZone>
        <MobileArrow />
        <MobileZone label="AI/ML CORE">
          <MobileBox bright>AI Models</MobileBox>
          <MobileArrow />
          <MobileBox bright>Model Registry</MobileBox>
          <MobileArrow label="→" />
          <MobileBox bright>Model Serving</MobileBox>
        </MobileZone>
      </div>
    </figure>
  );
}

function MobileZone({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border border-[rgba(240,240,250,0.13)] p-2">
      <p className="mb-2 text-[0.5rem] uppercase tracking-[0.18em] text-[rgba(240,240,250,0.35)]">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function MobileBox({ children, sub, bright }: { children: React.ReactNode; sub?: string; bright?: boolean }) {
  return (
    <div
      className={`flex-1 min-w-[130px] border px-2.5 py-2 ${
        bright
          ? "border-[rgba(240,240,250,0.38)] bg-[rgba(240,240,250,0.06)]"
          : "border-[rgba(240,240,250,0.22)] bg-[rgba(240,240,250,0.03)]"
      }`}
    >
      <span className="block text-[0.6rem] uppercase tracking-[0.1em] text-[rgba(240,240,250,0.88)]">{children}</span>
      {sub && <span className="block text-[0.5rem] tracking-wide text-[rgba(240,240,250,0.42)]">{sub}</span>}
    </div>
  );
}

function MobileArrow({ label }: { label?: string }) {
  return (
    <div className="text-center text-[0.55rem] text-[rgba(240,240,250,0.3)]" aria-hidden>
      {label ?? "↓"}
    </div>
  );
}
