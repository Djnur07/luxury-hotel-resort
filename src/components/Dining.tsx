import Image from "next/image";
import T from "@/components/T";

const hours = [
  { en: "Breakfast", id: "Sarapan", time: "07:00 – 10:30" },
  { en: "Lunch", id: "Makan siang", time: "12:00 – 15:00" },
  { en: "Dinner", id: "Makan malam", time: "18:00 – 22:00" },
];

export default function Dining() {
  return (
    <section id="dining" className="bg-stone px-6 md:px-16 py-24">
      <div data-reveal className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/dapur-makan.jpg"
            alt="Open kitchen and dining room"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
            <T en="Dining" id="Bersantap" />
          </p>
          <h2 className="font-serif text-4xl md:text-3xl xl:text-5xl leading-tight mt-3">
            The Kitchen
          </h2>
          <div className="mt-6 h-px w-16 bg-teak" />
          <p className="mt-6 text-base md:text-lg xl:text-base leading-relaxed">
            <T
              en="Breakfast with fruit from our garden, slow lunches, and dinners that bring together Balinese flavours and Mediterranean classics. Open to guests and visitors."
              id="Sarapan dengan buah dari kebun kami, makan siang yang santai, dan makan malam yang memadukan cita rasa Bali dengan hidangan klasik Mediterania. Terbuka untuk tamu dan pengunjung."
            />
          </p>
          <ul className="mt-8 divide-y divide-teak/30 border-y border-teak/30">
            {hours.map((h) => (
              <li key={h.en} className="flex justify-between gap-4 py-4 text-sm">
                <span>
                  <T en={h.en} id={h.id} />
                </span>
                <span className="shrink-0 text-teak-dark">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
