import { useRef } from "react";

/**
 * Wraps any card in a subtle, mouse-tracked 3D tilt with a soft glare sweep.
 * Usage: <TiltCard className="package-card" as="div" style={{...}}>...</TiltCard>
 * `as` lets it render as a different tag (e.g. "a") so it drops in place of
 * existing markup without changing behaviour.
 */
export default function TiltCard({
  children,
  className = "",
  as: Tag = "div",
  max = 8,
  ...rest
}) {
  const innerRef = useRef(null);

  const handleMove = (e) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = innerRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      className="tilt"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Tag
        ref={innerRef}
        className={`tilt-inner ${className}`}
        {...rest}
      >
        {children}
        <span className="tilt-glare" />
      </Tag>
    </div>
  );
}
