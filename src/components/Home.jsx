import React, { useEffect } from "react";
import Navbar from "./Navbar";
import NavigationCircles from "./NavigationCircles";
import { letters, professionTexts, aboutText, socialIcons } from "../data/index";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = React.useState(null);
  const [currentText, setCurrentText] = React.useState(professionTexts[0]);
  const [isRotating, setIsRotating] = React.useState(false);
  const [isTextVisible, setIsTextVisible] = React.useState(false);
  const [imageOpacity, setImageOpacity] = React.useState(0.5);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentIndex]);
        setIsRotating(false);
      }, 300)
    }, 5000)

    return () => clearInterval(interval);
  }, [])
  return (
    <div id="home" className="w-full min-h-screen flex flex-col justify-center items-center isolate relative z-10">
      <Navbar />
      <div className="flex flex-col md:items-center items-start gap-y-3 xl:mb-0 md:mb-20 mb-0 xl:mt-80 md:mt-40 mt-20">
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder mt-8 md:mt-0
        ">
          <span className="flex mx-auto md:mx-0">
            {letters.map((letter, index) => (
              <span
                key={index} className="special-font inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}>
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2
                ${letter.rotate} ${hoveredLetter === index ? 'visible' : 'invisible'}`} />
              </span>
            ))}
          </span>
          <span className="normal-font xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center">
            I am a {' '}<span
              className={`inline-block xl:w-[460px] md:w-[320px] w-[200px] lg:ml-6 ml-2 font-extrabold whitespace-nowrap text-center transform origin-right transition-transform duration-400 ease-out
              ${isRotating ? 'hidden md:rotate-[-100deg]' : 'rotate-0'}`}>{currentText}</span>
            {' '}Developer</span>
        </h1>
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-900 dark:bg-gray-200
                  md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-yellow-500
                  dark:text-blue-900 font-bold tracking-widest transition-color duration-300 rounded-r-4xl flex justify-between 
                  items-center md:mr-auto md:mx-0 mx-auto normal-font xl:mt-16 md:mt-8 mt-4"
          onClick={() => setIsTextVisible(!isTextVisible)}
        >
          {isTextVisible ? 'Hide My Story' : 'Read My Story'}{' '}
          <i className={`bx ${isTextVisible ? 'bx-book-alt' : 'bx-book-open'}`}>
          </i>
        </button>

        {/* <div className="flex md:gap-12 gap-2 mr-auto absolute md:relative left-4 md:left-auto top-20 md:top-auto flex-col md:flex-row">
          {socialIcons.map((social, index) => (
            <a key={index} href="#" className="xl:text-3xl m:text-2xl text-blue-500 dark:text-yellow-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300">
              <i className={social.icon}></i>
            </a>
          ))}

        </div> */}
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute -translate-y-1/2 translate-x-50 -z-10">
          <img
            src="images/pet.png"
            alt="Pet Image"
            className="w-full mx-auto transition-opacity duration-500"
            onMouseEnter={() => setImageOpacity(0.5)}
            onMouseLeave={() => setImageOpacity(0.8)}
            style={{ opacity: imageOpacity }} />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute -translate-x-20 -translate-y-80 xl:right-22 lg:right-26 md:right-16 right-10 rotate-[3.5deg] animate-bounce">zzzzzz</span>
        </div>
          <div className="lg:w-[700px] md:w-[560px] w-[90vw] max-w-[800px] mx-auto relative z-10">
            <div
              className={`
                xl:text-lg md:text-base text-sm font-light tracking-wide custom-scrollbar
                overflow-y-auto rounded-xl border shadow-md backdrop-blur-sm
                bg-white/80 dark:bg-gray-800/70 border-gray-200/40 dark:border-gray-700/40
                transition-all duration-500 ease-out
                ${isTextVisible ? 'max-h-[60vh] opacity-100 py-4 md:py-6 px-4 md:px-6' : 'max-h-0 opacity-0 py-0 px-4 md:px-6'}
              `}
            >
              <p className="leading-relaxed text-gray-900 dark:text-gray-200 text-justify normal-font xl:py-1 py-0 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-blue-500 dark:[&::first-letter]:text-yellow-500">
                {aboutText}
              </p>
            </div>
          </div>
      </div>
      <NavigationCircles section="home"/>
    </div>
  );
};

export default Hero;
