import { defineField, defineType } from "sanity";

export const attraction = defineType({
  name: "attraction",
  title: "Attraksjon",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Bildetekst", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "moreInfoUrl",
      title: "Les mer (URL)",
      type: "url",
      description: "Lenke til offisiell side, Wikipedia eller annen kilde.",
    }),
    defineField({
      name: "additionalUrl",
      title: "Ekstra URL",
      type: "url",
      description: "Valgfri ekstra lenke, f.eks. kart, booking eller praktisk info.",
    }),
    defineField({ name: "location", title: "Sted", type: "string" }),
    defineField({ name: "familyFriendly", title: "Familievennlig (1-5)", type: "number" }),
    defineField({ name: "featured", title: "Fremhevet", type: "boolean", initialValue: false }),
  ],
});
