import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div className="relative overflow-hidden"> {/* Prevents overflow */}
      <motion.div
        ref={ref}
        initial={{ translateX: "100%", opacity: 0 }} // Starts inside the container
        animate={isInView ? { translateX: "0%", opacity: 1 } : {}} // Moves in without exceeding bounds
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        className="bg-blue-500 p-6 rounded-lg shadow-lg"
      >
        {children}
      </motion.div>
    </div>
  );
};

AnimatedDiv.propTypes = {
  children: PropTypes.object
}
export default AnimatedDiv;
