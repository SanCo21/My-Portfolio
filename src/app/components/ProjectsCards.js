
import { useState } from "react";
import Image from "next/image";

const ProjectsCards = ({ lang, projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="mt-10 flex flex-wrap justify-center">
      {projects?.map((project, index) => (
        <div
          className="relative overflow-hidden m-4 p-4 bg-white shadow-lg rounded-lg w-custom"
          key={index}
        >
          <div
            className="relative w-full overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              className={`w-full h-60 object-cover transition-transform duration-500 ease ${
                hoveredImage === index
                  ? "transform scale-110 filter brightness-70"
                  : ""
              }`}
              src={project.imageUrl}
              alt={project.title}
              width={900}
              height={900}
            />
            <div
              className={`absolute inset-0 bg-primary flex items-center justify-center text-white text-center p-4 transform ${
                hoveredImage === index
                  ? "opacity-85 translate-x-0"
                  : "opacity-0 translate-x-full"
              } transition-transform duration-500 ease-in-out`}
            >
              <p>{project.information[lang]}</p>
            </div>
          </div>
          <h4 className="mt-4 text-xl font-bold">{project.title}</h4>
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
            className={`rounded-ss-lg p-2 bg-primary shadow-lg absolute right-0 flex flex-col transition-transform duration-300 ease-out ${
              hoveredProject === index
                ? "translate-y-8"
                : "translate-y-[calc(100%-0.15rem)]"
            }`}
            style={{
              bottom: "2rem",
            }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex justify-center hover:scale-125 transition-transform">
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
                  className="cursor-pointer icon-style"
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
