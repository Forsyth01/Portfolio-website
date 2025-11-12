import React from "react";
import Resumebtn from "./button/Resumebtn";
import Githubtn from "./button/Githubtn";
import Linkedinbtn from "./button/Linkedinbtn";
import { vectorp } from "@/assets/images";
import Mailbtn from "./button/Mailbtn";

const Contact = () => {
  return (
    <div className="bg-[#1a1a1a] py-20">
      <div className="md:w-[60%] w-[90%] m-auto">
        <div className="">
          <div className="flex flex-col justify-center py-4">
            <div className="relative w-fit mx-auto">
            
              
              {/* Gradient border */}
              <div className="relative ">
                <div className="">
                  <img
                    src="/profilepic2.jpg"
                    alt="Profile"
                    className="h-[190px] w-[200px] object-cover rounded-full "
                  />
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h2 className="xl:text-5xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Let's Build Something Amazing
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Got an exciting project? Looking for a dedicated developer? Or simply want to 
              discuss the future of web development over coffee? 
            </p>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, and conversations. 
              Let's connect and create something extraordinary together.
            </p>
          </div>

          {/* Center the grid container */}
          <div className="flex justify-center items-center my-8">
            <div className="grid sm:grid-cols-3 grid-cols-3 sm:gap-1 place-items-center">
              <Resumebtn />
              <Githubtn />
              <Linkedinbtn />
              {/* <Mailbtn color="white" textColor="black"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;