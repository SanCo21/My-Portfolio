import { motion } from "framer-motion";
import { containerVariants } from "../../variants";
import HomeSection from "../../components/sections/HomeSection";
import GeneralSection from "../../components/sections/GeneralSection";
import { projectsList } from "../../../projectsList";
import ActivityCards from "../ActivityCards";
import ProjectsCards from "../ProjectsCards";
import SkillsCards from "../SkillsCards";
import ContactForm from "../ContactForm";
// import CloudsBackground from "../CloudsBackground";

const colorMapping = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  white: "bg-white",
};

const componentsMap = {
  ActivityCards,
  ProjectsCards,
  SkillsCards,
  ContactForm,
};

const SectionManager = ({ lang, sectionsData }) => {
  return (
    <motion.main
      className="min-h-screen flex flex-col mt-20 lg:mt-2 max-w-screen-2xl mx-auto connected-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.keys(sectionsData).map((key, index) => {
        const section = sectionsData[key];
        const Component = componentsMap[section.component];
        const backgroundColorClass =
          colorMapping[section.backgroundColor] || "";

        return (
          <div key={key}>
            <motion.section
              id={section.id}
              className={`section mt-10 p-10 w-full text-center ${backgroundColorClass}`}
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
                  projects={
                    section.id === "projects" ? projectsList.projects : []
                  }
                />
              )}
            </motion.section>
            {/* Gradient Separator */}
            {index < Object.keys(sectionsData).length - 1 && (
              <div className="w-1/3 mx-auto h-2 bg-gradient-to-r from-pink-500 via-pink-300 to-purple-500 animate-gradient"></div>
            )}
          </div>
        );
      })}
    </motion.main>
  );
};

export default SectionManager;
