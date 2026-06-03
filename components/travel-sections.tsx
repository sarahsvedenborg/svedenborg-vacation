import type { BaggageItem, FlightInfo, TransportInfo } from "@/lib/site-data";

function FieldRow({ label, value }: { label: string; value?: string | null }) {
  return (
    <p>
      <span className="text-slate-600">{label}:</span>{" "}
      {value?.trim() ? value : <span className="text-slate-400">Ikke oppgitt</span>}
    </p>
  );
}

const emptyFlight: FlightInfo = {
  airline: "",
  flightNumbers: "",
  departure: "",
  arrival: "",
  terminal: "",
};

export function FlightSection({ title, flight }: { title: string; flight: FlightInfo | null }) {
  const data = flight ?? emptyFlight;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="card space-y-2">
        <FieldRow label="Flyselskap" value={data.airline} />
        <FieldRow label="Flynummer" value={data.flightNumbers} />
        <FieldRow label="Avreise" value={data.departure} />
        <FieldRow label="Ankomst" value={data.arrival} />
        <FieldRow label="Terminal" value={data.terminal} />
      </div>
    </section>
  );
}

export function TransportSection({
  title,
  transport,
}: {
  title: string;
  transport: TransportInfo | null;
}) {
  const lines = transport?.lines ?? [];

  return (
    <section className="card space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {lines.length > 0 ? (
        lines.map((paragraph, index) => <p key={`${paragraph}-${index}`}>{paragraph}</p>)
      ) : (
        <p className="text-slate-400">Ikke oppgitt</p>
      )}
    </section>
  );
}

export function BaggageSection({ items }: { items: BaggageItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Bagasje</h2>
      {items.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="card space-y-2">
              <FieldRow label="Tittel" value={item.title} />
              <FieldRow label="Dimensjoner" value={item.dimensions} />
            </div>
          ))}
        </div>
      ) : (
        <p className="card text-slate-400">Ingen bagasje lagt inn ennå.</p>
      )}
    </section>
  );
}
