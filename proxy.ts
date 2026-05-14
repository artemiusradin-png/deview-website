import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COUNTRY_COOKIE = "deview-country";
const LOCALE_COOKIE = "deview-geo-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function detectCountry(request: NextRequest): string | null {
  const vercel = request.headers.get("x-vercel-ip-country");
  if (vercel) return vercel.toUpperCase();

  const cf = request.headers.get("cf-ipcountry");
  if (cf) return cf.toUpperCase();

  const url = new URL(request.url);
  const override = url.searchParams.get("country");
  if (override) return override.toUpperCase();

  const acceptLanguage = request.headers.get("accept-language") || "";
  if (/zh[-_](HK|Hant)/i.test(acceptLanguage)) return "HK";

  return null;
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const country = detectCountry(request);
  const url = new URL(request.url);
  const hasOverride = url.searchParams.has("country");
  const hasCountryCookie = request.cookies.has(COUNTRY_COOKIE);

  if (country && (!hasCountryCookie || hasOverride)) {
    response.cookies.set(COUNTRY_COOKIE, country, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });

    const defaultLocale = country === "HK" ? "zh-HK" : "en";
    response.cookies.set(LOCALE_COOKIE, defaultLocale, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.[^/]+$).*)"],
};
