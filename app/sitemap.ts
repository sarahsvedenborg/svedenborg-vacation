import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://family-narrowboat.vercel.app";
  const paths = [
    "",
    "/reiseinformasjon",
    "/baaten",
    "/rute",
    "/opplevelser",
    "/mat-og-glutenfritt",
    "/familien",
    "/faq",
    "/noedinfo",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
