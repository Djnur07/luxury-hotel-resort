"use client";

import { setCurrency, useCurrency, type Currency } from "@/lib/currency";

const options: Currency[] = ["IDR", "USD"];

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const current = useCurrency();

  return (
    <div
      role="group"
      aria-label="Currency"
      className={`rounded-full border border-teak/40 p-0.5 text-xs ${className}`}
    >
      {options.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={current === c}
          onClick={() => setCurrency(c)}
          className={`rounded-full px-4 py-1 transition-colors ${
            current === c ? "bg-olive text-linen" : "text-ink hover:text-teak-dark"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
