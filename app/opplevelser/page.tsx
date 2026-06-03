import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAttractions } from "@/lib/content";

export default async function OpplevelserPage() {
  const attractions = await getAttractions();

  return (
    <div className="space-y-10">
      <PageHeader label="Utforsk" title="Se og gjøre" lead="Attraksjoner og opplevelser langs kanalen." />

      <div className="grid gap-10 sm:grid-cols-2">
        {attractions.map((attraction, index) => (
          <article key={`${attraction.title}-${index}`} className="group space-y-4">
            {attraction.imageUrl ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.imageAlt ?? attraction.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-medium">{attraction.title}</h2>
              <p className="text-body">{attraction.description}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
                {attraction.location}
              </p>
              <p className="text-base">Familievennlig: {"★".repeat(attraction.familyFriendly)}</p>
              {(attraction.moreInfoUrl || attraction.additionalUrl) ? (
                <div className="flex flex-wrap gap-4 pt-1">
                  {attraction.moreInfoUrl ? (
                    <Link
                      href={attraction.moreInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-[0.1em] underline underline-offset-4"
                    >
                      Les mer
                    </Link>
                  ) : null}
                  {attraction.additionalUrl ? (
                    <Link
                      href={attraction.additionalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-[0.1em] underline underline-offset-4"
                    >
                      Ekstra lenke
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
