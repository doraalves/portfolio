import { useEffect, useRef } from 'react'

const CONNECT = 145
const MRADIUS = 170
const DENSITY = 11000

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles, rafId
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function rand(a, b) { return a + Math.random() * (b - a) }

    function initParticles() {
      const count = Math.max(80, Math.round((W * H) / DENSITY))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: rand(-0.22, 0.22),
        vy: rand(-0.22, 0.22),
        r: rand(1.2, 2.6),
        base: rand(0.2, 0.6),
        alpha: 0,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(200,25,26,${(1 - d / CONNECT) * 0.15})`
            ctx.lineWidth = 0.8
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const md = Math.sqrt(dx * dx + dy * dy)

        if (md < MRADIUS && md > 0) {
          const f = (1 - md / MRADIUS) * 0.065
          p.vx += (dx / md) * f
          p.vy += (dy / md) * f
          p.alpha = Math.min(1, p.alpha + 0.07)
        } else {
          p.alpha += (p.base - p.alpha) * 0.04
        }

        p.vx *= 0.983; p.vy *= 0.983
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = md < MRADIUS
          ? `rgba(214,40,40,${p.alpha})`
          : `rgba(245,240,234,${p.alpha})`
        ctx.fill()

        if (md < MRADIUS * 0.4) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200,25,26,${p.alpha * 0.09})`
          ctx.fill()
        }
      }

      if (mouse.x > 0 && mouse.x < W) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MRADIUS)
        g.addColorStop(0, 'rgba(200,25,26,0.07)')
        g.addColorStop(1, 'rgba(200,25,26,0)')
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, MRADIUS, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onResize = () => { resize(); initParticles() }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    resize()
    initParticles()
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'block' }}
    />
  )
}
