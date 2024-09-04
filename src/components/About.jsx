// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

// Import the picture you want to include
import yourPicture from "../assets/image/Web-Design.jpg";

// Main About component
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            {/* Yellow border */}
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 "></div>
            <img
              src={yourPicture}
              alt="Your Portrait"
              className="w-full h-auto rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0 text-left">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px] w-full"
          >
            Motivated and dynamic Web Developer / Programmer with a robust
            background in full-stack (MERN-stack) web application development.
            Transitioned from a Senior Transport Officer to a Full Stack
            Developer, leveraging strong problem-solving skills and analytical
            thinking. Specializes in developing scalable, responsive web
            applications using technologies such as JavaScript, React, Node.js,
            and MySQL. Committed to ....
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] leading-[30px] w-full"
          >
            continuous learning in modern frameworks, cloud technologies, and AI
            to drive technological innovation and make a meaningful impact.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] leading-[30px] w-full"
          >
            My goal is to expand my expertise in AI and full stack development
            to drive technological innovation and make a meaningful impact on
            the world.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
