import T from "@/components/T";

const reviews = [
  {
    text: "The quietest stay we have had in years. Waking up to the garden and the sea felt like a reset.",
    name: "Sarah M.",
    city: "Melbourne",
  },
  {
    text: "Warm staff, beautiful rooms, and the pool at sunset is worth the trip alone.",
    name: "Daniel K.",
    city: "Singapore",
  },
  {
    text: "Our kids loved the family room and the terrace. We are already planning to come back.",
    name: "Rina & Adi",
    city: "Jakarta",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="px-6 md:px-16 py-10 md:py-24">
      <div data-reveal className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
          <T en="Reviews" id="Ulasan" />
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-2 md:mt-3">
          <T en="What our guests say" id="Kata tamu kami" />
        </h2>
        <p className="mt-1 md:mt-3 text-[13px] md:text-xs italic text-teak-dark">
          <T en="Sample reviews for demonstration." id="Contoh ulasan untuk demonstrasi." />
        </p>
        <div className="-mx-6 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-8 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex w-[80%] shrink-0 snap-start flex-col justify-between gap-3 rounded-2xl border border-teak/30 p-5 md:w-auto md:gap-4 md:p-6"
            >
              <blockquote lang="en" className="text-[16px] italic leading-snug md:text-lg">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="text-[13px] md:text-[14px] text-teak-dark">
                {r.name} &middot; {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
