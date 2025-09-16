import React, { useEffect } from "react";
import Navbar from "./Navbar";
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
  <div className="w-full min-h-screen flex flex-col justify-center items-center isolate relative z-10 bg-gray-900">
      <Navbar />
      <div className="flex flex-col md:items-center items-start gap-y-3 xl:mb-0 md:mb-20 mb-0 xl:mt-80 md:mt-40 mt-20">
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder text-yellow-500 mt-8 md:mt-0">
          <span className="flex">
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
              className={`inline-block xl:w-[460px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold whitespace-nowrap text-center transform origin-right transition-transform duration-400 ease-out
              ${isRotating ? 'rotate-[-100deg]' : 'rotate-0'}`}>{currentText}</span>
            {' '}Developer</span> 
        </h1>
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-200
                  md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base 
                  text-gray-900 tracking-widest rounded-r-4xl flex justify-between 
                  items-center md:mr-auto md:mx-0 mx-auto normal-font xl:mt-16 md:mt-8 mt-4"
          onClick={() => setIsTextVisible(!isTextVisible)}
          onMouseEnter={() => setImageOpacity(0.8)}
          onMouseLeave={() => setImageOpacity(0.5)}
        >
          {isTextVisible ? 'Hide My Story' : 'Read My Story'}{' '}
          <i className={`bx ${isTextVisible ? 'bx-book-alt' : 'bx-book-open'}`}>
          </i>
        </button>

        <div className="flex md:gap-12 gap-2 mr-auto">
          {socialIcons.map((social, index) => (
            <a key={index} href="#" className="xl:text-3xl m:text-2xl text-yellow-500 hover:text-white transition-colors duration-300">
              <i className={social.icon}></i>
            </a>
          ))}

        </div>
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute -translate-y-1/2 translate-x-50 -z-10">
          <img
            src="images/pet.png"
            alt="Pet Image"
            className="w-full mx-auto transition-opacity duration-500"
            style={{ opacity: imageOpacity }} />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide absolute -translate-x-20 -translate-y-80 xl:right-22 lg:right-26 md:right-16 right-10 rotate-[3.5deg] animate-bounce text-yellow-200">zzzzzz</span>
        </div>
  <div className="lg:w-[600px] md:w-[500px] w-[350px] mx-auto relative z-10">
          <div className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-200 text-justify tracking-wide overflow-y-auto transform origin-top custom-scrollbar ${isTextVisible ? 'scale-y-100' : 'scale-y-0'} transition-transform duration-500`}>
            <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-yellow-500 normal-font">{aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
