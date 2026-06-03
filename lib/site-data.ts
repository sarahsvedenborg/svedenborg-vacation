export type QuickFact = { label: string; value: string };

export type SiteSettingsData = {
  title: string;
  route: string;
  tripDates: string;
  travelers: string;
  countdownDate: string;
  heroImageUrl: string;
  heroImageAlt: string;
};

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
};

export const quickFacts: QuickFact[] = [
  { label: "Startmarina", value: "Whitchurch Marina" },
  { label: "Sluttmarina", value: "Whitchurch Marina" },
  { label: "Rutelengde", value: "Ca. 74 km tur/retur" },
  { label: "Antall sluser", value: "Rundt 24 sluser" },
  { label: "Reisetid", value: "7-8 dager i rolig tempo" },
  { label: "Flyplass", value: "Manchester Airport (MAN)" },
  { label: "Nødkontakt", value: emergencyContact },
];

export const highlights = [
  "Pontcysyllte-akvedukten",
  "Chirk-akvedukten",
  "Llangollen by",
  "Horseshoe Falls",
  "Kanalens dyreliv",
  "Kanalpuber",
];

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

export const attractions = [
  { title: "Pontcysyllte-akvedukten", description: "UNESCO-område og spektakulær kanalbro over elven.", location: "Trevor Basin", familyFriendly: 5 },
  { title: "Chirk-akvedukten", description: "Klassisk britisk ingeniørkunst med nydelig utsikt.", location: "Chirk", familyFriendly: 4 },
  { title: "Llangollen sentrum", description: "Koselige butikker, kafeer og promenade.", location: "Llangollen", familyFriendly: 5 },
  { title: "Horseshoe Falls", description: "Fin gåtur langs vannet, perfekt for piknik.", location: "Llangollen", familyFriendly: 5 },
  { title: "Llangollen Railway", description: "Veterantog med kort og barnevennlig rute.", location: "Llangollen", familyFriendly: 5 },
  { title: "Plas Newydd House", description: "Historisk hus med hager og familievennlig omvisning.", location: "Llangollen", familyFriendly: 4 },
  { title: "Grindley Brook Locks", description: "Spennende slusetrapp med god plass til pause.", location: "Grindley Brook", familyFriendly: 4 },
  { title: "Trevor Basin", description: "Startpunkt for akvedukt-turer og kanalhistorie.", location: "Trevor", familyFriendly: 4 },
  { title: "Canal Wildlife Spotting", description: "Se svaner, hegrer, ender og sauer langs kanalen.", location: "Hele ruten", familyFriendly: 5 },
  { title: "Whitchurch Heritage Walk", description: "Kort historisk runde med lett terreng.", location: "Whitchurch", familyFriendly: 3 },
];

export const restaurants = [
  { name: "The Boathouse Cafe", category: "Frokost", description: "Eggretter, grøt og glutenfritt brød.", location: "Whitchurch", celiacFriendly: true, glutenFreeRating: 5, notes: "Be om egen brødrister for cøliaki." },
  { name: "Canal Side Bakery", category: "Frokost", description: "Kaffe, yoghurt og glutenfrie muffins.", location: "Chirk", celiacFriendly: true, glutenFreeRating: 4, notes: "Spør etter fersk batch uten krysskontaminering." },
  { name: "Llangollen Deli", category: "Lunsj", description: "Salater, supper og glutenfri quiche.", location: "Llangollen", celiacFriendly: true, glutenFreeRating: 5, notes: "Personalet kjenner cøliakibehov godt." },
  { name: "Towpath Grill", category: "Lunsj", description: "Grillet fisk, poteter og grønnsaker.", location: "Trevor", celiacFriendly: true, glutenFreeRating: 4, notes: "Frityr brukes også til panert mat." },
  { name: "Bridge Inn", category: "Middag", description: "Klassisk pubmat med allergimeny.", location: "Chirk", celiacFriendly: true, glutenFreeRating: 4, notes: "Informer om cøliaki ved bestilling." },
  { name: "River Dee Kitchen", category: "Middag", description: "Familierestaurant med glutenfri pasta.", location: "Llangollen", celiacFriendly: true, glutenFreeRating: 5, notes: "Trygg favoritt for hele familien." },
  { name: "Aquaduct Arms", category: "Middag", description: "Kjøtt, fisk og vegetar med GF-valg.", location: "Pontcysyllte", celiacFriendly: false, glutenFreeRating: 3, notes: "Noen retter kan tilpasses." },
  { name: "Tea by the Locks", category: "Kafe", description: "Te, juice og glutenfri brownie.", location: "Grindley Brook", celiacFriendly: true, glutenFreeRating: 4, notes: "Sikre alternativer i egen disk." },
  { name: "Canal Market", category: "Dagligvarer", description: "Basisvarer og glutenfri pasta/knekkebrød.", location: "Whitchurch", celiacFriendly: true, glutenFreeRating: 4, notes: "Bra for proviant før avgang." },
  { name: "Boots Pharmacy Food Shelf", category: "Nødlagre glutenfritt", description: "Kjeks, barer og små nød-varer.", location: "Llangollen", celiacFriendly: true, glutenFreeRating: 4, notes: "Nyttig hvis dere går tom om bord." },
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
