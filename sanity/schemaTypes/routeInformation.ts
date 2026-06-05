import { defineArrayMember, defineField, defineType } from "sanity";

export const routeInformation = defineType({
  name: "routeInformation",
  title: "Ruteinformasjon",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Introduksjon",
      description: "Vises over dag-for-dag-planen på Rute-siden.",
      type: "text",
    }),
    defineField({
      name: "routeFacts",
      title: "Rutefakta",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "routeFact",
          title: "Fakta",
          fields: [
            defineField({ name: "label", title: "Etikett", type: "string" }),
            defineField({ name: "value", title: "Verdi", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "cruisingNotesUrl",
      title: "Lenke til cruising notes",
      type: "url",
    }),
    defineField({
      name: "disclaimer",
      title: "Ansvarsfraskrivelse",
      type: "text",
    }),
  ],
});
