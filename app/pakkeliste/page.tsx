import { PageHeader } from "@/components/page-header";
import { PackingLeg } from "@/components/travel-sections";
import { getTravelInformation } from "@/lib/content";

export default async function PakkelistePage() {
  const travel = await getTravelInformation();

  return (
    <div className="space-y-2">
      <PageHeader
        label="Forberedelser"
        title="Pakkeliste"
        lead="Alt familien bør ha med før avreise."
      />

      {travel.packingIntro?.trim() ? (
        <aside className="mb-8 border border-border bg-surface p-6">
          <p className="text-body whitespace-pre-line">{travel.packingIntro}</p>
        </aside>
      ) : null}

      <PackingLeg categories={travel.packingCategories ?? []} hideHeader />
    </div>
  );
}
