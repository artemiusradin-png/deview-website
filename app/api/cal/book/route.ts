import { NextRequest, NextResponse } from "next/server";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_EVENT_TYPE_ID = Number(process.env.CAL_EVENT_TYPE_ID);
const CAL_VERSION = "2024-08-13";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      start: string;
      timeZone: string;
    };

    const { name, email, start, timeZone } = body;

    if (!name || !email || !start) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!CAL_API_KEY || !CAL_EVENT_TYPE_ID) {
      return NextResponse.json({ error: "Booking service not configured" }, { status: 503 });
    }

    const calRes = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventTypeId: CAL_EVENT_TYPE_ID,
        start,
        attendee: { name, email, timeZone: timeZone || "UTC" },
      }),
    });

    const data = await calRes.json();

    if (!calRes.ok || data.status !== "success") {
      const message = data?.error?.message ?? data?.message ?? "Booking failed";
      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json({
      uid: data.data.uid,
      start: data.data.start,
      end: data.data.end,
      meetingUrl: data.data.meetingUrl,
    });
  } catch (err) {
    console.error("[cal/book]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
