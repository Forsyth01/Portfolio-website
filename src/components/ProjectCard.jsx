import projectsData from "@/data/myProjects";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="space-y-10 pb-10">
      {projectsData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col xl:flex-row items-center border xl:border-none border-gray-700 bg-[#1e1e1eb8] rounded-xl overflow-hidden backdrop-blur-sm"
        >
          {/* Left Section (Text) */}
          <div className="w-full space-y-4 sm:px-10 px-4 py-6 text-center xl:text-left">
            <h1 className="xl:text-3xl sm:text-2xl text-xl font-semibold leading-tight tracking-tighter">
              {item.name}
            </h1>

            <p className="text-sm text-gray-300">{item.text}</p>

            <div>
              <h1 className="text-[#fec212] text-[12px] font-medium pb-2">
                Built with:
              </h1>
              <div className="flex gap-2 flex-wrap justify-center xl:justify-start">
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
              className="flex gap-2 w-fit mx-auto xl:mx-0 items-center px-4 py-2 text-[#1d1d1d] bg-white rounded-md sm:rounded-full hover:opacity-90 transition-opacity"
            >
              <FiArrowUpRight />
              <span className="text-sm">Visit Website</span>
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] sm:h-[300px] xl:h-[350px] object-cover rounded-b-xl xl:rounded-none xl:rounded-r-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
