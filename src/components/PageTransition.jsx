import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { 
      scale: 0.95, // Slightly smaller
      opacity: 0,  // Fully transparent
      y: 50,       // Slight vertical offset
    },
    animate: { 
      scale: 1,    // Normal size
      opacity: 1,  // Fully visible
      y: 0,        // No vertical offset
    },
    exit: { 
      scale: 0.95, // Slightly smaller
      opacity: 0,  // Fully transparent
      y: -50,      // Slight vertical offset upwards
    },
  };

  const transition = {
    type: "spring", // Spring animation for a bouncy effect
    stiffness: 100, // Controls the stiffness of the spring
    damping: 20,    // Controls the damping (less damping = more bounce)
    duration: 0.5,  // Duration of the animation
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{
        width: "100%", // Ensures the animation covers the content width
        height: "100%", // Ensures the animation covers the content height
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;