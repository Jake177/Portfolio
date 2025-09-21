import React from 'react'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className='w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0'>
            <div className='flex items-center sm:gap-x-4 gap-x-2'>
                <i className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`} onClick={toggleDarkMode}></i>
                <a href='#' className='special-font md:text-2xl sm:text-xl text-lg'>Jianhui Ling</a>
            </div>

            <div>
                <a href='#' className='relative group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide dark:text-yellow-500 text-blue-500'>
                    Home
                    <span className='absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500'></span>
                </a>
                                <a href='#' className='relative group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide'>
                    Projects
                    <span className='absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500'></span>
                </a>
                                <a href='#' className='relative group lg:text-lg md:text-base text-sm font-light  lg:mr-12 mr-8 tracking-wide'>
                    Contact
                    <span className='absolute -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500'></span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
