"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/lib/language";

const photos = [
  { src: "/images/kolam.jpg", alt: "Pool with sun loungers", tall: true },
  { src: "/images/kamar-tanaman-laut.jpg", alt: "Room with plants and sea view" },
  { src: "/images/dapur-makan.jpg", alt: "Kitchen and dining area" },
  { src: "/images/taman-atas.jpg", alt: "Garden from above", tall: true },
  { src: "/images/kamar-mandi.jpg", alt: "Bathroom with bathtub" },
  { src: "/images/tamu-membaca.jpg", alt: "Guest reading" },
  { src: "/images/detail-kayu.jpg", alt: "Wood detail" },
  { src: "/images/eksterior-pagi.jpg", alt: "Exterior in the morning" },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const lang = useLang();
  const t = (en: string, id: string) => (lang === "id" ? id : en);
  const open = index !== null;
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close, prev, next]);

  const arrow =
    "absolute top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-linen/15 text-linen hover:bg-linen/30";

  return (
    <section id="gallery" className="px-6 md:px-16 py-24">
      <div data-reveal className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
          {t("Gallery", "Galeri")}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
          {t("A closer look", "Lihat lebih dekat")}
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t("Open photo", "Buka foto")}: ${p.alt}`}
              className={`group relative overflow-hidden rounded-2xl cursor-zoom-in ${p.tall ? "row-span-2" : ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[index].alt}
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 md:p-16"
        >
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={photos[index].src}
              alt={photos[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button type="button" aria-label={t("Close", "Tutup")} onClick={close} className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-linen/15 text-linen hover:bg-linen/30">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button type="button" aria-label={t("Previous photo", "Foto sebelumnya")} onClick={(e) => { e.stopPropagation(); prev(); }} className={`${arrow} left-4`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label={t("Next photo", "Foto berikutnya")} onClick={(e) => { e.stopPropagation(); next(); }} className={`${arrow} right-4`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <p className="absolute bottom-4 inset-x-0 text-center text-xs text-linen/80">
            {index + 1} / {photos.length} &middot; {photos[index].alt}
          </p>
        </div>
      )}
    </section>
  );
}
