"use client";

import type { ReactNode } from "react";
import { useLocaleContext } from "@/lib/i18n/locale-context";

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
  const { dict } = useLocaleContext();
  const d = dict.diagram;
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

  /** Left column zone: x ∈ [pad, c1w], use geometric center for vertical connector */
  const c1cx = pad + (c1w - pad) / 2;

  /** Data foundation stack (matches ArchBox y/h) */
  const dfY1 = pad + 22;
  const dfH1 = 72;
  const dfY2 = pad + 114;
  const dfH2 = 58;
  const dfY3 = pad + 192;
  const dfH3 = 72;
  /** Right edge of data-foundation boxes (padding inside zone), not column boundary */
  const dfRightInner = dfBX + dfBW;
  const dfLakeMidY = dfY3 + dfH3 / 2;

  const aiMidY = aiBoxY + aiBoxH / 2;
  const aiLeft = c3x + hPad;
  const aiBoxRight = c3x + hPad + aiBoxW;

  const bizBoxBottom = bizBoxY + bizBoxH;
  const appBoxTop = alBoxY;
  const infraBoxBottom = infY + infH;

  return (
    <figure className={`enterprise-arch-diagram ${className}`.trim()} aria-labelledby="arch-title">
      <figcaption id="arch-title" className="sr-only">
        {dict.whatMakesEnterprise.figcaption}
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

        <ArchZone x={pad} y={pad} w={c1w - pad} h={topH} label={d.zoneBusiness} />
        <ArchZone x={pad} y={midY} w={c1w - pad} h={midH} label={d.zoneApplication} />
        <ArchZone x={c2x} y={pad} w={c2w} h={H - pad * 2} label={d.zoneData} />
        <ArchZone x={c3x} y={pad} w={c3w} h={topH} label={d.zoneInfra} />
        <ArchZone x={c3x} y={midY} w={c3w} h={midH} label={d.zoneAi} />

        <ArchBox x={pad + 6} y={bizBoxY} w={126} h={bizBoxH} t1={d.businessProcesses} t2={d.processes} />
        <ArchBox x={pad + 144} y={bizBoxY} w={126} h={bizBoxH} t1={d.strategic} t2={d.goals} />

        <ArchBox x={pad + 6} y={alBoxY} w={126} h={alBoxH} t1={d.user} t2={d.interfaces} />
        <ArchBox x={pad + 144} y={alBoxY} w={126} h={alBoxH} t1={d.enterprise} t2={d.apps} sub={d.appsSub} />

        <ArchBox x={dfBX} y={dfY1} w={dfBW} h={dfH1} t1={d.dataSources} sub={d.dataSourcesSub} />
        <ArchArrow x1={dfCx} y1={dfY1 + dfH1} x2={dfCx} y2={dfY2} />
        <ArchBox x={dfBX} y={dfY2} w={dfBW} h={dfH2} t1={d.etl} />
        <ArchArrow x1={dfCx} y1={dfY2 + dfH2} x2={dfCx} y2={dfY3} />
        <ArchBox x={dfBX} y={dfY3} w={dfBW} h={dfH3} t1={d.dataLake1} t2={d.dataLake2} />

        <ArchBox x={inf1X} y={infY} w={infW} h={infH} t1={d.security1} t2={d.security2} fontSize={7} />
        <ArchBox x={inf2X} y={infY} w={infW} h={infH} t1={d.cloud1} t2={d.cloud2} fontSize={7} />
        <ArchBox x={inf3X} y={infY} w={infW} h={infH} t1={d.monitoring1} t2={d.monitoring2} fontSize={7} />

        <ArchBox x={c3x + hPad} y={aiBoxY} w={aiBoxW} h={aiBoxH} t1={d.aiModels} bright />
        <ArchArrow x1={c3x + hPad + aiBoxW / 2} y1={aiBoxY + aiBoxH} x2={c3x + hPad + aiBoxW / 2} y2={regY} />
        <ArchBox x={c3x + hPad} y={regY} w={regW} h={aiBoxH} t1={d.modelRegistry1} t2={d.modelRegistry2} bright />
        <ArchArrow x1={c3x + hPad + regW} y1={regY + aiBoxH / 2} x2={srvX} y2={regY + aiBoxH / 2} />
        <ArchBox x={srvX} y={regY} w={srvW} h={aiBoxH} t1={d.modelServing} bright />

        <ArchPathArrow
          d={`M ${srvX + srvW} ${regY + aiBoxH / 2} H ${c3x + c3w - 6} V ${aiMidY} H ${aiBoxRight}`}
          dashed
          faint
        />

        {/* Business layer → application layer (stacked zones) */}
        <ArchArrow x1={c1cx} y1={bizBoxBottom} x2={c1cx} y2={appBoxTop} faint />

        {/* Business / application → data foundation */}
        <ArchArrow x1={c1w} y1={busY} x2={c2x} y2={busY} faint />
        <ArchArrow x1={c1w} y1={appY} x2={c2x} y2={appY} faint />

        {/* Data lake / warehouse → AI models */}
        <ArchPathArrow
          d={`M ${dfRightInner} ${dfLakeMidY} H ${c3x} V ${aiMidY} H ${aiLeft}`}
        />

        {/* Infrastructure boxes → AI / ML models row */}
        <ArchArrow x1={inf1X + infW / 2} y1={infraBoxBottom} x2={inf1X + infW / 2} y2={aiBoxY} faint />
        <ArchArrow x1={inf2X + infW / 2} y1={infraBoxBottom} x2={inf2X + infW / 2} y2={aiBoxY} faint />
        <ArchArrow x1={inf3X + infW / 2} y1={infraBoxBottom} x2={inf3X + infW / 2} y2={aiBoxY} faint />
      </svg>

      <div className="flex flex-col gap-2.5 md:hidden">
        <MZone label={d.zoneBusiness}>
          <MBox>{d.mobileBusinessProcesses}</MBox>
          <MBox>{d.mobileStrategicGoals}</MBox>
        </MZone>
        <MZone label={d.zoneApplication}>
          <MBox>{d.mobileUserInterfaces}</MBox>
          <MBox sub={d.appsSub}>{d.mobileEnterpriseApps}</MBox>
        </MZone>
        <MZone label={d.zoneData}>
          <MBox full>{d.mobileDataSources}</MBox>
          <MBox full>{d.mobileEtl}</MBox>
          <MBox full>{d.mobileDataLake}</MBox>
        </MZone>
        <MZone label={d.zoneInfra}>
          <MBox>{d.mobileSecurity}</MBox>
          <MBox>{d.mobileCloud}</MBox>
          <MBox>{d.mobileMlops}</MBox>
        </MZone>
        <MZone label={d.zoneAi}>
          <MBox full bright>
            {d.mobileAiModels}
          </MBox>
          <MBox bright>{d.mobileRegistry}</MBox>
          <MBox bright>{d.mobileServing}</MBox>
        </MZone>
      </div>
    </figure>
  );
}
