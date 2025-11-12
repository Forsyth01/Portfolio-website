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
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="">
      {/* <Hero/> */}
      {/* <SectionDivider /> */}
      <SkillsSwiper />
      {/* <SectionDivider /> */}
      {/* <HoverAnimation /> */}
      {/* <SectionDivider /> */}
      {/* <Skills /> */}
      {/* <SectionDivider /> */}
      <Contact />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
