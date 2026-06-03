"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getWriteClient } from "@/lib/sanity-write-client";
import { slugify } from "@/lib/slugify";

export type SubmitAttractionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitAttraction(
  _prevState: SubmitAttractionState,
  formData: FormData
): Promise<SubmitAttractionState> {
  const honeypot = formData.get("company")?.toString();
  if (honeypot) {
    redirect("/opplevelser");
  }

  const title = formData.get("title")?.toString().trim() ?? "";
  const url = formData.get("url")?.toString().trim() ?? "";

  if (title.length < 2) {
    return { status: "error", message: "Skriv inn en tittel (minst 2 tegn)." };
  }

  if (!url) {
    return { status: "error", message: "Skriv inn en URL." };
  }

  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return { status: "error", message: "URL må starte med http:// eller https://." };
    }
  } catch {
    return { status: "error", message: "URL-en ser ikke gyldig ut." };
  }

  const client = getWriteClient();
  if (!client) {
    return {
      status: "error",
      message: "Innsending er ikke aktivert. Legg til SANITY_API_WRITE_TOKEN i miljøvariabler.",
    };
  }

  const slug = slugify(title);
  if (!slug) {
    return { status: "error", message: "Tittelen må inneholde bokstaver eller tall." };
  }

  try {
    await client.create({
      _id: `attraction-innslag-${randomUUID()}`,
      _type: "attraction",
      title,
      slug: { _type: "slug", current: slug },
      moreInfoUrl: url,
      description: "Innsendt av familie.",
      featured: false,
      familyFriendly: 3,
    });

    revalidatePath("/opplevelser");
    redirect("/opplevelser");
  } catch {
    return {
      status: "error",
      message: "Noe gikk galt ved lagring. Prøv igjen om litt.",
    };
  }
}
