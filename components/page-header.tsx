import Image from "next/image";

export function PageHeader({
  label,
  title,
  lead,
  imageUrl,
  imageAlt,
}: {
  label?: string;
  title: string;
  lead?: string;
  imageUrl?: string | null;
  imageAlt?: string;
}) {
  if (!imageUrl) {
    return (
      <header className="mb-10 space-y-4 border-b border-border pb-10">
        {label ? <p className="section-label">{label}</p> : null}
        <h1 className="page-title">{title}</h1>
        {lead ? <p className="page-lead">{lead}</p> : null}
      </header>
    );
  }

  return (
    <header className="mb-10 overflow-hidden border-b border-border">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(280px,40%)] md:items-stretch">
        <div className="order-2 flex flex-col justify-center space-y-4 py-8 md:order-1 md:py-10 md:pr-10 lg:pr-14">
          {label ? <p className="section-label">{label}</p> : null}
          <h1 className="page-title">{title}</h1>
          {lead ? <p className="page-lead max-w-xl">{lead}</p> : null}
        </div>

        <div className="relative order-1 -mx-6 aspect-[3/2] min-h-[200px] sm:aspect-[16/9] md:order-2 md:mx-0 md:aspect-auto md:min-h-[260px] md:border-l md:border-border lg:min-h-[300px]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </header>
  );
}
