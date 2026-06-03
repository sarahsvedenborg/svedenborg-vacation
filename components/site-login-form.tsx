"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SiteLoginForm({
  protectionActive,
  passwordConfigured,
}: {
  protectionActive: boolean;
  passwordConfigured: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Noe gikk galt. Prøv igjen.");
        return;
      }

      router.replace(from);
      router.refresh();
    } catch {
      setError("Kunne ikke koble til serveren. Prøv igjen.");
    } finally {
      setIsPending(false);
    }
  }

  if (!protectionActive) {
    return (
      <p className="text-body text-muted">
        Passordbeskyttelse er deaktivert (<code className="text-sm">SITE_PASSWORD_PROTECTION=false</code>
        ).
      </p>
    );
  }

  if (!passwordConfigured) {
    return (
      <p className="text-body text-muted">
        Legg til <code className="text-sm">SITE_PASSWORD</code> i <code className="text-sm">.env</code>{" "}
        (lokalt) og i Vercel-miljøvariabler, start serveren på nytt, og prøv igjen.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <label htmlFor="site-password" className="text-sm font-semibold uppercase tracking-[0.1em]">
          Passord
        </label>
        <input
          id="site-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          disabled={isPending}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full border border-border bg-white px-4 py-3 text-base outline-none focus:border-foreground"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Logger inn …" : "Logg inn"}
      </button>

      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  );
}
