import { useEffect, useRef } from 'react';

const SUBSIDIARIES = [
  { label: 'SolidFlo',      color: '#00D4AA' },
  { label: 'Solid5',        color: '#AFA9EC' },
  { label: 'GerboAI',       color: '#85B7EB' },
  { label: 'ReelAncestry',  color: '#FAC775' },
  { label: 'VideoLid',      color: '#ED93B1' },
  { label: 'AfriVoucher',   color: '#97C459' },
  { label: 'Kraal Market',  color: '#F0997B' },
];

export default function Constellation() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const tRef      = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const dpr    = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2, cy = h / 2;
      const R  = Math.min(w, h) * 0.34;

      // orbit rings
      [1, 0.6].forEach((scale, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * scale, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? 'rgba(26,42,64,0.25)' : 'rgba(26,42,64,0.18)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      const t = tRef.current;

      SUBSIDIARIES.forEach((s, i) => {
        const angle = (i / SUBSIDIARIES.length) * Math.PI * 2 + t;
        const x     = cx + Math.cos(angle) * R;
        const y     = cy + Math.sin(angle) * R;

        // spoke
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = s.color + '28';
        ctx.lineWidth   = 0.7;
        ctx.stroke();

        // outer glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 30);
        grd.addColorStop(0,   s.color + '20');
        grd.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // node circle
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle   = s.color + '14';
        ctx.fill();
        ctx.strokeStyle = s.color + '70';
        ctx.lineWidth   = 1;
        ctx.stroke();

        // initials
        ctx.fillStyle    = s.color;
        ctx.font         = '700 9.5px "Inter","Segoe UI",system-ui,sans-serif';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        const initials   = s.label.split(' ').map(w => w[0]).join('').slice(0, 2);
        ctx.fillText(initials, x, y);

        // label
        ctx.fillStyle = 'rgba(106,125,150,0.9)';
        ctx.font      = '10px "Inter","Segoe UI",system-ui,sans-serif';
        const lx = cx + Math.cos(angle) * (R + 40);
        const ly = cy + Math.sin(angle) * (R + 40);
        ctx.fillText(s.label, lx, ly);
      });

      // centre hub glow
      const hubGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 36);
      hubGrd.addColorStop(0,   'rgba(0,212,170,0.18)');
      hubGrd.addColorStop(1,   'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 36, 0, Math.PI * 2);
      ctx.fillStyle = hubGrd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.fillStyle   = 'rgba(0,212,170,0.1)';
      ctx.fill();
      ctx.strokeStyle = '#00D4AA';
      ctx.lineWidth   = 1.5;
      ctx.stroke();

      ctx.fillStyle    = '#00D4AA';
      ctx.font         = '800 12px "Inter","Segoe UI",system-ui,sans-serif';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GN', cx, cy);

      tRef.current += 0.0025;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="canvas-wrap">
      <canvas ref={canvasRef} />
    </div>
  );
}
