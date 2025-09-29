import React, { useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext';

/* Navbar component with responsive hamburger menu and section highlighting */
const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'aboutme', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
    useTheme();
    const [activeSection, setActiveSection] = React.useState('home');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const isScrollingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return;

            navLinks.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= 100 && bottom >= 100) {
                        setActiveSection(id);
                    }
                }
            });
        };

        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /* Handle navigation link clicks with smooth scrolling */
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        isScrollingRef.current = true;
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 1000);
    };

    const renderLink = ({ id, label }) => (
        <a
            key={id}
            href={`#${id}`}
            className={`normal-font relative group lg:text-lg md:text-base text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === id ? 'text-blue-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-200'}`}
            onClick={(e) => handleNavClick(e, id)}
        >
            {label}
            <span
                className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 dark:bg-yellow-500 bg-blue-500 ${activeSection === id ? 'scale-x-100' : 'scale-x-0'}`}
            ></span>
        </a>
    );

    return (
        <div className='fixed inset-x-0 top-0 z-[120] w-full bg-gray-200/90 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300 shadow-sm'>
            <div className='w-full md:h-12 sm:h-14 h-18 flex items-center justify-between xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 py-3'>
                <a href='#' className='normal-font md:text-2xl sm:text-xl text-lg'>Jianhui (James) Ling</a>

                <div className='hidden sm:flex items-center gap-x-8 lg:gap-x-12'>
                    {navLinks.map(renderLink)}
                </div>

                <button
                    type='button'
                    className='sm:hidden inline-flex items-center justify-center text-3xl text-gray-700 dark:text-gray-200 transition-colors duration-300'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label='Toggle navigation menu'
                    aria-expanded={isMenuOpen}
                >
                    <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                </button>
            </div>

            {isMenuOpen && (
                <div className='sm:hidden flex flex-col gap-y-2 px-4 pb-4 bg-gray-200 dark:bg-gray-900 border-t border-gray-300/50 dark:border-gray-700/50'>
                    {navLinks.map((link) => (
                        <div key={link.id} className='py-2 border-b border-gray-300/40 dark:border-gray-700/40 last:border-b-0'>
                            {renderLink(link)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
