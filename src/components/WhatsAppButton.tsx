"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/language";

const WA_NUMBER = "6281234567890";
const GAP = 24;

export default function WhatsAppButton() {
  const id = useLang() === "id";
  const ref = useRef<HTMLAnchorElement>(null);
  const label = id ? "Pesan via WhatsApp" : "Book via WhatsApp";
  const text = id
    ? "Halo, saya ingin memesan kamar."
    : "Hello, I would like to book a room.";

  // Keep the button above the footer, so it never covers the footer text.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
        if (ref.current) ref.current.style.bottom = `${GAP + overlap}px`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="[body[data-hide-wa]_&]:hidden fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-teak px-5 py-4 text-sm font-semibold text-ink shadow-lg hover:bg-teak-dark hover:text-linen transition-colors"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
      </svg>
      <span className="hidden md:inline">{label}</span>
    </a>
  );
}
