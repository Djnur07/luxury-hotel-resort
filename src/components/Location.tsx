import T from "@/components/T";

const places = [
  { name: "Padang Padang Beach", en: "5 min drive", id: "5 menit berkendara" },
  { name: "Uluwatu Temple", en: "10 min drive", id: "10 menit berkendara" },
  { name: "Jimbaran Bay", en: "25 min drive", id: "25 menit berkendara" },
  { name: "Ngurah Rai International Airport", en: "35 min drive", id: "35 menit berkendara" },
];

export default function Location() {
  return (
    <section id="location" className="bg-stone px-6 md:px-16 py-24">
      <div data-reveal className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-teak/30 bg-sage">
          <iframe
            title="Map of Pecatu, Bali"
            src="https://www.google.com/maps?q=Pecatu,+Bali&z=13&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
            <T en="Location" id="Lokasi" />
          </p>
          <h2 className="font-serif text-3xl xl:text-5xl leading-tight mt-3">
            <T en="Easy to reach" id="Mudah dijangkau" />
          </h2>
          <p className="mt-6 text-[15px] md:text-base">Jl. Bukit Tenang No. 8, Pecatu, Bali</p>
          <ul className="mt-8 divide-y divide-teak/30 border-y border-teak/30">
            {places.map((p) => (
              <li key={p.name} className="flex justify-between gap-4 py-4 text-[15px] md:text-[17px] xl:text-sm">
                <span className="min-w-0">{p.name}</span>
                <span className="shrink-0 text-teak-dark">
                  <T en={p.en} id={p.id} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
