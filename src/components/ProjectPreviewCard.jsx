import projectsData from "@/data/myProjects";
import React, { useRef } from "react";
import { FiArrowRight, FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectItem = ({ item, index }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative min-h-[400px] lg:min-h-[500px] w-[90%] m-auto group"
    >
      {/* Sticky Project Number - Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="sticky top-32 xl:top-40 left-0 w-full flex justify-center xl:justify-start xl:pl-20">
          <span className="text-[120px] sm:text-[160px] xl:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 leading-none select-none group-hover:from-green-500/30 group-hover:via-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700"></div>

      {/* Project Card */}
      <div className="relative lg:flex items-stretch bgdrop-blur-xl rounded-2xl overflow-hidden border border-green-500/10 group-hover:border-green-500/30 transition-all duration-500">
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 p-8 xl:p-10 relative z-10 flex flex-col justify-center">
          {/* Project Badge */}
          <div className="inline-block w-fit px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
              Featured Project
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            {item.name}
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {item.text}
          </p>

          <div>
            <h2 className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-green-400 to-transparent"></span>
              Tech Stack
            </h2>
            <div className="flex gap-2 flex-wrap">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50 hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 text-white font-semibold text-sm flex items-center gap-2">
                <FiExternalLink className="text-base" />
                View Live
              </span>
            </a>

            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative px-6 py-3 bg-slate-800/50 border border-green-500/30 rounded-xl hover:border-green-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-slate-300 group-hover/btn:text-white font-semibold text-sm flex items-center gap-2 transition-colors">
                  <FiGithub className="text-base group-hover/btn:rotate-12 transition-transform duration-300" />
                  Code
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
          
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[280px] lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          
          {/* Corner decoration */}
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-green-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ExploreMoreButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center pb-20 pt-20 lg:pt-10"
    >
      <Link
        to="/projects"
        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-green-500/30"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        <span className="relative z-10 text-white">View All Projects</span>
        <FiArrowRight className="text-2xl relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

const ProjectPreview = () => {
  // Get first 6 projects for preview
  const items = projectsData.slice(0, 6);

  return (
    <div id="projects" className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="space-y-20 xl:space-y-16 relative">
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