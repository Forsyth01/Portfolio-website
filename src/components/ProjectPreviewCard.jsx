import { motion } from "framer-motion"; // Correct import
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa"; // Define image paths
import posze from "@/assets/images/posze.png";
import { noteapp, peacehouse } from "@/assets/images";

const ProjectPreview = () => {
  const items = [
    {
           id: 1,
           image: noteapp,
           name: "Noteapp",
           text: "I created a note app that allows users to easily create, update, and delete notes. By using Firebase as the backend, the app solves the problem of managing and storing notes efficiently",
           icon: <FaReact size={50} />,
           skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
           link: "https://noteapp01.netlify.app/", 
         },
    {
      id: 2,
      image: peacehouse,
      name: "Peace House University",
      text: "I designed the user interface and developed the landing page for Peace House University, leveraging my expertise in front-end development and modern tools like ReactJS and TailwindCSS.",
      icon: <FaReact size={50} />,
      skills: ["ReactJS", "TailwindCSS", "Framer Motion"],
      link: "https://peacehouseuniversity.netlify.app/",
    },
    
  ];

  return (
    <div className="space-y-10">
      {/* Cards */}
      {items.map((item) => (
        <div
          key={item.id}
          className="lg:flex items-center border xl:border-non border-gray-700 bg-[#1e1e1eb8] rounded-xl pt-10"
        >
          <div className="w-full space-y-4 sm:px-10 px-2 ">
            <h1 className="xl:text-3xl text-2xl font-semibold leading-tight tracking-tighter">{item.name}</h1>
            <p className="text-sm">{item.text}</p>
            <div>
              <h1 className="text-[#fec212 text-[12px] font-medium pb-2">
                Built with:
              </h1>
              <div className="flex gap-2">
                {item.skills.map((skill, index) => (
                  <p
                    key={index}
                    className="py-2 text-[10px] bg-[#333333] text-white  rounded-md sm:rounded-full  px-3"
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
              className="flex gap-2 w-fit hover:scale-[106%] transition-all items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full"
            >
              <FiArrowUpRight />
              <span className="text-sm">Visit Website</span>
            </a>
          </div>
          <div className="flex flex-col justify-end w-full">
            <motion.img
              src={item.image}
              alt={item.name}
              className="lg:h-[350px] pt-10 lg:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPreview;
