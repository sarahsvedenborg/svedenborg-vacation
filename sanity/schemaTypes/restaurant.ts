import { defineField, defineType } from "sanity";

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Navn", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({ name: "glutenFreeRating", title: "Glutenfri rating (1-5)", type: "number" }),
    defineField({ name: "celiacFriendly", title: "Cøliaki-vennlig", type: "boolean" }),
    defineField({ name: "website", title: "Nettside", type: "url" }),
    defineField({ name: "location", title: "Sted", type: "string" }),
    defineField({ name: "notes", title: "Notater", type: "text" }),
    defineField({ name: "mapLink", title: "Kartlenke", type: "url" }),
    defineField({ name: "category", title: "Kategori", type: "string" }),
  ],
});
