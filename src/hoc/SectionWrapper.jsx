import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher-Order Component (HOC) to wrap sections with animation and styling
const SectionWrapper = (Component, idName) => {
  // Returns a component with the provided `Component` and `idName`
  return function WrappedComponent() {
    return (
      <motion.section
        variants={staggerContainer()} // Animation variants
        initial="hidden" // Initial animation state
        whileInView="show" // Animation state while in view
        viewport={{ once: true, amount: 0.25 }} // Viewport settings
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Container styling
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component /> {/* Render the passed component */}
      </motion.section>
    );
  };
};

export default SectionWrapper;
