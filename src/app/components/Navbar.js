import Link from 'next/link';
import content from '../../content';

const Navbar = ({ lang, activeSection, orientation = 'horizontal', compact = false }) => {
  const sections = content.sectionsData;
  const navClass = orientation === 'vertical' ? `flex-col items-center ${compact ? 'space-y-4 mt-8' : 'space-y-20 mt-32'}` : 'space-x-4';
  const itemClass = orientation === 'vertical' ? 'w-full text-center py-2' : '';

  return (
    <nav className={`flex-1 flex justify-center ${navClass}`}>
      {Object.keys(sections).filter(key => key !== 'home').map(key => ( 
        <Link href={`#${sections[key].id}`} key={key} scroll={false} legacyBehavior>
          <a className={`${itemClass} hover:text-yellow-500 ${activeSection === sections[key].id ? 'bg-white text-blue-900 px-1' : ''} ${sections[key].id === 'about' ? 'whitespace-nowrap' : ''}`}> 
            {lang === 'fr' ? sections[key].title.fr : sections[key].title.en} 
          </a>
        </Link> 
      ))}
    </nav>
  );
};

export default Navbar;