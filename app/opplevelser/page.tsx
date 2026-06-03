import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAttractions, getExploreActivityLinks } from "@/lib/content";

export default async function OpplevelserPage() {
  const [attractions, exploreLinks] = await Promise.all([
    getAttractions(),
    getExploreActivityLinks(),
  ]);

  const attractionsWithImage = attractions.filter((a) => a.imageUrl);
  const attractionsWithoutImage = attractions.filter((a) => !a.imageUrl);

  return (
    <div className="space-y-10">
      <PageHeader label="Utforsk" title="Se og gjøre" lead="Attraksjoner og opplevelser langs kanalen." />

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-medium md:text-3xl">Nettsider med forslag til aktiviteter</h2>
        {exploreLinks.length > 0 ? (
          <ul className="divide-y divide-border border-y border-border">
            {exploreLinks.map((link, index) => (
              <li key={`${link.label}-${index}`}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 text-base font-medium transition hover:opacity-70"
                >
                  <span>{link.label}</span>
                  <span className="text-sm uppercase tracking-[0.1em] text-muted">Åpne</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-body text-muted">Ingen lenker lagt inn ennå.</p>
        )}
      </section>

      <Link href="/opplevelser/foresla" className="btn-primary inline-block">
        Foreslå en aktivitet
      </Link>

      {attractionsWithoutImage.length > 0 ? (
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-medium md:text-3xl">
            Innsendte forslag som mangler bilde
          </h2>
          <ul className="divide-y divide-border border-y border-border">
            {attractionsWithoutImage.map((attraction, index) => {
              const href = attraction.moreInfoUrl ?? attraction.additionalUrl;
              if (!href) {
                return (
                  <li key={`${attraction.title}-${index}`} className="py-4 text-base font-medium">
                    {attraction.title}
                  </li>
                );
              }
              return (
                <li key={`${attraction.title}-${index}`}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 text-base font-medium transition hover:opacity-70"
                  >
                    <span>{attraction.title}</span>
                    <span className="text-sm uppercase tracking-[0.1em] text-muted">Åpne</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-medium md:text-3xl">Noen utvalgte aktiviteter</h2>
        {attractionsWithImage.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {attractionsWithImage.map((attraction, index) => (
              <article key={`${attraction.title}-${index}`} className="group space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={attraction.imageUrl!}
                    alt={attraction.imageAlt ?? attraction.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-medium">{attraction.title}</h3>
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
        ) : (
          <p className="text-body text-muted">Ingen aktiviteter med bilde ennå.</p>
        )}
      </section>
    </div>
  );
}
