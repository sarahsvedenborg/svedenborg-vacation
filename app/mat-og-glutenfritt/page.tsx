import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getRestaurants, getSiteSettings } from "@/lib/content";

const categories = ["Frokost", "Lunsj", "Middag", "Kafe", "Dagligvarer", "Nødlagre glutenfritt"];

export default async function MatOgGlutenfrittPage() {
  const [restaurants, settings] = await Promise.all([getRestaurants(), getSiteSettings()]);

  return (
    <div className="space-y-12">
      <PageHeader
        label="Spisesteder"
        title="Mat og glutenfritt"
        lead="Anbefalinger langs ruten med glutenfri vurdering."
        imageUrl={settings.foodHeaderImageUrl}
        imageAlt={settings.foodHeaderImageAlt}
      />

      {settings.foodPageLinkUrl ? (
        <div className="flex flex-wrap items-center gap-4 border border-border bg-surface px-6 py-5">
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

      <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em]">
        Cøliaki-vennlig
      </span>

      {categories.map((category) => (
        <section key={category} className="space-y-6">
          <h2 className="font-serif text-2xl font-medium">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {restaurants
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.name} className="border-b border-border pb-6">
                  <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                  <p className="mt-2 text-body">{item.description}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-muted">
                    {item.location}
                  </p>
                  <p className="mt-1 text-base">Glutenfri: {"★".repeat(item.glutenFreeRating)}</p>
                  {item.notes ? (
                    <p className="mt-2 text-base text-text-body">{item.notes}</p>
                  ) : null}
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
