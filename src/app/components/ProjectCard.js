import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectCards = ({ lang, projects }) => {

  const [mounted, setMounted] = useState(false); 
  useEffect(() => { 
    setMounted(true); 
  }, []); 
  if (!mounted) return null;

  return (
    <div className="projects-content mt-10 flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <div key={index} className="m-4 p-4 bg-white shadow-lg rounded-lg w-80">
          <Image className="w-full h-60 object-cover rounded-lg"
            src={project.imageUrl}
            alt={project.title}
            width={900}
            height={900}            
          />
          <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
          <p className="mt-2 mb-2 text-blue-900">{project.description[lang]}</p>
          <a className="mt-4 text-yellow-500 hover:underline"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"            
          >
            {lang === 'fr' ? 'Voir le projet' : 'See the project'}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
