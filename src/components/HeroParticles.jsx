import { useEffect, useRef } from "react";

// Lightweight drifting particle network — small glowing nodes connected by
// faint lines when close together, giving a sense of depth behind the hero
// copy. Respects prefers-reduced-motion.
export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;

    const COLORS = ["#29e6c4", "#e3cfa0", "#8b7bff"];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.round((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(41, 230, 196, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // nodes
      particles.forEach((p) => {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grd.addColorStop(0, p.color + "aa");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      if (!reduceMotion) rafId = requestAnimationFrame(step);
    };

    resize();
    step();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
