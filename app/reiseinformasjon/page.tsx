import { PageHeader } from "@/components/page-header";
import { BaggageLeg, FlightLeg, SpecialTravelLeg, TransportLeg } from "@/components/travel-sections";
import { getTravelInformation } from "@/lib/content";

export default async function ReiseinformasjonPage() {
  const travel = await getTravelInformation();

  return (
    <div className="space-y-2">
      <PageHeader
        label="Reiseplan"
        title="Reiseinformasjon"
        lead="Din komplette reiserute — fly, transport og bagasje for kanalferien."
      />

      <div className="itinerary">
        <FlightLeg label="Utreise" title="Fly til" flight={travel.flightTo} />
        <TransportLeg label="Ankomst" title="Transport til" transport={travel.transportTo} />
        <SpecialTravelLeg text={travel.sarahOgAmelieReise} />
        <BaggageLeg items={travel.baggage ?? []} />
        <FlightLeg label="Hjemreise" title="Fly fra" flight={travel.flightFrom} />
        <TransportLeg label="Avreise" title="Transport fra" transport={travel.transportFrom} />
      </div>
    </div>
  );
}
