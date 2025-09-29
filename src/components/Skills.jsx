import React, { useRef, useState, useEffect } from 'react'
import { skillCards } from '../data/index'
import NavigationCircles from './NavigationCircles'

const Skills = () => {
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        const updateShadows = () => {
            if (!container) return
            const { scrollLeft, scrollWidth, clientWidth } = container
            setCanScrollLeft(scrollLeft > 12)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12)
        }

        updateShadows()
        container.addEventListener('scroll', updateShadows)
        window.addEventListener('resize', updateShadows)

        return () => {
            container.removeEventListener('scroll', updateShadows)
            window.removeEventListener('resize', updateShadows)
        }
    }, [])

    const handleScroll = (direction) => {
        const container = scrollRef.current
        if (!container) return
        const offset = direction === 'next' ? 280 : -280
        container.scrollBy({ left: offset, behavior: 'smooth' })
    }

    return (
        <section id='skills' className='relative min-h-screen w-full bg-gray-900 text-yellow-500 px-6 py-24 sm:py-28 isolate'>
            <div className='max-w-6xl mx-auto flex flex-col gap-10'>
                <header className='space-y-4 max-w-3xl'>
                    <span className='normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70'>Capabilities</span>
                    <h2 className='special-font text-4xl sm:text-5xl leading-tight'>A toolkit anchored in cloud delivery, shipped with polish.</h2>
                </header>

                <div className='relative'>
                    <div className='flex items-center justify-between px-1 pb-2 text-xs sm:text-sm normal-font text-yellow-500/60'>
                        <span>Tap & drag to explore skill pillars</span>
                        <span className='hidden sm:flex items-center gap-1'><i className='bx bx-swipe-right text-base'></i>Swipe</span>
                    </div>

                    <div className='overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 sm:-mx-10 sm:px-10 no-scrollbar scroll-smooth' ref={scrollRef}>
                        <div className='flex gap-5 min-w-full'>
                            {skillCards.map((card) => (
                                <div
                                    key={card.title}
                                    className='snap-start shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] rounded-3xl border border-yellow-500/20 bg-gray-950/80 backdrop-blur px-5 py-6 shadow-[0_18px_40px_-25px_rgba(234,179,8,0.35)] transition hover:border-yellow-500/40'
                                >
                                    <div className='flex items-center gap-3 mb-4'>
                                        <span className='h-10 w-10 rounded-full border border-yellow-500/40 bg-yellow-500/10 grid place-items-center text-yellow-400'>
                                            <i className={`${card.icon} text-xl`}></i>
                                        </span>
                                        <h3 className='normal-font text-lg font-semibold tracking-wide text-yellow-500'>{card.title}</h3>
                                    </div>
                                    <p className='normal-font text-sm text-yellow-500/75 leading-relaxed max-h-48 overflow-y-auto custom-scrollbar pr-1'>
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`pointer-events-none absolute left-0 top-20 bottom-12 w-16 bg-gradient-to-r from-gray-900 to-transparent transition-opacity duration-300 hidden sm:block ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className={`pointer-events-none absolute right-0 top-20 bottom-12 w-16 bg-gradient-to-l from-gray-900 to-transparent transition-opacity duration-300 hidden sm:block ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}></div>

                    <button
                        type='button'
                        aria-label='Scroll skills left'
                        onClick={() => handleScroll('prev')}
                        className={`hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-yellow-500/20 bg-gray-900/80 backdrop-blur text-yellow-500 absolute left-2 top-1/2 -translate-y-1/2 transition duration-300 hover:border-yellow-500/50 ${canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        <i className='bx bx-chevron-left text-2xl'></i>
                    </button>

                    <button
                        type='button'
                        aria-label='Scroll skills right'
                        onClick={() => handleScroll('next')}
                        className={`hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-yellow-500/20 bg-gray-900/80 backdrop-blur text-yellow-500 absolute right-2 top-1/2 -translate-y-1/2 transition duration-300 hover:border-yellow-500/50 ${canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        <i className='bx bx-chevron-right text-2xl'></i>
                    </button>
                </div>

                <NavigationCircles section='skills' />
            </div>
        </section>
    )
}

export default Skills
