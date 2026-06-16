import { AnimatedItem } from './AnimatedSection'

const SectionHeader = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const isCentered = align === 'center'

  return (
    <AnimatedItem
      className={`max-w-3xl space-y-4 ${isCentered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      )}
    </AnimatedItem>
  )
}

export default SectionHeader
