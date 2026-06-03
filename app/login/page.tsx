import { Suspense } from "react";
import { SiteLoginForm } from "@/components/site-login-form";
import { hasSitePassword, isAuthProtectionActive } from "@/lib/site-auth";

export default function LoginPage() {
  const protectionActive = isAuthProtectionActive();
  const passwordConfigured = hasSitePassword();

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-lg flex-col justify-center space-y-8 py-10">
      <header className="space-y-3 text-center">
        <p className="section-label">Privat</p>
        <h1 className="font-serif text-4xl font-medium tracking-tight">Kanalferien 2026</h1>
        <p className="text-body text-muted">
          {protectionActive && passwordConfigured
            ? "Skriv inn passordet familien har fått for å se nettsiden."
            : "Passordbeskyttelse er ikke satt opp ennå."}
        </p>
      </header>

      <Suspense fallback={<p className="text-center text-muted">Laster …</p>}>
        <SiteLoginForm
          protectionActive={protectionActive}
          passwordConfigured={passwordConfigured}
        />
      </Suspense>
    </div>
  );
}
