import { NextResponse } from "next/server";

const DEFAULT_TASK_MANAGER_URL = "https://deview-task-manager.netlify.app";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ reference: string }> },
) {
  const { reference } = await params;
  const ref = reference.trim().toUpperCase();
  const taskManagerUrl = (
    process.env.TASK_MANAGER_URL?.trim() || DEFAULT_TASK_MANAGER_URL
  ).replace(/\/+$/, "");

  const upstreamUrl = `${taskManagerUrl}/api/client-portals/${encodeURIComponent(ref)}`;

  let upstream: Response;
  try {
    upstream = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
  } catch {
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  if (upstream.status === 404) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!upstream.ok) {
    return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  }

  let data: unknown;
  try {
    data = await upstream.json();
  } catch {
    return NextResponse.json({ error: "Invalid response" }, { status: 502 });
  }

  return NextResponse.json(data);
}
