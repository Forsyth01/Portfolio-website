import React from "react";
import { FiDownload, FiFile } from "react-icons/fi";

const Resumebtn = () => {
  return (
    <div>
      <a href="/FORSYTHCV.pdf" download="FORSYTHCV.pdf">
        <button className="flex gap-2 items-center hover:scale-[106%]  sm:m-0 transition-all bg-white text-[#1d1d1d] sm:px-8 py-2 px-4 rounded-md sm:rounded-full duration-500 text-center">
          <FiFile className=" text-black" />
          <p className=" text-[#1d1d1d]  rounded-full text-center text-sm">
            Resume
          </p>
        </button>
      </a>
    </div>
  );
};

export default Resumebtn;
