import { PageHeader } from "@/components/page-header";

export default function BaatenPage() {
  const basics = ["Styring", "Sluser", "Vannpåfylling", "Toaletter", "Strøm"];
  const safety = [
    "Barn alltid med voksen nær vann",
    "Rolig tempo ved sluser",
    "Redningsvester klare for barn",
    "Nødkontakter lagret på alle mobiler",
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        label="Om bord"
        title="Båten"
        lead="Alt du trenger å vite om smalbåten, etikette og sikkerhet."
      />

      <section className="max-w-prose space-y-4 text-sm leading-relaxed text-foreground/85">
        <p>
          En smalbåt er en lang og smal kanalbåt laget for britiske kanaler. Tempoet er rolig, og alle kan delta i oppgaver om bord.
        </p>
        <p>
          Båtvett: snakk rolig under manøvrering, bruk sklisikre sko, og ha tydelige roller når vi går inn i sluser.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-2xl">Båtens grunnregler</h2>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {basics.map((item) => (
            <div key={item} className="bg-white p-6 text-sm uppercase tracking-[0.12em]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl">Sikkerhetssjekkliste</h2>
        <ul className="divide-y divide-border">
          {safety.map((item) => (
            <li key={item} className="py-4 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
