import { PageHeader } from "@/components/page-header";
import { getFaqs } from "@/lib/content";

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <div className="space-y-10">
      <PageHeader label="Hjelp" title="Vanlige spørsmål" />

      <div className="divide-y divide-border">
        {faqs.map((faq) => (
          <article key={faq.question} className="space-y-3 py-8">
            <h2 className="font-serif text-2xl font-medium">{faq.question}</h2>
            <p className="text-body">{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
