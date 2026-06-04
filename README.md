## Familie-nettside for kanalferien

Privat reiseportal for smalbåtferien Whitchurch - Llangollen i juli 2026.

### Teknologistack

- Next.js App Router + TypeScript
- Tailwind CSS
- Sanity CMS med Studio i `/studio`
- shadcn/ui-komponenter (grunnkomponenter)

### Kom i gang

```bash
npm run dev
npm run sanity:dev
```

Åpne `http://localhost:3000` for nettsiden og `http://localhost:3000/studio` for CMS.

### Miljøvariabler

Kopier `.env.example` til `.env.local` og fyll inn:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_WRITE_TOKEN` (for innsendingsskjema på `/opplevelser/foresla` og `/mat-og-glutenfritt/foresla` — opprett token i sanity.io/manage med skrivetilgang)
- `SITE_PASSWORD` (**påkrevd** for passordport — uten denne er siden låst til `/login`)
- `SITE_AUTH_SECRET` (valgfritt, anbefalt i produksjon — brukes til å signere auth-cookien)
- `SITE_PASSWORD_PROTECTION=false` (valgfritt — slår av porten lokalt)

### Seed-data for Sanity

Importer startinnhold:

```bash
npm run sanity:seed:import
npm run sanity:seed:restaurants
```

`sanity/seed-data.json` inneholder eksempeldata for reiserute, FAQ, attraksjoner og restauranter. `sanity:seed:restaurants` importerer kun restaurant-dokumentene (samme innhold som `lib/site-data.ts`).

### Deploy

Deploy med Vercel. Husk å sette samme Sanity-miljøvariabler i prosjektinnstillingene.

Sitemap og Open Graph-bilde genereres automatisk via App Router.
