import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getRestaurants, getSiteSettings } from "@/lib/content";

function RestaurantCard({
  name,
  description,
  location,
  notes,
  url,
}: {
  name: string;
  description: string;
  location: string | null;
  notes: string | null;
  url: string | null;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl font-medium">{name}</h3>
        {url ? (
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-muted group-hover:text-foreground">
            Åpne
          </span>
        ) : null}
      </div>
      {description ? <p className="mt-2 text-body">{description}</p> : null}
      {location ? (
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-muted">
          {location}
        </p>
      ) : null}
      {notes ? <p className="mt-2 text-base text-text-body">{notes}</p> : null}
    </>
  );

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white p-6 transition hover:bg-surface"
      >
        {content}
      </Link>
    );
  }

  return <article className="bg-white p-6">{content}</article>;
}

export default async function MatOgGlutenfrittPage() {
  const [restaurants, settings] = await Promise.all([getRestaurants(), getSiteSettings()]);

  return (
    <div className="space-y-12">
      <PageHeader
        label="Spisesteder"
        title="Mat og glutenfritt"
        lead="Spisesteder og butikker langs ruten."
        imageUrl={settings.foodHeaderImageUrl}
        imageAlt={settings.foodHeaderImageAlt}
      />

      {settings.foodPageLinkUrl ? (
        <div className="info-box">
          {settings.foodPageLinkIntro ? (
            <p className="text-body text-muted">{settings.foodPageLinkIntro}</p>
          ) : null}
          <Link
            href={settings.foodPageLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {settings.foodPageLinkLabel ?? "Åpne lenke"}
          </Link>
        </div>
      ) : null}

      <Link href="/mat-og-glutenfritt/foresla" className="btn-primary inline-block">
        Foreslå et spisested
      </Link>

      {restaurants.length > 0 ? (
        <section className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((item, index) => (
            <RestaurantCard
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              location={item.location}
              notes={item.notes}
              url={item.url}
            />
          ))}
        </section>
      ) : (
        <p className="text-body text-muted">Ingen spisesteder lagt inn ennå.</p>
      )}
    </div>
  );
}
