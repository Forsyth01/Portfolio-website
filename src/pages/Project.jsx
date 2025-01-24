import Skills from "@/components/Skills"; // Assuming Skills component is being used here.
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import Showcase from "@/components/ProjectPreviewCard";
import ProjectHead from "@/components/ProjectHeader";
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  return (
    <div className="">
      <div className="xl:w-[60%] sm:w-[70%] w-[90%] m-auto sm:py-10 py-4">
        <ProjectHead />
        <ProjectCard />
      </div>
      <SectionDivider />
      <div className="w-[90%] sm:w-full m-auto">
        <Skills />
      </div>
      <SectionDivider />
      <div className="w-[90%] sm:w-full m-auto">
        <Contact />
      </div>
    </div>
  );
};

export default Project;
