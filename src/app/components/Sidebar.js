import LanguageSwitcher from './LanguageSwitcher';
import content from '../../content';
import SocialLinks from './socialLinks';
import Navbar from './Navbar';

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
//   const sections = content.sectionsData;
  const { base, complement } = content.companyName;
  const legalNoticesTextBreaks = {
    en: content.legalNotices.textBreaks.en.replace("${base}", base).replace("${complement.en}", complement.en),
    fr: content.legalNotices.textBreaks.fr.replace("${base}", base).replace("${complement.fr}", complement.fr),
  };

  return (
    <aside className="bg-blue-900 text-white w-64 min-h-screen fixed top-0 left-0 p-4 flex-col justify-between hidden lg:flex">
        <div className="flex-shrink-0">
            <h1 className="text-2xl text-center font-bold mb-5">
            <a href="#home">{base}<br/>{complement[lang]}</a>
            </h1>
            <div className="flex justify-center mt-8 mb-4">
                <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} /> 
            </div>
        </div> 
        <div className='text-xl flex-grow flex flex-col justify-between'> 
            <Navbar lang={lang} activeSection={activeSection} orientation = "vertical" /> 
        </div>
        <div className='mt-6'>
          <SocialLinks />
          <div className="mt-6 text-center"> 
              <p className="text-sm" dangerouslySetInnerHTML={{ __html:lang === 'fr' ? legalNoticesTextBreaks.fr : legalNoticesTextBreaks.en}}></p> 
          </div>  
        </div>    
    </aside>
  );
};
export default Sidebar;
