import { PageHeader } from "@/components/page-header";
import { getItinerary } from "@/lib/content";

export default async function RutePage() {
  const itinerary = await getItinerary();
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

      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-medium">Dag-for-dag plan (dette er kun et forslag)</h2>
        <div className="divide-y divide-border">
          {itinerary.map((day) => (
            <article key={day.dayNumber} className="grid gap-4 py-8 md:grid-cols-[80px_1fr]">
              <p className="section-label">Dag {day.dayNumber}</p>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium">{day.title}</h3>
                <p className="text-body">{day.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
