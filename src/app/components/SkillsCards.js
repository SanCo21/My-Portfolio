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
                {skill.name === "Tailwind" ? ( 
                  <svg className="filter-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33"> 
                  <g clipPath="url(#prefix__clip0)"> 
                    <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/> </g> 
                    <defs> <clipPath id="prefix__clip0"> 
                      <path fill="#fff" d="M0 0h54v32.4H0z"/> 
                      </clipPath> 
                    </defs> 
                  </svg> 
              ) : (
                <Image 
                  src={skill.src} 
                  alt={skill.alt} 
                  width={80} 
                  height={80} 
                  className="skills-icon"
                />
                )}
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