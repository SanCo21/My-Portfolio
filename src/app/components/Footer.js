import React from 'react';

const Footer = ({ lang }) => {
  const footerText = {
    en: "© 2024 - S & Co - All Rights Reserved",
    fr: "© 2024 - S & Co - Tous droits réservés"
  };

  return (
    <footer className="bg-blue-900 text-white mt-20 py-4 w-full">
        <div className="max-w-screen-max mx-auto px-4">
            <p className="text-sm text-center">{lang === 'fr' ? footerText.fr : footerText.en}</p>
            <div className="mt-4 flex justify-center space-x-6">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
