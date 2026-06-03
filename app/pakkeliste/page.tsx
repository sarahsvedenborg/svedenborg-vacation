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
      <PackingLeg categories={travel.packingCategories ?? []} hideHeader />
    </div>
  );
}
