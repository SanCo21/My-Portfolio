import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import sectionsData from '../../content';
// import Image from 'next/image';

const Header = ({ lang, toggleLanguage, activeSection }) => {
  const sections = sectionsData;
  const headerTitle = { 
    en: "S & Co\nDigital solutions", 
    fr: "S & Co\nSolutions digitales" 
  };

  return (
    <header className="bg-blue-900 max-w-screen-max mx-auto text-white p-4 fixed top-0 w-full z-10 ">
      <div className=" flex justify-between items-center px-4">
        <div className="flex-1 text-left">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-xl font-bold ml-2 mr-5 whitespace-pre-line">
            {lang === 'fr' ? headerTitle.fr : headerTitle.en}
          </h1>          
        </div>
        <nav className="flex-1 flex justify-center space-x-4">
          {Object.keys(sections).filter(key => key !== 'home').map(key => ( 
            <Link href={`#${sections[key].id}`} key={key} scroll={false} legacyBehavior>
              <a className={`hover:text-yellow-500 ${activeSection === sections[key].id ? 'bg-white text-blue-900' : ''} ${sections[key].id === 'about' ? 'whitespace-nowrap' : ''}`}> 
                {lang === 'fr' ? sections[key].title.fr : sections[key].title.en} 
              </a>
            </Link> 
          ))}
        </nav>
        <div className="flex-1 text-right mr-2">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} /> 
        </div>
      </div>
    </header>
  );
};

export default Header;
