import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Policies · Serene Stay",
  description: "Check-in times, cancellation, children, pets, and payment at Serene Stay.",
};

const policies = [
  {
    title: { en: "Check-in & check-out", id: "Check-in & check-out" },
    items: [
      { en: "Check-in from 14:00.", id: "Check-in mulai pukul 14.00." },
      { en: "Check-out until 12:00.", id: "Check-out paling lambat pukul 12.00." },
      {
        en: "Early check-in and late check-out on request, subject to availability.",
        id: "Check-in lebih awal dan check-out lebih lambat bisa diminta, sesuai ketersediaan.",
      },
    ],
  },
  {
    title: { en: "Cancellation", id: "Pembatalan" },
    items: [
      {
        en: "Free cancellation up to 7 days before arrival.",
        id: "Pembatalan gratis hingga 7 hari sebelum kedatangan.",
      },
      {
        en: "Cancellations within 7 days are charged the first night.",
        id: "Pembatalan dalam 7 hari sebelum kedatangan dikenakan biaya malam pertama.",
      },
      {
        en: "No-shows are charged the full stay.",
        id: "Tamu yang tidak datang dikenakan biaya seluruh masa menginap.",
      },
    ],
  },
  {
    title: { en: "Children & extra beds", id: "Anak & extra bed" },
    items: [
      { en: "Children of all ages are welcome.", id: "Anak segala usia dipersilakan menginap." },
      {
        en: "Children under 6 stay free using existing beds.",
        id: "Anak di bawah 6 tahun gratis jika memakai tempat tidur yang ada.",
      },
      {
        en: "Extra bed: IDR 350,000 per night, including breakfast.",
        id: "Extra bed: IDR 350,000 per malam, termasuk sarapan.",
      },
    ],
  },
  {
    title: { en: "Pets", id: "Hewan peliharaan" },
    items: [
      {
        en: "Pets are not allowed, except service animals.",
        id: "Hewan peliharaan tidak diizinkan, kecuali hewan pendamping (service animal).",
      },
    ],
  },
  {
    title: { en: "Payment", id: "Pembayaran" },
    items: [
      {
        en: "A 30% deposit by bank transfer confirms your booking.",
        id: "Deposit 30% melalui transfer bank untuk mengonfirmasi pemesanan.",
      },
      {
        en: "The balance is paid on arrival by card or cash.",
        id: "Sisa pembayaran dilunasi saat tiba, dengan kartu atau tunai.",
      },
    ],
  },
  {
    title: { en: "Smoking", id: "Merokok" },
    items: [
      { en: "All rooms are non-smoking.", id: "Semua kamar bebas asap rokok." },
      {
        en: "Smoking is allowed in the designated garden area.",
        id: "Merokok hanya diperbolehkan di area taman yang telah disediakan.",
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main className="px-6 md:px-16 pt-4 pb-6 md:pt-8 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-teak-dark">
          <T en="Good to know" id="Perlu diketahui" />
        </p>
        <h1 className="font-serif text-2xl md:text-3xl leading-tight mt-1">
          <T en="Hotel policies" id="Kebijakan hotel" />
        </h1>
        <p className="mt-2 text-[13px] md:text-[15px] leading-snug">
          <T
            en="Have a question that is not answered here? Message us on WhatsApp."
            id="Ada pertanyaan yang belum terjawab di sini? Kirim pesan kepada kami lewat WhatsApp."
          />
        </p>
        <div className="mt-4 md:mt-6 grid gap-x-8 gap-y-3 md:gap-y-5 sm:grid-cols-2 xl:grid-cols-3 border-t border-teak/30 pt-4 md:pt-6">
          {policies.map((p) => (
            <section key={p.title.en}>
              <h2 className="font-serif text-[15px] md:text-lg leading-tight">
                <T en={p.title.en} id={p.title.id} />
              </h2>
              <ul className="mt-1 space-y-0.5 text-[13px] md:text-[15px] leading-snug">
                {p.items.map((item) => (
                  <li key={item.en}>
                    <T en={item.en} id={item.id} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
