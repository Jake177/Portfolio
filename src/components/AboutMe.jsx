import React from 'react'
import NavigationActivationCircles from './NavigationCircles'
import { aboutText } from '../data/index'

const AboutMe = () => {
  return (
  <section id='aboutme' className='relative min-h-screen w-full bg-gray-950 text-yellow-500 px-6 py-24 sm:py-28 isolate'>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16 items-start'>
        <div className='space-y-6'>
          <span className='normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70'>About</span>
          <h2 className='special-font text-4xl sm:text-5xl leading-tight max-w-xl'>I transform complex requirements into grounded, measurable cloud strategy.</h2>
        </div>

        <div className='relative'>
          <div className='relative rounded-3xl border border-yellow-500/20 bg-gray-900/75 backdrop-blur px-6 sm:px-8 py-8 sm:py-10 shadow-[0_28px_60px_-35px_rgba(234,179,8,0.35)] normal-font space-y-6'>
            <div className='space-y-4 text-yellow-500/85 leading-relaxed text-base sm:text-lg'>
              <p>{aboutText.intro}</p>
              <p>{aboutText.focus}</p>
              <div>
                <span className='uppercase text-xs tracking-[0.4em] text-yellow-500/70 block mb-3'>Recent Activity</span>
                <ul className='space-y-3 marker:text-yellow-500/60 list-disc list-inside text-sm sm:text-base text-yellow-500/80'>
                  {aboutText.projects.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>{aboutText.agile}</p>
              <p>{aboutText.philosophy}</p>
            </div>
          </div>
        </div>
      </div>

      <NavigationActivationCircles section='aboutme' />
    </section>
  )
}

export default AboutMe
