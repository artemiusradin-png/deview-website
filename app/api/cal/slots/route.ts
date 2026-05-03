import { NextRequest, NextResponse } from "next/server";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_EVENT_TYPE_ID = process.env.CAL_EVENT_TYPE_ID!;
const CAL_VERSION = "2024-08-13";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date"); // YYYY-MM-DD
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 });
  }

  const startTime = `${date}T00:00:00.000Z`;
  const endTime = `${date}T23:59:59.000Z`;

  const res = await fetch(
    `https://api.cal.com/v2/slots/available?eventTypeId=${CAL_EVENT_TYPE_ID}&startTime=${startTime}&endTime=${endTime}`,
    {
      headers: {
        Authorization: `Bearer ${CAL_API_KEY}`,
        "cal-api-version": CAL_VERSION,
      },
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const slots: { time: string }[] = data?.data?.slots?.[date] ?? [];

  return NextResponse.json({ slots });
}
