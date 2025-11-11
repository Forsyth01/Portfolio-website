import React from "react";
import { motion } from "framer-motion";

const ProjectHead = () => {
  // Variants for scroll reveal
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="text-center w-[90%] m-auto">
      {/* Container that animates children on scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% enters viewport
        className="pb-4"
      >
        {/* Tagline */}
        <motion.div
          custom={0}
          variants={fadeUp}
          className="bg-[#1d1d1d] py-1 px-3 rounded-md bg-opacity-90 w-fit mx-auto mb-4"
        >
          <p className="text-[12px] tracking-widest text-[#fec212] uppercase">
            My Projects
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          className="sm:text-[45px] text-[32px] my-4 font-bold leading-tight tracking-tight"
        >
          Let’s{" "}
          <span className="bg-green-900 text-[#fec212] px-4 rounded-md">
            Explore
          </span>{" "}
          <span className="block">Have fun while at it</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          custom={2}
          variants={fadeUp}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
        >
          A collection of my recent works showcasing creativity, clean code, and
          interactive user experiences. Scroll down and take a tour 🚀
        </motion.p>

        {/* Divider */}
        <motion.div
          custom={3}
          variants={fadeUp}
          className="h-[2px] w-16 bg-[#fec212] mx-auto mt-6 rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectHead;
