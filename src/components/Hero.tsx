"use client";

import Image from "next/image";
import { useLang } from "@/lib/language";

export default function Hero() {
  const lang = useLang();
  const id = lang === "id";

  return (
    <section className="px-4 md:px-8">
      <div className="relative h-[80vh] min-h-[520px] overflow-hidden rounded-2xl">
        <div data-parallax className="absolute inset-0 scale-110">
          <Image
            src="/images/eksterior-sore.jpg"
            alt="Serene Stay exterior at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            src="/Video/hero-bg.mp4"
            poster="/images/eksterior-sore.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-ink/5 via-ink/10 to-ink/70" />
        <div data-hero-text className="absolute inset-x-0 bottom-0 px-8 pt-8 pb-24 md:px-14 md:pt-14 md:pb-28 text-linen">
          <p className="text-xs md:text-[24px] xl:text-[48px] uppercase tracking-[0.2em]">
            Hotel &amp; Resort
          </p>
          <h1
            className={
              id
                ? "font-serif text-[length:calc((100vw-6rem)/20)] md:text-[28px] xl:text-6xl leading-tight mt-3 whitespace-nowrap"
                : "font-serif text-5xl xl:text-6xl leading-tight mt-3 md:whitespace-nowrap"
            }
          >
            {id ? "Tempat beristirahat yang tenang" : "A quiet place to rest"}
          </h1>
          <p className="mt-4 text-[17px] md:text-[20px] xl:text-base text-linen/90 md:whitespace-nowrap">
            {id
              ? <>Kamar bercahaya alami, taman tropis,{" "}<br className="md:hidden" />dan pelayanan yang hangat.</>
              : "Rooms with natural light, tropical gardens, and warm, attentive service."}
          </p>
        </div>
      </div>
    </section>
  );
}
