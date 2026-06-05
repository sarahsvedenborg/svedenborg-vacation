import { defineField, defineType } from "sanity";

export const dailyItinerary = defineType({
  name: "dailyItinerary",
  title: "Daglig reiseplan",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string" }),
    defineField({ name: "dayNumber", title: "Dagnummer", type: "number" }),
    defineField({
      name: "partofjourney",
      title: "Del av reisen",
      type: "string",
      options: {
        list: [
          { title: "Utreise", value: "utreise" },
          { title: "Hviledag", value: "hviledag" },
          { title: "Retur", value: "retur" },
        ],
      },
    }),
    defineField({
      name: "cruisingTime",
      title: "Seiltid",
      description: 'F.eks. "~2 timer" eller "Ca. 7,5 timer"',
      type: "string",
    }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({
      name: "info",
      title: "Tips / info",
      description: "Kort tips som vises nederst med lyspære-ikon.",
      type: "text",
    }),
    defineField({ name: "mapLocation", title: "Kartlenke", type: "url" }),
    defineField({ name: "photos", title: "Bilder", type: "array", of: [{ type: "image" }] }),
  ],
});
