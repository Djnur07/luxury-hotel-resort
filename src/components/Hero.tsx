import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 md:px-8">
      <div className="relative h-[80vh] min-h-[520px] overflow-hidden rounded-2xl">
        <Image
          src="/images/eksterior-sore.jpg"
          alt="Serene Stay exterior at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/5 via-ink/10 to-ink/70" />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 text-linen">
          <p className="text-xs uppercase tracking-[0.2em]">
            Hotel &amp; Resort &middot; [Location]
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mt-3 max-w-3xl">
            A quiet place to rest
          </h1>
          <p className="mt-4 max-w-xl text-base text-linen/90">
            Rooms with natural light, tropical gardens, and warm, attentive service.
          </p>
        </div>
      </div>
    </section>
  );
}
