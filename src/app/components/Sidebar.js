import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
  const sections = content.sectionsData;
  const { base, complement } = content.companyName;

  return (
    <aside className="bg-blue-900 text-white w-64 h-full fixed top-0 left-0 p-4 flex-col justify-between hidden lg:flex">
      <div>
        <h1 className="text-2xl font-bold mb-5">
        {base}<br/>{complement[lang]}
        </h1>
        <div className="flex justify-center mt-4 mb-4">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} /> 
        </div>
        <nav className="space-y-20">
          {Object.keys(sections).filter(key => key !== 'home').map(key => (
            <Link href={`#${sections[key].id}`} key={key} scroll={false} legacyBehavior>
              <a className={`block px-4 py-2 rounded hover:bg-white hover:text-blue-900 ${activeSection === sections[key].id ? 'bg-white text-blue-900' : ''}`}>
                {lang === 'fr' ? sections[key].title.fr : sections[key].title.en}
              </a>
            </Link>
          ))}
        </nav>
      </div>      
    </aside>
  );
};

export default Sidebar;
