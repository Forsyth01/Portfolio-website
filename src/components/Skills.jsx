import React from "react";
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
  const projectLinks = [
    { name: "BinaryBlock", path: "/" },
    { name: "Cardplot", path: "/about" },
    { name: "Vpay", path: "/services" },
    { name: "Bankly", path: "/contact" },
  ];
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
    { id: 13, icon: <FaBootstrap color="#1572B6" title="CSS3" />, name: "Bootstrap" },
  ];
  return (
    <div className="bg-gray-60 bg-opacity-20 py-20 ">
      <div className="sm:w-[70%] xl:w-[60%] w-[90% m-auto ">
        <div className=" ">
          <div className="pb-4  ">
            <p className="font-bold sm:text-4xl text-3xl text-center borde border-gray-700 py-2">
              My Tech Stack
            </p>
          </div>
          <div className="grid xl:gap-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 gap-3 m-auto ">
            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="borde  bg-[#3a3a3a] cursor-pointer sm:rounded-md rounded-md flex gap-2 py-[3px] sm:py-2 text-center items-center justify-center "
                
              >
                {/* {tech.icon} */}
                <span className="sm:text-2xl text-[18px]">{tech.icon} </span>
                <span className="text-lg font-medium">
                  <h1 className=" text-[10px] sm:text-[12px] ">{tech.name}</h1>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
