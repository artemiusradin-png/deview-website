import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const STATUSES = ["new", "responded", "junk", "added_to_client_portal"] as const;
const ACTIONS = ["respond", "junk", "add_to_client_portal", "reopen"] as const;

type InquiryStatus = (typeof STATUSES)[number];
type InquiryAction = (typeof ACTIONS)[number];

const ACTION_STATUS: Record<InquiryAction, InquiryStatus> = {
  respond: "responded",
  junk: "junk",
  add_to_client_portal: "added_to_client_portal",
  reopen: "new",
};

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

function validStatus(value: string | null): value is InquiryStatus {
  return Boolean(value && STATUSES.includes(value as InquiryStatus));
}

function validAction(value: unknown): value is InquiryAction {
  return typeof value === "string" && ACTIONS.includes(value as InquiryAction);
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase_not_configured" }, { status: 503 });
  }

  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const limit = Math.min(Number(url.searchParams.get("limit") ?? 100) || 100, 250);

  let query = supabase
    .from("client_inquiries")
    .select(
      "id, created_at, updated_at, name, email, company, details, source, status, response_notes, client_portal_reference, managed_at, managed_by",
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (validStatus(status)) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) {
    console.error("[management/inquiries] list failed:", error.message);
    return NextResponse.json({ ok: false, error: "list_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, inquiries: data });
}

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
  if (!id || !validAction(data.action)) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const update = {
    status: ACTION_STATUS[data.action],
    response_notes:
      typeof data.responseNotes === "string" && data.responseNotes.trim()
        ? data.responseNotes.trim().slice(0, 4000)
        : null,
    client_portal_reference:
      typeof data.clientPortalReference === "string" && data.clientPortalReference.trim()
        ? data.clientPortalReference.trim().slice(0, 200)
        : null,
    managed_by:
      typeof data.managedBy === "string" && data.managedBy.trim()
        ? data.managedBy.trim().slice(0, 200)
        : null,
    managed_at: data.action === "reopen" ? null : new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { data: inquiry, error } = await supabase
    .from("client_inquiries")
    .update(update)
    .eq("id", id)
    .select(
      "id, created_at, updated_at, name, email, company, details, source, status, response_notes, client_portal_reference, managed_at, managed_by",
    )
    .single();

  if (error) {
    console.error("[management/inquiries] update failed:", error.message);
    return NextResponse.json({ ok: false, error: "update_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, inquiry });
}
