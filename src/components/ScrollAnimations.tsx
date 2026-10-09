"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollAnimations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero-text] > *", {
        y: 24,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.1,
      });

      const media = document.querySelector("[data-parallax]");
      if (media) {
        gsap.to(media, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: media.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el.children, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    });

    // Recalculate trigger positions whenever the page height changes
    // (late fonts or images, edits during development). Sections that the
    // visitor has already scrolled past are then revealed right away.
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  });

  return null;
}
