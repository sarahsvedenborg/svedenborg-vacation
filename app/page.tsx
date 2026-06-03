import Link from "next/link";
import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { highlights, quickFacts } from "@/lib/site-data";
import { getSiteSettings, getUpdates } from "@/lib/content";

export default async function Home() {
  const [updates, settings] = await Promise.all([getUpdates(), getSiteSettings()]);
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Image
          src={settings.heroImageUrl}
          alt={settings.heroImageAlt}
          className="h-56 w-full rounded-xl object-cover md:h-80"
          width={1600}
          height={900}
          priority
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-canal">{settings.title}</h1>
          <p>{settings.route}</p>
          <p className="text-sm text-slate-600">{settings.tripDates}</p>
          <p className="font-semibold">{settings.travelers}</p>
          <Countdown targetDate={settings.countdownDate} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Raske fakta</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="card">
              <p className="text-sm text-slate-600">{fact.label}</p>
              <p className="font-semibold">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Reisens høydepunkter</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="card">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Siste oppdateringer</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {updates.map((update) => (
            <div key={update.title} className="card">
              <p className="text-sm text-slate-600">{update.publishedAt}</p>
              <p className="font-semibold">{update.title}</p>
              <p>{update.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-2 border-t border-sky-100/70 pt-4">
        <Link href="/reiseinformasjon" className="rounded-full bg-canal px-4 py-2 text-white">
          Reiseinformasjon
        </Link>
        <Link href="/rute" className="rounded-full bg-softgreen px-4 py-2 text-white">
          Se ruten
        </Link>
        <Link href="/mat-og-glutenfritt" className="rounded-full bg-canal px-4 py-2 text-white">
          Mat og glutenfritt
        </Link>
      </section>
    </div>
  );
}
