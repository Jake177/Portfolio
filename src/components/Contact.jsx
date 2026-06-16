import { BriefcaseBusiness, Code2, Send } from 'lucide-react'
import { profile } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import ButtonLink from './ButtonLink'
import SectionHeader from './SectionHeader'

const iconMap = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
}

const buildMailtoHref = ({ name, email, message }) => {
  const subjectName = name || 'Portfolio visitor'
  const subject = `Portfolio enquiry from ${subjectName}`
  const body = [
    `Name: ${name || 'Not provided'}`,
    `Email: ${email || 'Not provided'}`,
    '',
    'Project or workflow:',
    message || 'Not provided',
  ].join('\n')

  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const mailtoHref = buildMailtoHref({
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
    })

    window.location.href = mailtoHref
  }

  return (
    <AnimatedSection id="contact" className="section-wrap">
      <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Contact"
            title="Have a workflow that should not be manual anymore?"
            description="I am open to conversations about AI automation, internal tools, cloud integrations, and full-stack product delivery."
          />
          <AnimatedItem className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>Email Me</ButtonLink>
            {profile.links.map((link) => {
              const Icon = iconMap[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/5 hover:text-white"
                >
                  {Icon && <Icon aria-hidden="true" size={18} />}
                  {link.label}
                </a>
              )
            })}
          </AnimatedItem>
        </div>

        <AnimatedItem className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Project or workflow
              <textarea
                name="message"
                rows="5"
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                placeholder="Tell me what process, tool, or automation you want to improve."
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              <Send aria-hidden="true" size={17} />
              Draft email
            </button>
            <p className="text-xs leading-6 text-slate-500">
              Submitting opens your default email app with these details prefilled.
            </p>
          </form>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  )
}

export default ContactSection
