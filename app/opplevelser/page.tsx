import { getAttractions } from "@/lib/content";

export default async function OpplevelserPage() {
  const attractions = await getAttractions();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Se og gjøre</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {attractions.map((attraction) => (
          <article key={attraction.title} className="card space-y-2">
            <h2 className="text-xl font-semibold">{attraction.title}</h2>
            <p>{attraction.description}</p>
            <p className="text-sm text-slate-600">Sted: {attraction.location}</p>
            <p className="text-sm">Familievennlig: {"⭐".repeat(attraction.familyFriendly)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
