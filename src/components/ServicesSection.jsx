import { Bot, CloudCog, DatabaseZap, FileText, PanelsTopLeft, Workflow } from 'lucide-react'
import { services } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import SectionHeader from './SectionHeader'

const icons = [Workflow, Bot, PanelsTopLeft, CloudCog, DatabaseZap, FileText]

const ServicesSection = () => (
  <AnimatedSection id="services" className="section-wrap">
    <div className="section-inner space-y-12">
      <SectionHeader
        eyebrow="Focus Areas"
        title="Systems for teams that want automation to become part of operations."
        description="I design and build focused software that connects AI, business data, cloud services, and internal workflows."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <AnimatedItem
              key={service.title}
              className="glass-panel group rounded-3xl p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-300/20">
                {Icon && <Icon aria-hidden="true" size={22} />}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </AnimatedItem>
          )
        })}
      </div>
    </div>
  </AnimatedSection>
)

export default ServicesSection
