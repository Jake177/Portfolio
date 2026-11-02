'use client'

import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import ParticlePlayground from '../../components/ParticlePlayground'
import type { ParticleViewport } from '../../components/ParticlePlayground'
import Icon from '../../components/Icon'
import { profile } from '../../data/profile'
import { expandFrame } from '../../lib/expand-frame'
import { scrollProgress } from '../../lib/scroll-motion'
import styles from './motion-preview.module.css'

export default function ScrollExpandPreview({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<ParticleViewport>({ x: 0.5, y: 0.5, scale: 1 })

  useLayoutEffect(() => {
    const root = rootRef.current
    const header = headerRef.current
    const track = trackRef.current
    const stage = stageRef.current
    const art = artRef.current
    if (!root || !header || !track || !stage || !art) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fades = [...root.querySelectorAll<HTMLElement>('[data-fade]')]
    let observer: IntersectionObserver | undefined
    let frame = 0
    let current = 0
    let target = 0
    let start = 0
    let end = 1
    let width = 1
    let height = 1
    let lastTime = 0

    const apply = () => {
      const rect = expandFrame(width, height, current)
      art.style.setProperty('--frame-left', `${rect.left}px`)
      art.style.setProperty('--frame-top', `${rect.top}px`)
      art.style.setProperty('--frame-right', `${Math.max(0, width - rect.left - rect.width)}px`)
      art.style.setProperty('--frame-bottom', `${Math.max(0, height - rect.top - rect.height)}px`)
      stage.style.setProperty('--intro-out', scrollProgress(current, 0.12, 0.58).toFixed(3))
      stage.style.setProperty('--hint-out', scrollProgress(current, 0, 0.16).toFixed(3))
      const screenHeight = Math.max(1, rect.height - 84)
      viewportRef.current = {
        x: (rect.left + rect.width / 2) / width,
        y: (rect.top + 37 + screenHeight / 2) / height,
        scale: Math.min(rect.width, screenHeight) / Math.min(width, height),
      }
    }

    const tick = (now: number) => {
      frame = 0
      if (document.hidden || !root.hasAttribute('data-expand-ready')) return
      const delta = lastTime ? Math.min(now - lastTime, 64) : 16
      lastTime = now
      current += (target - current) * (1 - Math.exp(-delta / 90))
      if (Math.abs(target - current) < 0.0005) current = target
      apply()
      if (current !== target) frame = requestAnimationFrame(tick)
      else lastTime = 0
    }

    const onScroll = () => {
      if (!root.hasAttribute('data-expand-ready') || document.hidden) return
      target = scrollProgress(window.scrollY, start, end)
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const measure = () => {
      cancelAnimationFrame(frame)
      frame = 0
      lastTime = 0
      const enabled = !preference.matches && window.innerHeight >= 540
      root.toggleAttribute('data-expand-ready', enabled)
      if (!enabled) {
        for (const name of ['left', 'top', 'right', 'bottom']) art.style.removeProperty(`--frame-${name}`)
        stage.style.removeProperty('--intro-out')
        stage.style.removeProperty('--hint-out')
        const artWidth = art.clientWidth
        const artHeight = art.clientHeight
        viewportRef.current = {
          x: 0.5,
          y: (artHeight / 2 - 5) / Math.max(1, artHeight),
          scale: Math.min(artWidth, Math.max(1, artHeight - 84)) / Math.max(1, Math.min(artWidth, artHeight)),
        }
        return
      }
      width = stage.clientWidth
      height = stage.clientHeight
      if (!width || !height) return
      start = track.getBoundingClientRect().top + window.scrollY - header.clientHeight
      end = start + height * 0.85
      current = target = scrollProgress(window.scrollY, start, end)
      apply()
    }

    const syncFades = () => {
      observer?.disconnect()
      root.removeAttribute('data-fade-ready')
      if (preference.matches || !('IntersectionObserver' in window)) {
        fades.forEach(element => element.setAttribute('data-visible', 'true'))
        return
      }
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            observer?.unobserve(entry.target)
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })
      fades.forEach(element => {
        const visible = element.getBoundingClientRect().top < window.innerHeight * 0.9
        element.setAttribute('data-visible', String(visible))
        if (!visible) observer?.observe(element)
      })
      root.setAttribute('data-fade-ready', 'true')
    }

    const revealFocused = (event: FocusEvent) => {
      const element = event.target instanceof HTMLElement ? event.target.closest<HTMLElement>('[data-fade]') : null
      if (element) {
        element.style.transitionDuration = '0ms'
        element.setAttribute('data-visible', 'true')
        observer?.unobserve(element)
      }
    }
    const syncPreference = () => { measure(); syncFades() }
    measure()
    syncFades()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(stage)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    document.addEventListener('visibilitychange', onScroll)
    preference.addEventListener('change', syncPreference)
    root.addEventListener('focusin', revealFocused)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      document.removeEventListener('visibilitychange', onScroll)
      preference.removeEventListener('change', syncPreference)
      root.removeEventListener('focusin', revealFocused)
      root.removeAttribute('data-expand-ready')
      root.removeAttribute('data-fade-ready')
    }
  }, [])

  return (
    <div ref={rootRef} className={styles.preview}>
      <a className="skip-link" href="#preview-services">Skip introduction</a>
      <div ref={headerRef} className={styles.header}>
        <header className="site-header site-shell">
          <a className="wordmark" href="#preview-main" aria-label={`${profile.handle}, home`}>
            {profile.handle}<span className="brand-star"><Icon name="asterisk" /></span>
          </a>
          <nav className="header-nav" aria-label="Main navigation"><a href="#preview-services">Services</a><a href="#preview-approach">Approach</a></nav>
          <a className="header-contact" href={`mailto:${profile.email}`}>Email me <Icon name="arrow" /></a>
        </header>
      </div>
      <main id="preview-main">
        <section ref={trackRef} className={styles.track} aria-labelledby="preview-title">
          <div ref={stageRef} className={styles.stage}>
            <div className={styles.introCopy}>
              <h1 id="preview-title">I solve business problems<br />with software.</h1>
              <p>Automation. Web. iOS.</p>
            </div>
            <div ref={artRef} className={styles.art}><ParticlePlayground viewportRef={viewportRef} /></div>
            <p className={styles.scrollHint}>Scroll to expand <Icon name="arrow-down" /></p>
          </div>
        </section>
        {children}
      </main>
    </div>
  )
}
