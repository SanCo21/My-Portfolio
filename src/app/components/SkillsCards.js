
import Image from 'next/image';
import content from '../../content';

const SkillsCards = () => {
  const { skillsList } = content.sectionsData.skills;

  return (
    <div className="skills-content mt-10 w-full text-center">
      <div className="flex flex-wrap justify-center">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card m-4 p-4 text-center">
            <Image src={skill.src} alt={skill.alt} width={80} height={80} className="skills-icon" />
            <p className="mt-2 text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCards;
