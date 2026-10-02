import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE = "en";
/** Languages the site used to serve. Their URLs may still be indexed, so they redirect to the English page. */
const RETIRED_LOCALES = ["zh-hk", "de"];
const COUNTRY_COOKIE = "deview-country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function detectCountry(request: NextRequest): string | null {
  const vercel = request.headers.get("x-vercel-ip-country");
  if (vercel) return vercel.toUpperCase();

  const cf = request.headers.get("cf-ipcountry");
  if (cf) return cf.toUpperCase();

  const url = new URL(request.url);
  const override = url.searchParams.get("country");
  if (override) return override.toUpperCase();

  const acceptLanguage = request.headers.get("accept-language") || "";
  if (/de[-_]?(DE|AT|CH)?/i.test(acceptLanguage)) return "DE";
  if (/zh[-_](HK|Hant)/i.test(acceptLanguage)) return "HK";

  return null;
}

function startsWithSegment(pathname: string, segment: string): boolean {
  const lower = pathname.toLowerCase();
  return lower === `/${segment}` || lower.startsWith(`/${segment}/`);
}

/** Path to redirect to: retired-locale paths map onto the same English page, bare paths get the /en prefix. */
function englishPath(pathname: string): string {
  const retired = RETIRED_LOCALES.find((l) => startsWithSegment(pathname, l));
  const rest = retired ? pathname.slice(retired.length + 1) : pathname;
  return `/${LOCALE}${rest === "/" ? "" : rest}`;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const country = detectCountry(request);

  if (pathname === `/${LOCALE}` || pathname.startsWith(`/${LOCALE}/`)) {
    const response = NextResponse.next();
    if (country && !request.cookies.get(COUNTRY_COOKIE)?.value) {
      response.cookies.set(COUNTRY_COOKIE, country, {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = englishPath(pathname);

  const response = NextResponse.redirect(url, 308);
  if (country) {
    response.cookies.set(COUNTRY_COOKIE, country, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon|.*\\.[^/]+$).*)"],
};
