import type { ReactNode } from "react";
import type { DiagramId, FlowDiagram } from "@/lib/solutions/types";

/**
 * Architecture drawings for the solution pages, in the line-drawing style of the case-study
 * covers. They are inline SVG with real text so the labels can be read by crawlers and screen
 * readers. Layout is in a fixed viewBox and scales with the column.
 */

const INK = "#171207";
const PAPER = "#fffdf7";
const MUTED = "#655f54";
const ACCENT = "#ffc933";
const FONT = "var(--font-satoshi), var(--font-archivo), sans-serif";

function Frame({
  id,
  width,
  height,
  title,
  desc,
  children,
}: {
  id: string;
  width: number;
  height: number;
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      fontFamily={FONT}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      <defs>
        <marker
          id={`${id}-arrow`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M1 1l8 4-8 4" stroke={INK} strokeWidth="1.8" fill="none" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

function Box({
  x,
  y,
  w,
  h,
  lines,
  fill = PAPER,
  size = 15,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  /** First line is the heading, the rest are details. */
  lines: string[];
  fill?: string;
  size?: number;
}) {
  const [head, ...rest] = lines;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke={INK} strokeWidth="2.5" />
      <text x={x + 14} y={y + 26} fontSize={size} fontWeight={500} fill={INK}>
        {head}
      </text>
      {rest.map((line, i) => (
        <text key={line} x={x + 14} y={y + 26 + 20 * (i + 1)} fontSize={size - 2.5} fill={MUTED}>
          {line}
        </text>
      ))}
    </g>
  );
}

function Label({
  x,
  y,
  children,
  anchor = "start",
  size = 12,
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  size?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={MUTED}
      textAnchor={anchor}
      letterSpacing="1.4"
      style={{ textTransform: "uppercase" }}
    >
      {children}
    </text>
  );
}

function Arrow({ id, d, dashed = false }: { id: string; d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      stroke={INK}
      strokeWidth="2.5"
      strokeDasharray={dashed ? "8 8" : undefined}
      markerEnd={`url(#${id}-arrow)`}
    />
  );
}

/** A yellow-headed container that holds the platform's own modules. */
function Platform({
  x,
  y,
  w,
  h,
  title,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={PAPER} stroke={INK} strokeWidth="3" />
      <rect x={x} y={y} width={w} height={46} fill={ACCENT} stroke={INK} strokeWidth="3" />
      <text x={x + 18} y={y + 30} fontSize={18} fontWeight={500} fill={INK}>
        {title}
      </text>
    </g>
  );
}

function SmeLending() {
  const id = "d-sme";
  return (
    <Frame
      id={id}
      width={1200}
      height={560}
      title="SME loan management system: reference architecture"
      desc="Borrower channels and data sources feed a lending platform with intake, credit assessment, approval, collateral, servicing and monitoring modules. The platform posts to the bank's core ledger, payments, finance and reporting systems."
    >
      <Label x={30} y={40}>Channels and data</Label>
      <Label x={340} y={40}>SME lending platform</Label>
      <Label x={930} y={40}>Bank systems</Label>

      <Box x={30} y={70} w={240} h={110} lines={["Borrower portal and API", "Online application", "Partner and broker feeds"]} />
      <Box x={30} y={210} w={240} h={110} lines={["Relationship managers", "Branch and RM workbench", "Assisted applications"]} />
      <Box x={30} y={350} w={240} h={150} lines={["Data sources", "Bank statements", "Accounting and tax data", "Credit reference, CDI"]} />

      <Arrow id={id} d="M270 125H340" />
      <Arrow id={id} d="M270 265H340" />
      <Arrow id={id} d="M270 425H340" />

      <Platform x={340} y={50} w={520} h={450} title="Lending platform on your infrastructure" />
      <Box x={360} y={120} w={235} h={95} lines={["Intake and onboarding", "KYB, documents, consent"]} />
      <Box x={615} y={120} w={235} h={95} lines={["Credit assessment", "Spreading, rules, scorecards"]} />
      <Box x={360} y={235} w={235} h={95} lines={["Approval workflow", "Authority matrix, four-eyes"]} />
      <Box x={615} y={235} w={235} h={95} lines={["Collateral and guarantees", "Register, charges, valuations"]} />
      <Box x={360} y={350} w={235} h={95} lines={["Servicing", "Schedules, rates, fees"]} />
      <Box x={615} y={350} w={235} h={95} lines={["Monitoring and collections", "Covenants, early warning"]} />
      <line x1={360} y1={460} x2={850} y2={460} stroke={INK} strokeWidth="1.5" />
      <text x={605} y={484} fontSize={13} fill={MUTED} textAnchor="middle">
        Audit trail · role-based access · document store
      </text>

      <Box x={930} y={70} w={240} h={95} lines={["Core banking ledger", "Accounts, postings"]} />
      <Box x={930} y={185} w={240} h={95} lines={["Payments", "ISO 20022 pain.001, camt.053"]} />
      <Box x={930} y={300} w={240} h={95} lines={["Finance and general ledger", "Accruals, provisioning"]} />
      <Box x={930} y={415} w={240} h={95} lines={["Data warehouse", "Regulatory returns, reports"]} />

      <Arrow id={id} d="M860 118H930" />
      <Arrow id={id} d="M860 232H930" />
      <Arrow id={id} d="M860 347H930" />
      <Arrow id={id} d="M860 462H930" />
    </Frame>
  );
}

function UpstreamProduction() {
  const id = "d-upstream";
  return (
    <Frame
      id={id}
      width={1200}
      height={540}
      title="Upstream production management system: reference architecture"
      desc="Wells, meters and control systems in the field feed a historian and a field app. A one-way connection across the operational network boundary carries the data into a production platform with asset register, daily reporting, allocation, deferment, surveillance and forecasting. Dashboards, partner reports, accounting and subsurface platforms receive outputs."
    >
      <Label x={20} y={40}>Field (OT)</Label>
      <Label x={250} y={40}>Edge</Label>
      <Label x={500} y={40}>Production platform (IT)</Label>
      <Label x={930} y={40}>Outputs</Label>

      <Box x={20} y={70} w={190} h={90} lines={["Wells and lift", "Pumps, ESPs, chokes"]} />
      <Box x={20} y={180} w={190} h={90} lines={["Meters, separators", "Flow, pressure, level"]} />
      <Box x={20} y={290} w={190} h={90} lines={["Control system", "SCADA and PLCs"]} />
      <Box x={20} y={400} w={190} h={90} lines={["Field crews", "Rounds, well tests"]} />

      <Box x={250} y={150} w={190} h={110} lines={["Historian", "OPC UA, read only", "Native resolution"]} />
      <Box x={250} y={370} w={190} h={110} lines={["Field app", "E-logs, test entry", "Works offline"]} />

      <Arrow id={id} d="M210 115L250 175" />
      <Arrow id={id} d="M210 225L250 210" />
      <Arrow id={id} d="M210 335L250 240" />
      <Arrow id={id} d="M210 445H250" />

      <line x1={470} y1={60} x2={470} y2={500} stroke={INK} strokeWidth="2" strokeDasharray="8 8" />
      <text x={462} y={510} fontSize={12} fill={MUTED} textAnchor="end">One-way conduit · IEC 62443</text>

      <Arrow id={id} d="M440 205H500" />
      <Arrow id={id} d="M440 425H500" />

      <Platform x={500} y={60} w={400} h={410} title="Production platform" />
      <Box x={518} y={120} w={172} h={85} lines={["Asset register", "Wells, facilities"]} />
      <Box x={710} y={120} w={172} h={85} lines={["Daily reporting", "Review, approve, lock"]} />
      <Box x={518} y={222} w={172} h={85} lines={["Allocation", "Tests, back-allocation"]} />
      <Box x={710} y={222} w={172} h={85} lines={["Deferment", "Loss and root cause"]} />
      <Box x={518} y={324} w={172} h={85} lines={["Surveillance", "Rules and exceptions"]} />
      <Box x={710} y={324} w={172} h={85} lines={["Forecasting", "Decline, water cut"]} />
      <line x1={518} y1={425} x2={882} y2={425} stroke={INK} strokeWidth="1.5" />
      <text x={700} y={452} fontSize={13} fill={MUTED} textAnchor="middle">
        Audit of restatements · roles by asset
      </text>

      <Box x={930} y={80} w={240} h={90} lines={["Management dashboards", "Asset and executive"]} />
      <Box x={930} y={190} w={240} h={90} lines={["Partner and regulator", "PRODML and set formats"]} />
      <Box x={930} y={300} w={240} h={90} lines={["Hydrocarbon accounting", "Reconciled volumes"]} />
      <Box x={930} y={410} w={240} h={90} lines={["Subsurface platform", "OSDU, engineering apps"]} />

      <Arrow id={id} d="M900 125H930" />
      <Arrow id={id} d="M900 235H930" />
      <Arrow id={id} d="M900 345H930" />
      <Arrow id={id} d="M900 455H930" />
    </Frame>
  );
}

function Mes() {
  const id = "d-mes";
  return (
    <Frame
      id={id}
      width={1200}
      height={600}
      title="Manufacturing execution system: reference architecture"
      desc="The ERP, maintenance system and data platform sit above a manufacturing execution system with work orders, data collection, genealogy, quality, OEE and recipe modules. Below a plant network boundary an edge gateway connects machines and PLCs, and operator terminals and scanners capture manual data."
    >
      <Label x={30} y={30}>Level 4 · business systems</Label>
      <Box x={30} y={42} w={390} h={78} lines={["ERP", "Orders, BOMs, master data"]} />
      <Box x={450} y={42} w={330} h={78} lines={["Maintenance system", "Requests and history"]} />
      <Box x={810} y={42} w={360} h={78} lines={["Data platform and BI", "Plant and enterprise reports"]} />
      <Arrow id={id} d="M225 120V170" />
      <Arrow id={id} d="M615 170V120" />
      <Arrow id={id} d="M990 170V120" />

      <Platform x={30} y={170} w={1140} h={240} title="Manufacturing execution system · ISA-95 level 3" />
      <Box x={50} y={236} w={170} h={95} lines={["Work orders", "Routings, dispatch"]} size={14} />
      <Box x={234} y={236} w={170} h={95} lines={["Data collection", "States, counts, cycles"]} size={14} />
      <Box x={418} y={236} w={170} h={95} lines={["Genealogy", "Lots, serials, recall"]} size={14} />
      <Box x={602} y={236} w={170} h={95} lines={["Quality", "Inspection, SPC, NCR"]} size={14} />
      <Box x={786} y={236} w={170} h={95} lines={["Equipment and OEE", "Downtime reasons"]} size={14} />
      <Box x={970} y={236} w={180} h={95} lines={["Recipes, BOMs", "Instructions, e-sign"]} size={14} />
      <line x1={50} y1={350} x2={1150} y2={350} stroke={INK} strokeWidth="1.5" />
      <text x={600} y={382} fontSize={13} fill={MUTED} textAnchor="middle">
        Audit trail · electronic records · roles · offline sync at terminals
      </text>

      <line x1={30} y1={452} x2={1170} y2={452} stroke={INK} strokeWidth="2" strokeDasharray="8 8" />
      <text x={30} y={443} fontSize={12} fill={MUTED} letterSpacing="1.4" style={{ textTransform: "uppercase" }}>
        Plant network boundary · IEC 62443 zones and conduits
      </text>
      <Arrow id={id} d="M215 510V410" />
      <Arrow id={id} d="M600 510V410" />
      <Arrow id={id} d="M985 510V410" />

      <Box x={30} y={510} w={370} h={78} lines={["Edge gateway", "OPC UA, MQTT, Modbus"]} />
      <Box x={415} y={510} w={370} h={78} lines={["Machines and PLCs", "Signals, counters, alarms"]} />
      <Box x={800} y={510} w={370} h={78} lines={["Operator terminals", "Scanners, manual entry"]} />
    </Frame>
  );
}

/** The data-driven reference architecture: inputs, platform modules, outputs. */
function Flow({ data }: { data: FlowDiagram }) {
  const id = "d-flow";
  const rows = Math.ceil(data.modules.length / 2);
  const modulesEnd = 120 + rows * 115 - 20;
  const platformBottom = modulesEnd + 60;
  const height = platformBottom + 50;
  const sideBoxes = (items: string[][], x: number) => {
    const span = platformBottom - 70;
    const h = Math.min(104, (span - (items.length - 1) * 18) / items.length);
    const gap = items.length > 1 ? (span - items.length * h) / (items.length - 1) : 0;
    return items.map((lines, i) => {
      const y = 70 + i * (h + gap);
      return { lines, y, h, mid: y + h / 2 };
    });
  };
  const left = sideBoxes(data.left, 30);
  const right = sideBoxes(data.right, 930);
  return (
    <Frame id={id} width={1200} height={height} title={data.title} desc={data.desc}>
      <Label x={30} y={40}>{data.leftLabel}</Label>
      <Label x={340} y={40}>{data.platformLabel}</Label>
      <Label x={930} y={40}>{data.rightLabel}</Label>
      {left.map((b) => (
        <g key={b.lines[0]}>
          <Box x={30} y={b.y} w={240} h={b.h} lines={b.lines} />
          <Arrow id={id} d={`M270 ${b.mid}H340`} />
        </g>
      ))}
      <Platform x={340} y={50} w={520} h={platformBottom - 50} title={data.platformTitle} />
      {data.modules.map(([head, line], i) => (
        <Box
          key={head}
          x={i % 2 === 0 ? 360 : 615}
          y={120 + Math.floor(i / 2) * 115}
          w={235}
          h={95}
          lines={[head, line]}
        />
      ))}
      <line x1={360} y1={modulesEnd + 15} x2={850} y2={modulesEnd + 15} stroke={INK} strokeWidth="1.5" />
      <text x={605} y={modulesEnd + 40} fontSize={13} fill={MUTED} textAnchor="middle">
        {data.strip}
      </text>
      {right.map((b) => (
        <g key={b.lines[0]}>
          <Box x={930} y={b.y} w={240} h={b.h} lines={b.lines} />
          <Arrow id={id} d={`M860 ${b.mid}H930`} />
        </g>
      ))}
      {data.boundary ? (
        <g>
          <line x1={305} y1={60} x2={305} y2={height - 30} stroke={INK} strokeWidth="2" strokeDasharray="8 8" />
          <text x={298} y={height - 12} fontSize={12} fill={MUTED} textAnchor="end">
            {data.boundary}
          </text>
        </g>
      ) : null}
    </Frame>
  );
}

export const DIAGRAMS: Record<DiagramId, () => ReactNode> = {
  "sme-lending": SmeLending,
  "upstream-production": UpstreamProduction,
  mes: Mes,
};

export function SolutionDiagram({ diagram }: { diagram: DiagramId | FlowDiagram }) {
  if (typeof diagram === "string") {
    const Diagram = DIAGRAMS[diagram];
    return <Diagram />;
  }
  return <Flow data={diagram} />;
}
