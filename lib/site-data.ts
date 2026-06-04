export type QuickFact = { title: string; text: string };

export type ExploreActivityLink = { label: string; url: string };

export type TripHighlight = { title: string; url: string | null };

export type SiteSettingsData = {
  title: string;
  route: string;
  tripDates: string;
  travelers: string;
  countdownDate: string;
  heroImageUrl: string;
  heroImageAlt: string;
  foodHeaderImageUrl: string;
  foodHeaderImageAlt: string;
  foodPageLinkIntro: string | null;
  foodPageLinkUrl: string | null;
  foodPageLinkLabel: string | null;
  quickFacts: QuickFact[];
  tripHighlights: TripHighlight[];
  exploreActivityLinks: ExploreActivityLink[];
};

export const exploreActivityLinksFallback: ExploreActivityLink[] = [
  { label: "Visit Llangollen", url: "https://www.visitwales.com/destinations/north-wales/llangollen" },
  { label: "Pontcysyllte Aqueduct (UNESCO)", url: "https://www.visitwrexham.co.uk/things-to-do/pontcysyllte-aqueduct" },
  { label: "Llangollen Railway", url: "https://www.llangollen-railway.co.uk/" },
  { label: "Canal & River Trust", url: "https://canalrivertrust.org.uk/" },
  { label: "Aktiviteter i Denbighshire", url: "https://www.denbighshire.gov.uk/en/visitor-information" },
];

export const emergencyContact = "+44 1948 662 533";

export const siteSettings: SiteSettingsData = {
  title: "Familieeventyr på smalbåt 2026",
  route: "Whitchurch Marina -> Llangollen -> Whitchurch Marina",
  tripDates: "Juli 2026",
  travelers: "10 reisende (2 voksne, 4 barn, 4 besteforeldre)",
  countdownDate: "2026-07-10T10:00:00.000Z",
  heroImageUrl:
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt: "Llangollen-kanalen",
  foodHeaderImageUrl:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  foodHeaderImageAlt: "Glutenfritt brød og frokost",
  foodPageLinkIntro: "Nyttig oversikt over glutenfri mat og reise i Storbritannia.",
  foodPageLinkUrl: "https://www.coeliac.org.uk/information-and-support/living-gluten-free/travel/",
  foodPageLinkLabel: "Coeliac UK reiseguide",
  quickFacts: [
    { title: "Startmarina", text: "Whitchurch Marina" },
    { title: "Sluttmarina", text: "Whitchurch Marina" },
    { title: "Rutelengde", text: "Ca. 74 km tur/retur" },
    { title: "Antall sluser", text: "Rundt 24 sluser" },
    { title: "Reisetid", text: "7-8 dager i rolig tempo" },
    { title: "Flyplass", text: "Manchester Airport (MAN)" },
    { title: "Nødkontakt", text: emergencyContact },
  ],
  tripHighlights: [
    {
      title: "Pontcysyllte-akvedukten",
      url: "https://www.visitwrexham.co.uk/things-to-do/pontcysyllte-aqueduct",
    },
    {
      title: "Chirk-akvedukten",
      url: "https://en.wikipedia.org/wiki/Chirk_Aqueduct",
    },
    {
      title: "Llangollen by",
      url: "https://www.visitwales.com/destinations/north-wales/llangollen",
    },
    {
      title: "Horseshoe Falls",
      url: "https://en.wikipedia.org/wiki/Horseshoe_Falls,_Wales",
    },
    {
      title: "Kanalens dyreliv",
      url: "https://canalrivertrust.org.uk/enjoy-the-waterways/canal-wildlife",
    },
    {
      title: "Kanalpuber",
      url: "https://canalrivertrust.org.uk/",
    },
  ],
  exploreActivityLinks: exploreActivityLinksFallback,
};

export const updates = [
  {
    title: "Leiebil bekreftet",
    content: "To biler er reservert på Manchester flyplass med barneseter.",
    publishedAt: "2026-06-15",
  },
  {
    title: "Båtinstruksjon booket",
    content: "Gjennomgang av sluser og sikkerhet blir kl. 14:00 ved marinaen.",
    publishedAt: "2026-06-20",
  },
];

export const itinerary = [
  { dayNumber: 1, title: "Whitchurch -> Grindley Brook", description: "Rolig start med første sluser og middag om bord." },
  { dayNumber: 2, title: "Videre mot Chirk", description: "Lunsjstopp underveis og kveld ved kanalpub." },
  { dayNumber: 3, title: "Pontcysyllte-akvedukten", description: "Dagens høydepunkt med utsikt over River Dee." },
  { dayNumber: 4, title: "Ankomst Llangollen", description: "Fortøyning, byvandring og is til barna." },
  { dayNumber: 5, title: "Utforsk Llangollen", description: "Togtur, fossetur eller rolig dag i sentrum." },
  { dayNumber: 6, title: "Retur starter", description: "Vend båten og cruise i kortere etapper." },
  { dayNumber: 7, title: "Tilbake ved marina", description: "Pakking, opprydding og siste familiebilde." },
];

export type Attraction = {
  title: string;
  description: string;
  location: string;
  familyFriendly: number;
  imageUrl?: string | null;
  imageAlt?: string | null;
  moreInfoUrl?: string | null;
  additionalUrl?: string | null;
};

export const attractions: Attraction[] = [
  {
    title: "Pontcysyllte-akvedukten",
    description: "UNESCO-område og spektakulær kanalbro over elven.",
    location: "Trevor Basin",
    familyFriendly: 5,
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pontcysyllte-akvedukten",
    moreInfoUrl: "https://www.visitwrexham.co.uk/things-to-do/pontcysyllte-aqueduct",
  },
  {
    title: "Chirk-akvedukten",
    description: "Klassisk britisk ingeniørkunst med nydelig utsikt.",
    location: "Chirk",
    familyFriendly: 4,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chirk-akvedukten",
    moreInfoUrl: "https://en.wikipedia.org/wiki/Chirk_Aqueduct",
  },
  {
    title: "Llangollen sentrum",
    description: "Koselige butikker, kafeer og promenade.",
    location: "Llangollen",
    familyFriendly: 5,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Llangollen sentrum",
    moreInfoUrl: "https://www.visitwales.com/destinations/north-wales/llangollen",
  },
  {
    title: "Horseshoe Falls",
    description: "Fin gåtur langs vannet, perfekt for piknik.",
    location: "Llangollen",
    familyFriendly: 5,
    imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Horseshoe Falls",
    moreInfoUrl: "https://en.wikipedia.org/wiki/Horseshoe_Falls,_Wales",
  },
  {
    title: "Llangollen Railway",
    description: "Veterantog med kort og barnevennlig rute.",
    location: "Llangollen",
    familyFriendly: 5,
    imageUrl: "https://images.unsplash.com/photo-1474511320723-9a752ddbc88e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Llangollen Railway",
    moreInfoUrl: "https://www.llangollen-railway.co.uk/",
  },
  {
    title: "Plas Newydd House",
    description: "Historisk hus med hager og familievennlig omvisning.",
    location: "Llangollen",
    familyFriendly: 4,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Plas Newydd House",
    moreInfoUrl: "https://www.plasnewyddllangollen.co.uk/",
  },
  {
    title: "Grindley Brook Locks",
    description: "Spennende slusetrapp med god plass til pause.",
    location: "Grindley Brook",
    familyFriendly: 4,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Grindley Brook Locks",
    moreInfoUrl: "https://canalrivertrust.org.uk/",
  },
  {
    title: "Trevor Basin",
    description: "Startpunkt for akvedukt-turer og kanalhistorie.",
    location: "Trevor",
    familyFriendly: 4,
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Trevor Basin",
    moreInfoUrl: "https://www.pontcysyllte-aqueduct.co.uk/",
  },
  {
    title: "Canal Wildlife Spotting",
    description: "Se svaner, hegrer, ender og sauer langs kanalen.",
    location: "Hele ruten",
    familyFriendly: 5,
    imageUrl: "https://images.unsplash.com/photo-1552728080-bcad9a938f9d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kanalens dyreliv",
    moreInfoUrl: "https://canalrivertrust.org.uk/enjoy-the-waterways/canal-wildlife",
  },
  {
    title: "Whitchurch Heritage Walk",
    description: "Kort historisk runde med lett terreng.",
    location: "Whitchurch",
    familyFriendly: 3,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Whitchurch",
    moreInfoUrl: "https://www.visitshropshire.co.uk/whitchurch",
  },
];

export type Restaurant = {
  name: string;
  description: string;
  location: string | null;
  notes: string | null;
  url: string | null;
};

export const restaurants: Restaurant[] = [
  {
    name: "The Boathouse Cafe",
    description: "Eggretter, grøt og glutenfritt brød.",
    location: "Whitchurch",
    notes: "Be om egen brødrister for cøliaki.",
    url: null,
  },
  {
    name: "Canal Side Bakery",
    description: "Kaffe, yoghurt og glutenfrie muffins.",
    location: "Chirk",
    notes: "Spør etter fersk batch uten krysskontaminering.",
    url: null,
  },
  {
    name: "Llangollen Deli",
    description: "Salater, supper og glutenfri quiche.",
    location: "Llangollen",
    notes: "Personalet kjenner cøliakibehov godt.",
    url: null,
  },
  {
    name: "Towpath Grill",
    description: "Grillet fisk, poteter og grønnsaker.",
    location: "Trevor",
    notes: "Frityr brukes også til panert mat.",
    url: null,
  },
  {
    name: "Bridge Inn",
    description: "Klassisk pubmat med allergimeny.",
    location: "Chirk",
    notes: "Informer om cøliaki ved bestilling.",
    url: null,
  },
  {
    name: "River Dee Kitchen",
    description: "Familierestaurant med glutenfri pasta.",
    location: "Llangollen",
    notes: "Trygg favoritt for hele familien.",
    url: null,
  },
  {
    name: "Aquaduct Arms",
    description: "Kjøtt, fisk og vegetar med GF-valg.",
    location: "Pontcysyllte",
    notes: "Noen retter kan tilpasses.",
    url: null,
  },
  {
    name: "Tea by the Locks",
    description: "Te, juice og glutenfri brownie.",
    location: "Grindley Brook",
    notes: "Sikre alternativer i egen disk.",
    url: null,
  },
  {
    name: "Canal Market",
    description: "Basisvarer og glutenfri pasta/knekkebrød.",
    location: "Whitchurch",
    notes: "Bra for proviant før avgang.",
    url: null,
  },
  {
    name: "Boots Pharmacy Food Shelf",
    description: "Kjeks, barer og små nød-varer.",
    location: "Llangollen",
    notes: "Nyttig hvis dere går tom om bord.",
    url: null,
  },
];

export const faqs = [
  { question: "Hvordan fungerer sluser?", answer: "Vi stopper båten, åpner/lukker porter rolig og følger instruksjonen fra mannskapet." },
  { question: "Er akvedukten trygg?", answer: "Ja, den er trygg og godt vedlikeholdt. Vi holder barn nær voksne under passering." },
  { question: "Kan barn styre båten?", answer: "Ja, med voksen ved siden av og kun i rolige partier uten sluser." },
  { question: "Hva gjør vi hvis det regner?", answer: "Vi bruker regntøy, holder dekk tørt og planlegger kortere etapper." },
  { question: "Finnes det WiFi på båten?", answer: "Mobildekning fungerer ofte, men varierer. Last ned kart og info på forhånd." },
];

export const travelers = [
  { name: "Bestefar Ole", role: "Kaptein", photo: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=600&q=80" },
  { name: "Bestemor Kari", role: "Navigatør", photo: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80" },
  { name: "Mamma", role: "Førstemann", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" },
  { name: "Pappa", role: "Maskinsjef", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
  { name: "Barn 1", role: "Slusehjelper", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&q=80" },
  { name: "Barn 2", role: "Dyreobservatør", photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80" },
  { name: "Barn 3", role: "Værreporter", photo: "https://images.unsplash.com/photo-1545696968-1a5245650b36?auto=format&fit=crop&w=600&q=80" },
  { name: "Barn 4", role: "Snacksansvarlig", photo: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=600&q=80" },
];

export type FlightInfo = {
  airline: string;
  flightNumbers: string;
  departure: string;
  arrival: string;
  terminal: string;
};

export type PackingCategory = {
  title: string;
  items: string[];
};

export type TransportInfo = {
  lines: string[];
};

export type BaggageItem = {
  title: string;
  dimensions: string;
};

export type TravelInformationData = {
  flightTo: FlightInfo | null;
  flightFrom: FlightInfo | null;
  transportTo: TransportInfo | null;
  transportFrom: TransportInfo | null;
  sarahOgAmelieReise: string | null;
  baggage: BaggageItem[];
  packingIntro: string | null;
  packingCategories: PackingCategory[];
};

export const travelInformation: TravelInformationData = {
  flightTo: {
    airline: "Scandinavian Airlines (eksempel)",
    flightNumbers: "SK 541",
    departure: "10. juli kl. 08:30",
    arrival: "10. juli kl. 10:15 (Manchester)",
    terminal: "T2 (bekreftes nær avreise)",
  },
  flightFrom: {
    airline: "Scandinavian Airlines (eksempel)",
    flightNumbers: "SK 542",
    departure: "17. juli kl. 18:00 (Manchester)",
    arrival: "17. juli kl. 21:00",
    terminal: "T2 (bekreftes nær avreise)",
  },
  transportTo: {
    lines: [
      "Etter landing henter vi leiebiler på Manchester Airport.",
      "Kjøretid til Whitchurch Marina er ca. 1 time og 10 minutter.",
      "Vi tar én felles matpause før innsjekk på båten.",
    ],
  },
  transportFrom: {
    lines: [
      "Vi leverer båten på marinaen og kjører tilbake til Manchester Airport.",
      "Planlegg god margin før flyavgang.",
    ],
  },
  sarahOgAmelieReise:
    "Sarah og Amelie reiser separat med egen rute og tidspunkter. Oppdater denne teksten med deres konkrete plan.",
  baggage: [
    { title: "Stor koffert", dimensions: "75 x 50 x 30 cm" },
    { title: "Håndbagasje", dimensions: "55 x 40 x 23 cm" },
  ],
  packingIntro:
    "Pakking skjer i myke bager og kofferter som passer inn i båtens begrensede plass. Merk egen bagasje med navn, og ta med det viktigste i håndbagasjen.",
  packingCategories: [
    {
      title: "Essensielt",
      items: ["Pass", "Reiseforsikring", "Mobil-lader", "Medisiner"],
    },
    {
      title: "Kanal-klær",
      items: ["Vanntett jakke", "Gode gåsko", "Varmt lag"],
    },
    {
      title: "Livet om bord",
      items: ["Drikkeflaske", "Powerbank", "Solbriller"],
    },
  ],
};

export type BoatInformationData = {
  boatViewUrl: string | null;
  headerImageUrl: string;
  headerImageAlt: string;
  keyFeatures: QuickFact[];
};

export const boatInformation: BoatInformationData = {
  boatViewUrl: null,
  headerImageUrl:
    "https://images.unsplash.com/photo-1598036597324-41922656e444?auto=format&fit=crop&w=800&q=80",
  headerImageAlt: "Smalbåt på kanalen",
  keyFeatures: [
    { title: "Lengde", text: "Ca. 18 meter" },
    { title: "Soveplasser", text: "6 faste + ekstra ved behov" },
    { title: "Styring", text: "Ror og enkel manøvrering i rolig tempo" },
    { title: "Sluser", text: "Elektrisk eller manuell — vi tar det sammen" },
    { title: "Strøm", text: "230V om bord når båten er koblet til landstrøm" },
    { title: "Vann", text: "Tanker fylles ved marinaer underveis" },
  ],
};
