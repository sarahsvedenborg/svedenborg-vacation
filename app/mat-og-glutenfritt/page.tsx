import { getRestaurants } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

const categories = ["Frokost", "Lunsj", "Middag", "Kafe", "Dagligvarer", "Nødlagre glutenfritt"];

export default async function MatOgGlutenfrittPage() {
  const restaurants = await getRestaurants();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Mat og glutenfritt</h1>
      <Badge className="text-sm">Cøliaki-vennlig</Badge>
      {categories.map((category) => (
        <section key={category} className="space-y-3">
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {restaurants
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.name} className="card">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="text-sm text-slate-600">Avstand/sted: {item.location}</p>
                  <p className="text-sm">Glutenfri score: {"⭐".repeat(item.glutenFreeRating)}</p>
                  <p className="text-sm">Notat: {item.notes}</p>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
