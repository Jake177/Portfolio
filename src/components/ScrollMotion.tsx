'use client'

import { useEffect } from 'react'
import { scrollProgress } from '../lib/scroll-motion'

export default function ScrollMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.site-shell')
    const services = [...document.querySelectorAll<HTMLElement>('.service-row')]
    const process = document.querySelector<HTMLOListElement>('.process-list')
    const steps = [...document.querySelectorAll<HTMLElement>('.process-list > li')]
    const quote = document.querySelector<HTMLElement>('.philosophy blockquote')
    if (!root || !process || !quote) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let active = true

    const update = () => {
      frame = 0
      if (!active || preference.matches || document.hidden) return

      const position = window.scrollY
      const viewport = window.innerHeight
      // scrollHeight is rounded, while the browser's final scroll position can be fractional.
      const endOfPage = Math.max(0, document.documentElement.scrollHeight - viewport - 1)
      const readProgress = (element: HTMLElement) => {
        const top = element.getBoundingClientRect().top + position
        return scrollProgress(position, top - viewport * 0.9, Math.min(endOfPage, top - viewport * 0.45))
      }

      const serviceProgress = services.map(readProgress)
      const processBounds = process.getBoundingClientRect()
      const processTop = processBounds.top + position
      const flow = scrollProgress(position, processTop - viewport * 0.85,
        Math.min(endOfPage, processTop + processBounds.height - viewport * 0.55))
      const quoteProgress = readProgress(quote)

      services.forEach((element, index) => element.style.setProperty('--reveal', serviceProgress[index].toFixed(3)))
      steps.forEach((element, index) => element.style.setProperty('--step-progress',
        Math.max(0, Math.min(1, flow * steps.length - index)).toFixed(3)))
      quote.style.setProperty('--quote-progress', quoteProgress.toFixed(3))
    }

    const requestUpdate = () => {
      if (active && !preference.matches && !document.hidden && !frame) frame = requestAnimationFrame(update)
    }

    const syncPreference = () => {
      cancelAnimationFrame(frame)
      frame = 0
      if (preference.matches) {
        root.removeAttribute('data-scroll-motion')
      } else {
        update()
        root.setAttribute('data-scroll-motion', 'true')
      }
    }

    syncPreference()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    document.addEventListener('visibilitychange', requestUpdate)
    preference.addEventListener('change', syncPreference)
    void document.fonts.ready.then(requestUpdate)

    return () => {
      active = false
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      document.removeEventListener('visibilitychange', requestUpdate)
      preference.removeEventListener('change', syncPreference)
      root.removeAttribute('data-scroll-motion')
      services.forEach(element => element.style.removeProperty('--reveal'))
      steps.forEach(element => element.style.removeProperty('--step-progress'))
      quote.style.removeProperty('--quote-progress')
    }
  }, [])

  return null
}
