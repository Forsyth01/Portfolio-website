import React from "react";
import Resumebtn from "./button/Resumebtn";
import Githubtn from "./button/Githubtn";
import Linkedinbtn from "./button/Linkedinbtn";
import { vectorp } from "@/assets/images";
import Mailbtn from "./button/Mailbtn";

const Contact = () => {
  return (
    <section className="bg-[#1a1a1a] py-16 "
    id="contact"
    aria-label="Contact Section">
      <div className="md:w-[60%] w-[90%] m-auto">
        <div className="">
          <div className="flex flex-col justify-center py-4">
            <div className="relative w-fit mx-auto">
            
              
              {/* Gradient border */}
              <div className="relative ">
                <div className="">
                  <img
                    src="/profilepic3.jpg"
                    alt="Forsyth Okoeguale - Web Developer ready to collaborate on your next project"
                    className="h-[190px] w-[200px] object-cover rounded-full "
                    loading="lazy"
                  />
                </div>
              </div>
           
            </div>
          </div>
          <div className="text-center space-y-4">
            <h2 className="xl:text-5xl tracking-tighter lg:tracking-tight text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Let's Build <br className=""/> Something Amazing
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Got an exciting project? Looking for a dedicated developer? Let’s team up and make it happen.
            </p>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, and conversations. 
              Let's connect and create something extraordinary together.
            </p>
          </div>

          {/* Center the grid container */}
          <div className="flex justify-center items-center my-8 relative">
            <div className="grid sm:grid-cols-2 grid-cols-2 sm:gap-1 place-items-center">
              {/* <Resumebtn /> */}
              {/* <Githubtn /> */}
              <Linkedinbtn />
              <Mailbtn color="white" textColor="black"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;