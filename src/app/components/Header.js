import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import sectionsData from '../../content';
// import Image from 'next/image';

const Header = ({ lang, toggleLanguage, activeSection }) => {
  const sections = sectionsData;

  return (
    <header className="bg-blue-900 text-white p-4 fixed top-0 left-0 w-full z-10">  
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-grow-0">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-xl font-bold ml-0 mr-5">
            {lang === 'fr' ? sections.home.title.fr : sections.home.title.en}
          </h1>          
        </div>
        <nav className="flex space-x-4">
          {Object.keys(sections).filter(key => key !== 'home').map(key => ( 
            <Link href={`#${sections[key].id}`} key={key} scroll={false} className={`hover:text-yellow-500 ${activeSection === sections[key].id ? 'bg-white text-blue-900' : ''} ${sections[key].id === 'about' ? 'whitespace-nowrap' : ''}`}> 
              {lang === 'fr' ? sections[key].title.fr : sections[key].title.en} 
            </Link> 
          ))}
        </nav>
        <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />  
      </div>
    </header>
  );
};

export default Header;
