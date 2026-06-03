import { PageHeader } from "@/components/page-header";

const emergencyLinks = [
  { href: "tel:+4403303330590", label: "Whitchurch Marina", value: "+44 0330 333 0590" },
  { href: "tel:999", label: "Nødnummer UK", value: "999" },
  { href: "https://canalrivertrust.org.uk/", label: "Canal & River Trust", value: "canalrivertrust.org.uk" },
];

export default function NoedinfoPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Viktig"
        title="Nødnumre"
        lead="Hurtigtilgang for telefonnumre."
      />

      <div className="divide-y divide-border">
        {emergencyLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex flex-col gap-1 py-6 transition hover:opacity-70 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="font-serif text-xl font-medium">{link.label}</span>
            <span className="text-base font-medium uppercase tracking-[0.1em]">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
