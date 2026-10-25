import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "64px 76px", background: "#f3eee2", color: "#192120" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: -2 }}>Deview</div>
        <div style={{ fontSize: 22, color: "#626661" }}>deviewai.com</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, letterSpacing: -5, lineHeight: 1.05 }}>
        <span>Custom software.</span>
        <span>Real impact.</span>
      </div>
      <div style={{ display: "flex", borderTop: "2px solid #bca375", paddingTop: 28, fontSize: 26 }}>
        Product engineering · AI · Data · Cloud · Platforms
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
