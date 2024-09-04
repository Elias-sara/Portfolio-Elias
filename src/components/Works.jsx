import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  additional_link, // Add this prop for the additional link
}) => {
  const handleOpenSourceCode = () => {
    if (source_code_link) {
      window.open(source_code_link, "_blank");
    } else {
      console.error("Source code link is not available.");
    }
  };

  const handleOpenAdditionalLink = () => {
    if (additional_link) {
      window.open(additional_link, "_blank");
    } else {
      console.error("Additional link is not available.");
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="project-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          className="relative w-full h-[230px] group overflow-hidden rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            whileHover={{ y: -10 }} // Slide-up effect
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleOpenSourceCode}
              className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                style={{
                  filter: "invert(1) sepia(1) saturate(5) hue-rotate(-50deg)",
                }}
              />
            </div>
            {additional_link && (
              <div
                onClick={handleOpenAdditionalLink}
                className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="github" // Replace with an appropriate icon
                  alt="additional link"
                  className="w-1/2 h-1/2 object-contain"
                  style={{
                    filter: "invert(1) sepia(1) saturate(5) hue-rotate(-50deg)",
                  }}
                />
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-5">
          <motion.h3
            className="text-white font-bold text-[24px]"
            whileHover={{ color: "#f5af19" }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="mt-2 text-secondary text-[14px]"
            whileHover={{ color: "#f5af19" }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My </p>
        <h2 className={`${styles.sectionHeadText}`} id="work">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
