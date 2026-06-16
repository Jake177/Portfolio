import { experience } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import SectionHeader from './SectionHeader'

const ExperienceTimeline = () => (
  <AnimatedSection id="experience" className="section-wrap">
    <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <SectionHeader
        eyebrow="Experience"
        title="Delivery experience shaped by cloud, product teams, and business workflows."
        description="A concise timeline of the background behind the portfolio positioning."
      />

      <div className="relative space-y-4">
        <div className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent" aria-hidden="true" />
        {experience.map((item) => (
          <AnimatedItem key={`${item.period}-${item.title}`} className="relative pl-10">
            <span className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/35 bg-slate-950">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
            </span>
            <article className="glass-panel rounded-3xl p-6">
              <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          </AnimatedItem>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default ExperienceTimeline
