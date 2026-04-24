import { NextResponse } from "next/server";

const TASK_MANAGER_URL =
  process.env.TASK_MANAGER_URL ?? "https://ai-consulting-task-manager.vercel.app";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ reference: string }> },
) {
  const { reference } = await params;

  try {
    const upstream = await fetch(
      `${TASK_MANAGER_URL}/api/client-portals/${encodeURIComponent(reference.toUpperCase())}`,
      { cache: "no-store" },
    );

    if (upstream.status === 404) {
      return NextResponse.json({ error: "Invalid agreement reference." }, { status: 404 });
    }

    if (!upstream.ok) {
      return NextResponse.json({ error: "Portal unavailable." }, { status: 502 });
    }

    const data = await upstream.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Could not reach portal service." }, { status: 503 });
  }
}
