import { motion, useReducedMotion } from 'framer-motion'
import { Bot, DatabaseZap, FileText, Sparkles } from 'lucide-react'
import { profile } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import ButtonLink from './ButtonLink'

const workflowIcons = [Bot, DatabaseZap, FileText]
const portraitSrc = `${import.meta.env.BASE_URL}images/person-img-4.jpg`
const FloatingCard = motion.div

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="section-wrap flex min-h-screen items-center pt-28">
      <div className="section-inner grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <AnimatedSection className="space-y-8">
          <AnimatedItem className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles aria-hidden="true" size={16} />
            {profile.role} for automation-first teams
          </AnimatedItem>

          <AnimatedItem className="space-y-6">
            <h1 className="gradient-text text-balance text-4xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.subheadline}
            </p>
          </AnimatedItem>

          <AnimatedItem className="flex flex-col gap-3 sm:flex-row">
            {profile.ctas.map((cta) => (
              <ButtonLink key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </ButtonLink>
            ))}
          </AnimatedItem>

          <AnimatedItem className="grid gap-3 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="glass-panel soft-glow relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="accent-line mb-5" />
            <div className="mb-5 grid gap-4 sm:grid-cols-[0.74fr_1fr] sm:items-center">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <img
                  src={portraitSrc}
                  alt="Jianhui Ling portrait"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">
                  Portfolio signal
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">{profile.shortName}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{profile.positioning}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-100">Automation Command Center</p>
                  <p className="text-xs text-slate-400">AI agents, APIs, and internal workflows</p>
                </div>
                <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {profile.workflowCards.map((card, index) => {
                  const Icon = workflowIcons[index]
                  return (
                    <FloatingCard
                      key={card.title}
                      animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.35,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300/12 text-cyan-100">
                          {Icon && <Icon aria-hidden="true" size={19} />}
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
                            {card.label}
                          </p>
                          <h2 className="mt-1 text-base font-semibold text-white">{card.title}</h2>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{card.detail}</p>
                        </div>
                      </div>
                    </FloatingCard>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HeroSection
