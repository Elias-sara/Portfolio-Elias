// src/components/ServiceCard.jsx
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// ServiceCard Component
const ServiceCard = ({ index, title, icon, skill, text }) => (
  <Tilt className="flex- xs:w-[500px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.74, 0.74)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center mt-2">
          {title}
        </h3>
        <p className="text-white text-[16px] font-medium text-center mt-1">
          <strong>Skill:</strong> {skill}
        </p>
        <p className="text-white text-[14px] text-center mt-2">{text}</p>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
