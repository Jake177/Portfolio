import React from 'react'
import NavigationActivationCircles from './NavigationCircles'

const projects = [
  {
    title: 'PinHaoYun',
    subtitle: 'Cloud-native asset vault',
    summary:
      'Serverless upload and lifecycle management platform that gives internal teams a secure vault for critical media assets.',
    impact:
      'Automated ingestion and tiered storage policies reduced manual handling by 80% while keeping operating costs predictable.',
    stack: ['AWS Lambda', 'S3', 'DynamoDB', 'API Gateway', 'CloudWatch'],
    link: 'https://github.com/Jake177/PinHaoYun'
  },
  {
    title: 'RipOffRoo',
    subtitle: 'Scam insights for seniors',
    summary:
      'Vue + Node.js web experience that surfaces likely scam patterns for senior Australians, powered by a custom ML classifier.',
    impact:
      'Delivered a trusted channel for fraud reporting and triage, cutting response time from days to hours for partner agencies.',
    stack: ['Vue', 'Node.js', 'Express', 'ML Pipeline', 'MongoDB'],
    link: 'https://github.com/hassan-akbar/FIT5120'
  },
  {
    title: 'PlaySquad',
    subtitle: 'Campus social launchpad',
    summary:
      'Native Android app that lets students publish, discover, and RSVP to campus events with real-time updates and chat.',
    impact:
      'Backed by Kotlin + Firebase, the platform supported >2k signups in pilot with zero downtime during peak onboarding weeks.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST APIs'],
    link: 'https://github.com/Jake177/PlaySquad'
  },
  {
    title: 'Machine Learning Experiments',
    subtitle: 'Vision, text and gameplay analytics',
    summary:
      'A suite of ML prototypes, from number plate detection with OpenCV to email spam filtering and LoL win-rate projections.',
    impact:
      'Proved out lightweight models that integrate into existing ops workflows without costly re-platforming.',
    stack: ['Python', 'OpenCV', 'scikit-learn', 'Pandas'],
    link: 'https://github.com/Jake177/Machine-Learning'
  },
  {
    title: 'Agora Classroom',
    subtitle: 'Real-time learning rooms',
    summary:
      'Web-based classroom environment using Agora SDK for live video, whiteboarding, and collaborative chat experiences.',
    impact:
      'Enabled educators to host multi-track sessions with latency under 250ms, sustaining engagement across remote cohorts.',
    stack: ['Agora SDK', 'HTML', 'CSS', 'Socket.io'],
    link: 'https://github.com/Jake177/Agora-Classroom'
  }
]

const Projects = () => {
  return (
    <section id='projects' className='relative min-h-screen w-full bg-gray-950 text-yellow-500 px-6 py-24 sm:py-28 isolate'>
      <div className='max-w-6xl mx-auto flex flex-col gap-12'>
        <header className='space-y-4 max-w-3xl'>
          <span className='normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70'>Project</span>
          <h2 className='special-font text-4xl sm:text-5xl leading-tight'>Cloud-first shipping, across products and platforms.</h2>
          <p className='normal-font text-base sm:text-lg text-yellow-500/80 leading-relaxed'>A look at the systems and experiences I have helped architect—from serverless vaults to ML-guided insights.</p>
        </header>

        <div className='space-y-8'>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className='relative border border-yellow-500/15 rounded-3xl bg-gray-900/60 backdrop-blur px-6 sm:px-8 py-8 sm:py-10 transition shadow-[0_28px_60px_-35px_rgba(234,179,8,0.35)] hover:border-yellow-500/40'
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10'>
                <div className='max-w-3xl space-y-4'>
                  <h3 className='special-font text-3xl sm:text-[2.2rem] leading-tight'>{project.title}</h3>
                  <p className='normal-font text-sm sm:text-base text-yellow-500/75 uppercase tracking-[0.3em]'>{project.subtitle}</p>
                  <p className='normal-font text-base text-gray-200 leading-relaxed'>{project.summary}</p>
                </div>

                <div className='normal-font flex flex-col gap-4 text-sm sm:text-base text-yellow-500/75 min-w-[200px]'>
                  <div>
                    <span className='block uppercase tracking-[0.35em] text-xs text-yellow-500/70 mb-2'>Stack</span>
                    <div className='flex flex-wrap gap-2'>
                      {project.stack.map((item) => (
                        <span key={item} className='px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xs tracking-wide'>{item}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-yellow-500/90 hover:text-yellow-400 transition-colors duration-200'
                  >
                    View repository
                    <i className='bx bx-right-top-arrow-circle text-lg'></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <NavigationActivationCircles section='projects' />
      </div>
    </section>
  )
}

export default Projects
