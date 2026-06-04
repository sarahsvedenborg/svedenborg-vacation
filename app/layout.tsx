import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://family-narrowboat.vercel.app"),
  title: "Familiens kanalferie 2026",
  description:
    "Privat familienettside med rute, reiseinfo, mat og nødinformasjon for smalbåtferien i juli 2026.",
  openGraph: {
    title: "Familiens kanalferie 2026",
    description:
      "Whitchurch Marina til Llangollen med alt familien trenger på ett sted.",
    type: "website",
    locale: "nb_NO",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isLoginPage = headersList.get("x-pathname") === "/login";

  return (
    <html lang="no" className={`${serif.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        {isLoginPage ? (
          <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 md:py-14">{children}</main>
        ) : (
          <>
            <SiteHeader />
            <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 md:py-14">{children}</main>
            <footer className="border-t border-border py-8">
              <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-muted">
                Familiekanalferie 2026
              </p>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
