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
    { id: 1, icon: <FaReact color="#61DAFB" />, name: "React" },
    { id: 2, icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { id: 3, icon: <SiNextdotjs color="white" />, name: "Next.js" },
    { id: 4, icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { id: 5, icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind" },
    { id: 6, icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { id: 7, icon: <SiGreensock color="#88CE02" />, name: "GSAP" },
    { id: 8, icon: <FaGithub color="white" />, name: "GitHub" },
    { id: 9, icon: <SiFigma color="#F24E1E" />, name: "Figma" },
    { id: 10, icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { id: 11, icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="sm:w-[70%] xl:w-[60%] w-[90%] m-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-slate-400">
            Technologies I work with
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl transition-transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
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