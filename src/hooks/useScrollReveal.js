import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;
    let frame = 0;
    const reveal = () => {
      frame = 0;
      const trigger = window.innerHeight * 0.86;
      elements.forEach((element) => {
        if (element.classList.contains("reveal-visible")) return;
        const rect = element.getBoundingClientRect();
        if (rect.top < trigger && rect.bottom > 0) {
          element.classList.add("reveal-visible");
          element.classList.add("clip-visible");
        }
      });
    };
    const requestReveal = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(reveal);
    };
    reveal();
    window.addEventListener("scroll", requestReveal, { passive: true });
    window.addEventListener("resize", requestReveal);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestReveal);
      window.removeEventListener("resize", requestReveal);
    };
  }, []);
}
