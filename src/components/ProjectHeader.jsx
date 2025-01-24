import React from "react";

const ProjectHead = () => {
  return (
    <div>
      <div className="pb-4">
        <div className="bg-[#1d1d1d] py-1 px-3 rounded-md bg-opacity-90 w-fit mb-4">
          <p className="text-[12px] tracking-widest text-[#fec212]">
            My Projects
          </p>
        </div>
        <h1 className="sm:text-[45px] text-[32px] my-4 font-bold leading-tight tracking-tight">
          Let's{" "}
          <span className="bg-green-900 text-[#fec212] px-4">Explore</span>{" "}
          <span className="">
            <br /> Have fun while at it
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ProjectHead;
