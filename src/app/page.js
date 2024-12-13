"use client"
import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';

const HomePage = () => {
  const [content, setContent] = useState({
    title: 'Welcome to My Portfolio!',
    intro: 'I am Sandra COLOMER, a web integrator passionate about creating dynamic and interactive websites.',
    about: 'Here is a brief introduction about myself...',
    projects: 'Some of the projects I have worked on include...',
    contact: 'Feel free to get in touch with me...'
  });

  const updateContent = useCallback((lang) => {
    if (lang === 'fr') {
      setContent({
        title: 'Bienvenue sur Mon Portfolio !',
        intro: 'Je suis Sandra COLOMER, une intégratrice web passionnée par la création de sites web dynamiques et interactifs.',
        about: 'Voici une brève introduction à mon sujet...',
        projects: 'Voici quelques projets sur lesquels j\'ai travaillé...',
        contact: 'N\'hésitez pas à me contacter...'
      });
    } else {
      setContent({
        title: 'Welcome to My Portfolio!',
        intro: 'I am Sandra COLOMER, a web integrator passionate about creating dynamic and interactive websites.',
        about: 'Here is a brief introduction about myself...',
        projects: 'Some of the projects I have worked on include...',
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

  return (
    <div>
      <Header onLanguageChange={updateContent} />
      <main className="min-h-screen flex flex-col items-center justify-center mt-20">
        <section id="home" className="section">
          <h1 className="text-4xl font-bold text-blue-900">{content.title}</h1>
          <p className="text-lg mt-4 text-blue-900">{content.intro}</p>
        </section>

        <section id="about" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
          <p className="text-lg mt-4 text-blue-900">{content.about}</p>
        </section>

        <section id="projects" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">Projects</h2>
          <p className="text-lg mt-4 text-blue-900">{content.projects}</p>
        </section>

        <section id="contact" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">Contact</h2>
          <p className="text-lg mt-4 text-blue-900">{content.contact}</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
