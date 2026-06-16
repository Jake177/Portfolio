import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { profile } from '../data'

const iconMap = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
}

const Footer = () => (
  <footer className="border-t border-white/10 px-5 py-8">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.shortName}. Built with React, Vite, and focused automation thinking.</p>
      <div className="flex flex-wrap items-center gap-3">
        {profile.links.map((link) => {
          const Icon = iconMap[link.label]
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
            >
              {Icon && <Icon aria-hidden="true" size={16} />}
              {link.label}
            </a>
          )
        })}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
        >
          <Mail aria-hidden="true" size={16} />
          Email
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
