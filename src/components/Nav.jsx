import React, { useEffect, useRef } from "react";
import ToggleButton from "./ToggleButton";
import gsap from "gsap";
import { FiCircle } from "react-icons/fi";
import TimeLocation from "./TimeLocation";

const Nav = () => {
  const statusRef = useRef(null); // Ref for status bar

  useEffect(() => {
    // GSAP Animations
    gsap.from(statusRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="lg:w-[70%] xl:w-[60%] md:w-[60%] m-auto pt-5 hidden md:flex">
      <div
        className="hidden lg:flex flex-col sm:flex-row w-full items-center justify-between"
        ref={statusRef}
      >
        <div className="">
          <TimeLocation />
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex gap-2 items-center bg-[#10221a] py-2 px-6 rounded-full">
            <FiCircle className="bg-green-700 animate-ping rounded-full text-[8px] text-green-700 mr-2" />{" "}
            {/* Mail icon */}
            <h1 className="text-sm">Available for work</h1>
          </div>
          <div>
            {/* <ToggleButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
