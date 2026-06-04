import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { RestaurantSubmissionForm } from "@/components/restaurant-submission-form";

export default function ForeslaSpisestedPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Spisesteder"
        title="Foreslå et spisested"
        lead="Del et sted familien bør sjekke ut langs ruten."
      />
      <RestaurantSubmissionForm />
      <p>
        <Link
          href="/mat-og-glutenfritt"
          className="text-sm font-semibold uppercase tracking-[0.1em] underline underline-offset-4"
        >
          Tilbake til mat og glutenfritt
        </Link>
      </p>
    </div>
  );
}
