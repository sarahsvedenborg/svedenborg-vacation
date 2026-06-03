import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAttractions, getExploreActivityLinks } from "@/lib/content";

function LinkList({
  items,
}: {
  items: { key: string; label: string; href?: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) =>
        item.href ? (
          <li key={item.key}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 py-3 text-sm font-medium transition hover:opacity-70"
            >
              <span>{item.label}</span>
              <span className="shrink-0 text-xs uppercase tracking-[0.1em] text-muted">Åpne</span>
            </Link>
          </li>
        ) : (
          <li key={item.key} className="py-3 text-sm font-medium">
            {item.label}
          </li>
        )
      )}
    </ul>
  );
}

export default async function OpplevelserPage() {
  const [attractions, exploreLinks] = await Promise.all([
    getAttractions(),
    getExploreActivityLinks(),
  ]);

  const attractionsWithImage = attractions.filter((a) => a.imageUrl);
  const attractionsWithoutImage = attractions.filter((a) => !a.imageUrl);

  const exploreListItems = exploreLinks.map((link, index) => ({
    key: `explore-${link.label}-${index}`,
    label: link.label,
    href: link.url,
  }));

  const suggestedListItems = attractionsWithoutImage.map((attraction, index) => ({
    key: `suggested-${attraction.title}-${index}`,
    label: attraction.title,
    href: attraction.moreInfoUrl ?? attraction.additionalUrl ?? undefined,
  }));

  return (
    <div className="space-y-10">
      <PageHeader label="Utforsk" title="Se og gjøre" lead="Attraksjoner og opplevelser langs kanalen." />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14">
        <div className="min-w-0 space-y-8">
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
                        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 35vw"
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

        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium md:text-3xl">Nettsider med forslag til aktiviteter</h2>
            {exploreListItems.length > 0 ? (
              <LinkList items={exploreListItems} />
            ) : (
              <p className="text-sm text-muted">Ingen lenker lagt inn ennå.</p>
            )}
          </section>

          {suggestedListItems.length > 0 ? (
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-medium md:text-3xl">
                Innsendte forslag som mangler bilde
              </h2>
              <LinkList items={suggestedListItems} />
            </section>
          ) : null}

          <Link href="/opplevelser/foresla" className="btn-primary block w-full text-center">
            Foreslå en aktivitet
          </Link>
        </aside>
      </div>
    </div>
  );
}
