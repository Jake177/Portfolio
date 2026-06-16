import { CheckCircle2 } from 'lucide-react'
import { profile } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import SectionHeader from './SectionHeader'

const highlights = [
  'AI workflow automation and practical agent integration',
  'Cloud-native apps, serverless workflows, and API orchestration',
  'Internal ERP tools, dashboards, and business process systems',
]

const AboutSection = () => (
  <AnimatedSection id="about" className="section-wrap">
    <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeader
        eyebrow="About"
        title="I connect software engineering with the way teams actually work."
        description={profile.summary}
      />

      <AnimatedItem className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>{profile.about}</p>
          <p>{profile.philosophy}</p>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-cyan-200" size={18} />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedItem>
    </div>
  </AnimatedSection>
)

export default AboutSection
