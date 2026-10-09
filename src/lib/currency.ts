import { useSyncExternalStore } from "react";

export type Currency = "IDR" | "USD";

// 1 USD in IDR (approx. rate, 8 Oct 2026). Update when needed.
export const USD_RATE = 17900;

const KEY = "currency";
const listeners = new Set<() => void>();

function read(): Currency {
  try {
    return localStorage.getItem(KEY) === "USD" ? "USD" : "IDR";
  } catch {
    return "IDR";
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function setCurrency(currency: Currency) {
  try {
    localStorage.setItem(KEY, currency);
  } catch {}
  listeners.forEach((l) => l());
}

export function useCurrency(): Currency {
  return useSyncExternalStore(subscribe, read, () => "IDR");
}
