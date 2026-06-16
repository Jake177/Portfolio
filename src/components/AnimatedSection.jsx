import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from './motionVariants'

const AnimatedSection = ({ as = 'section', className = '', children, ...props }) => {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.section

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      variants={shouldReduceMotion ? undefined : staggerContainer}
      {...props}
    >
      {children}
    </Component>
  )
}

export const AnimatedItem = ({ as = 'div', className = '', children, ...props }) => {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      variants={shouldReduceMotion ? undefined : fadeInUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default AnimatedSection
