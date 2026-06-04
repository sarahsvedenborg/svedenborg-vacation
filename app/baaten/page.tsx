import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getBoatInformation } from "@/lib/content";

export default async function BaatenPage() {
  const boat = await getBoatInformation();

  const basics = ["Styring", "Sluser", "Vannpåfylling", "Toaletter", "Strøm"];
  const safety = [
    "Barn alltid med voksen nær vann",
    "Rolig tempo ved sluser",
    "Redningsvester klare for barn (og mormor)",
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        label="Om bord"
        title="Båten"
        lead="Alt du trenger å vite om kanalbåten."
        imageUrl={boat.headerImageUrl}
        imageAlt={boat.headerImageAlt}
      />

      {boat.boatViewUrl ? (
        <div className="info-box">
          <p className="text-body text-muted">Vil du utforske båten i tekst, bilder og video?</p>
          <Link
            href={boat.boatViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Se båten her
          </Link>
        </div>
      ) : null}

      <section className="max-w-prose space-y-4 text-body">
        <p>
          En narrowboat er en lang og smal kanalbåt laget for britiske kanaler. Tempoet er rolig, og alle kan delta i oppgaver om bord.
        </p>
        <p>
          Båtvett: snakk rolig under manøvrering, bruk sklisikre sko, og ha tydelige roller når vi går inn i sluser.
        </p>
      </section>

      {boat.keyFeatures.length > 0 ? (
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">Nøkkelfunksjoner</h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {boat.keyFeatures.map((feature, index) => (
              <div key={`${feature.title}-${index}`} className="bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {feature.title}
                </p>
                <p className="mt-2 font-serif text-xl font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/*   <section className="space-y-6">
        <h2 className="font-serif text-2xl font-medium">Båtens grunnregler</h2>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {basics.map((item) => (
            <div key={item} className="bg-white p-6 text-base font-medium uppercase tracking-[0.1em]">
              {item}
            </div>
          ))}
        </div>
      </section> */}

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-medium">Sikkerhetssjekkliste</h2>
        <ul className="divide-y divide-border">
          {safety.map((item) => (
            <li key={item} className="py-4 text-base text-text-body">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
