import Image from "next/image";
import T from "@/components/T";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 pt-24">
      <div data-reveal className="mx-auto max-w-6xl grid gap-12 xl:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
            <T en="About" id="Tentang" />
          </p>
          <h2 className="font-serif text-2xl md:text-4xl leading-tight mt-3">
            <T en="Calm, close to nature" id="Tenang, dekat dengan alam" />
          </h2>
          <div className="mt-6 h-px w-16 bg-teak" />
          <p className="mt-6 text-base leading-relaxed md:max-w-2xl">
            <T
              en="Serene Stay is a small hotel surrounded by gardens, built with wood, stone, and natural light. Every room is designed for slow mornings and quiet evenings, with warm service that feels personal."
              id="Serene Stay adalah hotel kecil yang dikelilingi taman, dibangun dengan kayu, batu, dan cahaya alami. Setiap kamar dirancang untuk pagi yang santai dan malam yang tenang, dengan pelayanan hangat yang terasa personal."
            />
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/lobi.jpg"
              alt="Hotel lobby"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-12">
            <Image
              src="/images/tamu-kopi-balkon.jpg"
              alt="Guest enjoying coffee on the balcony"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
