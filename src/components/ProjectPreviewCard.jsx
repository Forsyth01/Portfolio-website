import projectsData from "@/data/myProjects";
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
      <div className="relative lg:flex items-center border xl:border-none border-gray-700 bg-[#1e1e1eb8] rounded-xl pt-10 backdrop-blur-sm">
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
            className="lg:h-[350px] pt-10 lg:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
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
        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
      >
        <span className="relative z-10">View All Projects</span>
        <FiArrowRight className="text-2xl relative z-10" />
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
