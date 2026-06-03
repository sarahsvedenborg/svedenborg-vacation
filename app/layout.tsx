import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const heading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-slate-900">
        <header className="sticky top-0 z-30 border-b border-sky-100/80 bg-cream/90 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-heading text-lg font-bold text-canal">
              Kanalferien 2026
            </Link>
            <nav className="hidden gap-4 text-sm md:flex">
              <Link href="/reiseinformasjon">Reiseinfo</Link>
              <Link href="/baaten">Båten</Link>
              <Link href="/rute">Rute</Link>
              <Link href="/opplevelser">Opplevelser</Link>
              <Link href="/mat-og-glutenfritt">Mat</Link>
              <Link href="/noedinfo">Nødinfo</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
