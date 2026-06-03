export const AUTH_COOKIE_NAME = "family-site-auth";
/** ~6 months */
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 183;

const AUTH_PAYLOAD = "family-site-authenticated-v1";

/** On by default. Set SITE_PASSWORD_PROTECTION=false to disable (e.g. local dev). */
export function isAuthProtectionActive(): boolean {
  return process.env.SITE_PASSWORD_PROTECTION !== "false";
}

export function hasSitePassword(): boolean {
  return Boolean(process.env.SITE_PASSWORD?.trim());
}

/** @deprecated Use isAuthProtectionActive + hasSitePassword */
export function isAuthEnabled(): boolean {
  return isAuthProtectionActive() && hasSitePassword();
}

function getAuthSecret(): string {
  return (
    process.env.SITE_AUTH_SECRET?.trim() ||
    process.env.SITE_PASSWORD?.trim() ||
    ""
  );
}

function bytesToHex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createAuthToken(): Promise<string> {
  const secret = getAuthSecret();
  if (!secret) return "";

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(AUTH_PAYLOAD)
  );

  return bytesToHex(signature);
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function isValidAuthToken(token: string | undefined): Promise<boolean> {
  if (!token || !hasSitePassword()) return false;
  const expected = await createAuthToken();
  if (!expected) return false;
  return constantTimeEqual(token, expected);
}
