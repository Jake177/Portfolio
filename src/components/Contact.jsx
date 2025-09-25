import React from 'react'
import NavigationCircles from './NavigationCircles';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-20 overflow-x-hidden"
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl mb-10 sm:mb-16 mt-8 special-font">
          Contact
        </h2>

        <div className="mb-8 sm:mb-12">
          <p className="normal-font text-base sm:text-lg leading-relaxed text-gray-900 dark:text-gray-200 text-balance">
            I am currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential roles, or simply wish to connect, feel free to reach out. I look forward to hearing from you!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mx-auto normal-font">
            {/* GitHub */}
            <a
              href="https://github.com/Jake177"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:w-[260px] px-4 py-3 rounded-lg bg-gray-200/70 dark:bg-gray-800/70
                         hover:bg-blue-500 hover:text-white dark:hover:bg-yellow-500 transition-colors duration-300 shadow-sm
                         min-h-[72px]"
            >
              <i className="bx bxl-github text-2xl shrink-0" />
              <div className="flex-1 text-left leading-tight">
                <span className="block text-xs uppercase tracking-wide opacity-70">GitHub</span>
                <span className="font-semibold truncate">@Jake177</span>
              </div>
              <i className="bx bx-right-arrow-alt text-xl opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jianhui-l-387223106"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:w-[260px] px-4 py-3 rounded-lg bg-gray-200/70 dark:bg-gray-800/70
                         hover:bg-blue-500 hover:text-white dark:hover:bg-yellow-500 transition-colors duration-300 shadow-sm
                         min-h-[72px]"
            >
              <i className="bx bxl-linkedin-square text-2xl shrink-0" />
              <div className="flex-1 text-left leading-tight">
                <span className="block text-xs uppercase tracking-wide opacity-70">LinkedIn</span>
                <span className="font-semibold truncate">Jianhui Ling</span>
              </div>
              <i className="bx bx-right-arrow-alt text-xl opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </a>
        </div>
      </div>

      <NavigationCircles section="contact" />
    </section>
  );
};

export default Contact;
