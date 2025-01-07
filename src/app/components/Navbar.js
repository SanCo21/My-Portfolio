import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { content } from "../../content";
import classNames from "classnames";

const Navbar = ({
  lang,
  activeSection,
  orientation = "horizontal",
  header = false,
  compact = false,
  sidebar = false,
  hamburger = false,
}) => {
  const sections = content.sectionsData;
  const navClass = classNames({
    "flex flex-col items-start justify-evenly space-y-16":
      orientation === "vertical" && sidebar,
    "flex flex-col items-start justify-evenly space-y-8":
      orientation === "vertical" && hamburger,
    "flex items-center justify-center space-x-2":
      orientation !== "vertical" && header,
    "flex items-center justify-center space-x-4":
      orientation !== "vertical" && !header,
  });

  const itemClass =
    orientation === "vertical"
      ? "w-full flex items-center group"
      : "flex items-center group";

  const activeClass =
    "bg-white text-primary font-medium p-2 rounded text-center";

  const inactiveClass = "p-2 text-center";

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <nav className={`${navClass} ${compact ? "compact-nav" : ""}`}>
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
              className={`${itemClass} font-medium ${
                activeSection === sections[key].id ? activeClass : inactiveClass
              }`}
              onClick={(event) => handleLinkClick(event, sections[key].id)}
            >
              {orientation === "vertical" && sections[key].icon && (
                <i
                  className={`fas fa-${sections[key].icon} text-2xl text-accent mr-4 `}
                ></i>
              )}
              <span className="group-hover:text-accent">
                {sections[key].title[lang].replace(" ", "\u00A0")}
              </span>
            </a>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
