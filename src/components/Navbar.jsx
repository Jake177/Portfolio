import React, { useRef,useEffect, use} from 'react'
import { useTheme } from '../context/ThemeContext';

/* Navbar component with dark mode toggle and section highlighting */
const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [activeSection, setActiveSection] = React.useState("home");
    const isScrollingRef = useRef(false);
    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return;

            const section = ["home", "skills", "contact"];
            section.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if(element) {
                    const {top,bottom} = element.getBoundingClientRect();
                    if (top <= 100 && bottom >= 100) {
                        setActiveSection(sectionId);
                    }

                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    /* Handle navigation link clicks with smooth scrolling */
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setActiveSection(sectionId);
        isScrollingRef.current = true;
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 1000);
    }
    return (
        <div className='w-full md:h-12 sm:h-14 h-18 flex flex-col sm:flex-row justify-center md:justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-gray-200 dark:bg-gray-900 transition-colors duration-300'>
            <div className='flex items-center sm:gap-x-4 gap-x-2'>
                <i className={`${darkMode ? 'bx bx-sun' : 'bx bx-moon'} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`} onClick={toggleDarkMode}></i>
                <a href='#' className={`special-font md:text-2xl sm:text-xl text-lg`}>Jianhui Ling</a>
            </div>
            <div>
                <a
                    href='#home'
                    className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative 
                     ${activeSection === "home" ? 'text-blue-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-200'}`}
                     onClick={(e) => handleNavClick(e, 'home')}>
                    Home
                    <span
                        className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 
                    group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500 
                    ${activeSection === "home" ? 'text-blue-500 dark:text-yellow-500 scale-x-100'
                                : 'text-gray-600 dark:text-gray-200 scale-x-0'}`}></span>
                </a>
                <a
                    href='#skills'
                    className={`relative group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide
                    ${activeSection === "skills" ? 'text-blue-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-200'}`}
                    onClick={(e) => handleNavClick(e, 'skills')}>
                    Skills
                    <span
                        className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 
                    group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500 
                    ${activeSection === "skills" ? 'text-blue-500 dark:text-yellow-500 scale-x-100'
                                : 'text-gray-600 dark:text-gray-200 scale-x-0'}`}></span>
                </a>
                <a
                    href='#contact'
                    className={`relative group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide 
                    ${activeSection === "contact" ? 'text-blue-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-200'}`}
                    onClick={(e) => handleNavClick(e, 'contact')}>
                    Contact
                    <span
                        className={`absolute -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 
                        group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500
                        ${activeSection === "contact" ? 'text-blue-500 dark:text-yellow-500 scale-x-100'
                                : 'text-gray-600 dark:text-gray-200 scale-x-0'}`}></span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
