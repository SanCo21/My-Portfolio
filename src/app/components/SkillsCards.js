import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import content from "../../content";

const SkillsCards = () => {
  const { skillsList } = content.sectionsData.skills;
  const repeatedSkills = [...skillsList, ...skillsList];

  return (
    <div className="skills-content mt-10 mx-auto container averflow-hidden">
      <div className="skills-wrapper py-8">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="card-container mx-4 py-6">
              <div className="skill-card  rounded-lg text-center p-3 bg-primary transform transition-transform duration-300 hover:scale-110 hover:z-10">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={80}
                  height={80}
                  className="skills-icon icon-style"
                />
                <p className="mt-2 text-white">{skill.name}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsCards;
