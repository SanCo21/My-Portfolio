import React from "react";

const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <button
      className="text-white focus:outline-none lg:hidden flex items-center justify-center relative w-10 h-10"
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {/* <div className="w-6 h-6 relative"> */}
        <span
          className={`absolute block h-0.5 w-5 bg-white transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-45" : "translate-y-[-7px]"
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-5 bg-white transform transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-5 bg-white transform transition-transform duration-500 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-[7px]"
          }`}
        ></span>
        {/* </div> */}
      </div>
    </button>

    
  );
};

export default HamburgerMenu;
