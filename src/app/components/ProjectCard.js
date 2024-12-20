import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectCards = ({ lang, projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="projects-content mt-10 flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative m-4 p-4 bg-white shadow-lg rounded-lg w-80 overflow-hidden"
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <Image
            className="w-full h-60 object-cover rounded-lg"
            src={project.imageUrl}
            alt={project.title}
            width={900}
            height={900}
          />
          <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
          <p className="mt-2 mb-2 text-blue-900">{project.description[lang]}</p>
          <a
            className="mt-4 text-yellow-500 hover:underline"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "fr" ? "Voir le projet" : "See the project"}
          </a>
          <div
            className={`container-wrapper rounded-ss-lg p-2 bg-blue-900 shadow-lg absolute right-0 flex flex-col transform ${
              hoveredProject === index ? "translate-y-0" : "translate-y-full"
            } transition-transform duration-300`}
          >
            <div className="icon-wrapper flex justify-center">
              <a href={project.github} target="_blank" rel="noopener noreferrer">                
                <Image
                  src="/icons/code-icon.svg"
                  alt="Code Icon"
                  width={20}
                  height={20}
                  className="cursor-pointer icon"
                />
              </a>
            </div>
            <div className="p-1 mt-2 w-20 h-14 text-white text-xs">
              <ul>
                {project.tools.map((tool, toolIndex) => (
                  <li key={toolIndex}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectCards;
