"use client"

import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
// import { contentEN, contentFR } from '../content';
import sectionsData from '../content';
import ContactForm from './components/contactForm';

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
      const el = document.getElementById(sectionsData[key].id);
      if (el) { 
        const offsetTop = el.offsetTop; 
        // console.log(`Section: ${sections[key].id}, Offset: ${offsetTop}`);
        return { section: sectionsData[key].id, offset: offsetTop };  
      }
      return { section:sectionsData[key].id, offset: 0 };    
    });

    const currentSection = offsets.reduce((acc, curr) => { 
      if (window.scrollY >= curr.offset - 180) { // adjust to consider the height of the header 
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

  
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <div>
      <Header lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection}/>
      <main className="min-h-screen flex flex-col items-start justify-center mt-20 w-full mx-auto max-w-1500px px-4">
        {/* Intro Section */}
        <section id="home" className="section mt-20 w-full max-w-full px-52 text-center">
          <h2 className="text-4xl font-bold text-blue-900 text-center">{lang === 'fr' ? sectionsData.home.title.fr : sectionsData.home.title.en}</h2>
          <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData.home.intro.fr : sectionsData.home.intro.en}</p>
          <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData.home.description.fr : sectionsData.home.description.en}</p>
        </section>
        {/* Other Sections */}
        {Object.keys(sectionsData).filter(key => key !== 'home' && key !== 'contact').map(key => ( 
          <section id={sectionsData[key].id} className="section mt-20 w-full max-w-full px-52 text-center" key={key}> 
            <h2 className="text-3xl font-bold text-blue-900 text-center">{lang === 'fr' ? sectionsData[key].title.fr : sectionsData[key].title.en}</h2> 
            <p className="text-lg mt-4 text-blue-900">{lang === 'fr' ? sectionsData[key].content.fr : sectionsData[key].content.en}</p> 
          </section> 
        ))}
          <section id="contact" className="section mt-20 flex flex-col items-center justify-center w-full max-w-full text-center"> 
            <div className="max-w-xl w-full ">
              <h2 className="text-3xl font-bold text-blue-900 text-center"> 
                {lang === 'fr' ? sectionsData.contact.title.fr : sectionsData.contact.title.en} 
              </h2> 
              <p className="text-lg mt-4 text-blue-900 mb-4 ">
                {lang === 'fr' ? sectionsData.contact.content.fr : sectionsData.contact.content.en}
              </p> 
              <ContactForm lang={lang} />
            </div>
          </section>
      </main>
    </div>
  );
};

export default HomePage;
