import { defineField, defineType } from "sanity";

export const update = defineType({
  name: "update",
  title: "Oppdatering",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string" }),
    defineField({ name: "content", title: "Innhold", type: "text" }),
    defineField({ name: "publishedAt", title: "Publisert", type: "datetime" }),
  ],
});
