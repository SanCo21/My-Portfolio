"use client"

import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import { contentEN, contentFR } from '../content';

const HomePage = () => {
  const [lang, setLang] = useState('fr');
  const [content, setContent] = useState(contentFR);

  useEffect(() => {
    if (typeof window === 'undefined') {
      const storedLang = localStorage.getItem('language') || 'fr';
      setLang(storedLang);
      setContent(storedLang === 'fr' ? contentFR : contentEN);
    }
  }, []);
    
  const updateContent = useCallback((language) => {
    setLang(language);
    const newContent = language === 'fr' ? contentFR : contentEN;
    setContent(newContent);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    updateContent(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
  };

  return (
    <div>
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      <main className="min-h-screen flex flex-col items-start justify-center mt-20 ml-12">
        <section id="home" className="section">
          <h1 className="text-4xl font-bold text-blue-900">{content.title}</h1>
          <p className="text-lg mt-4 text-blue-900">{content.intro}</p>
        </section>

        <section id="about" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">{lang === 'fr' ? 'À Propos de moi' : 'About me'}</h2>
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
    </div>
  );
};

export default HomePage;
