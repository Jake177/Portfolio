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
          <div className="normal-font border border-yellow-500/25 bg-gray-900/80 text-yellow-100 rounded-3xl px-6 sm:px-8 py-8 shadow-[0_24px_45px_-30px_rgba(234,179,8,0.3)]">
            <p className="text-base sm:text-lg leading-relaxed text-yellow-100/85 text-balance">
              I’m currently collaborating on cloud platform initiatives and open to conversations about robust, high-impact delivery. Whether you are mapping a migration, need a trusted partner for platform evolution, or simply want to exchange ideas, I’d love to hear from you.
            </p>
          </div>
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
