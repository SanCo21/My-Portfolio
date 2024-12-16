import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="polaroid">
      <Image src={imageUrl} alt={title} className="polaroid-image" />
      <div className="polaroid-caption">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
