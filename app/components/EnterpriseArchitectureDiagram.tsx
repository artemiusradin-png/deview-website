"use client";

import type { ReactNode } from "react";

const FONT = "D-DIN, Arial, sans-serif";
const BOX_RX = 2;
const ZONE_RX = 4;

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
  const baseY = t2 ? y + h / 2 - 6 : y + h / 2 + 3;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={BOX_RX}
        fill={bright ? "var(--enterprise-arch-box-fill-strong)" : "var(--enterprise-arch-box-fill)"}
        stroke="var(--enterprise-arch-box-stroke)"
        strokeWidth="1"
      />
      <text
        x={cx}
        y={baseY}
        textAnchor="middle"
        fontSize={fontSize}
        letterSpacing="0.1em"
        fill="var(--enterprise-arch-text)"
        fontFamily={FONT}
        fontWeight={bright ? "600" : "450"}
      >
        {t1}
      </text>
      {t2 && (
        <text
          x={cx}
          y={baseY + 12}
          textAnchor="middle"
          fontSize={fontSize}
          letterSpacing="0.1em"
          fill="var(--enterprise-arch-text)"
          fontFamily={FONT}
          fontWeight={bright ? "600" : "450"}
        >
          {t2}
        </text>
      )}
      {sub && (
        <text
          x={cx}
          y={(t2 ? baseY + 12 : baseY) + 11}
          textAnchor="middle"
          fontSize={6.75}
          letterSpacing="0.06em"
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
  const cx = x + w / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={ZONE_RX}
        fill="none"
        stroke="var(--enterprise-arch-zone-stroke)"
        strokeWidth="1"
      />
      <text
        x={cx}
        y={y + 13}
        textAnchor="middle"
        fontSize="6.5"
        letterSpacing="0.16em"
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
      strokeWidth={faint ? 0.85 : 1}
      strokeLinecap="round"
      strokeDasharray={dashed ? "3 3" : undefined}
      markerEnd={faint ? "url(#arch-ah-faint)" : "url(#arch-ah)"}
    />
  );
}

function ArchPathArrow({ d, faint = false, dashed = false }: { d: string; faint?: boolean; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={faint ? "var(--enterprise-arch-arrow-faint)" : "var(--enterprise-arch-arrow)"}
      strokeWidth={faint ? 0.85 : 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? "3 3" : undefined}
      markerEnd={faint ? "url(#arch-ah-faint)" : "url(#arch-ah)"}
    />
  );
}

function MZone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="enterprise-arch-mzone rounded-sm border border-[var(--enterprise-arch-zone-stroke)] bg-[var(--enterprise-arch-bg)] p-2.5">
      <p className="mb-2 text-center text-[0.52rem] uppercase tracking-[0.14em] text-[var(--enterprise-arch-zone-label)]">
        {label}
      </p>
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
      className={`rounded-sm border px-2.5 py-2 ${full ? "w-full" : "min-w-[118px] flex-1"} ${
        bright
          ? "border-[var(--enterprise-arch-box-stroke)] bg-[var(--enterprise-arch-box-fill-strong)]"
          : "border-[var(--enterprise-arch-box-stroke)] bg-[var(--enterprise-arch-box-fill)]"
      }`}
    >
      <span className="block text-[0.6rem] uppercase tracking-[0.08em] text-[var(--enterprise-arch-text)]">
        {children}
      </span>
      {sub && <span className="mt-0.5 block text-[0.5rem] tracking-wide text-[var(--enterprise-arch-subtext)]">{sub}</span>}
    </div>
  );
}

/**
 * Enterprise AI architecture: business & application layers, data foundation, infrastructure, AI/ML core.
 */
export function EnterpriseArchitectureDiagram({ className = "" }: { className?: string }) {
  const W = 920;
  const H = 400;

  const pad = 12;
  const c1w = 288;
  const g = 22;
  const c2x = c1w + g;
  const c2w = 196;
  const c3x = c2x + c2w + g;
  const c3w = W - pad - c3x;

  const topH = 128;
  const rg = 16;
  const midY = topH + rg;
  const midH = H - pad - midY;

  const dfCx = c2x + c2w / 2;
  const dfBW = c2w - 18;
  const dfBX = c2x + 9;

  const bizBoxY = pad + 22;
  const bizBoxH = topH - 38;
  const alBoxY = midY + 20;
  const alBoxH = midH - 36;

  const infPad = 8;
  const infW = Math.floor((c3w - infPad * 2 - 10) / 3);
  const inf1X = c3x + infPad;
  const inf2X = inf1X + infW + 5;
  const inf3X = inf2X + infW + 5;
  const infY = pad + 22;
  const infH = topH - 38;

  const aiBoxH = 72;
  const aiBoxY = midY + 28;
  const stackGap = 18;
  const regY = aiBoxY + aiBoxH + stackGap;
  const aiBoxW = 136;
  const regW = 136;
  const hPad = 12;
  const srvX = c3x + hPad + aiBoxW + 14;
  const srvW = Math.max(120, c3x + c3w - srvX - hPad);

  const busY = bizBoxY + bizBoxH / 2;
  const appY = alBoxY + alBoxH / 2;

  return (
    <figure className={`enterprise-arch-diagram ${className}`.trim()} aria-labelledby="arch-title">
      <figcaption id="arch-title" className="sr-only">
        Enterprise AI Architecture: Business Layer and Application Layer feed data into a central Data Foundation
        pipeline, which drives an AI/ML Core. Infrastructure spans and governs the AI layer.
      </figcaption>

      <svg
        className="enterprise-arch-svg hidden w-full md:block"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-hidden
      >
        <defs>
          <marker
            id="arch-ah"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--enterprise-arch-arrow)" />
          </marker>
          <marker
            id="arch-ah-faint"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="4"
            markerHeight="4"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--enterprise-arch-arrow-faint)" />
          </marker>
        </defs>

        <rect x="0" y="0" width={W} height={H} rx="6" fill="var(--enterprise-arch-bg)" />

        <ArchZone x={pad} y={pad} w={c1w - pad} h={topH} label="BUSINESS LAYER" />
        <ArchZone x={pad} y={midY} w={c1w - pad} h={midH} label="APPLICATION LAYER" />
        <ArchZone x={c2x} y={pad} w={c2w} h={H - pad * 2} label="DATA FOUNDATION" />
        <ArchZone x={c3x} y={pad} w={c3w} h={topH} label="INFRASTRUCTURE" />
        <ArchZone x={c3x} y={midY} w={c3w} h={midH} label="AI / ML CORE" />

        <ArchBox x={pad + 6} y={bizBoxY} w={126} h={bizBoxH} t1="BUSINESS" t2="PROCESSES" />
        <ArchBox x={pad + 144} y={bizBoxY} w={126} h={bizBoxH} t1="STRATEGIC" t2="GOALS" />

        <ArchBox x={pad + 6} y={alBoxY} w={126} h={alBoxH} t1="USER" t2="INTERFACES" />
        <ArchBox x={pad + 144} y={alBoxY} w={126} h={alBoxH} t1="ENTERPRISE" t2="APPS" sub="ERP · CRM · …" />

        <ArchBox x={dfBX} y={pad + 22} w={dfBW} h={72} t1="DATA SOURCES" sub="Internal &amp; external" />
        <ArchArrow x1={dfCx} y1={pad + 98} x2={dfCx} y2={pad + 112} />
        <ArchBox x={dfBX} y={pad + 114} w={dfBW} h={58} t1="ETL / PIPELINES" />
        <ArchArrow x1={dfCx} y1={pad + 176} x2={dfCx} y2={pad + 190} />
        <ArchBox x={dfBX} y={pad + 192} w={dfBW} h={72} t1="DATA LAKE /" t2="WAREHOUSE" />

        <ArchBox x={inf1X} y={infY} w={infW} h={infH} t1="SECURITY" t2="&amp; GOVERNANCE" fontSize={7} />
        <ArchBox x={inf2X} y={infY} w={infW} h={infH} t1="CLOUD /" t2="ON-PREM" fontSize={7} />
        <ArchBox x={inf3X} y={infY} w={infW} h={infH} t1="MONITORING" t2="&amp; MLOPS" fontSize={7} />

        <ArchBox x={c3x + hPad} y={aiBoxY} w={aiBoxW} h={aiBoxH} t1="AI MODELS" bright />
        <ArchArrow x1={c3x + hPad + aiBoxW / 2} y1={aiBoxY + aiBoxH} x2={c3x + hPad + aiBoxW / 2} y2={regY} />
        <ArchBox x={c3x + hPad} y={regY} w={regW} h={aiBoxH} t1="MODEL" t2="REGISTRY" bright />
        <ArchArrow x1={c3x + hPad + regW} y1={regY + aiBoxH / 2} x2={srvX} y2={regY + aiBoxH / 2} />
        <ArchBox x={srvX} y={regY} w={srvW} h={aiBoxH} t1="MODEL SERVING" bright />

        <ArchPathArrow
          d={`M ${srvX + srvW} ${regY + aiBoxH / 2} L ${c3x + c3w - 8} ${regY + aiBoxH / 2} L ${c3x + c3w - 8} ${aiBoxY + aiBoxH / 2} L ${c3x + hPad + aiBoxW + 4} ${aiBoxY + aiBoxH / 2}`}
          dashed
          faint
        />

        {/* Left column: business ↔ application */}
        <ArchArrow x1={c1w / 2} y1={topH} x2={c1w / 2} y2={midY} faint />

        {/* Into data foundation */}
        <ArchArrow x1={c1w} y1={busY} x2={c2x} y2={busY} faint />
        <ArchArrow x1={c1w} y1={appY} x2={c2x} y2={appY} faint />

        {/* Data foundation → AI / ML core */}
        <ArchPathArrow
          d={`M ${c2x + c2w} ${pad + 220} L ${c3x} ${pad + 220} L ${c3x} ${aiBoxY + aiBoxH / 2} L ${c3x + hPad} ${aiBoxY + aiBoxH / 2}`}
        />

        {/* Infrastructure → AI / ML core (governance lines) */}
        <ArchArrow x1={inf1X + infW / 2} y1={topH} x2={inf1X + infW / 2} y2={midY} faint />
        <ArchArrow x1={inf2X + infW / 2} y1={topH} x2={inf2X + infW / 2} y2={midY} faint />
        <ArchArrow x1={inf3X + infW / 2} y1={topH} x2={inf3X + infW / 2} y2={midY} faint />
      </svg>

      <div className="flex flex-col gap-2.5 md:hidden">
        <MZone label="BUSINESS LAYER">
          <MBox>Business processes</MBox>
          <MBox>Strategic goals</MBox>
        </MZone>
        <MZone label="APPLICATION LAYER">
          <MBox>User interfaces</MBox>
          <MBox sub="ERP · CRM · …">Enterprise apps</MBox>
        </MZone>
        <MZone label="DATA FOUNDATION">
          <MBox full>Data sources</MBox>
          <MBox full>ETL / pipelines</MBox>
          <MBox full>Data lake / warehouse</MBox>
        </MZone>
        <MZone label="INFRASTRUCTURE">
          <MBox>Security</MBox>
          <MBox>Cloud / on-prem</MBox>
          <MBox>MLOps</MBox>
        </MZone>
        <MZone label="AI / ML CORE">
          <MBox full bright>
            AI models
          </MBox>
          <MBox bright>Registry</MBox>
          <MBox bright>Serving</MBox>
        </MZone>
      </div>
    </figure>
  );
}
