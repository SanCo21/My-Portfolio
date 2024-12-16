import React from 'react';
import Image from 'next/image';
import content from '../../content';


const Footer = ({ lang }) => {
  const { base, complement } = content.companyName;
  const footerText = {
    en: `© 2024 - ${base} - ${complement.en} - All Rights Reserved`,
    fr: `© 2024 - ${base} - ${complement.fr} - Tous droits réservés`
  };

  return (
    <footer className="bg-blue-900 text-white mt-20 py-4 w-full">
        <div className="max-w-screen-max mx-auto px-4">
            <p className="text-sm text-center">{lang === 'fr' ? footerText.fr : footerText.en}</p>
            <div className="mt-3 flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/sandra-colomer-pro79/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} className='linkedin-icon' />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
