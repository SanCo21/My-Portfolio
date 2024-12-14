const LanguageSwitcher = ({ lang, toggleLanguage }) => {
    return (
      <button
        onClick={toggleLanguage}
        className={`px-2 py-1 text-sm rounded ${lang === 'fr' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
      >
        {lang === 'fr' ? 'FR' : 'EN'}
      </button>
    );
  };
  
  export default LanguageSwitcher;
  