import { useState } from "react";
("@fortawesome/fontawesome-free/css/all.min.css");

const CollapseAbout = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Divide the content into the first sentence and the remaining text
  const firstSentence = content.split(". ")[0] + ".";
  const remainingText = content.slice(firstSentence.length);

  return (
    <div className="collapse-about p-2">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col items-center">
        <p className="flex-grow text-primary text-justify text-lg mb-2">
          {firstSentence}
        </p>
        <span
          className="cursor-pointer text-primary ml-2 inline-flex items-center"
          onClick={toggleOpen}
        >
          <i
            className={`fas fa-chevron-down bg-accent items-center text-white rounded-full p-1 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            } ${!isOpen && "hover:bg-primary"}`}
          ></i>
        </span>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-primary text-justify text-lg mt-2">
          {remainingText}
        </p>{" "}
      </div>
    </div>
  );
};
export default CollapseAbout;
