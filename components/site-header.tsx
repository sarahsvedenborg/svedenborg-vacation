"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-nav";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:hidden">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Kanalferien
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-foreground"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-border px-6 py-4 md:hidden"
          aria-label="Hovedmeny"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="mx-auto hidden w-full max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex md:flex-row md:justify-between">
        <nav className="flex flex-wrap justify-center gap-5 md:order-1 md:justify-start">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight md:order-2">
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
  );
}
