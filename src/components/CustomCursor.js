import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafId   = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    // Não renderiza em touch/mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const moveMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.22);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.22);
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(false);
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove",  moveMouse, { passive: true });
    document.addEventListener("mouseover",  onOver,   { passive: true });
    document.addEventListener("mouseout",   onOut,    { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove",  moveMouse);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  // Não renderiza em touch
  if (typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches) return null;

  const DOT_SIZE  = hovering ? 0    : 4;
  const RING_SIZE = hovering ? 36   : 22;
  const RING_BG   = hovering ? "rgba(200,25,26,0.12)" : "transparent";
  const RING_BDR  = hovering ? "rgba(200,25,26,1)"    : "rgba(200,25,26,0.65)";

  return (
    <>
      {/* Ponto central — segue o mouse instantaneamente */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         `${DOT_SIZE}px`,
          height:        `${DOT_SIZE}px`,
          marginLeft:    `-${DOT_SIZE / 2}px`,
          marginTop:     `-${DOT_SIZE / 2}px`,
          background:    "#C8191A",
          borderRadius:  "50%",
          pointerEvents: "none",
          zIndex:        999999,
          opacity:       visible ? 1 : 0,
          transition:    "width 0.15s, height 0.15s, margin 0.15s, opacity 0.3s",
          willChange:    "transform",
        }}
      />
      {/* Anel — segue com lag leve (lerp) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         `${RING_SIZE}px`,
          height:        `${RING_SIZE}px`,
          marginLeft:    `-${RING_SIZE / 2}px`,
          marginTop:     `-${RING_SIZE / 2}px`,
          border:        `1.5px solid ${RING_BDR}`,
          background:    RING_BG,
          borderRadius:  "50%",
          pointerEvents: "none",
          zIndex:        999998,
          opacity:       visible ? 1 : 0,
          transition:    "width 0.18s, height 0.18s, margin 0.18s, background 0.2s, border-color 0.2s, opacity 0.3s",
          willChange:    "transform",
        }}
      />
    </>
  );
}
