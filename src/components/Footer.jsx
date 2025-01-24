import React from "react";

const Footer = () => {
  return (
    <div className="flex sm:hidden pb-4">
      <div className="w-[90%] m-auto relative">
        <div className="m-auto py-4 px-4 border-b  border-gray-600  bg-green-950 bg-opacity-5 rounded flex justify-between">
        </div>
        <div className="mt-3">
          <div className="avatar text-center">
          <p>&copy; {new Date().getFullYear()} forsyth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
