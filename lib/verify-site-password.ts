import { timingSafeEqual } from "crypto";

export function isPasswordCorrect(input: string): boolean {
  const expected = process.env.SITE_PASSWORD?.trim() ?? "";
  if (!expected || !input) return false;

  const a = Buffer.from(input, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;

  try {
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
