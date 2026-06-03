import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Link from "next/link";

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

const navItems = [
  { href: "/reiseinformasjon", label: "Reiseinfo" },
  { href: "/baaten", label: "Båten" },
  { href: "/rute", label: "Rute" },
  { href: "/opplevelser", label: "Opplevelser" },
  { href: "/mat-og-glutenfritt", label: "Mat" },
  { href: "/noedinfo", label: "Nødinfo" },
];

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
            <header className="border-b border-border bg-white">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
                <nav className="flex flex-wrap justify-center gap-5 md:order-1 md:justify-start">
                  {navItems.slice(0, 3).map((item) => (
                    <Link key={item.href} href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="/"
                  className="font-serif text-2xl font-semibold tracking-tight md:order-2"
                >
                  Kanalferien
                </Link>
                <nav className="flex flex-wrap justify-center gap-5 md:order-3 md:justify-end">
                  {navItems.slice(3).map((item) => (
                    <Link key={item.href} href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </header>
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
