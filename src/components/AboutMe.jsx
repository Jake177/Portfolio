import React from 'react'
import NavigationActivationCircles from './NavigationCircles'
import { aboutText } from '../data/index'

const AboutMe = () => {
  return (
  <section id='aboutme' className='relative min-h-screen w-full particles-bg text-yellow-500 px-6 py-24 sm:py-28 isolate'>
      {/* 装饰性光晕 */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className='max-w-6xl mx-auto grid lg:grid-cols-[0.9fr,1.1fr] gap-12 lg:gap-16 items-start'>
        <div className='space-y-6 fade-in-up'>
          <span className='normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70 inline-block px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5'>About</span>
          <h2 className='special-font text-4xl sm:text-5xl leading-tight max-w-xl text-gradient'>I transform complex requirements into measurable cloud strategy.</h2>
          
          {/* 装饰分割线 */}
          <div className="animated-line w-32 rounded-full mt-4"></div>
        </div>

        <div className='relative fade-in-up fade-in-up-delay-2'>
          <div className='glass-card relative rounded-3xl px-6 sm:px-8 py-8 sm:py-10 normal-font space-y-6'>
            <div className='space-y-4 text-yellow-500/85 leading-relaxed text-base sm:text-lg'>
              <p>{aboutText.intro}</p>
              <p>{aboutText.focus}</p>
              <div>
                <ul className='space-y-3 marker:text-yellow-500/60 list-disc list-inside text-sm sm:text-base text-yellow-500/80'>
                  {aboutText.projects.map((item, i) => (
                    <li key={i} className="hover:text-yellow-400 transition-colors duration-200">{item}</li>
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
