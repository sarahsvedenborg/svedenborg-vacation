import { NextResponse } from "next/server";
import {
  AUTH_COOKIE_MAX_AGE,
  AUTH_COOKIE_NAME,
  createAuthToken,
  hasSitePassword,
  isAuthProtectionActive,
} from "@/lib/site-auth";
import { isPasswordCorrect } from "@/lib/verify-site-password";

export async function POST(request: Request) {
  if (!isAuthProtectionActive()) {
    return NextResponse.json({ error: "Passordbeskyttelse er deaktivert." }, { status: 503 });
  }

  if (!hasSitePassword()) {
    return NextResponse.json(
      { error: "SITE_PASSWORD mangler i miljøvariabler." },
      { status: 503 }
    );
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: string };
    password = body.password?.toString() ?? "";
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  if (!isPasswordCorrect(password)) {
    return NextResponse.json({ error: "Feil passord." }, { status: 401 });
  }

  const token = await createAuthToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: AUTH_COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
}
