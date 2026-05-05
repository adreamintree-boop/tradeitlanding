import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    const observe = () =>
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in-view)")
        .forEach((el) => io.observe(el));
    observe();
    // Re-scan after layout settles (handles late-mounted nodes)
    const t = window.setTimeout(observe, 200);
    // Safety fallback: ensure nothing stays hidden
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in-view)")
        .forEach((el) => el.classList.add("in-view"));
    }, 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
      window.clearTimeout(fallback);
    };
  }, []);
}