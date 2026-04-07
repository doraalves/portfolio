import { useEffect, useRef } from "react";

const CONNECT  = 155;
const RADIUS   = 155;
const STRENGTH = 52;
const SPRING   = 0.048;
const DAMPING  = 0.77;
const DENSITY  = 4500;

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W, H, particles, rafId;
    const mouse = { x: -9999, y: -9999 };

    function isDark() {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }

    function rand(a, b) { return a + Math.random() * (b - a); }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      const count = Math.max(55, Math.round((W * H) / DENSITY));
      particles = Array.from({ length: count }, () => {
        const ox = Math.random() * W;
        const oy = Math.random() * H;
        return {
          ox, oy, x: ox, y: oy,
          vx: 0, vy: 0,
          r:    rand(1.2, 2.4),
          base: rand(0.25, 0.55),
        };
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const dark = isDark();

      // Physics
      for (const p of particles) {
        const dx   = p.x - mouse.x;
        const dy   = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        p.md = dist;

        if (dist < RADIUS && dist > 0) {
          const t = 1 - dist / RADIUS;
          p.vx += (dx / dist) * t * t * STRENGTH * 0.1;
          p.vy += (dy / dist) * t * t * STRENGTH * 0.1;
        }

        p.vx += (p.ox - p.x) * SPRING;
        p.vy += (p.oy - p.y) * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x  += p.vx;
        p.y  += p.vy;
      }

      // Constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,25,26,${(1 - d / CONNECT) * (dark ? 0.15 : 0.18)})`;
            ctx.lineWidth   = 0.9;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const t = p.md < RADIUS ? 1 - p.md / RADIUS : 0;
        const r = p.r + t * 1.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

        if (dark) {
          ctx.fillStyle = `rgba(245,240,234,${p.base * (1 - t * 0.85)})`;
          ctx.fill();
          if (t * 0.9 > 0.01) {
            ctx.fillStyle = `rgba(200,25,26,${t * 0.9})`;
            ctx.fill();
          }
        } else {
          ctx.fillStyle = `rgba(200,25,26,${p.base + t * 0.5})`;
          ctx.fill();
        }
      }

      // Mouse halo
      if (mouse.x > 0 && mouse.x < W) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, RADIUS * 0.75);
        g.addColorStop(0, "rgba(200,25,26,0.07)");
        g.addColorStop(1, "rgba(200,25,26,0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, RADIUS * 0.75, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    const onMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = ()  => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("mousemove", onMove,   { passive: true });
    window.addEventListener("resize",    resize);
    document.addEventListener("mouseleave", onLeave);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize",    resize);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        display: "block",
      }}
    />
  );
}
