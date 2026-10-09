import T from "@/components/T";

const icons: Record<string, React.ReactNode> = {
  wifi: (
    <>
      <path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  pool: (
    <path d="M2 16c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0M8 8h8" />
  ),
  restaurant: (
    <path d="M4 10h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 12h1.5a2.5 2.5 0 0 1 0 5H17" />
  ),
  spa: <path d="M5 20c0-8 6-14 15-15-1 9-7 15-15 15zM5 20l7-7" />,
  parking: (
    <>
      <rect x="3" y="11" width="18" height="6" rx="2" />
      <path d="M5 11l2-5h10l2 5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

const items = [
  { icon: "wifi", en: "Free Wi-Fi", id: "Wi-Fi gratis" },
  { icon: "pool", en: "Swimming Pool", id: "Kolam renang" },
  { icon: "restaurant", en: "Restaurant", id: "Restoran" },
  { icon: "spa", en: "Spa", id: "Spa" },
  { icon: "parking", en: "Free Parking", id: "Parkir gratis" },
  { icon: "clock", en: "24-Hour Service", id: "Layanan 24 jam" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-sage px-6 md:px-16 py-24">
      <div data-reveal className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
          <T en="Facilities" id="Fasilitas" />
        </p>
        <h2 className="font-serif text-2xl md:text-5xl leading-tight mt-3">
          <T en="Everything you need" id="Semua yang Anda butuhkan" />
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 md:mt-10 md:grid-cols-6 md:gap-4 xl:mt-12 xl:gap-10 text-center">
          {items.map((item) => (
            <li key={item.en} className="flex flex-col items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="text-teak-dark md:h-8 md:w-8 xl:h-10 xl:w-10"
                aria-hidden="true"
              >
                {icons[item.icon]}
              </svg>
              <span className="text-xs leading-tight md:text-[14px] xl:text-xs">
                <T en={item.en} id={item.id} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
