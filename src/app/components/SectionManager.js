import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants } from "../variants";
import Typewriter from "./Typewriter";
import CollapseAbout from "./CollapseAbout";
// import { content } from "../../content";
import { projectsList } from "../../projectsList";
import ActivityCards from "./ActivityCards";
import ProjectsCards from "./ProjectsCards";
import SkillsCards from "./SkillsCards";
import ContactForm from "./ContactForm";

const colorMapping = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const componentsMap = {
  ActivityCards,
  ProjectsCards,
  SkillsCards,
  ContactForm,
};

const SectionManager = ({ lang, sectionsData, activeSection }) => {
  return (
    <motion.main
      className="min-h-screen flex flex-col mt-20 lg:mt-2 max-w-screen-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.keys(sectionsData).map((key, index) => {
        const section = sectionsData[key];
        const Component = componentsMap[section.component];
        const backgroundColorClass = colorMapping[section.backgroundColor] || "";
        return (
          <motion.section
            id={section.id}
            className={`section mt-10 p-10 w-full text-center ${backgroundColorClass}`}
            key={key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {section.id === "home" ? (
              <HomeSection section={section} lang={lang} />
            ) : (
              <GeneralSection section={section} lang={lang} />
            )}
            {Component && (
              <Component
                lang={lang}
                projects={section.id === "projects" ? projectsList.projects : []}
              />
            )}
          </motion.section>
        );
      })}
    </motion.main>
  );
};

const HomeSection = ({ section, lang }) => (
  <>
    <h2 className="text-4xl font-bold text-primary text-center uppercase">
      <Typewriter text={lang === "fr" ? section.title.fr : section.title.en} />
    </h2>
    <div className="flex mt-16 items-center justify-center">
      <div className="w-1/3 flex justify-center">
        <div className="photo rounded-full bg-accent">
          <Image
            src="/images/Portrait7.png"
            alt="Portrait Sandra"
            width={300}
            height={500}
            priority
          />
        </div>
      </div>
      <div className="w-2/3 p-10 flex flex-col justify-center">
        <p className="text-lg mt-0 text-primary text-left">
          {lang === "fr" ? section.content.fr : section.content.en}
        </p>
      </div>
    </div>
  </>
);

const GeneralSection = ({ section, lang }) => (
  <>
    <h2 className="text-3xl font-bold text-primary text-center">
      {lang === "fr" ? section.title.fr : section.title.en}
    </h2>
    {section.id === "about" ? (
      <CollapseAbout
        content={lang === "fr" ? section.content.fr : section.content.en}
      />
    ) : (
      section.content && (
        <p className="text-lg mt-6 text-primary">
          {lang === "fr" ? section.content.fr : section.content.en}
        </p>
      )
    )}
  </>
);

export default SectionManager;
