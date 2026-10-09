import Image from "next/image";
import T from "@/components/T";

const places = [
  {
    src: "/images/landmark.jpg",
    alt: "Old stone amphitheatre above the sea",
    title: { en: "Coastal Heritage Walk", id: "Jalan-jalan Situs Bersejarah" },
    text: {
      en: "An easy morning walk along the cliffs to old stone ruins overlooking the sea.",
      id: "Jalan pagi santai menyusuri tebing menuju reruntuhan batu kuno yang menghadap laut.",
    },
    time: { en: "15 min drive", id: "15 menit berkendara" },
  },
  {
    src: "/images/kafe-sekitar.jpg",
    alt: "Café terrace on a village street",
    title: { en: "Village Cafés", id: "Kafe Desa" },
    text: {
      en: "Small cafés and shops on a cobbled street, perfect for coffee and an afternoon stroll.",
      id: "Kafe dan toko kecil di jalan berbatu, cocok untuk ngopi dan jalan-jalan sore.",
    },
    time: { en: "10 min walk", id: "10 menit jalan kaki" },
  },
];

export default function Around() {
  return (
    <section id="around" className="px-6 md:px-16 py-24">
      <div data-reveal className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
          <T en="Explore" id="Jelajahi" />
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
          <T en="Around Serene Stay" id="Di sekitar Serene Stay" />
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-8">
          {places.map((p) => (
            <article key={p.src}>
              <div className="relative aspect-square md:aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex flex-col gap-0.5 md:mt-6 md:flex-row md:items-baseline md:justify-between md:gap-4">
                <h3 className="font-serif text-[16px] leading-tight md:text-2xl">
                  <T en={p.title.en} id={p.title.id} />
                </h3>
                <span className="shrink-0 text-[13px] md:text-xs text-teak-dark">
                  <T en={p.time.en} id={p.time.id} />
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-snug md:mt-3 md:text-base md:leading-relaxed">
                <T en={p.text.en} id={p.text.id} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
