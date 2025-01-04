"use client";

import { useState } from "react";
// import Image from 'next/image';
import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { content } from "../../content";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ lang, toggleLanguage, activeSection }) => {
  const { base, complement } = content.companyName;
  const [IsNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!IsNavbarOpen);
  };

  return (
    <header className="bg-primary text-white py-4 fixed top-0 w-full z-10 lg:hidden">
      <div className=" flex items-center justify-between w-full lg:w-auto">
        <div className="text-left ml-4">
          {/* <Image src="Logo Sandra.svg" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-md font-bold  whitespace-pre-line">
            <a href="#home">
              {base}
              <span className="block">
                {complement[lang].replace(" ", "\n")}
              </span>
            </a>
          </h1>
        </div>
        <div className="md:hidden items-center justify-center mr-1">
          <HamburgerMenu isOpen={IsNavbarOpen} onClick={handleHamburgerClick} />
        </div>
        <div className="md:flex hidden text-sm">
          <Navbar
            lang={lang}
            activeSection={activeSection}
            orientation="horizontal"
            header={true}
          />
        </div>
        <div className="text-right text-sm flex justify-end items-center mr-4 lg:hidden">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />
        </div>
      </div>
      {IsNavbarOpen && (
        <div className="md:hidden bg-primary flex flex-col items-center">
          <Navbar
            lang={lang}
            activeSection={activeSection}
            orientation="vertical"
            compact={true}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
