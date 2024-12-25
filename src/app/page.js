"use client"

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import content from '../content';
import ActivityCards from './components/ActivityCards';
import projectsList from '../projectsList';
import ProjectCard from './components/ProjectCard';
import SkillsCards from './components/SkillsCards.js';
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import Typewriter from './components/Typewriter';

const componentsMap = {
  ActivityCards,
  ProjectCard,
  SkillsCards,
  ContactForm
};

const HomePage = () => {
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('home');  
  const sectionsData = content.sectionsData;

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'fr';
    setLang(storedLang);
  }, []);

  const handleScroll = useCallback(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const isSmallScreen = window.innerWidth <= 768;
    const offsetAdjustment = isSmallScreen ? headerHeight : 120;

    const offsets = Object.keys(sectionsData).map(key => { 
      const element = document.getElementById(sectionsData[key].id);
      if (element) { 
        const offsetTop = element.offsetTop - offsetAdjustment; 
        return { section: sectionsData[key].id, offset: offsetTop };  
      }
      return { section:sectionsData[key].id, offset: 0 };    
    });

    const bottomOfWindow = window.scrollY + window.innerHeight;
    const bottomOfDocument = document.documentElement.scrollHeight;

    let currentSection = 'home';

    if (bottomOfWindow >= bottomOfDocument - 100) { // If near the bottom, highlight contact section
      currentSection = 'contact';
    } else {    
      currentSection = offsets.reduce((acc, curr) => { 
        if (window.scrollY + 100 >= curr.offset) { // Adjust for endpoint of the screen
          return curr.section; 
        } 
        return acc; 
      }, 'home');
    }
    setActiveSection(currentSection); 
  }, [sectionsData]); 
  
  useEffect(() => { 
    window.addEventListener('scroll', handleScroll); 
    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    }; 
  }, [handleScroll]);

    // useEffect(() => {
    //   const handleHashChange = () => {
    //     const { hash } = window.location;
    //     if (hash) {
    //       const element = document.querySelector(hash);
    //       if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     }
    //   };
    
    //   window.addEventListener('hashchange', handleHashChange); 
    //   handleHashChange(); 
    //   return () => { 
    //     window.removeEventListener('hashchange', handleHashChange); 
    //   }; 
    // }, []);
    

  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <div className="flex flex-col custom:flex-row">
      <Sidebar lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection} />
      <div className="flex-1 lg:ml-64">
        <Header lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection}/>
        <main className="min-h-screen flex flex-col mt-20 lg:mt-0 lg:mb-24 max-w-screen-lg mx-auto">
        {/* <main className="min-h-screen flex flex-col justify-center mt-20 lg:mt-0 lg:mb-24 container mx-auto px-4"> */}
        {Object.keys(sectionsData).map(key => { 
          const section = sectionsData[key]; 
          const Component = componentsMap[section.component]; 
          return ( 
            <section id={section.id} className={`section mt-10 p-10 w-full text-center ${section.backgroundColor}`} key={key}> 
              <h2 className={`text-3xl font-bold text-blue-900 text-center ${section.id === 'home' ? 'text-4xl uppercase' : ''}`}>
              {section.id === 'home' ? <Typewriter text={lang === 'fr' ? section.title.fr : section.title.en} /> : 
                (lang === 'fr' ? section.title.fr : section.title.en)}
              </h2> 
              {section.content && ( 
                <p className="text-lg mt-6 text-blue-900">
                  {lang === 'fr' ? section.content.fr : section.content.en}
                </p> 
              )} 
              {Component && <Component lang={lang} projects={projectsList.projects} />}
            </section>            
          ); 
        })}
        </main>
        <Footer lang={lang} />
      </div>
     </div>
  );
};

export default HomePage;
