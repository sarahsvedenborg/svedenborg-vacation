import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nettsideinnstillinger",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string" }),
    defineField({
      name: "route",
      title: "Rute (kort tekst under tittel)",
      type: "string",
    }),
    defineField({ name: "tripDates", title: "Reisedatoer", type: "string" }),
    defineField({
      name: "travelers",
      title: "Antall reisende",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero-bilde (forsiden)",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Bildetekst", type: "string" }],
    }),
    defineField({ name: "countdownDate", title: "Nedtellingsdato", type: "datetime" }),
    defineField({
      name: "quickFacts",
      title: "Raske fakta",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "quickFact",
          title: "Fakta",
          fields: [
            defineField({ name: "title", title: "Tittel", type: "string" }),
            defineField({ name: "text", title: "Tekst", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
