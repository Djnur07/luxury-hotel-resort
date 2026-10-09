"use client";

import { useEffect } from "react";
import { setLang, useLang, type Lang } from "@/lib/language";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
];

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const current = useLang();

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  return (
    <div
      role="group"
      aria-label="Language"
      className={`rounded-full border border-teak/40 p-0.5 text-xs ${className}`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={current === o.value}
          onClick={() => setLang(o.value)}
          className={`rounded-full px-4 py-1 transition-colors ${
            current === o.value ? "bg-olive text-linen" : "text-ink hover:text-teak-dark"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
