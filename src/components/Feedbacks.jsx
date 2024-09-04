import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import StarsCanvas from "./canvas/Stars";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  source_code_link,
  isExpanded,
  toggleExpand,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white text-[48px] font-black">"</p>

    <div className="mt-1">
      <p className="text-white text-[18px] tracking-wider">
        {isExpanded ? testimonial : `${testimonial.substring(0, 100)}...`}
      </p>

      <button
        onClick={toggleExpand}
        className="text-blue-500 hover:underline mt-3"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      {source_code_link && (
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-3 block"
        >
          Connect
        </a>
      )}

      <div className="mt-7 flex items-center gap-4">
        <div className="flex-1 flex flex-col">
          <p className="text-white text-[16px] font-medium">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>
        <img
          src={image}
          alt={`Feedback by ${name}`}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [expandedTestimonialIndex, setExpandedTestimonialIndex] =
    useState(null);

  const handleToggleExpand = (index) => {
    setExpandedTestimonialIndex(
      expandedTestimonialIndex === index ? null : index
    );
  };

  return (
    <div className="relative mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      {/* Background stars */}
      <StarsCanvas />

      <div className="relative z-10">
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
              What others say
            </p>
            <h2
              className={`${styles.sectionHeadText} text-center`}
              id="feedbacks"
            >
              Testimonials
            </h2>
          </motion.div>
        </div>

        {/* Feedback cards container */}
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
              isExpanded={expandedTestimonialIndex === index}
              toggleExpand={() => handleToggleExpand(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
