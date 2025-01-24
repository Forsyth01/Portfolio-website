import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { scale: 0.8, opacity: 0 },  // Shrinks and fades out
    animate: { scale: 1, opacity: 1 },   // Scales up and fades in
    exit: { scale: 1.2, opacity: 0 },    // Expands slightly and fades out
  };

  const transition = {
    duration: 0.6,
    ease: "easeInOut",
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="relative w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
