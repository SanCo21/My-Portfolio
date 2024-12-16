import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';
import SocialLinks from './socialLinks';
import Navbar from './Navbar';

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
  const sections = content.sectionsData;
  const { base, complement } = content.companyName;
  const legalNoticesTextBreaks = {
    en: content.legalNotices.textBreaks.en.replace("${base}", base).replace("${complement.en}", complement.en),
    fr: content.legalNotices.textBreaks.fr.replace("${base}", base).replace("${complement.fr}", complement.fr),
  };

  return (
    <aside className="bg-blue-900 text-white w-64 h-full fixed top-0 left-0 p-4 flex-col justify-between hidden lg:flex">
        <div>
            <h1 className="text-2xl font-bold mb-5">
            {base}<br/>{complement[lang]}
            </h1>
            <div className="flex justify-center mt-4 mb-4">
                <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} /> 
            </div> 
            <div className='text-xl'>
                <Navbar lang={lang} activeSection={activeSection} orientation = "vertical" /> 
            </div>                                                      
        </div>
        <SocialLinks />
        <div className="mt-4 text-center"> {/* Footer content in sidebar */} 
            <p className="text-sm" dangerouslySetInnerHTML={{ __html:lang === 'fr' ? legalNoticesTextBreaks.fr : legalNoticesTextBreaks.en}}></p> 
        </div>      
    </aside>
  );
};

export default Sidebar;