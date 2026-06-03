import { getItinerary } from "@/lib/content";

export default async function RutePage() {
  const itinerary = await getItinerary();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Rute</h1>

      <section className="card space-y-3">
        <h2 className="text-xl font-semibold">Interaktivt rutekart</h2>
        <iframe
          title="Rutekart Whitchurch til Llangollen"
          src="https://www.google.com/maps?q=Whitchurch+Marina+Llangollen+Canal&output=embed"
          className="h-80 w-full rounded-xl border-0"
          loading="lazy"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Dag-for-dag plan</h2>
        <div className="space-y-3">
          {itinerary.map((day) => (
            <div key={day.dayNumber} className="card">
              <p className="text-sm text-slate-600">Dag {day.dayNumber}</p>
              <p className="font-semibold">{day.title}</p>
              <p>{day.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
