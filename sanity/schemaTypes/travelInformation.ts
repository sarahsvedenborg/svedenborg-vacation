import { defineArrayMember, defineField, defineType } from "sanity";

const flightFields = [
  defineField({ name: "airline", title: "Flyselskap", type: "string" }),
  defineField({ name: "flightNumbers", title: "Flynummer", type: "string" }),
  defineField({ name: "departure", title: "Avreise", type: "string" }),
  defineField({ name: "arrival", title: "Ankomst", type: "string" }),
  defineField({ name: "terminal", title: "Terminal", type: "string" }),
];

const transportFields = [
  defineField({
    name: "lines",
    title: "Avsnitt",
    description: "Én linje per avsnitt",
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  }),
];

export const travelInformation = defineType({
  name: "travelInformation",
  title: "Reiseinformasjon",
  type: "document",
  fields: [
    defineField({
      name: "flightTo",
      title: "Fly til",
      type: "object",
      fields: flightFields,
    }),
    defineField({
      name: "flightFrom",
      title: "Fly fra",
      type: "object",
      fields: flightFields,
    }),
    defineField({
      name: "transportTo",
      title: "Transport til",
      type: "object",
      fields: transportFields,
    }),
    defineField({
      name: "transportFrom",
      title: "Transport fra",
      type: "object",
      fields: transportFields,
    }),
    defineField({
      name: "sarahOgAmelieReise",
      title: "Sarah og Amelie reise",
      type: "text",
    }),
    defineField({
      name: "baggage",
      title: "Bagasje",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "baggageItem",
          title: "Bagasje",
          fields: [
            defineField({ name: "title", title: "Tittel", type: "string" }),
            defineField({ name: "dimensions", title: "Dimensjoner", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "packingIntro",
      title: "Infoboks (pakkeliste)",
      description: "Vises over kategoriene på pakkeliste-siden.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "packingCategories",
      title: "Pakkeliste",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "packingCategory",
          title: "Pakkekategori",
          fields: [
            defineField({ name: "title", title: "Kategorinavn", type: "string" }),
            defineField({
              name: "items",
              title: "Varer",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
      ],
    }),
  ],
});
