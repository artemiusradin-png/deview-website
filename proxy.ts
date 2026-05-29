import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Locale = "en" | "zh-HK" | "de";

const LOCALES: Locale[] = ["en", "zh-HK", "de"];
const DEFAULT_LOCALE: Locale = "en";
const LOCALE_COOKIE = "deview-locale";
const COUNTRY_COOKIE = "deview-country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  HK: "zh-HK",
  DE: "de",
  AT: "de",
  CH: "de",
};

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

function resolveLocale(request: NextRequest, country: string | null): Locale {
  const cookieVal = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieVal && LOCALES.includes(cookieVal as Locale)) {
    return cookieVal as Locale;
  }

  if (country) {
    return COUNTRY_TO_LOCALE[country] ?? DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}

function pathnameHasLocale(pathname: string): boolean {
  return LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const country = detectCountry(request);

  if (pathnameHasLocale(pathname)) {
    const response = NextResponse.next();
    const seg = pathname.split("/")[1] as Locale;
    response.cookies.set(LOCALE_COOKIE, seg, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
    if (country && !request.cookies.get(COUNTRY_COOKIE)?.value) {
      response.cookies.set(COUNTRY_COOKIE, country, {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  const locale = resolveLocale(request, country);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(url, 308);
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.[^/]+$).*)"],
};
