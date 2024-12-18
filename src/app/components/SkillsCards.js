import Image from "next/image";
import content from "../../content";

// const SkillsCards = () => {
//   const { skillsList } = content.sectionsData.skills;

//   const loopedSkillsList = [...skillsList, ...skillsList, ...skillsList];

//   return (
//     <div className="skills-content mt-10 w-full overflow-hidden ">
//       <div className="skills-wrapper relative">
//         <div className="flex animate-scroll">
//           {/* <div className="flex animate-scroll"> */}
//           {loopedSkillsList.map((skill, index) => (
//             <div
//               key={index}
//               className="skill-card flex-shrink-0 inline-block m-4 text-center"
//             >
//               <Image
//                 src={skill.src}
//                 alt={skill.alt}
//                 width={80}
//                 height={80}
//                 className="skills-icon"
//               />
//               <p className="mt-2 text-white">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsCards;

const SkillsCards = () => {
  const { skillsList } = content.sectionsData.skills;

  return (
    <div className="skills-content mt-10 mx-auto container overflow-hidden">
      <div className="skills-track">
        <div className="flex animate-scroll gap-6 w-fit">
          {skillsList.map((skill, index) => (
            <div 
              key={`first-${index}`} 
              className="skill-card flex-shrink-0 text-center">
              <Image 
                src={skill.src} 
                alt={skill.alt} 
                width={80} 
                height={80} 
                className="skills-icon"
              />
              <p className="mt-2 text-white">{skill.name}</p>
            </div>
          ))}
          {skillsList.map((skill, index) => (
            <div 
              key={`second-${index}`} 
              className="skill-card flex-shrink-0 text-center">
              <Image 
                src={skill.src} 
                alt={skill.alt} 
                width={80} 
                height={80} 
                className="skills-icon"
              />
              <p className="mt-2 text-white">{skill.name}</p>
            </div>
          ))}
          {/* {skillsList.map((skill, index) => (
            <div 
              key={`second-${index}`} 
              className="skill-card flex-shrink-0 text-center">
              <Image 
                src={skill.src} 
                alt={skill.alt} 
                width={80} 
                height={80} 
                className="skills-icon"
              />
              <p className="mt-2 text-white">{skill.name}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div> 
  );
};

export default SkillsCards;