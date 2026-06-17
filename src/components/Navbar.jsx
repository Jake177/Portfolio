import React from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('home')
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5"
      >
        <a href="#home" className="group flex items-center" onClick={handleNavClick}>
          <span className="hidden text-sm font-semibold text-white sm:block">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === link.id
                  ? 'bg-cyan-300 text-slate-950'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-300/35 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 md:inline-flex"
        >
          Work together
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/96 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? 'bg-cyan-300 text-slate-950'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
