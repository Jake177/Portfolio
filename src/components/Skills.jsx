import React, { useState, useEffect } from 'react'
import { skillCards } from '../data/index'
import NavigationCircles from './NavigationCircles';

const Skills = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(null);
    const [hoverCardIndex, setHoverCardIndex] = useState(null);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);

            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);

            return () => window.removeEventListener('resize', checkScreenSize);
        }
    }, [])
    const getPositionClass = (card) => {
        const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
        return position === "bottom" ? 'bottom-0' : 'top-0'
    }

    const getHoverPositionClass = (card) => {
        const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
        return position === "bottom" ? 'bottom-full' : 'top-full'
    }
    return (
        <div id='skills' className='min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10'>
            <h2 className='text-4xl mb-16 xl:mb-0 mt-8 special-font'>Skills</h2>
            <div className='w-full xl:w-[1000px] lg:w-[850px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-24 xl:mb-0 mb-8 xl:mt-16 md:mt-8'>
                {skillCards.map((card, index) => (
                    <div key={index} className='h-full flex flex-col lg:max-w-[400px] md:max-w-[320px] max-w-[280px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate'
                        onMouseEnter={() => setHoverCardIndex(index)}
                        onMouseLeave={() => setHoverCardIndex(null)}>
                        <div className='p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500'>
                            <div className="flex items-center gap-3 mb-4 min-h-[64px]">
                                <i className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-gray-200 transition-colors duration-300`}></i>
                                <h3 className='md:text-2xl text-xl font-bold text-blue-500 dark:text-yellow-500 transition-colors duration-300'>
                                    {card.title}
                                </h3>
                            </div>
                            <p className='text-gray-900 dark:text-gray-200 xl:h-48 md:h-32 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-color duration-300 normal-font'>{card.description}</p>
                        </div>
                        {/* <div className={`w-full absolute left-0 ${getPositionClass(card)} flex flex-col gap-y-5 py-4 transition-all duration-300 -z-10 ${hoverCardIndex === index && `${getHoverPositionClass(card)}`}`}>
                        {isLargeScreen && card.hoverPosition.large === 'top' && (
                            <div className='flex justify-between'>
                                {[...Array(card.projectCount)].map((_, i) => (
                                    <a href='#' key={i} className='text-lg bg-blue-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-gray-200 rounded-full transition-colors'>
                                        {i + 1}
                                    </a>
                                ))}
                            </div>
                        )}
                        <h2 className='text-2xl text-center text-gray-900 dark:text-gray-200 font-light tracking-wide'>Projects</h2>
                        {(!isLargeScreen || (isLargeScreen && card.hoverPosition.large === 'bottom')) && (
                            <div className='flex justify-between'>
                                {[...Array(card.projectCount)].map((_, i) => (
                                    <a href='#' key={i} className='text-lg bg-blue-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-gray-200 rounded-full transition-colors'>
                                        {i + 1}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div> */}


                    </div>
                ))}
            </div>
            <NavigationCircles section="skills" />
        </div>
    )
}

export default Skills
