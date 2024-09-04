import React from "react";
import { styles } from "../styles";
import Eliasimage from "../assets/image/Eli.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col lg:flex-row items-center justify-center lg:pt-16 pt-8 hero-container">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl px-4 gap-8 lg:gap-12">
        {/* Text container */}
        <div className="text-center lg:text-left flex-1 flex flex-col justify-center lg:items-start lg:space-y-6 space-y-4">
          <div className="lg:mt-20 mt-10">
            <h1
              className={`${styles.heroHeadText} text-white text-3xl lg:text-4xl`}
            >
              ሰላም, I'm <span className="text-[#915EFF]">Elias</span>
            </h1>
            <p
              className={`${styles.heroSubText} text-black-400 text-sm lg:text-base`}
            >
              I am a Full-Stack Developer specializing in web applications with
              expertise in React, Next.js, Node.js, and Python. I build
              scalable, high-performance web applications, creating responsive
              interfaces and robust server-side solutions. Skilled in
              integrating AI and machine learning into web projects, I stay
              current with industry trends to deliver innovative and impactful
              solutions.
              {/* <br className="sm:block hidden" /> */}
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 justify-center items-center mt-8 lg:mt-0 hero-image">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-[1px] rounded-[20px] shadow-card green-pink-gradient">
            <div className="bg-tertiary rounded-[20px] overflow-hidden">
              {" "}
              {/* Ensure this matches your gradient border */}
              <img
                src={Eliasimage}
                alt="Elias's portrait"
                className="w-full h-full object-cover rounded-[20px]" // Apply rounded corners to image
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
