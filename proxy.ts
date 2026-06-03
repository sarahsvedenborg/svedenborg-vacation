import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, hasSitePassword, isAuthProtectionActive, isValidAuthToken } from "@/lib/site-auth";

const LOGIN_PATH = "/login";

function isPublicPath(pathname: string): boolean {
  return (
    pathname === LOGIN_PATH ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  );
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (!isAuthProtectionActive()) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (!hasSitePassword()) {
    if (!isPublicPath(pathname)) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set("error", "config");
      if (pathname !== "/") {
        loginUrl.searchParams.set("from", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (isPublicPath(pathname)) {
    if (pathname === LOGIN_PATH) {
      const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
      if (await isValidAuthToken(token)) {
        const from = request.nextUrl.searchParams.get("from") || "/";
        return NextResponse.redirect(new URL(from, request.url));
      }
    }
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (await isValidAuthToken(token)) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const loginUrl = new URL(LOGIN_PATH, request.url);
  if (pathname !== "/") {
    loginUrl.searchParams.set("from", pathname);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
