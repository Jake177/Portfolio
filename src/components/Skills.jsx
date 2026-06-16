import { skillGroups } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import SectionHeader from './SectionHeader'

const SkillsSection = () => (
  <AnimatedSection id="skills" className="section-wrap">
    <div className="section-inner space-y-12">
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit for automation-heavy software products."
        description="The stack is organized around delivery: interfaces, services, AI workflows, cloud infrastructure, data, and tools."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <AnimatedItem key={group.title} className="glass-panel rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default SkillsSection
