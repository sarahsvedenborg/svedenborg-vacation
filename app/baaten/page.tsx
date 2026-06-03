export default function BaatenPage() {
  const basics = ["Styring", "Sluser", "Vannpåfylling", "Toaletter", "Strøm"];
  const safety = [
    "Barn alltid med voksen nær vann",
    "Rolig tempo ved sluser",
    "Redningsvester klare for barn",
    "Nødkontakter lagret på alle mobiler",
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-canal">Båten</h1>
      <section className="card space-y-2">
        <p>
          En smalbåt er en lang og smal kanalbåt laget for britiske kanaler. Tempoet er rolig, og alle kan delta i oppgaver om bord.
        </p>
        <p>
          Båtvett: snakk rolig under manøvrering, bruk sklisikre sko, og ha tydelige roller når vi går inn i sluser.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Båtens grunnregler</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {basics.map((item) => (
            <div key={item} className="card font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sikkerhetssjekkliste</h2>
        <div className="grid gap-2">
          {safety.map((item) => (
            <div key={item} className="card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
