"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { content } from "../content";
import SectionManager from "./components/SectionManager";
import { projectsList } from "../projectsList";
import ScrollHandler from "./components/ScrollHandler";
// import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

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

  // const handleScroll = useCallback(() => {
  //   const headerElement = document.querySelector("header");
  //   if (!headerElement) return; // Add null check

  //   const headerHeight = headerElement?.offsetHeight || 0;
  //   const isSmallScreen = window.innerWidth <= 768;
  //   const offsetAdjustment = isSmallScreen ? headerHeight : 120;

  //   const offsets = Object.keys(sectionsData).map((key) => {
  //     const element = document.getElementById(sectionsData[key].id);
  //     if (element) {
  //       const offsetTop = element.offsetTop - offsetAdjustment;
  //       return { section: sectionsData[key].id, offset: offsetTop };
  //     }
  //     return { section: sectionsData[key].id, offset: 0 };
  //   });

  //   const bottomOfWindow = window.scrollY + window.innerHeight;
  //   const bottomOfDocument = document.documentElement.scrollHeight;

  //   let currentSection = "home";

  //   if (bottomOfWindow >= bottomOfDocument - 100) {
  //     currentSection = "contact";
  //   } else {
  //     currentSection = offsets.reduce((acc, curr) => {
  //       if (window.scrollY + 100 >= curr.offset) {
  //         return curr.section;
  //       }
  //       return acc;
  //     }, "home");
  //   }
  //   setActiveSection(currentSection);

  //   const rect = headerElement.getBoundingClientRect();
  //   const hasScrolledDown = window.scrollY > 200;
  //   const isHeaderVisible = rect?.top < window.innerHeight && rect?.bottom >= 0;
  //   setIsVisible(hasScrolledDown && isHeaderVisible);
  // }, [sectionsData]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "fr" : "en";
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

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
          <SectionManager
            lang={lang}
            sectionsData={sectionsData}
            activeSection={activeSection}
          />
          <Footer lang={lang} />
          <ScrollHandler
            sectionsData={sectionsData}
            setActiveSection={setActiveSection}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
