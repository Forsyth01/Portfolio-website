import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Linkedinbtn = () => {
  return (
    <div>
      <Link to="https://linkedin.com/in/forsyth-okoeguale" target="_blank">
        <button className="flex items-center hover:scale-[106%] transition-all bg-white text-[#1d1d1d] sm:px-8 py-2 px-4 rounded-md sm:rounded-full duration-500 sm:mt-0  text-center">
          <FiLinkedin className="mr-2" />
          <p className="text-sm text-center text-[#1d1d1d]">Linkedin</p>
        </button>
      </Link>
    </div>
  );
};

export default Linkedinbtn;
