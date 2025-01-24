import React from "react";
import { FiPhone } from "react-icons/fi";

const Phone = () => {
  return (
    <div>
      <button className="flex gap-2 hover:scale-[106%] transition-all items-center px-8 py-2 bg-[#1d1d1d] rounded-full ">
        <FiPhone className=" text-white" /> {/* Mail icon */}
        <h1 className=" text-white  rounded-full text-center">
          +234 906138 2727
        </h1>
      </button>
    </div>
  );
};

export default Phone;
