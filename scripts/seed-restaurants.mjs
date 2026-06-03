/**
 * Import restaurant documents from sanity/seed-data.json (stable rest-1 … rest-10 IDs).
 * Run: npm run sanity:seed:restaurants
 */
import { readFileSync, writeFileSync, unlinkSync } from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const seedPath = join(root, "sanity/seed-data.json");
const tmpPath = join(root, "sanity/.restaurants-import.ndjson");

const all = JSON.parse(readFileSync(seedPath, "utf8"));
const restaurants = all.filter((doc) => doc._type === "restaurant");

if (restaurants.length === 0) {
  console.error("No restaurant documents found in seed-data.json");
  process.exit(1);
}

const ndjson = restaurants.map((doc) => JSON.stringify(doc)).join("\n");
writeFileSync(tmpPath, `${ndjson}\n`);

try {
  execSync(`npx sanity dataset import "${tmpPath}" production --replace`, {
    cwd: root,
    stdio: "inherit",
  });
  console.log(`Imported ${restaurants.length} restaurants.`);
} finally {
  unlinkSync(tmpPath);
}
