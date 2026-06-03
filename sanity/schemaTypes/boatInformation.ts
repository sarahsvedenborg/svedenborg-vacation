import { defineArrayMember, defineField, defineType } from "sanity";

export const boatInformation = defineType({
  name: "boatInformation",
  title: "Båten",
  type: "document",
  fields: [
    defineField({
      name: "headerImage",
      title: "Header-bilde",
      description: "Vises til høyre for tittelen på Båten-siden.",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Bildetekst", type: "string" }],
    }),
    defineField({
      name: "boatViewUrl",
      title: "Lenke til båt",
      description: "Vises øverst på Båten-siden med teksten «Se båten her».",
      type: "url",
    }),
    defineField({
      name: "keyFeatures",
      title: "Nøkkelfunksjoner",
      description: "Vises som rutenett på Båten-siden (som raske fakta på forsiden).",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "boatKeyFeature",
          title: "Nøkkelfunksjon",
          fields: [
            defineField({ name: "title", title: "Tittel", type: "string" }),
            defineField({ name: "text", title: "Tekst", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
