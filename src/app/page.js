"use client"
import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';

const HomePage = () => {
  const [lang, setLang] = useState('fr');
  const [content, setContent] = useState({
    title: 'Bienvenue sur Mon Portfolio !',
        intro: 'Je suis Sandra COLOMER, une intégratrice web passionnée par la création de sites web dynamiques et interactifs.',
        about: 'Voici une brève introduction à mon sujet...',
        activities: 'Voici quelques activités que j\'appécie...',
        projects: 'Voici quelques projets sur lesquels j\'ai travaillé...',
        skills : 'Voici quelques compétences que je possède...',
        contact: 'N\'hésitez pas à me contacter...'
  });

  const updateContent = useCallback((language) => {
    setLang(language);
    if (language === 'fr') {
      setContent({
        title: 'Bienvenue sur Mon Portfolio !',
        intro: 'Je suis Sandra COLOMER, une intégratrice web passionnée par la création de sites web dynamiques et interactifs.',
        about: 'Voici une brève introduction à mon sujet...',
        activities: 'Voici quelques activités que j\'appécie...',
        projects: 'Voici quelques projets sur lesquels j\'ai travaillé...',
        skills : 'Voici quelques compétences que je possède...',
        contact: 'N\'hésitez pas à me contacter...'
      });
    } else {
      setContent({
        title: 'Welcome to My Portfolio!',
        intro: 'I am Sandra COLOMER, a web integrator passionate about creating dynamic and interactive websites.',
        about: 'Here is a brief introduction about myself...',
        activities: 'Here are some of the activities I enjoy doing...',
        projects: 'Some of the projects I have worked on include...',
        skills : 'Here are some of my skills...',
        contact: 'Feel free to get in touch with me...'
      });
    }
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      updateContent(storedLang);
    }
  }, [updateContent]);

  const toggleLanguage = () => { 
    const newLang = lang === 'fr' ? 'en' : 'fr'; 
    updateContent(newLang); localStorage.setItem('language', newLang); 
  };

  return ( 
  <div> 
    <Header lang={lang} toggleLanguage={toggleLanguage} /> 
    <main className="min-h-screen flex flex-col items-center justify-center mt-20"> 
      <section id="home" className="section"> 
        <h1 className="text-4xl font-bold text-blue-900">{content.title}</h1> 
        <p className="text-lg mt-4 text-blue-900">{content.intro}</p> 
        
      </section> <section id="about" className="section mt-8"> 
        <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'À Propos de Moi' : 'About Me'}</h2> 
        <p className="text-lg mt-4 text-blue-900">{content.about}</p> 
      </section> 

      <section id="activities" className="section mt-8"> 
        <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'Activités' : 'Activities'}</h2> 
        <p className="text-lg mt-4 text-blue-900">{content.activities}</p> 
      </section> 

      <section id="projects" className="section mt-8"> 
        <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'Projets' : 'Projects'}</h2> 
        <p className="text-lg mt-4 text-blue-900">{content.projects}</p> 
      </section> 
        
      <section id="skills" className="section mt-8"> 
        <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'Compétences' : 'Skills'}</h2> 
        <p className="text-lg mt-4 text-blue-900">{content.skills}</p> 
      </section> 
        
      <section id="contact" className="section mt-8"> 
        <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'Contact' : 'Contact'}</h2> 
        <p className="text-lg mt-4 text-blue-900">{content.contact}</p> 
      </section> 

    </main> 
  </div> ); }; 

export default HomePage;
