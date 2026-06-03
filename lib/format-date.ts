export function formatPublishedDate(isoDate: string | null | undefined): string {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
