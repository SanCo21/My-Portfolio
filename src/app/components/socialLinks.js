import React from 'react';
import Image from 'next/image';
import content from '../../content';

const SocialLinks = () => {
  const { linkedinUrl, githubUrl, email } = content.information;

  return (
    <div className="flex justify-center space-x-4">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} className="social-icon" />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
        <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} className="social-icon" />
      </a>
      <a href={email} className="hover:text-yellow-500">
        <Image src="/icons/email.svg" alt="Email" width={16} height={16} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
