import { useEffect } from "react";

/**
 * Mount once (in App.jsx). Watches the whole document for elements carrying
 * the "reveal" class and adds "is-visible" once they scroll into view.
 * Re-scans on DOM mutations so it keeps working as sections mount/update
 * (e.g. the Services category filter swapping cards in and out).
 */
export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        io.observe(el);
      });
    };

    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
