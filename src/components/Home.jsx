import { Sparkles } from 'lucide-react'
import { profile } from '../data'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import ButtonLink from './ButtonLink'

const portraitSrc = `${import.meta.env.BASE_URL}images/person-img-4.jpg`

const HeroSection = () => {
  return (
    <section id="home" className="section-wrap flex min-h-screen items-center pt-28">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-x-14 lg:gap-y-10">
        <AnimatedSection className="space-y-8 lg:self-center">
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

        </AnimatedSection>

        <AnimatedSection className="relative lg:self-stretch">
          <div className="absolute -inset-8 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="glass-panel soft-glow relative h-full overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="accent-line mb-5" />
            <div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <img
                  src={portraitSrc}
                  alt="Jianhui Ling portrait"
                  className="aspect-[5/4] min-h-[360px] w-full object-cover object-center sm:min-h-[440px] lg:aspect-auto lg:h-full lg:min-h-[500px] xl:min-h-[540px]"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          as="div"
          className="grid w-full gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <AnimatedItem
              key={stat.label}
              className="flex min-h-32 flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center"
            >
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HeroSection
