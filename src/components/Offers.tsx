import T from "@/components/T";

const WA_NUMBER = "6281234567890";

const offers = [
  {
    tag: { en: "Long stay", id: "Menginap lama" },
    title: { en: "Stay 3, Pay 2", id: "Menginap 3, Bayar 2" },
    text: {
      en: "Book three nights and the third one is on us. Valid for arrivals Sunday to Thursday.",
      id: "Pesan tiga malam, malam ketiga gratis. Berlaku untuk kedatangan Minggu sampai Kamis.",
    },
  },
  {
    tag: { en: "Couples", id: "Pasangan" },
    title: { en: "Honeymoon Escape", id: "Paket Bulan Madu" },
    text: {
      en: "Ocean Suite with flowers on arrival, a 60-minute couples' spa, and a candlelit dinner in the garden.",
      id: "Ocean Suite dengan bunga saat tiba, spa pasangan 60 menit, dan makan malam diterangi lilin di taman.",
    },
  },
  {
    tag: { en: "Family", id: "Keluarga" },
    title: { en: "Family Holiday", id: "Liburan Keluarga" },
    text: {
      en: "Family Room with daily breakfast for four. Children under 6 stay free.",
      id: "Family Room dengan sarapan harian untuk empat orang. Anak di bawah 6 tahun menginap gratis.",
    },
  },
];

export default function Offers() {
  return (
    <div id="offers" className="mt-12 md:mt-16">
      <h3 className="font-serif text-xl md:text-2xl">
        <T en="Special offers" id="Penawaran spesial" />
      </h3>
      <div className="-mx-6 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
        {offers.map((o) => (
          <article
            key={o.title.en}
            className="flex w-[80%] shrink-0 snap-start flex-col rounded-xl border border-teak/40 bg-linen/60 p-4 md:w-auto xl:p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-teak-dark">
              <T en={o.tag.en} id={o.tag.id} />
            </p>
            <h4 className="mt-1 whitespace-nowrap font-serif text-lg md:text-[14px] xl:text-lg">
              <T en={o.title.en} id={o.title.id} />
            </h4>
            <p className="mt-1 flex-1 text-pretty text-[14px] leading-snug xl:text-[15px]">
              <T en={o.text.en} id={o.text.id} />
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hello, I am interested in the "${o.title.en}" offer.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 self-start whitespace-nowrap rounded-full border border-teak px-4 py-1.5 text-[14px] md:px-3 xl:px-5 xl:py-2 xl:text-sm font-semibold text-ink hover:bg-teak hover:text-ink transition-colors"
            >
              <T en="Ask about this offer" id="Tanya penawaran ini" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
