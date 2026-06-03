import { PageHeader } from "@/components/page-header";
import { getRestaurants } from "@/lib/content";

const categories = ["Frokost", "Lunsj", "Middag", "Kafe", "Dagligvarer", "Nødlagre glutenfritt"];

export default async function MatOgGlutenfrittPage() {
  const restaurants = await getRestaurants();
  return (
    <div className="space-y-12">
      <PageHeader
        label="Spisesteder"
        title="Mat og glutenfritt"
        lead="Anbefalinger langs ruten med glutenfri vurdering."
      />

      <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em]">
        Cøliaki-vennlig
      </span>

      {categories.map((category) => (
        <section key={category} className="space-y-6">
          <h2 className="font-serif text-2xl">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {restaurants
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.name} className="border-b border-border pb-6">
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-foreground/85">{item.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
                    {item.location}
                  </p>
                  <p className="mt-1 text-sm">Glutenfri: {"★".repeat(item.glutenFreeRating)}</p>
                  {item.notes ? (
                    <p className="mt-2 text-sm text-muted">{item.notes}</p>
                  ) : null}
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
