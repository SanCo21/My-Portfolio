import React from 'react';
import Image from 'next/image';
import content from '../../content';


const Footer = ({ lang }) => {
  const { base, complement } = content.companyName;
  const footerText = {
    en: content.legalNotices.text.en.replace("${base}", base).replace("${complement.en}", complement.en),
    fr: content.legalNotices.text.fr.replace("${base}", base).replace("${complement.fr}", complement.fr),
  };
  const linkedinUrl = content.information.linkedinUrl;

  return (
    <footer className="bg-blue-900 text-white mt-20 py-4 w-full lg:hidden">
        <div className="max-w-screen-max mx-auto px-4">
            <p className="text-sm text-center">{lang === 'fr' ? footerText.fr : footerText.en}</p>
            <div className="mt-3 flex justify-center space-x-6">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} className='linkedin-icon' />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
