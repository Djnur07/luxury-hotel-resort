"use client";

import { USD_RATE, useCurrency } from "@/lib/currency";

export default function Price({ idr }: { idr: number }) {
  const currency = useCurrency();
  if (idr <= 0) return <>[Price]</>;
  if (currency === "USD") {
    return <>≈ USD {Math.round(idr / USD_RATE).toLocaleString("en-US")}</>;
  }
  return <>IDR {idr.toLocaleString("en-US")}</>;
}
