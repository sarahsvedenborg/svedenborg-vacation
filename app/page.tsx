import Link from "next/link";
import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { highlights } from "@/lib/site-data";
import { getSiteSettings, getUpdates } from "@/lib/content";
import { formatPublishedDate } from "@/lib/format-date";

export default async function Home() {
  const [updates, settings] = await Promise.all([getUpdates(), getSiteSettings()]);

  return (
    <div className="space-y-16">
      <section className="relative -mx-6 overflow-hidden md:-mx-6 md:rounded-none">
        <div className="relative h-[52vh] min-h-[320px] w-full md:h-[70vh]">
          <Image
            src={settings.heroImageUrl}
            alt={settings.heroImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center text-white">
              <p className="section-label mb-4 text-white/80">Juli 2026</p>
              <h1 className="font-serif text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
                {settings.title}
              </h1>
              <p className="mt-4 max-w-lg text-xs uppercase tracking-[0.2em] text-white/90 md:text-sm">
                {settings.route}
              </p>
              <Link
                href="/reiseinformasjon"
                className="btn-primary mt-8 border-white text-white hover:bg-white hover:text-foreground"
              >
                REISEINFO - FLY
              </Link>
            </div>
            <div className="border-t border-white/20 bg-black/35 px-6 py-5 backdrop-blur-sm">
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                    Reisedatoer
                  </p>
                  <p className="font-serif text-xl font-medium text-white md:text-2xl">
                    {settings.tripDates}
                  </p>
                  <p className="text-sm text-white/85">{settings.travelers}</p>
                </div>
                <Countdown targetDate={settings.countdownDate} variant="overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          {/* <p className="section-label mb-2">Før avreise</p> */}
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Raske fakta</h2>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {settings.quickFacts.map((fact, index) => (
            <div key={`${fact.title}-${index}`} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {fact.title}
              </p>
              <p className="mt-2 font-serif text-xl font-medium">{fact.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          {/* <p className="section-label mb-2">Underveis</p> */}
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Reisens høydepunkter</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="border-b border-border pb-4">
              <p className="font-serif text-xl font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4">
        <Link href="/reiseinformasjon" className="btn-primary">
          Reiseinformasjon
        </Link>
        <Link href="/rute" className="btn-primary">
          Se ruten
        </Link>
        <Link href="/mat-og-glutenfritt" className="btn-primary">
          Mat og glutenfritt
        </Link>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          {/*  <p className="section-label mb-2">Nyheter</p> */}
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Siste oppdateringer</h2>
        </div>
        <div className="divide-y divide-border">
          {updates.map((update, index) => {
            const dateLabel = formatPublishedDate(update.publishedAt);
            return (
              <article
                key={`${update.title}-${index}`}
                className="grid gap-6 py-8 md:grid-cols-[160px_1fr]"
              >
                {dateLabel ? (
                  <time
                    dateTime={update.publishedAt}
                    className="font-serif text-xl font-medium text-foreground md:text-2xl"
                  >
                    {dateLabel}
                  </time>
                ) : (
                  <span className="text-sm text-muted">Uten dato</span>
                )}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-medium">{update.title}</h3>
                  <p className="text-body">{update.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4 border-t border-border pt-10">
        <Link href="/noedinfo" className="btn-primary">
          Nødinfo
        </Link>
      </section>
    </div>
  );
}
