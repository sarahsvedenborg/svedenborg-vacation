import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/lib/sanity-image";
import {
  attractions,
  faqs,
  itinerary,
  restaurants,
  siteSettings as siteSettingsFallback,
  travelInformation as travelInformationFallback,
  updates,
  type Attraction,
  exploreActivityLinksFallback,
  type ExploreActivityLink,
  type QuickFact,
  type SiteSettingsData,
} from "./site-data";

type SanitySiteSettings = Partial<
  Omit<SiteSettingsData, "heroImageUrl" | "heroImageAlt" | "foodHeaderImageUrl" | "foodHeaderImageAlt">
> & {
  heroImage?: { asset?: { _ref?: string } };
  heroImageAlt?: string;
  foodHeaderImage?: { asset?: { _ref?: string } };
  foodHeaderImageAlt?: string;
  quickFacts?: QuickFact[];
  exploreActivityLinks?: ExploreActivityLink[];
};

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T>(query, {}, { cache: "no-store" });
    if (!data || (Array.isArray(data) && data.length === 0)) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

export function getUpdates() {
  return safeFetch(
    `*[_type == "update"] | order(publishedAt desc)[0...4]{
      title,
      content,
      "publishedAt": coalesce(publishedAt, _createdAt)
    }`,
    updates
  );
}

export function getItinerary() {
  return safeFetch(
    `*[_type == "dailyItinerary"] | order(dayNumber asc){dayNumber, title, description}`,
    itinerary
  );
}

const attractionsFallbackByTitle = Object.fromEntries(
  attractions.map((item) => [item.title, item])
);

function mergeAttraction(item: Attraction): Attraction {
  const fallback = attractionsFallbackByTitle[item.title];
  return {
    ...item,
    imageUrl: item.imageUrl ?? fallback?.imageUrl ?? null,
    imageAlt: item.imageAlt ?? fallback?.imageAlt ?? item.title,
    moreInfoUrl: item.moreInfoUrl ?? fallback?.moreInfoUrl ?? null,
    additionalUrl: item.additionalUrl ?? fallback?.additionalUrl ?? null,
  };
}

export async function getAttractions() {
  const data = await safeFetch(
    `*[_type == "attraction"] | order(featured desc, title asc){
      title,
      description,
      location,
      familyFriendly,
      moreInfoUrl,
      additionalUrl,
      "imageUrl": images[0].asset->url,
      "imageAlt": coalesce(images[0].alt, title)
    }`,
    attractions
  );
  return data.map(mergeAttraction);
}

export function getRestaurants() {
  return safeFetch(
    `*[_type == "restaurant"] | order(category asc, name asc){name, category, description, location, glutenFreeRating, celiacFriendly, notes}`,
    restaurants
  );
}

export function getFaqs() {
  return safeFetch(`*[_type == "faq"] | order(_createdAt asc){question, answer}`, faqs);
}

export async function getTravelInformation() {
  const data = await safeFetch(
    `*[_type == "travelInformation"] | order(_updatedAt desc)[0]{
      "flightTo": coalesce(flightTo, flights[0]){airline, flightNumbers, departure, arrival, terminal},
      "flightFrom": flightFrom{airline, flightNumbers, departure, arrival, terminal},
      "transportTo": coalesce(
        transportTo,
        select(defined(transport) && count(transport) > 0 => {"lines": transport}, null)
      ){lines},
      "transportFrom": transportFrom{lines},
      sarahOgAmelieReise,
      baggage[]{title, dimensions},
      packingCategories[]{title, items}
    }`,
    travelInformationFallback
  );

  return {
    flightTo: data.flightTo ?? null,
    flightFrom: data.flightFrom ?? null,
    transportTo: data.transportTo ?? null,
    transportFrom: data.transportFrom ?? null,
    sarahOgAmelieReise: data.sarahOgAmelieReise ?? null,
    baggage: data.baggage ?? [],
    packingCategories: data.packingCategories ?? [],
  };
}

function mergeSiteSettings(data: SanitySiteSettings | null): SiteSettingsData {
  if (!data) return siteSettingsFallback;

  const heroImageUrl = data.heroImage
    ? urlForImage(data.heroImage).width(1600).height(900).fit("crop").url()
    : siteSettingsFallback.heroImageUrl;

  const foodHeaderImageUrl = data.foodHeaderImage
    ? urlForImage(data.foodHeaderImage).width(800).height(600).fit("crop").url()
    : siteSettingsFallback.foodHeaderImageUrl;

  return {
    title: data.title ?? siteSettingsFallback.title,
    route: data.route ?? siteSettingsFallback.route,
    tripDates: data.tripDates ?? siteSettingsFallback.tripDates,
    travelers: data.travelers ?? siteSettingsFallback.travelers,
    countdownDate: data.countdownDate ?? siteSettingsFallback.countdownDate,
    heroImageUrl,
    heroImageAlt: data.heroImageAlt ?? siteSettingsFallback.heroImageAlt,
    foodHeaderImageUrl,
    foodHeaderImageAlt: data.foodHeaderImageAlt ?? siteSettingsFallback.foodHeaderImageAlt,
    quickFacts:
      data.quickFacts && data.quickFacts.length > 0
        ? data.quickFacts
        : siteSettingsFallback.quickFacts,
    exploreActivityLinks:
      data.exploreActivityLinks && data.exploreActivityLinks.length > 0
        ? data.exploreActivityLinks
        : siteSettingsFallback.exploreActivityLinks,
  };
}

export async function getExploreActivityLinks(): Promise<ExploreActivityLink[]> {
  try {
    const data = await client.fetch<ExploreActivityLink[] | null>(
      `*[_type == "siteSettings"] | order(_updatedAt desc)[0].exploreActivityLinks[]{label, url}`
    );
    if (!data || data.length === 0) return exploreActivityLinksFallback;
    return data;
  } catch {
    return exploreActivityLinksFallback;
  }
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const data = await client.fetch<SanitySiteSettings | null>(
      `*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
        title,
        route,
        tripDates,
        travelers,
        countdownDate,
        heroImage,
        "heroImageAlt": heroImage.alt,
        foodHeaderImage,
        "foodHeaderImageAlt": foodHeaderImage.alt,
        quickFacts[]{title, text},
        exploreActivityLinks[]{label, url}
      }`
    );
    if (!data?.title && !data?.heroImage) return siteSettingsFallback;
    return mergeSiteSettings(data);
  } catch {
    return siteSettingsFallback;
  }
}
