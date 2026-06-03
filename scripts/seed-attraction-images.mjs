import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });

const attractions = [
  {
    id: "6ee4fc9b-3a5a-4e51-a04f-8a2a672d9234",
    alt: "Pontcysyllte-akvedukten",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "871b9a73-f642-4086-b8c6-a5bce8f44922",
    alt: "Chirk-akvedukten",
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "50cc9d02-9f5f-4d07-9283-83525ccd43bd",
    alt: "Llangollen sentrum",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "92de4611-d183-42b7-856f-5980a64b76b5",
    alt: "Horseshoe Falls",
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "5bf01572-01c7-46ab-bebb-f15bcb86bc45",
    alt: "Llangollen Railway",
    url: "https://images.unsplash.com/photo-1472495010058-65576a9959e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "73452c1d-a517-4343-a618-b79e52bbdf11",
    alt: "Plas Newydd House",
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c73e8035-e918-4a28-828a-2428998d6e32",
    alt: "Grindley Brook Locks",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4ae06f84-a1a7-4fbd-9cf3-b40567b4c629",
    alt: "Trevor Basin",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ef9665df-e43e-47c2-a35e-bead4ddc850b",
    alt: "Kanalens dyreliv",
    url: "https://images.unsplash.com/photo-1552728080-bcad9a938f9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bceff3c2-3070-4fff-95dc-ec68f6600dd9",
    alt: "Whitchurch",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
];

async function documentHasImage(id) {
  const doc = await client.fetch(
    `*[_id == $id][0]{ "hasImage": defined(images[0].asset) }`,
    { id }
  );
  return doc?.hasImage === true;
}

async function uploadFromUrl(url, filename) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  return client.assets.upload("image", buffer, { filename });
}

async function main() {
  for (const item of attractions) {
    if (await documentHasImage(item.id)) {
      console.log(`Skip (already has image): ${item.alt}`);
      continue;
    }
    try {
      console.log(`Uploading image for ${item.alt}...`);
      const asset = await uploadFromUrl(item.url, `${item.id}.jpg`);
      await client
        .patch(item.id)
        .set({
          images: [
            {
              _type: "image",
              asset: { _type: "reference", _ref: asset._id },
              alt: item.alt,
            },
          ],
        })
        .commit();
      console.log(`Done: ${item.alt}`);
    } catch (error) {
      console.error(`Failed for ${item.alt}:`, error.message);
    }
  }

  console.log("All attraction images uploaded.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
