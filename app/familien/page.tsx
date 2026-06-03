import { travelers } from "@/lib/site-data";
import Image from "next/image";

export default function FamilienPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Familiekatalog</h1>
      <p className="card">
        Her er mannskapet for turen. Barna får egne morsomme roller som kan oppdateres hver dag.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {travelers.map((person) => (
          <div key={person.name} className="card space-y-2">
            <Image
              src={person.photo}
              alt={person.name}
              width={600}
              height={400}
              className="h-36 w-full rounded-xl object-cover"
            />
            <p className="font-semibold">{person.name}</p>
            <p className="text-sm text-slate-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
