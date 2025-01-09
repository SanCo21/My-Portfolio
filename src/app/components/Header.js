"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { content } from "@/content-data";
import HamburgerMenu from "./HamburgerMenu";
import getImagePath from "./getImagePath";

const Header = ({ lang, toggleLanguage, activeSection }) => {
  // const { base, complement } = content.companyName;
  const { companyLogo } = content;
  const [IsNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!IsNavbarOpen);
  };

  return (
    <header className="bg-primary text-white py-4 fixed top-0 w-full z-10 lg:hidden">
      <div className=" flex items-center justify-between w-full lg:w-auto">
        <div className="text-left ml-1 pb-1 flex justify-start">
          <Image
            src={getImagePath(companyLogo.src)}
            alt={companyLogo.alt}
            width={120}
            height={52}
            className="w-[120px] h-[52px]"
            priority
          />

          {/* <div className="text-md font-bold">
            <a href="#home">
              {base}
              <span className="block">
                {complement[lang].replace(" ", "\n")}
              </span>
            </a>
          </div> */}
        </div>
        <div className="md:hidden items-center justify-center mr-5">
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
