import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
  const sections = content.sectionsData;
  const { base, complement } = content.companyName;
  const footerText = {
    en: content.footer.text.en.replace("${base}", base).replace("${complement.en}", complement.en),
    fr: content.footer.text.fr.replace("${base}", base).replace("${complement.fr}", complement.fr),
  };
  const linkedinUrl = content.footer.linkedinUrl;

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
        <div className="mt-4 text-center"> {/* Footer content in sidebar */} 
            <p className="text-sm">{lang === 'fr' ? footerText.fr : footerText.en}</p> 
            <div className="mt-4 flex justify-center space-x-6"> 
                <a href="https://www.linkedin.com/in/your-profile-name/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500"> 
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} className="linkedin-icon" /> 
                </a> 
            </div> 
        </div>      
    </aside>
  );
};

export default Sidebar;
