"use client";

import { useLang } from "@/lib/language";

export default function T({ en, id }: { en: string; id: string }) {
  const lang = useLang();
  return <>{lang === "id" ? id : en}</>;
}
