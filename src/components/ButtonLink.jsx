import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-cyan-300 text-slate-950 shadow-[0_18px_45px_rgba(103,232,249,0.22)] hover:bg-cyan-200',
  secondary:
    'border border-slate-600/70 bg-slate-950/35 text-slate-100 hover:border-cyan-300/70 hover:bg-cyan-300/10',
  ghost:
    'text-cyan-200 hover:text-white hover:bg-white/5',
}

const ButtonLink = ({ href, children, variant = 'primary', className = '', external = false }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-cyan-200 ${variants[variant]} ${className}`}
  >
    <span>{children}</span>
    <ArrowRight aria-hidden="true" size={17} strokeWidth={2.4} />
  </a>
)

export default ButtonLink
