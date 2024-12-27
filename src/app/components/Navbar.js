import Link from "next/link";
import { content } from "../../content";

const Navbar = ({
  lang,
  activeSection,
  orientation = "horizontal",
  // compact = false,
}) => {
  const sections = content.sectionsData;
  const navClass =
    orientation === "vertical"
      ? "flex flex-col items-center h-full justify-evenly m-8 space-y-4"
      : "flex space-x-4";

  const itemClass =
    orientation === "vertical" ? "w-full text-center py-2 truncate" : "";

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <nav className={`flex-1 flex justify-center ${navClass}`}>
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
              className={`${itemClass} font-medium hover:text-accent ${
                activeSection === sections[key].id
                  ? "bg-white rounded text-primary font-medium px-2"
                  : ""
              }`}
              onClick={(event) => handleLinkClick(event, sections[key].id)}
            >
              {/* {lang === "fr" ? sections[key].title.fr : sections[key].title.en} */}
              {sections[key].title[lang] || ""}
            </a>
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
