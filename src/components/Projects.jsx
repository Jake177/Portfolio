import { Layers3 } from 'lucide-react'
import { caseStudies, projects } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import ButtonLink from './ButtonLink'
import SectionHeader from './SectionHeader'

const ProjectCard = ({ project, featured = false }) => (
  <AnimatedItem
    as="article"
    className={`glass-panel rounded-[1.75rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35 ${
      featured ? 'lg:col-span-2' : ''
    }`}
  >
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-300/10 text-violet-100 ring-1 ring-violet-300/20">
          <Layers3 aria-hidden="true" size={20} />
        </span>
      </div>

      <div className="grid gap-4 text-sm leading-7 text-slate-300 sm:grid-cols-2">
        <div>
          <p className="mb-1 font-semibold text-white">Problem</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-white">Solution</p>
          <p>{project.solution}</p>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-white">Business value</p>
        <p className="text-sm leading-7 text-slate-300">{project.impact}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <ul className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
        <ButtonLink href={project.link} variant="ghost" external className="shrink-0">
          {project.linkLabel}
        </ButtonLink>
      </div>
    </div>
  </AnimatedItem>
)

const ProjectsSection = () => (
  <AnimatedSection id="projects" className="section-wrap">
    <div className="section-inner space-y-12">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Practical systems that connect cloud, data, users, and workflow automation."
        description="Each project is framed around the business process it improves: what was manual, what changed, and what value the software made possible."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export const CaseStudiesSection = () => (
  <AnimatedSection id="case-studies" className="section-wrap pt-0">
    <div className="section-inner space-y-10">
      <SectionHeader
        eyebrow="Case Studies"
        title="Business-focused delivery patterns from selected projects."
        description="A closer look at how the projects translate problems into software workflows and measurable operating improvements."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <AnimatedItem key={study.title} as="article" className="glass-panel rounded-3xl p-6">
            <p className="text-sm font-semibold text-cyan-200">{study.project}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p><span className="font-semibold text-white">Problem: </span>{study.problem}</p>
              <p><span className="font-semibold text-white">Solution: </span>{study.solution}</p>
              <p><span className="font-semibold text-white">Impact: </span>{study.impact}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span key={item} className="rounded-full bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default ProjectsSection
