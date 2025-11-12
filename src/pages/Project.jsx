import ProjectHead from "@/components/ProjectHeader";
import projectsData from "@/data/myProjects";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="relative min-h-[400px] lg:min-h-[500px] w-[90%] md:w-[60%] m-auto"
    >
      {/* Sticky Project Number - Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className=""
        >
          <span className="text-[120px] sm:text-[160px] xl:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#fec212]/30 to-[#ff6b35]/30 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Project Card */}
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative lg:flex items-center border xl:border-none border-gray-700 bg-[#202120b8] rounded-xl pt-10 backdrop-blur-sm"
      >
        {/* Left Content */}
        <div className="w-full space-y-4 sm:px-10 px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            className="xl:text-3xl text-2xl font-semibold leading-tight tracking-tighter"
          >
            {item.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="text-sm text-slate-300"
          >
            {item.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          >
            <h1 className="text-[#fec212] text-[12px] font-medium pb-2">
              Built with:
            </h1>
            <div className="flex gap-2 flex-wrap">
              {item.skills.map((skill, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 + idx * 0.05 }}
                  className="py-2 text-[10px] bg-[#333333] text-white rounded-md sm:rounded-full px-3"
                >
                  {skill}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 w-fit items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full hover:opacity-90 transition-opacity"
          >
            <FiArrowUpRight />
            <span className="text-sm">Visit Website</span>
          </motion.a>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          className="flex flex-col justify-end w-full relative z-10"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={item.image}
            alt={item.name}
            className="lg:h-[350px] h-[400px] pt-10 lg:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Back Button Component
const BackButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-10 left-6 sm:top-10 sm:left-12 z-20"
    >
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base cursor-pointer relative"
      >
        {/* Back arrow icon */}
        <motion.span
          className="inline-block transition-colors duration-300 group-hover:text-[#fec212]"
          initial={{ x: 0 }}
          whileHover={{ x: -5 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowLeft className="text-lg" />
        </motion.span>
        
        {/* Text */}
        <p className="transition-colors duration-300 group-hover:text-[#fec212]">
          Back to Home
        </p>

        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#fec212] to-[#ff6b35] group-hover:w-full transition-all duration-300"></span>
      </Link>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 xl:py-2 space-y-16 sm:space-y-20 xl:space-y-28 relative">
      {/* Back Button */}
      <BackButton />
      
      {/* Project Header */}
      <ProjectHead />
      
      {/* All Projects */}
      <div className="space-y-20 xl:space-y-10">
        {projectsData.map((item, index) => (
          <ProjectItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;