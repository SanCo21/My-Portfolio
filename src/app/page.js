"use client"

import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
// import { contentEN, contentFR } from '../content';
import sectionsData from '../content';

const HomePage = () => {
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('home');  
  // const sections = sectionsData;

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'fr';
    setLang(storedLang);
  }, []);

  const handleScroll = useCallback(() => { 
    const offsets = Object.keys(sectionsData).map(key => { 
      const el = document.getElementById(sections[key].id);
      if (el) { 
        const offsetTop = el.offsetTop; 
        // console.log(`Section: ${sections[key].id}, Offset: ${offsetTop}`);
        return { section: sections[key].id, offset: offsetTop };  
      }
      return { section:sections[key].id, offset: 0 };    
    });

    const currentSection = offsets.reduce((acc, curr) => { 
      if (window.scrollY >= curr.offset - 100) { // adjust to consider the height of the header 
        return curr.section; 
      } 
      return acc; 
    }, 'home'); 
    
    console.log(`Current Section: ${currentSection}`);
    setActiveSection(currentSection); 
  }, []); 
  
  useEffect(() => { 
    window.addEventListener('scroll', handleScroll); 
    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    }; }, [handleScroll]);
    
    // const updateContent = useCallback((language) => {
    //   setLang(language);
    //   if (typeof window !== 'undefined') {
    //     localStorage.setItem('language', language);
    //   }
    // }, []);
  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <div>
      <Header lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection}/>
      <main className="min-h-screen flex flex-col items-start justify-center mt-20 ml-12 mr-3">
        {/* Intro Section */}
        <section id="home" className="section mt-20">
          <h1 className="text-4xl font-bold text-blue-900">{lang === 'fr' ? sectionsData.home.title.fr : sectionsData.home.title.en}</h1>
          <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData.home.intro.fr : sectionsData.home.intro.en}</p>
          <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData.home.description.fr : sectionsData.home.description.en}</p>
        </section>
        {/* Other Sections */}
        {Object.keys(sectionsData).filter(key => key !== 'home').map(key => ( 
          <section id={sectionsData[key].id} className="section mt-20" key={key}> 
            <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? sectionsData[key].title.fr : sectionsData[key].title.en}</h2> 
            <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData[key].content.fr : sectionsData[key].content.en}</p> 
          </section> 
        ))}
      </main>
    </div>
  );
};

export default HomePage;
