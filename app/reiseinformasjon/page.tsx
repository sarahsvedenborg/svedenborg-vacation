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
        lead="Norge - Manchester - Whitchurch Marina - Llangollen - og hjem igjen"
      />

      <div className="itinerary">
        <FlightLeg label="Utreise" title="Avreise" flight={travel.flightTo} />
        <TransportLeg label="Ankomst" title="Fra flyplass til kanalbåt" transport={travel.transportTo} />
        <SpecialTravelLeg text={travel.sarahOgAmelieReise} />
        <BaggageLeg items={travel.baggage ?? []} />
        <FlightLeg label="Hjemreise" title="Hjemreise" flight={travel.flightFrom} />
        <TransportLeg label="Avreise" title="Fra kanalbåt til flyplass" transport={travel.transportFrom} />
      </div>
    </div>
  );
}
