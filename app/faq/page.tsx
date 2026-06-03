import { getFaqs } from "@/lib/content";

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Vanlige spørsmål</h1>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <article key={faq.question} className="card">
            <h2 className="font-semibold">{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
