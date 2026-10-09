"use client";

import { useLang } from "@/lib/language";
import T from "@/components/T";

const WA_NUMBER = "6281234567890";

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function RoomWhatsAppButton({
  room,
  className,
}: {
  room: string;
  className?: string;
}) {
  const lang = useLang();
  const intro =
    lang === "id"
      ? `Halo, saya ingin memesan ${room}.`
      : `Hello, I would like to book the ${room}.`;

  function fullText() {
    let text = intro;
    try {
      const saved = JSON.parse(sessionStorage.getItem("booking") || "{}");
      if (saved.checkIn && saved.checkOut) {
        text +=
          lang === "id"
            ? `\nCheck-in: ${saved.checkIn}\nCheck-out: ${saved.checkOut}\nJumlah tamu: ${saved.guests}`
            : `\nCheck-in: ${saved.checkIn}\nCheck-out: ${saved.checkOut}\nGuests: ${saved.guests}`;
      }
    } catch {}
    return text;
  }

  return (
    <a
      href={waLink(intro)}
      onClick={(e) => {
        e.currentTarget.href = waLink(fullText());
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <T en="Book this room via WhatsApp" id="Pesan kamar ini via WhatsApp" />
    </a>
  );
}
