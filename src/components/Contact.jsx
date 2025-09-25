import React from 'react'
import NavigationCircles from './NavigationCircles';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
            <div className="w-full max-w-3xl mx-auto text-center">
                <h2 className="text-4xl mb-32 xl:mb-0 mt-12 special-font">Contact</h2>
                <div className='lg:gap-12 gap-32 xl:mb-0 mb-16 xl:mt-16 md-8'>
                    <p className="normal-font md:text-lg text-base leading-relaxed text-gray-900 dark:text-gray-200 mb-10">
                        I am currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential roles, or simply wish to connect, feel free to reach out. I look forward to hearing from you!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mx-auto normal-font">
                    <a
                        href="https://github.com/Jake177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-200/70 dark:bg-gray-800/70 hover:bg-blue-500 hover:text-white dark:hover:bg-yellow-500 transition-colors duration-300 shadow-sm"
                    >
                        <i className="bx bxl-github text-2xl" />
                        <div>
                            <span className="block text-sm uppercase tracking-wide opacity-70">GitHub</span>
                            <span className="font-semibold">@Jake177</span>
                        </div>
                        <i className="bx bx-right-arrow-alt text-xl opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jianhui-l-387223106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-200/70 dark:bg-gray-800/70 hover:bg-blue-500 hover:text-white dark:hover:bg-yellow-500 transition-colors duration-300 shadow-sm"
                    >
                        <i className="bx bxl-linkedin-square text-2xl" />
                        <div>
                            <span className="block text-sm uppercase tracking-wide opacity-70">LinkedIn</span>
                            <span className="font-semibold">Jianhui Ling</span>
                        </div>
                        <i className="bx bx-right-arrow-alt text-xl opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                    </a>
                </div>
            </div>

            <NavigationCircles section="contact" />
        </section>
    )
}

export default Contact
