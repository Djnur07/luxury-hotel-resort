"use client";

import { useState, useSyncExternalStore } from "react";
import { useLang } from "@/lib/language";

const WA_NUMBER = "6281234567890";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const today = useSyncExternalStore(
    () => () => {},
    () => new Date().toLocaleDateString("en-CA"),
    () => undefined
  );
  const lang = useLang();
  const t = (en: string, id: string) => (lang === "id" ? id : en);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text =
      lang === "id"
        ? `Halo, saya ingin cek ketersediaan kamar.\n` +
          `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nJumlah tamu: ${guests}`
        : `Hello, I would like to check availability.\n` +
          `Check-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  const label = "flex min-w-0 flex-col gap-1.5 md:gap-2 text-[11px] md:text-xs uppercase tracking-[0.08em] md:tracking-[0.12em] text-teak-dark";
  const field =
    "w-full min-w-0 rounded-lg border border-teak/40 bg-white h-12 md:h-[58px] px-1.5 md:px-2.5 xl:px-4 text-[13px] md:text-[15px] xl:text-sm max-md:[&::-webkit-calendar-picker-indicator]:hidden normal-case tracking-normal text-ink focus:outline-none focus:border-teak";
  const guestWord =
    lang === "id" ? "tamu" : guests === 1 ? "guest" : "guests";

  return (
    <div className="relative z-10 -mt-14 px-4 md:px-16">
      <form
        id="booking"
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl grid grid-cols-3 gap-2 md:gap-3 xl:gap-4 md:grid-cols-[1fr_1fr_1fr_auto] items-end rounded-2xl border border-teak/40 bg-linen p-4 md:p-6 shadow-lg"
      >
        <label className={label}>
          Check-in
          <input
            type="date"
            required
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={field}
          />
        </label>
        <label className={label}>
          Check-out
          <input
            type="date"
            required
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={field}
          />
        </label>
        <div className={label}>
          <span id="guests-label">{t("Guests", "Tamu")}</span>
          <div
            role="group"
            aria-labelledby="guests-label"
            className="flex items-center justify-between rounded-lg border border-teak/40 bg-white h-12 md:h-[58px] px-1 xl:px-2 normal-case tracking-normal text-ink"
          >
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              disabled={guests <= 1}
              aria-label={t("Fewer guests", "Kurangi tamu")}
              className="flex h-7 w-7 xl:h-9 xl:w-9 items-center justify-center rounded-full border border-teak/40 text-teak-dark hover:bg-sage disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14" /></svg>
            </button>
            <span aria-live="polite" className="whitespace-nowrap text-[13px] md:text-[15px] xl:text-sm">
              {guests}<span className="max-md:hidden"> {guestWord}</span>
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(6, g + 1))}
              disabled={guests >= 6}
              aria-label={t("More guests", "Tambah tamu")}
              className="flex h-7 w-7 xl:h-9 xl:w-9 items-center justify-center rounded-full border border-teak/40 text-teak-dark hover:bg-sage disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="col-span-3 md:col-span-1 h-12 md:h-[58px] whitespace-nowrap rounded-lg bg-olive px-6 md:px-4 xl:px-6 text-sm md:text-[15px] xl:text-sm font-semibold text-linen hover:bg-ink transition-colors"
        >
          {t("Check Availability", "Cek Ketersediaan")}
        </button>
      </form>
    </div>
  );
}
