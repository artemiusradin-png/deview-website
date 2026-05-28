import { NextRequest, NextResponse } from "next/server";

const CAL_API_KEY = process.env.CAL_API_KEY!;
const CAL_EVENT_TYPE_ID = process.env.CAL_EVENT_TYPE_ID!;
const CAL_VERSION = "2024-08-13";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date"); // YYYY-MM-DD (visitor-local)
  const timeZone = req.nextUrl.searchParams.get("timeZone") || "UTC";
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 });
  }

  // Convert visitor-local YYYY-MM-DD into the UTC window that maps to their local day.
  // Trick: parse "YYYY-MM-DDTHH:mm:ss" as if it were in the visitor's tz, then derive the UTC offset.
  function localDayBoundsUtc(localDate: string, tz: string): { startTime: string; endTime: string } {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    });
    function offsetMsAt(utcMs: number): number {
      const parts = Object.fromEntries(
        fmt.formatToParts(new Date(utcMs)).filter((p) => p.type !== "literal").map((p) => [p.type, p.value])
      ) as Record<string, string>;
      const asUtc = Date.UTC(
        Number(parts.year), Number(parts.month) - 1, Number(parts.day),
        Number(parts.hour === "24" ? "0" : parts.hour), Number(parts.minute), Number(parts.second),
      );
      return asUtc - utcMs;
    }
    const naiveStart = Date.UTC(
      Number(localDate.slice(0, 4)), Number(localDate.slice(5, 7)) - 1, Number(localDate.slice(8, 10)),
      0, 0, 0,
    );
    const offset = offsetMsAt(naiveStart);
    const startMs = naiveStart - offset;
    const endMs = startMs + 24 * 60 * 60 * 1000 - 1000;
    return { startTime: new Date(startMs).toISOString(), endTime: new Date(endMs).toISOString() };
  }

  const { startTime, endTime } = localDayBoundsUtc(date, timeZone);

  const url = new URL("https://api.cal.com/v2/slots/available");
  url.searchParams.set("eventTypeId", String(CAL_EVENT_TYPE_ID));
  url.searchParams.set("startTime", startTime);
  url.searchParams.set("endTime", endTime);
  url.searchParams.set("timeZone", timeZone);

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${CAL_API_KEY}`,
      "cal-api-version": CAL_VERSION,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  // Cal.com keys results by the date in the requested timeZone — try the requested date first,
  // then any other key present (covers boundary edge cases).
  const map: Record<string, { time: string }[]> = data?.data?.slots ?? {};
  const slots: { time: string }[] = map[date] ?? Object.values(map).flat() ?? [];

  return NextResponse.json({ slots });
}
