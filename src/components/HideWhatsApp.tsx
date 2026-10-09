"use client";

import { useEffect } from "react";

// Hides the floating WhatsApp button while this page is on screen.
export default function HideWhatsApp() {
  useEffect(() => {
    document.body.dataset.hideWa = "true";
    return () => {
      delete document.body.dataset.hideWa;
    };
  }, []);

  return null;
}
