// import React from "react";

// const HamburgerMenu = ({ isOpen, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="text-white focus:outline-none lg:hidden"
//     >
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//           className={`${isOpen ? 'transition-opacity duration-300 ease-in-out' : ''}`}
//         ></path>
//       </svg>
//     </button>
//   );
// };

// export default HamburgerMenu;

import React from "react";

const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white focus:outline-none lg:hidden flex items-center justify-center relative"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

