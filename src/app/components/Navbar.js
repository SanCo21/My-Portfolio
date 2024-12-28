// import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { content } from "../../content";

// const Navbar = ({
//   lang,
//   activeSection,
//   orientation = "horizontal",
//   // compact = false,
// }) => {
//   const sections = content.sectionsData;
//   const navClass =
//     orientation === "vertical"
//       ? "flex flex-col justify-evenly my-8 space-y-4"
//       : // ? "flex flex-col items-center group h-full justify-evenly my-8 mx-4 space-y-4"
//         "flex space-x-4";

//   const itemClass =
//     orientation === "vertical"
//       ? "w-full flex items-center py-2 truncate transform transition-transform"
//       : "flex items-center group transform transition-transform";

//   const handleLinkClick = (event, id) => {
//     event.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       window.history.pushState(null, null, `#${id}`);
//     }
//   };

//   return (
//     <nav className={`flex-1 flex justify-center ${navClass}`}>
//       {Object.keys(sections)
//         .filter((key) => key !== "home")
//         .map((key) => (
//           <Link
//             href={`#${sections[key].id}`}
//             key={key}
//             scroll={false}
//             legacyBehavior
//           >
//             <a
//               className={`${itemClass} font-medium hover:text-accent ${
//                 activeSection === sections[key].id
//                   ? "bg-white rounded text-primary font-medium px-2"
//                   : ""
//               }`}
//               onClick={(event) => handleLinkClick(event, sections[key].id)}
//             >
//               {orientation === "vertical" && sections[key].icon && (
//                 <i
//                   className={`fas fa-${sections[key].icon} text-1xl text-accent mr-3 hover:text-blue-900`}
//                 ></i>
//               )}
//               {/* {lang === "fr" ? sections[key].title.fr : sections[key].title.en} */}
//               <span>{sections[key].title[lang] || ""}</span>
//             </a>
//           </Link>
//         ))}
//     </nav>
//   );
// };

// export default Navbar;

import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { content } from "../../content";

const Navbar = ({ lang, activeSection, orientation = "horizontal" }) => {
  const sections = content.sectionsData;
  const navClass =
    orientation === "vertical"
      ? "flex flex-col justify-evenly my-auto space-y-8"
      : "flex space-x-4";

  const itemClass =
    orientation === "vertical"
      ? "w-full flex items-center truncate transition-transform transform hover:scale-105"
      : "flex items-center group transition-transform transform hover:scale-105";

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <nav className={navClass}>
      {Object.keys(sections)
        .filter((key) => key !== "home")
        .map((key) => (
          <Link
            href={`#${sections[key].id}`}
            key={key}
            scroll={false}
            legacyBehavior
          >
            <a
              className={`${itemClass} font-medium mt-2 py-4 text-center ${
                activeSection === sections[key].id
                  ? "bg-white rounded text-primary font-medium px-2"
                  : ""
              }`}
              onClick={(event) => handleLinkClick(event, sections[key].id)}
            >
              {orientation === "vertical" && sections[key].icon && (
                <i
                  className={`fas fa-${sections[key].icon} text-2xl text-accent mr-4 `}
                ></i>
              )}
              <span
                className={`hover:text-accent ${
                  orientation === "vertical" ? "" : ""
                }`}
              >
                {sections[key].title[lang] || ""}
              </span>
            </a>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
