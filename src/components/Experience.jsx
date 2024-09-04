import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

// Component for each experience card
const ExperienceCard = ({ experience }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={
        <div className="flex flex-col items-center">
          <span className="text-white">{experience.date}</span>
          {/* Conditionally render additional image */}
          {isClicked && experience.additionalImage && (
            <div className="mt-2">
              <img
                src={experience.additionalImage}
                alt={`Additional content for ${experience.title}`}
                className="w-150 h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      }
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "50%",
        width: "70px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      icon={
        <div
          className={`relative w-full h-full overflow-hidden ${
            isClicked ? "scale-110" : "hover:scale-110"
          } transition-transform duration-300 ease-in-out`}
          onClick={handleClick}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
      }
    >
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex flex-col justify-evenly items-center">
          <h3 className="text-white text-3xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-xl font-semibold">
            {experience.company_name}
          </p>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-sm pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

// Main Experience component
const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="w-full mt-10"
      >
        <p className={`${styles.sectionSubText} text-center`}>Education</p>
        <h2 className={`${styles.sectionHeadText} text-center`} id="experience">
          Journey...
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
