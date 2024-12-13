import { useEffect, useState } from 'react';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLang(storedLang);
      onLanguageChange(storedLang);
    }
  }, [onLanguageChange]);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
    onLanguageChange(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`px-2 py-1 text-sm rounded ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
    >
      {lang === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
