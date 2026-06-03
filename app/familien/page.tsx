import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { travelers } from "@/lib/site-data";

export default function FamilienPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Mannskap"
        title="Familiekatalog"
        lead="Her er mannskapet for turen. Barna får egne morsomme roller som kan oppdateres hver dag."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {travelers.map((person) => (
          <div key={person.name} className="space-y-3">
            <Image
              src={person.photo}
              alt={person.name}
              width={600}
              height={400}
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="font-serif text-xl">{person.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
