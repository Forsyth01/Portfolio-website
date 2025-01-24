import React from "react";
import Resumebtn from "./button/Resumebtn";
import Githubtn from "./button/Githubtn";
import Linkedinbtn from "./button/Linkedinbtn";
import { vectorp } from "@/assets/images";

const Contact = () => {
  return (
    <div className="md:w-[60%] w-[90%] m-auto py-10">
      <div className="">
        <div className="flex flex-col justify-center">
          <img
            src={vectorp}
            alt=""
            className="h-[190px] w-[200px] m-auto object-cover "
          />
        </div>
        <div className="text-center space-y-2">
          <p className="xl:text-4xl text-3xl font-bold">Let’s work together</p>
          <p>
            I would love to hear from you, so please feel free to reach out.
          </p>
        </div>

        {/* Center the grid container */}
        <div className="flex justify-center items-center my-5 ">
          <div className="grid grid-cols-3 gap-10 sm:gap-1 place-items-center">
            <Resumebtn />
            <Githubtn />
            <Linkedinbtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
