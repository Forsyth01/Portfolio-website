import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiGreensock,
  SiFigma,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

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
  {
    id: 7,
    icon: <SiGreensock color="#88CE02" title="GSAP" />,
    name: "GSAP",
  },
  {
    id: 8,
    icon: <FaGithub color="white" title="GitHub" />,
    name: "GitHub",
  },
  {
    id: 9,
    icon: <SiFigma color="#F24E1E" title="Figma" />,
    name: "Figma",
  },
  {
    id: 10,
    icon: <FaHtml5 color="#E34F26" title="HTML5" />,
    name: "HTML5",
  },
  {
    id: 11,
    icon: <FaCss3Alt color="#1572B6" title="CSS3" />,
    name: "CSS3",
  }
];

const SkillsSwiper = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
         
        }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div ref={marqueeRef} className="xl:my-20 my-4   xl:space-y-5 z-10 w-full">
      {/* Marquee moving to the left */}
      <div className="w-full xl:py-3 xl:bg-[#10221a] xl:rounded-l-xl xl:rotate-[-2deg] ">
        <Marquee speed={90} gradient={false} loop={0} direction="left">
          <div className="flex xl:gap-16 gap-6  items-center w-full p-2 ">
            {techStack.map((tech, index) => (
              <p
                key={index}
                className="cursor-pointer group flex items-center gap-4 bg-[#10221a] xl:bg-transparent p-4 xl:p-0 rounded-md "
              >
                <div className="text-2xl">{tech.icon}</div>
                <p className="text-gray-300  xl:text-3xl text-xl font-semibold">
                  {tech.name}
                </p>
              </p>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Marquee moving to the right */}
      <div className="xl:absolut   w-full xl:py-3 xl:bg-[#10221a] xl:rotate-[6deg] overflow-hidden xl:rounded-bl-xl e">
        <Marquee speed={90} gradient={false} loop={0} direction="right">
          <div className="flex xl:gap-16 gap-6  items-center w-full p-2 ">
            {techStack.map((tech, index) => (
              <p
                key={index}
                className="cursor-pointer group flex items-center gap-4 bg-[#10221a] xl:bg-transparent p-4 xl:p-0 rounded-md "
              >
                <div className="text-2xl">{tech.icon}</div>
                <p className="text-gray-300 xl:text-3xl text-xl font-semibold">
                  {tech.name}
                </p>
              </p>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsSwiper;
