import type { ReactNode } from "react";
import { Car, Luggage, Plane, Users } from "lucide-react";
import type { BaggageItem, FlightInfo, TransportInfo } from "@/lib/site-data";

function ItineraryField({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="itinerary-field">
      <p className="itinerary-field-label">{label}</p>
      <p className="itinerary-field-value">
        {value?.trim() ? value : <span className="itinerary-empty">Ikke oppgitt</span>}
      </p>
    </div>
  );
}

const emptyFlight: FlightInfo = {
  airline: "",
  flightNumbers: "",
  departure: "",
  arrival: "",
  terminal: "",
};

function ItineraryLeg({
  icon,
  label,
  title,
  children,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="itinerary-leg">
      <div className="flex flex-col items-start gap-3 md:items-center">
        <div className="itinerary-icon">{icon}</div>
        <p className="section-label md:text-center">{label}</p>
      </div>
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
        {children}
      </div>
    </article>
  );
}

export function FlightLeg({
  label,
  title,
  flight,
}: {
  label: string;
  title: string;
  flight: FlightInfo | null;
}) {
  const data = flight ?? emptyFlight;

  return (
    <ItineraryLeg icon={<Plane className="h-5 w-5" strokeWidth={1.5} />} label={label} title={title}>
      <div className="itinerary-meta">
        <ItineraryField label="Flyselskap" value={data.airline} />
        <ItineraryField label="Flynummer" value={data.flightNumbers} />
        <ItineraryField label="Terminal" value={data.terminal} />
        <ItineraryField label="Avreise" value={data.departure} />
        <ItineraryField label="Ankomst" value={data.arrival} />
      </div>
    </ItineraryLeg>
  );
}

export function TransportLeg({
  label,
  title,
  transport,
}: {
  label: string;
  title: string;
  transport: TransportInfo | null;
}) {
  const lines = transport?.lines ?? [];

  return (
    <ItineraryLeg icon={<Car className="h-5 w-5" strokeWidth={1.5} />} label={label} title={title}>
      {lines.length > 0 ? (
        <ul className="space-y-2 text-body">
          {lines.map((line, index) => (
            <li key={`${line}-${index}`} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="itinerary-empty">Ikke oppgitt</p>
      )}
    </ItineraryLeg>
  );
}

export function SpecialTravelLeg({ text }: { text: string | null }) {
  return (
    <ItineraryLeg
      icon={<Users className="h-5 w-5" strokeWidth={1.5} />}
      label="Spesial"
      title="Sarah og Amelie reise"
    >
      {text?.trim() ? (
        <p className="max-w-prose text-body whitespace-pre-line">
          {text}
        </p>
      ) : (
        <p className="itinerary-empty">Ikke oppgitt</p>
      )}
    </ItineraryLeg>
  );
}

export function BaggageLeg({ items }: { items: BaggageItem[] }) {
  return (
    <ItineraryLeg
      icon={<Luggage className="h-5 w-5" strokeWidth={1.5} />}
      label="Bagasje"
      title="Tillatte mål"
    >
      {items.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="rounded-lg border border-border bg-white p-4"
            >
              <p className="font-serif text-xl font-medium">{item.title?.trim() || "Uten tittel"}</p>
              <p className="mt-1 text-base text-text-body">
                {item.dimensions?.trim() ? item.dimensions : "Dimensjoner ikke oppgitt"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="itinerary-empty">Ingen bagasje lagt inn ennå.</p>
      )}
    </ItineraryLeg>
  );
}

export function PackingLeg({
  categories,
}: {
  categories: { title: string; items: string[] }[];
}) {
  return (
    <section className="border-t border-border pt-10">
      <p className="section-label mb-2">Forberedelser</p>
      <h2 className="font-serif text-3xl font-semibold">Pakkeliste</h2>
      {categories.length > 0 ? (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">
                {category.title?.trim() ? category.title : "Uten tittel"}
              </h3>
              {(category.items ?? []).length > 0 ? (
                <ul className="space-y-2 text-base text-text-body">
                  {category.items.map((item) => (
                    <li key={item} className="border-b border-border/80 pb-2 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="itinerary-empty text-sm">Ingen varer</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 itinerary-empty">Ingen pakkeliste lagt inn ennå.</p>
      )}
    </section>
  );
}
