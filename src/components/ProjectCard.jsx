import projectsData from "@/data/myProjects";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <div className="space-y-12 pb-10">
      {projectsData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          {/* Gradient glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          
          <div className="relative flex flex-col xl:flex-row items-stretch bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-green-500/10 group-hover:border-green-500/30 transition-all duration-500">
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"></div>
            
            {/* Left Section (Text) */}
            <div className="w-full xl:w-1/2 space-y-6 p-8 xl:p-10 relative z-10">
              {/* Project number badge */}
              <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="text-green-400 text-xs font-semibold">
                  PROJECT {String(index + 1).padStart(2, '0')}
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
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
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
                    className="group/btn relative px-6 py-3 bg-slate-800/50 border border-green-500/30 rounded-xl hover:border-green-500/50 transition-all duration-300"
                  >
                    <span className="relative z-10 text-slate-300 group-hover/btn:text-white font-semibold text-sm flex items-center gap-2">
                      <FiGithub className="text-base" />
                      Code
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full xl:w-1/2 relative group/img overflow-hidden">
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[280px] sm:h-[350px] xl:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-green-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard