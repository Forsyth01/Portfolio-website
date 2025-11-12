import projectsData from "@/data/myProjects";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
     
      className="relative min-h-[400px] lg:min-h-[500px] w-[90%] m-auto"
    >
      {/* Sticky Project Number - Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="sticky top-32 xl:top-40 left-0 w-full flex justify-center xl:justify-start xl:pl-20">
          <span className="text-[120px] sm:text-[160px] xl:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#fec212]/30 to-[#ff6b35]/30 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Project Card */}
      <div className="relative lg:flex items-center border xl:border-none border-gray-700 bg-[#202120b8] rounded-xl pt-10 backdrop-blur-sm">
        {/* Left Content */}
        <div className="w-full space-y-4 sm:px-10 px-8 relative z-10">
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
            className="flex gap-2 w-fit items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full hover:opacity-90 transition-opacity"
          >
            <FiArrowUpRight />
            <span className="text-sm">Visit Website</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex flex-col justify-end w-full relative z-10">
          <img
            src={item.image}
            alt={item.name}
            className="lg:h-[350px] h-[400px] pt-10 lg:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
          />
        </div>
      </div>
    </div>
  );
};


const ExploreMoreButton = () => {
  return (
 <div className="flex justify-center items-center pb-20 pt-20 lg:pt-0">
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 text-white font-semibold text-lg cursor-pointer relative"
      >
        {/* Text: changes color when parent hovered */}
        <p className="transition-colors duration-300 group-hover:text-green-400">
          View All Projects
        </p>
        
        {/* Animated arrow icon */}
        <motion.span
          className="inline-block transition-colors duration-300 group-hover:text-green-400"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowRight className="text-xl" />
        </motion.span>

        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </div>
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
