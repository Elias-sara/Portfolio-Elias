import React from "react";
import { BallCanvas } from "../components";
// import { BallCanvas } from "../components";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {" "}
      {/* Updated gap */}
      {technologies.map((technology) => (
        <div className="w-48 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
