import { defineField, defineType } from "sanity";

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Navn", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({
      name: "website",
      title: "Nettside",
      description: "Kortet lenker hit. Kartlenke brukes som reserve hvis nettside mangler.",
      type: "url",
    }),
    defineField({ name: "location", title: "Sted", type: "string" }),
    defineField({ name: "notes", title: "Notater", type: "text" }),
    defineField({ name: "mapLink", title: "Kartlenke (reserve)", type: "url" }),
  ],
});
