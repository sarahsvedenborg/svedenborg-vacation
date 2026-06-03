export function PageHeader({
  label,
  title,
  lead,
}: {
  label?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-10 space-y-4 border-b border-border pb-10">
      {label ? <p className="section-label">{label}</p> : null}
      <h1 className="page-title">{title}</h1>
      {lead ? <p className="page-lead">{lead}</p> : null}
    </header>
  );
}
