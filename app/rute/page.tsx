import { Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { getItinerary, getRouteInformation } from "@/lib/content";
import type { DailyItineraryItem, JourneyPart } from "@/lib/site-data";

const journeySections: { key: JourneyPart; title: string }[] = [
  { key: "utreise", title: "Utreise" },
  { key: "hviledag", title: "Hviledag" },
  { key: "retur", title: "Retur" },
];

function DayArticle({ day }: { day: DailyItineraryItem }) {
  return (
    <article className="grid gap-4 py-8 md:grid-cols-[120px_1fr]">
      <div className="space-y-2">
        <p className="section-label">Dag {day.dayNumber}</p>
        {day.cruisingTime ? (
          <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 text-xs text-text-body">
            <Clock className="h-3.5 w-3.5 shrink-0 text-text-body" aria-hidden />
            {day.cruisingTime}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-medium">{day.title}</h3>
        <p className="text-body whitespace-pre-line">{day.description}</p>
        {day.info ? (
          <p className="flex items-start gap-2 pt-1 text-sm italic text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
            <span>{day.info}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default async function RutePage() {
  const [itinerary, routeInfo] = await Promise.all([getItinerary(), getRouteInformation()]);

  return (
    <div className="space-y-10">
      <PageHeader label="Navigasjon" title="Rute" lead="Kart og dag-for-dag plan langs kanalen." />

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-medium">Interaktivt rutekart</h2>
        <p className="text-body">
          Kartet viser rute fra <strong>Whitchurch Marina</strong> (start) til{" "}
          <strong>Llangollen</strong> (mål). Du kan zoome og flytte kartet i vinduet under.
        </p>
        <iframe
          title="Rutekart Whitchurch Marina til Llangollen"
          src="https://maps.google.com/maps?f=d&saddr=Whitchurch+Marina,+Shropshire,+UK&daddr=Llangollen,+Wales&hl=no&output=embed"
          className="h-80 w-full border border-border md:h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="text-sm text-muted">
          <a
            href="https://www.google.com/maps/dir/Whitchurch+Marina,+Shropshire,+UK/Llangollen,+Wales"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition hover:text-foreground"
          >
            Åpne ruten i Google Maps
          </a>
        </p>
      </section>

      {routeInfo.intro ? (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-medium">Llangollen tur/retur fra Whitchurch</h2>
          <div className="space-y-4 text-body whitespace-pre-line">{routeInfo.intro}</div>
          {/*  {routeInfo.routeFacts.length > 0 ? (
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {routeInfo.routeFacts.map((fact) => (
                <div key={fact.label} className="bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-serif text-lg font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          ) : null} */}
          {routeInfo.cruisingNotesUrl ? (
            <p className="text-body">
              <a
                href={routeInfo.cruisingNotesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline transition hover:text-accent-hover"
              >
                Les cruising notes
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="space-y-10">
        <h2 className="font-serif text-2xl font-medium">Dag-for-dag plan (dette er kun et forslag)</h2>
        {journeySections.map(({ key, title }) => {
          const days = itinerary.filter((day) => day.partofjourney === key);
          if (days.length === 0) return null;

          return (
            <div key={key} className="space-y-2">
              <h3 className="font-serif text-xl font-medium">{title}</h3>
              <div className="divide-y divide-border border-t border-border">
                {days.map((day) => (
                  <DayArticle key={day.dayNumber} day={day} />
                ))}
              </div>
            </div>
          );
        })}
        {itinerary.some((day) => !day.partofjourney) ? (
          <div className="divide-y divide-border border-t border-border">
            {itinerary
              .filter((day) => !day.partofjourney)
              .map((day) => (
                <DayArticle key={day.dayNumber} day={day} />
              ))}
          </div>
        ) : null}
        {routeInfo.disclaimer ? (
          <p className="border-t border-border pt-6 text-sm text-muted whitespace-pre-line">
            {routeInfo.disclaimer}
          </p>
        ) : null}
      </section>
    </div>
  );
}
