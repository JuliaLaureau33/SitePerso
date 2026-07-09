"use client";

import { useEffect } from "react";

/**
 * Révèle en douceur les éléments marqués [data-reveal] ou [data-reveal-letters]
 * lorsqu'ils entrent dans le champ de vision. Aucune dépendance : IntersectionObserver natif.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const selector = "[data-reveal], [data-reveal-letters]";
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
