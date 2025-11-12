import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiGreensock,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const techStack = [
    {
      id: 1,
      icon: <FaReact color="#61DAFB" title="ReactJS" />,
      name: "ReactJS",
    },
    {
      id: 2,
      icon: <SiTypescript color="#3178C6" title="TypeScript" />,
      name: "TypeScript",
    },
    {
      id: 3,
      icon: <SiNextdotjs color="white" title="Next.js" />,
      name: "Next.js",
    },
    {
      id: 4,
      icon: <SiJavascript color="#F7DF1E" title="JavaScript" />,
      name: "JavaScript",
    },
    {
      id: 5,
      icon: <SiTailwindcss color="#38B2AC" title="TailwindCSS" />,
      name: "TailwindCSS",
    },
    {
      id: 6,
      icon: <SiFirebase color="#FFCA28" title="Firebase" />,
      name: "Firebase",
    },
    { id: 7, icon: <SiGreensock color="#88CE02" title="GSAP" />, name: "GSAP" },
    { id: 8, icon: <FaGithub color="white" title="GitHub" />, name: "GitHub" },
    { id: 9, icon: <SiFigma color="#F24E1E" title="Figma" />, name: "Figma" },
    { id: 10, icon: <FaHtml5 color="#E34F26" title="HTML5" />, name: "HTML5" },
    { id: 11, icon: <FaCss3Alt color="#1572B6" title="CSS3" />, name: "CSS3" },
    { id: 12, icon: <FaBootstrap color="#7952B3" title="Bootstrap" />, name: "Bootstrap" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:w-[70%] xl:w-[60%] w-[90%] m-auto relative ">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
              Technologies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            My Tech Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech stack grid - Compact style */}
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-3 sm:gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>

              <div className="relative bg-[#1e1e1eb8] backdrop-blur-sm rounded-lg p-3 border border-green-500/10 group-hover:border-green-500/40 transition-all duration-300 flex flex-col items-center justify-center gap-2 aspect-square">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl"
                >
                  {tech.icon}
                </motion.div>

                {/* Tech name - smaller text */}
                <span className="text-slate-400 group-hover:text-white text-[9px] sm:text-[10px] font-medium transition-colors duration-300 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;