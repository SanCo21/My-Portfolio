"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { content } from "@/content-data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SectionManager from "./components/sections/SectionManager";
// import ScrollHandler from "./components/scroll/ScrollHandler";
import Footer from "./components/Footer";

const ScrollHandler = dynamic(
  () => import("./components/scroll/ScrollHandler"),
  { ssr: false }
);

export default function HomePage() {
  const [lang, setLang] = useState("fr");
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "fr";
    setLang(storedLang);
  }, []);

  const sectionsData = content.sectionsData;

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "fr" : "en";
    setLang(newLang);
    localStorage.setItem("language", newLang);
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
}
