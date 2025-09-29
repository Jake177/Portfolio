import React from "react";
import NavigationCircles from "./NavigationCircles";

const focusHighlights = [
  {
    title: "Cloud & Serverless Architecture",
    detail: "Designed scalable AWS solutions with Lambda, S3, and DynamoDB, enabling high concurrency and zero-maintenance deployments"
  },
  {
    title: "Full-Stack & Platform Engineering",
    detail: "Built web and mobile applications with Vue.js, React, and Kotlin, supported by CI/CD automation and secure API integrations"
  },
  {
    title: "Data & Intelligence",
    detail: "Developed streaming pipelines, real-time object detection, and NLP-driven features to deliver actionable insights at scale"
  },
  {
    title: "Innovation & Impact",
    detail: "Prototyped user-focused solutions—from fraud prevention tools to community event apps—achieving measurable cost savings and adoption"
  }
];



const Home = () => {
  return (
    <div id="home" className="relative min-h-screen bg-gray-900 text-yellow-500 isolate overflow-hidden">

      <section className="relative w-full flex flex-col items-center justify-center px-6 pt-28 pb-24 sm:pt-32 md:pt-36">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 lg:w-1/2 overflow-hidden">
            <img 
              src="./images/person-img-4.jpg" 
              alt="Jianhui James Ling portrait" 
              className="w-full h-full object-cover opacity-70 sm:opacity-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/92 to-gray-900/35"></div>
        </div>

        <div className="relative max-w-6xl w-full grid lg:grid-cols-[1fr,0.9fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-4 max-w-2xl">
              <span className="normal-font uppercase tracking-[0.45em] text-xs sm:text-sm text-yellow-500/70">Cloud Solution Engineer</span>
              <h1 className="special-font text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight">
                Jianhui (James) Ling
              </h1>
            </div>

            <p className="normal-font text-base sm:text-lg text-yellow-500/85 max-w-xl leading-relaxed">
              From serverless foundations to data-rich platforms, I partner with product teams to deliver cloud-native experiences that balance pace with precision. My toolkit spans AWS and Azure, with an emphasis on observability, automation, and tangible business outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {focusHighlights.map((item) => (
                <div key={item.title} className="border border-yellow-500/20 rounded-3xl px-5 py-6 bg-gray-900/75 backdrop-blur">
                  <h3 className="special-font font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-200 mb-2">{item.title}</h3>
                  <p className="normal-font text-sm text-yellow-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="sm:hidden w-full mt-10">
              <div className="relative w-full aspect-[3/4] rounded-[32px] border border-yellow-500/25 overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.18)]">
                <img 
                  src="./images/person-img-4.jpg" 
                  alt="Jianhui James Ling portrait" 
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
