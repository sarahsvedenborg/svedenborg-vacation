import Link from "next/link";
import { AttractionSubmissionForm } from "@/components/attraction-submission-form";
import { PageHeader } from "@/components/page-header";

export default function ForeslaAktivitetPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Utforsk"
        title="Foreslå en aktivitet"
        lead="Del en lenke familien bør sjekke ut langs kanalen."
      />
      <AttractionSubmissionForm />
      <p>
        <Link
          href="/opplevelser"
          className="text-sm font-semibold uppercase tracking-[0.1em] underline underline-offset-4"
        >
          Tilbake til opplevelser
        </Link>
      </p>
    </div>
  );
}
