import projectsData from "@/data/myProjects";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="space-y-10 pb-10">
      {projectsData.map((item) => (
        <div
          key={item.id}
          className="xl:flex items-center border xl:border-non border-gray-700 bg-[#1e1e1eb8] rounded-xl pt-10"
        >
          <div className="w-full space-y-4 sm:px-10 px-2">
            <h1 className="xl:text-3xl sm:text-2xl text-xl font-semibold leading-tight tracking-tighter">
              {item.name}
            </h1>
            <p className="text-sm">{item.text}</p>

            <div>
              <h1 className="text-[#fec212] text-[12px] font-medium pb-2">
                Built with:
              </h1>
              <div className="flex gap-2 flex-wrap">
                {item.skills.map((skill, index) => (
                  <p
                    key={index}
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
              className="xl:h-[350px] pt-10 xl:pt-2 xl:mt-10 object-cover rounded-tl-xl rounded-bl-xl sm:rounded-bl-none rounded-br-xl xl:w-full m-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
