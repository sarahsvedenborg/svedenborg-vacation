/**
 * Upsert route information and daily itinerary into Sanity.
 * Run: npm run sanity:seed:route
 * Requires SANITY_API_WRITE_TOKEN in .env
 */
import { readFileSync } from "fs";
import { createClient } from "@sanity/client";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const seedPath = join(root, "sanity/route-itinerary-seed.json");

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in environment.");
  process.exit(1);
}

const docs = JSON.parse(readFileSync(seedPath, "utf8"));
if (docs.length === 0) {
  console.error("No documents found in route-itinerary-seed.json");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "p51d587r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

let transaction = client.transaction();
for (const doc of docs) {
  transaction = transaction.createOrReplace(doc);
}

await transaction.commit();
console.log(`Upserted ${docs.length} route documents.`);
