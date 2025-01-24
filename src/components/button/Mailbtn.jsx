import React from "react";
import { FiMail } from "react-icons/fi";

const Mailbtn = () => {
  return (
    <div>
      <a href="mailto:forsythokoeguale01@gmail.com">
        <button className="flex gap-2 hover:scale-[106%] transition-all items-center px-8 py-2 bg-[#1d1d1d] rounded-md sm:rounded-full ">
          <FiMail className=" text-white" /> {/* Mail icon */}
          <p className=" text-white  rounded-full text-center">Send a mail</p>
        </button>
      </a>
    </div>
  );
};

export default Mailbtn;
