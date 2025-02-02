import React, { useEffect } from "react";
import { gsap } from "gsap";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Resumebtn from "@/components/button/Resumebtn";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

const About = () => {
  useEffect(() => {
    // Animation for heading
    gsap.from(".heading", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power4.out",
    });

    // Animation for paragraph text
    gsap.from(".about-text", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power4.out",
      delay: 0.5, // Delay animation for the paragraph
    });

    // Animation for the resume button
    gsap.from(".resume-btn", {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: "back.out(1.7)",
      delay: 1,
    });

    // Animation for experience and skills sections
    gsap.from(".section", {
      duration: 1.5,
      opacity: 0,
      y: 100,
      ease: "power4.out",
      stagger: 0.3, // Stagger animations for multiple elements
      delay: 1.5,
    });
  }, []);

  return (
    <div className="sm:py-10 py-4 ">
      <div className="xl:w-[60%] sm:w-[70%] w-[90%] container m-auto ">
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
                  I’m a front-end developer with 3 years of experience building
                  websites and apps that are easy to use, visually appealing,
                  and solve real-world problems. I use React, HTML, CSS, and
                  JavaScript to create clean, efficient code that delivers fast,
                  responsive, and engaging digital experiences. I love turning
                  ideas into reality and thrive on challenges like improving
                  user engagement, optimizing performance, and making the web
                  more accessible.
                  <br />
                  {/* <br />
                  My degree in International Studies and Diplomacy has given me
                  a unique ability to communicate effectively and collaborate
                  seamlessly with diverse teams. This has helped me create user
                  experiences that resonate across cultures and meet the needs
                  of a global audience.
                  <br /> */}
                  <br />
                  When I’m not coding, I’m probably learning new tools or
                  exploring the latest tech trends, to stay ahead in the
                  ever-evolving tech industry.
                  <br />
                  <br />
                  <p> Let’s work
                  together to create digital experiences that not only look
                  great but also deliver results!</p>
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

export default About;
