import { useState } from "react";
import Image from "next/image";
// import { content } from "../../content";
// import { projectsList } from "../../projectsList";

const ProjectsCards = ({ lang, projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  console.log("Projects received:", projects);

  return (
    <div className="projects-content mt-10 flex flex-wrap justify-center">
      {projects?.map((project, index) => (
        <div
          key={index}
          className="relative m-4 p-4 bg-white shadow-lg rounded-lg w-custom project-card"
        >
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              className="w-full h-60 object-cover rounded-lg"
              src={project.imageUrl}
              alt={project.title}
              width={900}
              height={900}
            />
            <div
              className={`absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center text-white text-center p-4 project-card-overlay transition-opacity duration-300 ease-in-out ${
                hoveredImage === index ? "opacity-75" : "opacity-0"
              }`}
            >
              <p>{project.information[lang]}</p>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
          <p className="mt-2 mb-2 text-primary">{project.description[lang]}</p>
          <a
            className="mt-4 font-medium text-accent bg-transparent transform transition duration-300 hover:text-white hover:bg-accent hover:scale-105 p-2 rounded inline-block"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "fr" ? "Voir le projet" : "See the project"}
          </a>
          <div
            className={`container-wrapper rounded-ss-lg p-2 bg-primary shadow-lg absolute  right-0 flex flex-col transform ${
              hoveredProject === index ? "translate-y-0" : "translate-y-full"
            } transition-transform duration-300`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="icon-style flex justify-center hover:scale-125 ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/code-icon.svg"
                  alt="Code Icon"
                  width={20}
                  height={20}
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer icon"
                />
              </a>
            </div>
            <div className="p-0.5 mt-2 w-20 h-14 text-white text-xs">
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
export default ProjectsCards;
