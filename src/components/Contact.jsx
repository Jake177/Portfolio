import React from 'react'
import NavigationCircles from './NavigationCircles';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen particles-bg grid-bg flex flex-col justify-center items-center px-4 py-16 sm:py-20 overflow-x-hidden"
    >
      {/* 装饰性光晕 */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <div className="fade-in-up">
          <span className='normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70 inline-block px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-6'>Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl mb-6 special-font text-gradient">
            Let's Connect
          </h2>
          {/* 装饰分割线 */}
          <div className="animated-line w-32 rounded-full mx-auto mb-10"></div>
        </div>

        <div className="mb-8 sm:mb-12 fade-in-up fade-in-up-delay-1">
          <div className="glass-card normal-font rounded-3xl px-6 sm:px-8 py-8">
            <p className="text-base sm:text-lg leading-relaxed text-yellow-100/85 text-balance">
              I'm currently collaborating on cloud platform initiatives and open to conversations about robust, high-impact delivery. Whether you are mapping a migration, need a trusted partner for platform evolution, or simply want to exchange ideas, I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mx-auto normal-font fade-in-up fade-in-up-delay-2">
            {/* GitHub */}
            <a
              href="https://github.com/Jake177"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:w-[280px] px-5 py-4 rounded-2xl glass-card
                         hover:border-yellow-500/50 transition-all duration-300
                         min-h-[80px]"
            >
              <span className='h-12 w-12 rounded-full border border-yellow-500/30 bg-yellow-500/10 grid place-items-center text-yellow-400 group-hover:bg-yellow-500/20 transition-colors duration-200'>
                <i className="bx bxl-github text-2xl" />
              </span>
              <div className="flex-1 text-left leading-tight">
                <span className="block text-xs uppercase tracking-wide text-yellow-500/70">GitHub</span>
                <span className="font-semibold text-yellow-500 truncate">@Jake177</span>
              </div>
              <i className="bx bx-right-arrow-alt text-xl text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-auto" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jianhui-l-387223106"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:w-[280px] px-5 py-4 rounded-2xl glass-card
                         hover:border-yellow-500/50 transition-all duration-300
                         min-h-[80px]"
            >
              <span className='h-12 w-12 rounded-full border border-yellow-500/30 bg-yellow-500/10 grid place-items-center text-yellow-400 group-hover:bg-yellow-500/20 transition-colors duration-200'>
                <i className="bx bxl-linkedin-square text-2xl" />
              </span>
              <div className="flex-1 text-left leading-tight">
                <span className="block text-xs uppercase tracking-wide text-yellow-500/70">LinkedIn</span>
                <span className="font-semibold text-yellow-500 truncate">Jianhui Ling</span>
              </div>
              <i className="bx bx-right-arrow-alt text-xl text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-auto" />
            </a>
        </div>
      </div>

      <NavigationCircles section="contact" />
    </section>
  );
};

export default Contact;
