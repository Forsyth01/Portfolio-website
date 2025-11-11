import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Resumebtn from "@/components/button/Resumebtn";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const About = () => {


  return (
    <div className="sm:py-10 py-4">
      <div className="xl:w-[60%] sm:w-[70%] w-[90%] container m-auto">
        <div className="pb-8">
          <div className="bg-[#1d1d1d] py-1 px-3 rounded-md bg-opacity-90 w-fit">
            <p className="text-[12px] tracking-widest">About me</p>
          </div>
          <div className="md:gri xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
            <h1 className="heading xl:text-[45px] text-[32px] mb-4 font-bold xl:leading-snug leading-[1.20] tracking-tight">
              Hello 👋, I'm <span className="text-[#fec212]">Forsyth</span>
            </h1>
            <div className="xl:col-span-2 lg:col-span-2 md:col-span-2">
              <div className="about-text">
                <p className="my- borde border-gray-700">
                  I’m a Website developer with 4 years of experience building
                  websites and apps that are easy to use, visually appealing,
                  and solve real-world problems. I use React, Nextjs, HTML, CSS, and
                  JavaScript to create clean, efficient code that delivers fast,
                  responsive, and engaging digital experiences. I love turning
                  ideas into reality and thrive on challenges like improving
                  user engagement, optimizing performance, and making the web
                  more accessible.
                  <br />
                  <br />
                  When I’m not coding, I’m probably learning new tools or
                  exploring the latest tech trends, to stay ahead in the
                  ever-evolving tech industry.
                  <br />
                  <br />
                  <p>
                    Let’s work together to create digital experiences that not
                    only look great but also deliver results!
                  </p>
                </p>
                <div className="my-4 resume-btn">
                  <Resumebtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <Experience className="section" />
      <SectionDivider />
      <div className="w-[90%] sm:w-full m-auto section">
        <Skills />
      </div>
      <SectionDivider />
      <div className="w-[90%] sm:w-full m-auto section">
        <Contact />
      </div>
    </div>
  );
};

export default About;
