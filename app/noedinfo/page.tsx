import { PageHeader } from "@/components/page-header";

const emergencyLinks = [
  { href: "tel:+441948662533", label: "Whitchurch Marina", value: "+44 1948 662 533" },
  { href: "tel:999", label: "Nødnummer UK", value: "999" },
  { href: "https://www.nhs.uk/", label: "NHS informasjon", value: "nhs.uk" },
  { href: "https://canalrivertrust.org.uk/", label: "Canal & River Trust", value: "canalrivertrust.org.uk" },
];

export default function NoedinfoPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Viktig"
        title="Nødinformasjon"
        lead="Hurtigtilgang for telefonnumre og helsehjelp. Lagre siden på startskjermen."
      />

      <div className="divide-y divide-border">
        {emergencyLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col gap-1 py-6 transition hover:opacity-70 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="font-serif text-xl">{link.label}</span>
            <span className="text-sm uppercase tracking-[0.12em]">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
