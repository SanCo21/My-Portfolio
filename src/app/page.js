"use client"

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import content from '../content';
import projectsList from '../projectsList';
import ContactForm from './components/contactForm';
import Footer from './components/Footer';

const HomePage = () => {
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('home');  
  const sectionsData = content.sectionsData;

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'fr';
    setLang(storedLang);
  }, []);

  const handleScroll = useCallback(() => { 
    const offsets = Object.keys(sectionsData).map(key => { 
      const el = document.getElementById(sectionsData[key].id);
      if (el) { 
        const offsetTop = el.offsetTop - 160; // adjust to consider the height of the header 
        // console.log(`Section: ${sections[key].id}, Offset: ${offsetTop}`);
        return { section: sectionsData[key].id, offset: offsetTop };  
      }
      return { section:sectionsData[key].id, offset: 0 };    
    });

    const currentSection = offsets.reduce((acc, curr) => { 
      if (window.scrollY >= curr.offset) { 
        return curr.section; 
      } 
      return acc; 
    }, 'home'); 
    
    console.log(`Current Section: ${currentSection}`);
    setActiveSection(currentSection); 
  }, [sectionsData]); 
  
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
    <div className="flex flex-col lg:flex-row bg-limiter">
      <Sidebar lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection} />
      <div className="flex-1 lg:ml-64">
        <Header lang={lang} toggleLanguage={toggleLanguage} activeSection={activeSection}/>
        <main className="min-h-screen flex flex-col justify-center mt-20 lg:mt-0 lg:mb-24 w-full mx-auto px-4">
          {/* Intro Section */}
          <section id="home" className="section mt-20 w-full text-center lg:mt-20">
            <h2 className="text-4xl font-bold text-blue-900 text-center">{lang === 'fr' ? sectionsData.home.title.fr : sectionsData.home.title.en}</h2>
            <p className="text-lg mt-6 text-blue-900">{lang === 'fr' ? sectionsData.home.intro.fr : sectionsData.home.intro.en}</p>
            <p className="text-lg mt-2 text-blue-900">{lang === 'fr' ? sectionsData.home.description.fr : sectionsData.home.description.en}</p>
          </section>
          
          {/* Other Sections */}
          {Object.keys(sectionsData).filter(key => key !== 'home' && key !== 'projects' && key !== 'contact').map(key => ( 
            <section id={sectionsData[key].id} className="section mt-20 w-full text-center" key={key}> 
              <h2 className="text-3xl font-bold text-blue-900 text-center">{lang === 'fr' ? sectionsData[key].title.fr : sectionsData[key].title.en}</h2> 
              <p className="text-lg mt-6 text-blue-900">{lang === 'fr' ? sectionsData[key].content.fr : sectionsData[key].content.en}</p> 
            </section> 
          ))}
          {/* Projects Section */} 
          <section id={sectionsData.projects.id} className="section mt-20 w-full text-center"> 
            <h2 className="text-3xl font-bold text-blue-900 text-center">{lang === 'fr' ? sectionsData.projects.title.fr : sectionsData.projects.title.en}</h2> 
            <p className="text-lg mt-6 text-blue-900">{lang === 'fr' ? sectionsData.projects.content.fr : sectionsData.projects.content.en}</p> 
            <div className="mt-10 flex flex-wrap justify-center"> 
              {projectsList.projects.map((project, index) => ( 
                <div key={index} className="m-4 p-4 bg-white shadow-lg rounded-lg w-60"> 
              <Image src={project.imageUrl} alt={project.title} width={45} height={45} className="w-full h-40 object-cover rounded-lg"/> 
              <h3 className="mt-4 text-xl font-bold">{project.title[lang]}</h3> 
              <p className="mt-2 text-blue-900">{project.description[lang]}</p> 
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-yellow-500 hover:underline"> 
                {lang === 'fr' ? 'Voir le projet' : 'View Project'} 
              </a> 
            </div> 
            ))} 
            </div> 
          </section>
          {/* Contact Section */}
          <section id="contact" className="section mt-20 flex flex-col items-center justify-center w-full text-center"> 
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
        <Footer lang={lang} />
      </div>
     </div>
  );
};

export default HomePage;
