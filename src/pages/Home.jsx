import React from "react";
import Skills from "@/components/Skills";
import HoverAnimation from "@/components/MyProjectsHome";
import SkillsSwiper from "@/components/SkillsSwiper";
import Resumebtn from "@/components/button/Resumebtn";
import Githubtn from "@/components/button/Githubtn";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import { FiCircle } from "react-icons/fi";
import { vectorp } from "@/assets/images";

const Home = () => {
  return (
    <div className="w-full px-4">
      <div className="xl:w-[60%] sm:w-[70%] w-full max-w-screen-lg mx-auto m-auto text-center lg:text-left md:text-center flex flex-col h-[80vh] md:h-[80vh sm:py-10  lg:py-0 md:block lg:flex sm:h-full md:full lg:h-[70vh] justify-center">
        <div className="">
          <div className="space-y-4 col-span-2">
            <div className="lg:hidden pb-2">
              <div className="flex flex-col justify-center">
                <img
                  src={vectorp}
                  alt=""
                  className="h-[190px] w-[200px] m-auto object-cover "
                />
              </div>
              <div className="flex gap-2 items-center bg-[#10221a] w-fit m-auto py-2 px-6 rounded-md  ">
                <FiCircle className="bg-green-700 animate-ping rounded-full text-[8px] text-green-700 mr-2 " />{" "}
                <h1 className="text-sm">Available for work</h1>
              </div>
            </div>
            <div className="">
              <h1 className="heading sm:text-[45px] text-[28px] mb-4 font-bold xl:leading-tight leading-tight tracking-tight">
                {/* Building Exceptional <br className="sm:hidden" />
                User Experiences */}
                Designing Next-Level Digital Experiences
              </h1>
            </div>
            <div className="">
              {/* <p className="">
              &quot;I’m a front-end developer with 3 years of experience building responsive, user-friendly websites and
              web applications with clean, efficient code.   Hi! I'm Forsyth, a Frontend Developer based in Nigeria. I
                specialize in transforming design into functional,
                high-performing web applications. Let's discuss your next
                project.
              </p> */}
              <p className="">
                Hi! I'm Forsyth, a Frontend Developer with 3 years of experience building responsive, user-friendly websites and
                web applications with clean, efficient code.
              </p>
              {/* <p className="">
                Hi! I'm Forsyth, a Frontend Developer based in Nigeria. I
                specialize in transforming design into functional,
                high-performing web applications. Let's discuss your next
                project.
              </p> */}
            </div>
            <div className="flex gap-3 justify-center lg:justify-start ">
              <Resumebtn />
              <Githubtn />
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <SkillsSwiper />
      <SectionDivider />
      <HoverAnimation />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </div>
  );
};

export default Home;
