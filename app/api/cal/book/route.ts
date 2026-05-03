import { NextRequest, NextResponse } from "next/server";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_EVENT_TYPE_ID = Number(process.env.CAL_EVENT_TYPE_ID);
const CAL_VERSION = "2024-08-13";

export async function POST(req: NextRequest) {
  const { name, email, start, timeZone } = await req.json() as {
    name: string;
    email: string;
    start: string;
    timeZone: string;
  };

  if (!name || !email || !start) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const res = await fetch("https://api.cal.com/v2/bookings", {
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

  const data = await res.json();

  if (!res.ok || data.status !== "success") {
    return NextResponse.json({ error: data?.error?.message ?? "Booking failed" }, { status: 500 });
  }

  return NextResponse.json({
    uid: data.data.uid,
    start: data.data.start,
    end: data.data.end,
    meetingUrl: data.data.meetingUrl,
  });
}
