import React from "react";
import { FiMail } from "react-icons/fi";

const Mailbtn = ({ color = "#1d1d1d", textColor = "#ffffff" }) => {
  return (
    <div>
      <a href="mailto:forsyth01.dev@gmail.com">
        <button
          className={`flex gap-2 hover:scale-[106%] transition-all items-center  sm:px-8 py-2 px-4 rounded-md sm:rounded-full duration-500 sm:mt-0  `}
          style={{ backgroundColor: color , color: textColor }}
        >
          <FiMail className="" style={{color: textColor}} /> {/* Mail icon */}
          <p className=" rounded-full text-center text-sm" style = {{color: textColor}}>Send a mail</p>
        </button>
      </a>
    </div>
  );
};

export default Mailbtn;
