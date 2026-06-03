import { PageHeader } from "@/components/page-header";
import { getItinerary } from "@/lib/content";

export default async function RutePage() {
  const itinerary = await getItinerary();
  return (
    <div className="space-y-10">
      <PageHeader label="Navigasjon" title="Rute" lead="Kart og dag-for-dag plan langs kanalen." />

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-medium">Interaktivt rutekart</h2>
        <iframe
          title="Rutekart Whitchurch til Llangollen"
          src="https://www.google.com/maps?q=Whitchurch+Marina+Llangollen+Canal&output=embed"
          className="h-80 w-full border border-border"
          loading="lazy"
        />
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
