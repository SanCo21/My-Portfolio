"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "./variants";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { content } from "../content";
import ActivityCards from "./components/ActivityCards";
import { projectsList } from "../projectsList";
import ProjectsCards from "./components/ProjectsCards";
import SkillsCards from "./components/SkillsCards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Typewriter from "./components/Typewriter";
import CollapseAbout from "./components/CollapseAbout";

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

const HomePage = () => {
  const [lang, setLang] = useState("fr");
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "fr";
    setLang(storedLang);
    console.log("Content Data:", content); // Add log to check content
    console.log("Projects Data:", projectsList); // Add log to check projects
  }, []);

  const sectionsData = content.sectionsData;

  const handleScroll = useCallback(() => {
    const headerElement = document.querySelector("header");
    if (!headerElement) return; // Add null check

    const headerHeight = headerElement?.offsetHeight || 0;
    const isSmallScreen = window.innerWidth <= 768;
    const offsetAdjustment = isSmallScreen ? headerHeight : 120;

    const offsets = Object.keys(sectionsData).map((key) => {
      const element = document.getElementById(sectionsData[key].id);
      if (element) {
        const offsetTop = element.offsetTop - offsetAdjustment;
        return { section: sectionsData[key].id, offset: offsetTop };
      }
      return { section: sectionsData[key].id, offset: 0 };
    });

    const bottomOfWindow = window.scrollY + window.innerHeight;
    const bottomOfDocument = document.documentElement.scrollHeight;

    let currentSection = "home";

    if (bottomOfWindow >= bottomOfDocument - 100) {
      currentSection = "contact";
    } else {
      currentSection = offsets.reduce((acc, curr) => {
        if (window.scrollY + 100 >= curr.offset) {
          return curr.section;
        }
        return acc;
      }, "home");
    }
    setActiveSection(currentSection);

    const rect = headerElement.getBoundingClientRect();
    const hasScrolledDown = window.scrollY > 200;
    const isHeaderVisible = rect?.top < window.innerHeight && rect?.bottom >= 0;
    setIsVisible(hasScrolledDown && isHeaderVisible);
  }, [sectionsData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "fr" : "en";
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full relative">
      <div className="w-full mx-auto relative">
        <Sidebar
          lang={lang}
          toggleLanguage={toggleLanguage}
          activeSection={activeSection}
        />
        <div className="flex-1 lg:pl-64">
          <Header
            lang={lang}
            toggleLanguage={toggleLanguage}
            activeSection={activeSection}
          />
          <motion.main
            className="min-h-screen flex flex-col mt-20 lg:mt-2 max-w-screen-2xl mx-auto"
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
                <motion.section
                  id={section.id}
                  className={`section mt-10 p-10 w-full text-center ${backgroundColorClass}`}
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  
                  <h2
                    className={`text-3xl font-bold text-primary text-center ${
                      section.id === "home" ? "text-4xl uppercase" : ""
                    }`}
                  >
                    {section.id === "home" ? (
                      <Typewriter
                        text={
                          lang === "fr" ? section.title.fr : section.title.en
                        }
                      />
                    ) : lang === "fr" ? (
                      section.title.fr
                    ) : (
                      section.title.en
                    )}
                  </h2>
                  {section.id === "about" ? (
                    <CollapseAbout
                      content={
                        lang === "fr" ? section.content.fr : section.content.en
                      }
                    />
                  ) : (
                    section.content && (
                      <p className="text-lg mt-6 text-primary">
                        {" "}
                        {lang === "fr"
                          ? section.content.fr
                          : section.content.en}{" "}
                      </p>
                    )
                  )}
                  {/* {section.content && (
                    <p className="text-lg mt-6 text-primary">
                      {lang === "fr" ? section.content.fr : section.content.en}
                    </p>
                  )} */}
                  {Component && (
                    <Component
                      lang={lang}
                      projects={
                        section.id === "projects" ? projectsList.projects : []
                      }
                    />
                  )}
                </motion.section>
              );
            })}
          </motion.main>
          <Footer lang={lang} />
          {isVisible && (
            <button
              id="scrollToTopBtn"
              className="fixed bottom-28 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent"
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
