import React from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTopButton = () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/30 bg-slate-950/80 text-cyan-100 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur transition duration-200 hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp aria-hidden="true" size={20} strokeWidth={2.4} />
    </button>
  )
}

export default BackToTopButton
