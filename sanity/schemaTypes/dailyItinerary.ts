import { defineField, defineType } from "sanity";

export const dailyItinerary = defineType({
  name: "dailyItinerary",
  title: "Daglig reiseplan",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string" }),
    defineField({ name: "dayNumber", title: "Dagnummer", type: "number" }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({ name: "mapLocation", title: "Kartlenke", type: "url" }),
    defineField({ name: "photos", title: "Bilder", type: "array", of: [{ type: "image" }] }),
  ],
});
