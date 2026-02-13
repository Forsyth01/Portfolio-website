import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants";
import { fadeUpVariants, scaleUpVariants, viewportOnce, staggerDelay } from "../constants";

const Skills = () => {

  return (
    <section id="skills" className="py-20" aria-label="Technical Skills and Technologies">
      <div className="sm:w-[70%] xl:w-[60%] w-[90%] m-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-slate-400">
            Technologies I work with
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 relative">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial="hidden"
                whileInView="visible"
                variants={scaleUpVariants}
                viewport={viewportOnce}
                transition={staggerDelay(index)}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="text-4xl transition-transform group-hover:scale-110">
                    <Icon color={tech.color} />
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;