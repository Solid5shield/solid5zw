import { useEffect, useRef, useState } from "react";
import "./ServiceCarousel.css";

const AUTOPLAY_MS = 6000;
const RADIUS = 6.5;
const CIRC = 2 * Math.PI * RADIUS;

export default function ServiceCarousel({ services }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(62);
  const timerRef = useRef(null);

  // keep index in range if the filtered list changes size
  useEffect(() => {
    if (index >= services.length) setIndex(0);
  }, [services, index]);

  useEffect(() => {
    const updateWidth = () => setSlideWidth(window.innerWidth <= 700 ? 86 : 62);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (paused || services.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, services.length, index]);

  if (!services.length) return null;

  const go = (i) =>
    setIndex(((i % services.length) + services.length) % services.length);
  const offset = 50 - index * slideWidth - slideWidth / 2;

  return (
    <div
      className="svc-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="svc-carousel-viewport">
        <button
          className="svc-carousel-arrow svc-carousel-arrow--left"
          onClick={() => go(index - 1)}
          aria-label="Previous service"
        >
          ‹
        </button>

        <div
          className="svc-carousel-track"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`svc-carousel-slide ${i === index ? "is-active" : ""}`}
              style={{ flexBasis: `${slideWidth}%` }}
              aria-hidden={i !== index}
            >
              <div className="svc-carousel-card">
                <span className="svc-carousel-num">{s.n}</span>
                <p className="svc-carousel-tag">{s.category}</p>
                <h4>{s.title}</h4>
                <p className="svc-carousel-copy">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="svc-carousel-arrow svc-carousel-arrow--right"
          onClick={() => go(index + 1)}
          aria-label="Next service"
        >
          ›
        </button>
      </div>

      <div
        className="svc-carousel-bullets"
        role="tablist"
        aria-label="Service slides"
      >
        {services.map((s, i) => (
          <button
            key={s.n}
            className={`svc-carousel-bullet ${i === index ? "is-active" : ""}`}
            onClick={() => go(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to ${s.title}`}
          >
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <circle cx="8" cy="8" r={RADIUS} className="svc-bullet-track" />
              {i === index && (
                <circle
                  key={`${i}-${paused}`}
                  cx="8"
                  cy="8"
                  r={RADIUS}
                  className={`svc-bullet-progress ${paused ? "is-paused" : ""}`}
                  style={{ strokeDasharray: CIRC }}
                />
              )}
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
