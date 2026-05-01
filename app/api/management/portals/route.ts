import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function managementToken() {
  return process.env.MANAGEMENT_API_TOKEN?.trim();
}

function authorized(req: Request) {
  const token = managementToken();
  if (!token) return false;
  const auth = req.headers.get("authorization");
  const bearer = auth?.startsWith("Bearer ") ? auth.slice("Bearer ".length).trim() : null;
  return bearer === token || req.headers.get("x-management-token") === token;
}

type MilestoneInput = {
  title: string;
  description?: string;
  position: number;
};

function validMilestones(value: unknown): value is MilestoneInput[] {
  if (!Array.isArray(value)) return false;
  return value.every(
    (m) =>
      m &&
      typeof m === "object" &&
      typeof (m as Record<string, unknown>).title === "string" &&
      typeof (m as Record<string, unknown>).position === "number",
  );
}

// GET /api/management/portals — list all portals with their milestones
export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase_not_configured" }, { status: 503 });
  }

  const url = new URL(req.url);
  const activeOnly = url.searchParams.get("active") !== "false";
  const limit = Math.min(Number(url.searchParams.get("limit") ?? 100) || 100, 250);

  let query = supabase
    .from("client_portals")
    .select(
      "id, reference, client_name, project_title, current_stage, is_active, created_at, updated_at, client_portal_milestones(id, title, description, position)",
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (activeOnly) query = query.eq("is_active", true);

  const { data, error } = await query;
  if (error) {
    console.error("[management/portals] list failed:", error.message);
    return NextResponse.json({ ok: false, error: "list_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, portals: data });
}

// POST /api/management/portals — create a new portal
export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase_not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const reference =
    typeof data.reference === "string" ? data.reference.trim().toUpperCase().slice(0, 200) : "";
  const clientName =
    typeof data.clientName === "string" ? data.clientName.trim().slice(0, 500) : "";
  const projectTitle =
    typeof data.projectTitle === "string" ? data.projectTitle.trim().slice(0, 500) : "";
  const currentStage =
    typeof data.currentStage === "number" && data.currentStage >= 0
      ? Math.floor(data.currentStage)
      : 0;
  const milestones = data.milestones;

  if (!reference || !clientName || !projectTitle) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  if (milestones !== undefined && !validMilestones(milestones)) {
    return NextResponse.json({ ok: false, error: "invalid_milestones" }, { status: 400 });
  }

  const { data: portal, error: insertError } = await supabase
    .from("client_portals")
    .insert({ reference, client_name: clientName, project_title: projectTitle, current_stage: currentStage })
    .select("id, reference, client_name, project_title, current_stage, is_active, created_at, updated_at")
    .single();

  if (insertError) {
    if (insertError.code === "23505") {
      return NextResponse.json({ ok: false, error: "reference_already_exists" }, { status: 409 });
    }
    console.error("[management/portals] insert failed:", insertError.message);
    return NextResponse.json({ ok: false, error: "create_failed" }, { status: 500 });
  }

  if (milestones && (milestones as MilestoneInput[]).length > 0) {
    const rows = (milestones as MilestoneInput[]).map((m) => ({
      portal_id: portal.id,
      title: m.title.trim().slice(0, 500),
      description: (m.description ?? "").trim().slice(0, 2000),
      position: m.position,
    }));

    const { error: msError } = await supabase.from("client_portal_milestones").insert(rows);
    if (msError) {
      console.error("[management/portals] milestone insert failed:", msError.message);
      // portal was created — still return it, but flag the partial failure
      return NextResponse.json({ ok: true, portal, milestoneError: "milestone_insert_failed" });
    }
  }

  return NextResponse.json({ ok: true, portal }, { status: 201 });
}

// PATCH /api/management/portals — update a portal's stage, active state, or milestones
export async function PATCH(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase_not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const id = typeof data.id === "string" ? data.id.trim() : "";
  if (!id) {
    return NextResponse.json({ ok: false, error: "missing_id" }, { status: 400 });
  }

  const portalUpdate: Record<string, unknown> = { updated_at: new Date().toISOString() };

  if (typeof data.currentStage === "number" && data.currentStage >= 0) {
    portalUpdate.current_stage = Math.floor(data.currentStage);
  }
  if (typeof data.clientName === "string" && data.clientName.trim()) {
    portalUpdate.client_name = data.clientName.trim().slice(0, 500);
  }
  if (typeof data.projectTitle === "string" && data.projectTitle.trim()) {
    portalUpdate.project_title = data.projectTitle.trim().slice(0, 500);
  }
  if (typeof data.isActive === "boolean") {
    portalUpdate.is_active = data.isActive;
  }

  const { data: portal, error: updateError } = await supabase
    .from("client_portals")
    .update(portalUpdate)
    .eq("id", id)
    .select("id, reference, client_name, project_title, current_stage, is_active, created_at, updated_at")
    .single();

  if (updateError || !portal) {
    console.error("[management/portals] update failed:", updateError?.message);
    return NextResponse.json({ ok: false, error: "update_failed" }, { status: 500 });
  }

  // If milestones are provided, replace them entirely
  if (data.milestones !== undefined) {
    if (!validMilestones(data.milestones)) {
      return NextResponse.json({ ok: false, error: "invalid_milestones" }, { status: 400 });
    }

    const { error: deleteError } = await supabase
      .from("client_portal_milestones")
      .delete()
      .eq("portal_id", id);

    if (deleteError) {
      console.error("[management/portals] milestone delete failed:", deleteError.message);
      return NextResponse.json({ ok: false, error: "milestone_replace_failed" }, { status: 500 });
    }

    if ((data.milestones as MilestoneInput[]).length > 0) {
      const rows = (data.milestones as MilestoneInput[]).map((m) => ({
        portal_id: id,
        title: m.title.trim().slice(0, 500),
        description: (m.description ?? "").trim().slice(0, 2000),
        position: m.position,
      }));

      const { error: insertError } = await supabase.from("client_portal_milestones").insert(rows);
      if (insertError) {
        console.error("[management/portals] milestone insert failed:", insertError.message);
        return NextResponse.json({ ok: false, error: "milestone_replace_failed" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ ok: true, portal });
}
