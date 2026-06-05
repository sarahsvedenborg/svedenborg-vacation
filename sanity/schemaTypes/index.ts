import { attraction } from "./attraction";
import { boatInformation } from "./boatInformation";
import { dailyItinerary } from "./dailyItinerary";
import { routeInformation } from "./routeInformation";
import { faq } from "./faq";
import { restaurant } from "./restaurant";
import { siteSettings } from "./siteSettings";
import { travelInformation } from "./travelInformation";
import { update } from "./update";

export const schemaTypes = [
  siteSettings,
  dailyItinerary,
  routeInformation,
  attraction,
  restaurant,
  faq,
  update,
  travelInformation,
  boatInformation,
];
