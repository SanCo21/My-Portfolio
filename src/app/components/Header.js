
import { useState } from 'react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';
import HamburgerMenu from './HamburgerMenu';

// import Image from 'next/image';

const Header = ({ lang, toggleLanguage, activeSection }) => {
  const { base, complement } = content.companyName;  
  const [IsNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!IsNavbarOpen);
  };

  return (
    <header className="bg-primary text-white p-4 fixed top-0 w-full z-10 lg:hidden">
      <div className=" flex justify-between items-center px-4">
        <div className="flex-1 text-left">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-lg font-bold ml-2 mr-5 whitespace-pre-line">
          <a href="#home">{base}
          <span className="block">{complement[lang].replace(' ', '\n')}</span></a>
          </h1>          
        </div>
        <div className="md:hidden"> 
          <HamburgerMenu onClick={handleHamburgerClick} />
        </div>
        <div className="md:flex hidden">
          <Navbar lang={lang} activeSection={activeSection} orientation = "horizontal" />
        </div>
        <div className="flex-1 flex justify-end items-center space-x-4 lg:hidden">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />               
        </div>        
      </div>
      {IsNavbarOpen && (
        <div className="md:hidden bg-primary flex flex-col items-center">
          <Navbar lang={lang} activeSection={activeSection} orientation = "vertical" compact={true} />
        </div>
      )}
    </header>
  );
};

export default Header;