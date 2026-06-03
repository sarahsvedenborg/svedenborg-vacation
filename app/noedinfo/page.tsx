export default function NoedinfoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-red-700">Nødinformasjon</h1>
      <p className="card">
        Hurtigtilgang for telefonnumre og helsehjelp. Lagre siden på startskjermen.
      </p>
      <div className="grid gap-3">
        <a href="tel:+441948662533" className="card text-lg font-semibold">
          Whitchurch Marina: +44 1948 662 533
        </a>
        <a href="tel:999" className="card text-lg font-semibold">
          Nødnummer UK: 999
        </a>
        <a href="https://www.nhs.uk/" className="card text-lg font-semibold">
          NHS informasjon
        </a>
        <a href="https://canalrivertrust.org.uk/" className="card text-lg font-semibold">
          Canal & River Trust
        </a>
      </div>
    </div>
  );
}
