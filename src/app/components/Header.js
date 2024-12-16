import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';
// import Image from 'next/image';

const Header = ({ lang, toggleLanguage, activeSection }) => {
  const sections = content.sectionsData;
  const { base, complement } = content.companyName;

  return (
    <header className="bg-blue-900 max-w-screen-max mx-auto text-white p-4 fixed top-0 w-full z-10 lg:hidden">
      <div className=" flex justify-between items-center px-4">
        <div className="flex-1 text-left">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-lg font-bold ml-2 mr-5 whitespace-pre-line">
          {base}<br/>{complement[lang]}
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
        <div className="flex-1 justify-items-end mr-2 ml-5">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} /> 
        </div>
      </div>
    </header>
  );
};

export default Header;
