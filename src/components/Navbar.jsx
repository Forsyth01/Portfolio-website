import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaProjectDiagram, FaEnvelope, FaHome } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";
import profilepic2 from "@/assets/images/profilepic2.jpg";
import gsap from "gsap";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isExitingRef = useRef(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sidebarVisible) {
      gsap.fromTo(sidebarRef.current, { y: "-100%" }, { y: 0, duration: 0.5 });
    } else if (isExitingRef.current) {
      gsap.to(sidebarRef.current, {
        y: "-100%", duration: 0.5, onComplete: () => {
          isExitingRef.current = false;
          setSidebarVisible(false);
        },
      });
    }
  }, [sidebarVisible]);

  const navLinks = [
    { name: "About", path: "/about", icon: <FaUserAlt /> },
    { name: "Project", path: "/project", icon: <FaProjectDiagram /> },
    { name: "Send a mail", path: "mailto:forsythokoeguale01@gmail.com", icon: <FaEnvelope />, className: "bg-white px-4 sm:py-2 text-black sm:rounded-full rounded-md hover:bg-gray-200 sm:hidden lg:flex xl:flex flex" },
  ];

  const renderNavLinks = (isSidebar = false) => [...(isSmallScreen ? [{ name: "Home", path: "/", icon: <FaHome /> }] : []), ...navLinks]
    .map(({ name, path, icon, className }, index) => (
      <li key={index} className="flex items-center gap-2">
        <Link to={path} onClick={() => isSidebar && setSidebarVisible(false)} className={`flex items-center gap-3 ${isSidebar ? `text-lg p-3 border rounded-lg border-gray-500 w-full hover:bg-[#444] transition-all duration-200 ${className || "bg-[#333] text-white"}` : `${className || "text-gray-300 hover:text-white"}`}`}>{icon}{name}</Link>
      </li>
    ));

  return (
    <div>
      <div className="hidden sm:flex fixed w-full bottom-8 z-50">
        <div className="w-[70%] xl:w-[60%] bg-[#1d1d1d] m-auto py-2 px-4 border rounded-full shadow-lg flex justify-between items-center">
          <div className="flex items-center">
            <img src={profilepic2} alt="Profile" className="h-[40px] w-[40px] rounded-full border-2 border-gray-500" />
            <Link to="/" className="ml-4 text-white text-xl font-bold"><h1 className="logo text-gray-300">FORSYTH</h1></Link>
          </div>
          <ul className="flex gap-5 items-center">{renderNavLinks()}</ul>
        </div>
      </div>
      <div className="flex sm:hidden my-6">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <Link to="/"><img src={profilepic2} alt="Profile" className="h-[40px] w-[40px] rounded-full border-2 border-gray-500" /></Link>
          <TbMenuDeep className="text-4xl cursor-pointer" onClick={() => setSidebarVisible(!sidebarVisible)} />
        </div>
        {(sidebarVisible || isExitingRef.current) && (
          <div ref={sidebarRef} className="fixed top-0 left-0 right-0 h-[55%] sm:h-[100%] bg-[#1d1d1d] shadow-lg z-50 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <img src={profilepic2} alt="Profile" className="h-[40px] w-[40px] rounded-full border-2 border-gray-500" />
              <button className="text-white text-4xl" onClick={() => { isExitingRef.current = true; setSidebarVisible(false); }}>&times;</button>
            </div>
            <ul className="flex flex-col gap-4 border rounded-xl border-gray-600 p-4 w-full">{renderNavLinks(true)}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
