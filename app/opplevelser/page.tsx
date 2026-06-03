import { PageHeader } from "@/components/page-header";
import { getAttractions } from "@/lib/content";

export default async function OpplevelserPage() {
  const attractions = await getAttractions();
  return (
    <div className="space-y-10">
      <PageHeader label="Utforsk" title="Se og gjøre" lead="Attraksjoner og opplevelser langs kanalen." />

      <div className="grid gap-8 sm:grid-cols-2">
        {attractions.map((attraction) => (
          <article key={attraction.title} className="border-b border-border pb-8">
            <h2 className="font-serif text-2xl">{attraction.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{attraction.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">{attraction.location}</p>
            <p className="mt-1 text-sm">Familievennlig: {"★".repeat(attraction.familyFriendly)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
