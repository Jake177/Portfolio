import React from "react";
import NavigationCircles from "./NavigationCircles";

const focusHighlights = [
  {
    title: "Cloud & Serverless",
    icon: "bx bx-cloud"
  },
  {
    title: "Full-Stack Engineering",
    icon: "bx bx-code-alt"
  },
  {
    title: "Data & Intelligence",
    icon: "bx bx-data"
  }
];



const Home = () => {
  return (
    <div id="home" className="min-h-screen gradient-bg particles-bg grid-bg text-yellow-500 isolate overflow-hidden">
      {/* 装饰性光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <section className="relative w-full flex flex-col items-center justify-center px-6 pt-28 pb-24 sm:pt-32 md:pt-36">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2 overflow-hidden">
            <img 
              src= 'images/person-img-4.jpg'
              alt="self portrait" 
              className="w-full h-full object-cover opacity-85 sm:opacity-95"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/10"></div>
        </div>

        <div className="relative max-w-6xl w-full grid lg:grid-cols-[1fr,0.9fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-4 max-w-2xl fade-in-up">
              <span className="normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70 inline-block px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5">Cloud Solution Engineer</span>
              <h1 className="special-font text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-gradient">
                Jianhui (James) Ling
              </h1>
            </div>

            <p className="normal-font text-base sm:text-lg text-yellow-500/85 max-w-xl leading-relaxed fade-in-up fade-in-up-delay-1">
              From serverless foundations to data-rich platforms, I partner with product teams to deliver cloud-native experiences that balance pace with precision. My toolkit spans AWS and Azure, with an emphasis on observability, automation, and tangible business outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              {focusHighlights.map((item, index) => (
                <div 
                  key={item.title} 
                  className={`glass-card rounded-2xl px-4 py-3 fade-in-up fade-in-up-delay-${index + 2} flex items-center justify-center gap-3`}
                >
                  <span className="h-9 w-9 rounded-full border border-yellow-500/30 bg-yellow-500/10 grid place-items-center text-yellow-400">
                    <i className={`${item.icon} text-lg`}></i>
                  </span>
                  <h3 className="special-font font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-200">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="sm:hidden w-full mt-10 fade-in-up fade-in-up-delay-5">
              <div className="relative w-full aspect-[3/4] rounded-[32px] border border-yellow-500/25 overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.2)]">
                <img 
                  src='images/person-img-4.jpg'
                  alt="self portrait" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavigationCircles section="home" />
    </div>
  );
};

export default Home;
