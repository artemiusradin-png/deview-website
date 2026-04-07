"use client";

import type { ReactNode } from "react";

const FONT = "D-DIN, Arial, sans-serif";

function ArchBox({
  x,
  y,
  w,
  h,
  t1,
  t2,
  sub,
  bright,
  fontSize = 8.5,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  t1: string;
  t2?: string;
  sub?: string;
  bright?: boolean;
  fontSize?: number;
}) {
  const cx = x + w / 2;
  const baseY = t2 ? y + h / 2 - 7 : y + h / 2 + 4;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={bright ? "var(--enterprise-arch-box-fill-strong)" : "var(--enterprise-arch-box-fill)"}
        stroke="var(--enterprise-arch-box-stroke)"
        strokeWidth="1"
      />
      <text
        x={cx}
        y={baseY}
        textAnchor="middle"
        fontSize={fontSize}
        letterSpacing="0.11em"
        fill="var(--enterprise-arch-text)"
        fontFamily={FONT}
        fontWeight={bright ? "600" : "400"}
      >
        {t1}
      </text>
      {t2 && (
        <text
          x={cx}
          y={baseY + 14}
          textAnchor="middle"
          fontSize={fontSize}
          letterSpacing="0.11em"
          fill="var(--enterprise-arch-text)"
          fontFamily={FONT}
          fontWeight={bright ? "600" : "400"}
        >
          {t2}
        </text>
      )}
      {sub && (
        <text
          x={cx}
          y={(t2 ? baseY + 14 : baseY) + 13}
          textAnchor="middle"
          fontSize={7}
          letterSpacing="0.08em"
          fill="var(--enterprise-arch-subtext)"
          fontFamily={FONT}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function ArchZone({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="var(--enterprise-arch-zone-stroke)" strokeWidth="1" />
      <text
        x={x + 10}
        y={y + 15}
        fontSize="7"
        letterSpacing="0.18em"
        fill="var(--enterprise-arch-zone-label)"
        fontFamily={FONT}
      >
        {label}
      </text>
    </g>
  );
}

function ArchArrow({
  x1,
  y1,
  x2,
  y2,
  faint = false,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  faint?: boolean;
  dashed?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={faint ? "var(--enterprise-arch-arrow-faint)" : "var(--enterprise-arch-arrow)"}
      strokeWidth="1"
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd={faint ? "url(#ah-faint)" : "url(#ah)"}
    />
  );
}

function ArchPathArrow({ d, faint = false, dashed = false }: { d: string; faint?: boolean; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={faint ? "var(--enterprise-arch-arrow-faint)" : "var(--enterprise-arch-arrow)"}
      strokeWidth="1"
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd={faint ? "url(#ah-faint)" : "url(#ah)"}
    />
  );
}

function MZone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border border-[var(--enterprise-arch-zone-stroke)] p-2.5">
      <p className="mb-2 text-[0.48rem] uppercase tracking-[0.18em] text-[var(--enterprise-arch-zone-label)]">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function MBox({
  children,
  sub,
  bright,
  full,
}: {
  children: ReactNode;
  sub?: string;
  bright?: boolean;
  full?: boolean;
}) {
  return (
    <div
      className={`border px-3 py-2 ${full ? "w-full" : "min-w-[120px] flex-1"} ${
        bright
          ? "border-[var(--enterprise-arch-box-stroke)] bg-[var(--enterprise-arch-box-fill-strong)]"
          : "border-[var(--enterprise-arch-box-stroke)] bg-[var(--enterprise-arch-box-fill)]"
      }`}
    >
      <span className="block text-[0.62rem] uppercase tracking-[0.1em] text-[var(--enterprise-arch-text)]">
        {children}
      </span>
      {sub && <span className="block text-[0.5rem] tracking-wide text-[var(--enterprise-arch-subtext)]">{sub}</span>}
    </div>
  );
}

/**
 * Enterprise AI Architecture Diagram
 * Monochromatic — matches DeView design system (no color, no border-radius).
 */
export function EnterpriseArchitectureDiagram({ className = "" }: { className?: string }) {
  const W = 940;
  const H = 420;

  const c1w = 298;
  const g = 18;
  const c2x = c1w + g;
  const c2w = 204;
  const c3x = c2x + c2w + g;
  const c3w = W - c3x;

  const topH = 138;
  const rg = 14;
  const midY = topH + rg;
  const midH = H - midY;

  const dfCx = c2x + c2w / 2;
  const dfBW = c2w - 20;
  const dfBX = c2x + 10;

  const alBoxY = midY + 26;
  const alBoxH = 98;

  const infW = Math.floor((c3w - 30) / 3);
  const inf1X = c3x + 10;
  const inf2X = inf1X + infW + 5;
  const inf3X = inf2X + infW + 5;
  const infY = 26;
  const infH = topH - 36;

  const aiBoxH = 80;
  const aiBoxY = midY + 30;
  const regY = aiBoxY + aiBoxH + 22;
  const aiBoxW = 144;
  const regW = 144;
  const srvX = c3x + aiBoxW + 18 + 10;
  const srvW = c3w - aiBoxW - 18 - 20;

  return (
    <figure className={`enterprise-arch-diagram ${className}`.trim()} aria-labelledby="arch-title">
      <figcaption id="arch-title" className="sr-only">
        Enterprise AI Architecture: Business Layer and Application Layer feed data into a central Data Foundation
        pipeline, which drives an AI/ML Core. Infrastructure spans and governs the AI layer.
      </figcaption>

      <svg className="hidden w-full md:block" viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden>
        <defs>
          <marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--enterprise-arch-arrow)" />
          </marker>
          <marker id="ah-faint" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--enterprise-arch-arrow-faint)" />
          </marker>
        </defs>

        <rect x="0" y="0" width={W} height={H} fill="var(--enterprise-arch-bg)" />

        <ArchZone x={0} y={0} w={c1w} h={topH} label="BUSINESS LAYER" />
        <ArchZone x={0} y={midY} w={c1w} h={midH} label="APPLICATION LAYER" />
        <ArchZone x={c2x} y={0} w={c2w} h={H} label="DATA FOUNDATION" />
        <ArchZone x={c3x} y={0} w={c3w} h={topH} label="INFRASTRUCTURE" />
        <ArchZone x={c3x} y={midY} w={c3w} h={midH} label="AI / ML CORE" />

        <ArchBox x={10} y={28} w={132} h={100} t1="BUSINESS" t2="PROCESSES" />
        <ArchBox x={156} y={28} w={132} h={100} t1="STRATEGIC" t2="GOALS" />

        <ArchBox x={10} y={alBoxY} w={132} h={alBoxH} t1="USER" t2="INTERFACES" />
        <ArchBox x={156} y={alBoxY} w={132} h={alBoxH} t1="ENTERPRISE" t2="APPS" sub="ERP · CRM · etc." />

        <ArchBox x={dfBX} y={26} w={dfBW} h={82} t1="DATA SOURCES" sub="Internal &amp; External" />
        <ArchArrow x1={dfCx} y1={108} x2={dfCx} y2={130} />
        <ArchBox x={dfBX} y={132} w={dfBW} h={66} t1="ETL PIPELINES" />
        <ArchArrow x1={dfCx} y1={198} x2={dfCx} y2={220} />
        <ArchBox x={dfBX} y={222} w={dfBW} h={82} t1="DATA LAKE /" t2="WAREHOUSE" />

        <ArchBox x={inf1X} y={infY} w={infW} h={infH} t1="SECURITY &amp;" t2="GOVERNANCE" fontSize={7.5} />
        <ArchBox x={inf2X} y={infY} w={infW} h={infH} t1="CLOUD /" t2="ON-PREM COMPUTE" fontSize={7.5} />
        <ArchBox x={inf3X} y={infY} w={infW} h={infH} t1="MONITORING &amp;" t2="MLOPS" fontSize={7.5} />

        <ArchBox x={c3x + 10} y={aiBoxY} w={aiBoxW} h={aiBoxH} t1="AI MODELS" bright />
        <ArchArrow x1={c3x + 10 + aiBoxW / 2} y1={aiBoxY + aiBoxH} x2={c3x + 10 + aiBoxW / 2} y2={regY} />
        <ArchBox x={c3x + 10} y={regY} w={regW} h={aiBoxH} t1="MODEL" t2="REGISTRY" bright />

        <ArchArrow x1={c3x + 10 + regW} y1={regY + aiBoxH / 2} x2={srvX} y2={regY + aiBoxH / 2} />
        <ArchBox x={srvX} y={regY} w={srvW} h={aiBoxH} t1="MODEL SERVING" bright />

        <ArchPathArrow
          d={`M ${srvX + srvW} ${regY + aiBoxH / 2} L ${c3x + c3w - 6} ${regY + aiBoxH / 2} L ${c3x + c3w - 6} ${aiBoxY + aiBoxH / 2} L ${c3x + aiBoxW + 10 + 6} ${aiBoxY + aiBoxH / 2}`}
          dashed
          faint
        />

        <ArchArrow x1={149} y1={topH} x2={149} y2={midY + 18} faint />

        <ArchPathArrow
          d={`M ${10 + 132} ${alBoxY + alBoxH / 2} L ${srvX - 18} ${alBoxY + alBoxH / 2} L ${srvX - 18} ${regY + aiBoxH / 2} L ${srvX} ${regY + aiBoxH / 2}`}
          faint
        />

        <ArchArrow
          x1={156 + 132}
          y1={alBoxY + alBoxH / 2}
          x2={c3x + 10}
          y2={aiBoxY + aiBoxH / 2}
        />

        <ArchPathArrow
          d={`M ${c2x + c2w} 263 L ${c3x} 263 L ${c3x} ${aiBoxY + aiBoxH / 2} L ${c3x + 10} ${aiBoxY + aiBoxH / 2}`}
        />

        <ArchArrow x1={inf1X + infW / 2} y1={topH} x2={inf1X + infW / 2} y2={midY} faint />
        <ArchArrow x1={inf2X + infW / 2} y1={topH} x2={inf2X + infW / 2} y2={midY} faint />
        <ArchArrow x1={inf3X + infW / 2} y1={topH} x2={inf3X + infW / 2} y2={midY} faint />
      </svg>

      <div className="flex flex-col gap-2 md:hidden">
        <MZone label="BUSINESS LAYER">
          <MBox>Business Processes</MBox>
          <MBox>Strategic Goals</MBox>
        </MZone>
        <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
          ↓
        </div>
        <MZone label="APPLICATION LAYER">
          <MBox>User Interfaces</MBox>
          <MBox sub="ERP · CRM · etc.">Enterprise Apps</MBox>
        </MZone>
        <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
          ↓
        </div>
        <MZone label="DATA FOUNDATION">
          <MBox full>Data Sources — Internal &amp; External</MBox>
          <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
            ↓
          </div>
          <MBox full>ETL Pipelines</MBox>
          <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
            ↓
          </div>
          <MBox full>Data Lake / Warehouse</MBox>
        </MZone>
        <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
          ↓
        </div>
        <MZone label="INFRASTRUCTURE">
          <MBox>Security &amp; Governance</MBox>
          <MBox>Cloud / On-Prem Compute</MBox>
          <MBox>Monitoring &amp; MLOps</MBox>
        </MZone>
        <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
          ↓
        </div>
        <MZone label="AI / ML CORE">
          <MBox full bright>
            AI Models
          </MBox>
          <div className="text-center text-[0.5rem] text-[var(--enterprise-arch-arrow-faint)]" aria-hidden>
            ↓
          </div>
          <MBox bright>Model Registry</MBox>
          <MBox bright>Model Serving</MBox>
        </MZone>
      </div>
    </figure>
  );
}
