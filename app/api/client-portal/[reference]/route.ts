import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const DEFAULT_TASK_MANAGER_URL = "https://deview-task-manager.netlify.app";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ reference: string }> },
) {
  const { reference } = await params;
  const ref = reference.trim().toUpperCase();

  // Primary: Supabase (always up, no external dependency)
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { data: portal, error } = await supabase
      .from("client_portals")
      .select(
        "reference, client_name, project_title, current_stage, is_active, created_at, updated_at, client_portal_milestones(id, title, description, position)",
      )
      .eq("reference", ref)
      .eq("is_active", true)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("[client-portal] supabase error:", error.message);
      return NextResponse.json({ error: "Service error" }, { status: 500 });
    }

    if (!portal) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const milestones = (portal.client_portal_milestones ?? [])
      .sort((a: { position: number }, b: { position: number }) => a.position - b.position)
      .map((m: { id: string; title: string; description: string; position: number }) => ({
        id: m.id,
        title: m.title,
        description: m.description,
        position: m.position,
      }));

    return NextResponse.json({
      reference: portal.reference,
      clientName: portal.client_name,
      projectTitle: portal.project_title,
      currentStage: portal.current_stage,
      createdAt: portal.created_at,
      updatedAt: portal.updated_at,
      milestones,
      documents: [],
    });
  }

  // Fallback: task manager proxy (used only when Supabase env vars are not set)
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
