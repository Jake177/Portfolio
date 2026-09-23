'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createParticles, particleColor, projectParticle } from '../lib/particles'

const motionQuery = '(prefers-reduced-motion: reduce)'
const subscribeToMotion = (onChange: () => void) => {
  const media = window.matchMedia(motionQuery)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches
const getServerMotion = () => true

export default function ParticlePlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pauseRef = useRef(false)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, getServerMotion)

  useEffect(() => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !context) return

    const finePointer = window.matchMedia('(pointer: fine)')
    const particles = createParticles(finePointer.matches ? 9600 : 3600)
    const offsets = particles.map(() => ({ x: 0, y: 0 }))
    const palette = Array.from({ length: 32 }, (_, i) => particleColor((i / 31) * 1.7 - 0.85))
    const pointer = { x: -1000, y: -1000 }
    let width = 0
    let height = 0
    let frame = 0
    let time = 0
    let lastFrame = 0
    let inView = false

    const draw = (delta = 0) => {
      if (!width || !height) return
      time += delta
      context.fillStyle = '#f386a1'
      context.fillRect(0, 0, width, height)
      const scale = Math.min(width, height) * 0.5

      particles.forEach((particle, index) => {
        const point = projectParticle(particle, time)
        let x = width / 2 + point.x * scale
        let y = height / 2 + point.y * scale
        const dx = x - pointer.x
        const dy = y - pointer.y
        const distance = Math.hypot(dx, dy)
        const force = Math.max(0, 1 - distance / 95) * 23
        const offset = offsets[index]
        offset.x += ((dx / Math.max(distance, 1)) * force - offset.x) * 0.1
        offset.y += ((dy / Math.max(distance, 1)) * force - offset.y) * 0.1
        x += offset.x
        y += offset.y
        const size = particle.size * (0.8 + (point.z + 1) * 0.3) * Math.min(width / 480, 1.25)
        const shade = Math.max(0, Math.min(31, Math.round(((point.z + 0.85) / 1.7) * 31)))
        context.fillStyle = palette[shade]
        context.fillRect(x, y, size, size)
      })
    }

    const animate = (now: number) => {
      if (!pauseRef.current && !document.hidden && inView) {
        if (!lastFrame) lastFrame = now
        if (now - lastFrame >= 1000 / 30) {
          draw(Math.min((now - lastFrame) / 1000, 0.05))
          lastFrame = now
        }
        frame = requestAnimationFrame(animate)
      }
    }

    const syncPlayback = () => {
      cancelAnimationFrame(frame)
      lastFrame = 0
      if (!pauseRef.current && !document.hidden && inView) {
        frame = requestAnimationFrame(animate)
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
      canvas.dataset.ready = 'true'
    }
    const move = (event: PointerEvent) => {
      if (!finePointer.matches || pauseRef.current) return
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }
    const leave = () => {
      pointer.x = -1000
      pointer.y = -1000
    }
    const resizeObserver = new ResizeObserver(resize)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncPlayback()
    })

    resize()
    resizeObserver.observe(canvas)
    intersectionObserver.observe(canvas)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)
    canvas.addEventListener('playbackchange', syncPlayback)
    document.addEventListener('visibilitychange', syncPlayback)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      canvas.removeEventListener('playbackchange', syncPlayback)
      document.removeEventListener('visibilitychange', syncPlayback)
      delete canvas.dataset.ready
    }
  }, [reducedMotion])

  const togglePlayback = () => {
    pauseRef.current = !pauseRef.current
    setPaused(pauseRef.current)
    canvasRef.current?.dispatchEvent(new Event('playbackchange'))
  }

  return (
    <section className="playground" aria-label="Interactive pink particle artwork">
      <div className="window-heading">
        <span className="window-mark" aria-hidden="true">✳</span>
        <span>A LITTLE EXPERIMENT</span>
        <span className="window-stripes" aria-hidden="true" />
        <span aria-hidden="true">01</span>
      </div>
      <div className="particle-stage">
        {/* A local poster remains visible without JavaScript, canvas, or motion. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="particle-poster"
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/particle-poster.svg`}
          alt=""
          width="560"
          height="480"
          aria-hidden="true"
        />
        <canvas ref={canvasRef} aria-hidden="true" className="particle-canvas" />
        <span className="artwork-label" aria-hidden="true">IDEAS IN MOTION</span>
        <span className="artwork-cross" aria-hidden="true">+</span>
      </div>
      <div className="window-footer">
        <span className="pointer-hint">{reducedMotion ? 'A moment of stillness.' : 'A little curiosity goes a long way.'}</span>
        <button
          type="button"
          className="motion-toggle"
          aria-pressed={paused || reducedMotion}
          aria-label={reducedMotion ? 'Animation off' : paused ? 'Resume animation' : 'Pause animation'}
          disabled={reducedMotion}
          onClick={togglePlayback}
        >
          <span aria-hidden="true">{paused || reducedMotion ? '▷' : 'Ⅱ'}</span>
          {reducedMotion ? 'Motion off' : paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </section>
  )
}
