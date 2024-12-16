import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
  const sections = content.sectionsData;
  const { base, complement } = content.companyName;
  const legalNoticesTextBreaks = {
    en: content.legalNotices.textBreaks.en.replace("${base}", base).replace("${complement.en}", complement.en),
    fr: content.legalNotices.textBreaks.fr.replace("${base}", base).replace("${complement.fr}", complement.fr),
  };
  const linkedinUrl = content.information.linkedinUrl;

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
            <p className="text-sm" dangerouslySetInnerHTML={{ __html:lang === 'fr' ? legalNoticesTextBreaks.fr : legalNoticesTextBreaks.en}}></p> 
            <div className="mt-4 flex justify-center space-x-6"> 
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500"> 
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} className="linkedin-icon" /> 
                </a> 
            </div> 
        </div>      
    </aside>
  );
};

export default Sidebar;
