import ProjectHead from "@/components/ProjectHeader";
import projectsData from "@/data/myProjects";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });

  const numberOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const numberScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const numberY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="relative w-[95%] md:w-[80%] xl:w-[60%] 2xl:w-[50%] mx-auto mb-20 md:mb-28"
    >
      {/* Sticky Project Number (hidden on very small screens for clarity) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden sm:block">
        <motion.div
          style={{ opacity: numberOpacity, scale: numberScale, y: numberY }}
          className="sticky top-28 md:top-32 xl:top-40 w-full flex justify-center xl:justify-start xl:pl-20"
        >
          <span className="text-[80px] sm:text-[120px] md:text-[160px] xl:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#fec212]/30 to-[#ff6b35]/30 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Project Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex flex-col lg:flex-row items-center lg:items-stretch border border-gray-700 bg-[#1e1e1eb8] rounded-xl backdrop-blur-sm overflow-hidden"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4 px-4 sm:px-8 py-8 lg:py-10 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-center lg:text-left">
            {item.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 text-center lg:text-left">
            {item.text}
          </p>

          <div>
            <h2 className="text-[#fec212] text-xs font-medium pb-2 text-center lg:text-left uppercase tracking-wide">
              Built with:
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {item.skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="py-1.5 px-3 text-[11px] sm:text-xs bg-[#333333] text-white rounded-md sm:rounded-full"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-start pt-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full text-sm font-medium hover:scale-[1.05] transition-all"
            >
              <FiArrowUpRight className="text-lg" />
              Visit Website
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[220px] sm:h-[300px] lg:h-[350px] xl:h-[400px] object-cover rounded-b-xl lg:rounded-none lg:rounded-r-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 xl:py-24 space-y-16 sm:space-y-20 xl:space-y-32">
      <ProjectHead />
      {projectsData.map((item, index) => (
        <ProjectItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ProjectPage;
