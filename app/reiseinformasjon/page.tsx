import {
  BaggageSection,
  FlightSection,
  TransportSection,
} from "@/components/travel-sections";
import { getTravelInformation } from "@/lib/content";

export default async function ReiseinformasjonPage() {
  const travel = await getTravelInformation();
  const baggage = travel.baggage ?? [];
  const packingCategories = travel.packingCategories ?? [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Reiseinformasjon</h1>

      <FlightSection title="Fly til" flight={travel.flightTo} />
      <FlightSection title="Fly fra" flight={travel.flightFrom} />
      <TransportSection title="Transport til" transport={travel.transportTo} />
      <TransportSection title="Transport fra" transport={travel.transportFrom} />

      <section className="card space-y-2">
        <h2 className="text-xl font-semibold">Sarah og Amelie reise</h2>
        {travel.sarahOgAmelieReise?.trim() ? (
          <p className="whitespace-pre-line">{travel.sarahOgAmelieReise}</p>
        ) : (
          <p className="text-slate-400">Ikke oppgitt</p>
        )}
      </section>

      <BaggageSection items={baggage} />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pakkeliste</h2>
        {packingCategories.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-3">
            {packingCategories.map((category) => (
              <div key={category.title} className="card">
                <h3 className="font-semibold">
                  {category.title?.trim() ? category.title : "Uten tittel"}
                </h3>
                {(category.items ?? []).length > 0 ? (
                  <ul className="list-inside list-disc">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-400">Ingen varer lagt inn</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="card text-slate-400">Ingen pakkeliste lagt inn ennå.</p>
        )}
      </section>
    </div>
  );
}
