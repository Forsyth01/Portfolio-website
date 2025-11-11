import projectsData from "@/data/myProjects";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });

  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.2, 1, 1, 0.2]
  );
  const numberScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );
  const numberY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [20, 0, 0, 20]
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="relative min-h-[400px] lg:min-h-[500px] w-[95%] m-auto">
      {/* Sticky Project Number - Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ opacity: numberOpacity, scale: numberScale, y: numberY }}
          className="sticky top-32 xl:top-40 left-0 w-full flex justify-center xl:justify-start xl:pl-20"
        >
          <span className="text-[120px] sm:text-[160px] xl:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#fec212]/30 to-[#ff6b35]/30 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Project Card - Elevated Above Number */}
      <motion.div
        className="relative lg:flex items-center border xl:border-none border-gray-700 bg-[#1e1e1eb8] rounded-xl pt-10 backdrop-blur-sm"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Content */}
        <div className="w-full space-y-4 sm:px-10 px-2 relative z-10">
          <h1 className="xl:text-3xl text-2xl font-semibold leading-tight tracking-tighter">
            {item.name}
          </h1>
          <p className="text-sm">{item.text}</p>
          <div>
            <h1 className="text-[#fec212] text-[12px] font-medium pb-2">
              Built with:
            </h1>
            <div className="flex gap-2 flex-wrap">
              {item.skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="py-2 text-[10px] bg-[#333333] text-white rounded-md sm:rounded-full px-3"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 w-fit hover:scale-[106%] transition-all items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full"
          >
            <FiArrowUpRight />
            <span className="text-sm">Visit Website</span>
          </a>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-end w-full relative z-10"
        >
          <img
            src={item.image}
            alt={item.name}
            className="lg:h-[350px] pt-10 lg:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ExploreMoreButton = () => {
  return (
    <motion.div
      className="flex justify-center items-center pb-20 pt-20 lg:pt-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link
        to="/projects"
        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        
        <span className="relative z-10">View All Projects</span>
        
        <motion.div
          className="relative z-10"
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowRight className="text-2xl" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const ProjectPreview = () => {
  // Get first 6 projects for preview
  const items = projectsData.slice(0, 6);

  return (
    <div id="projects">
      <div className="space-y-20 xl:space-y-10">
        {items.map((item, index) => (
          <ProjectItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Explore More Button */}
      <ExploreMoreButton />
    </div>
  );
};

export default ProjectPreview;