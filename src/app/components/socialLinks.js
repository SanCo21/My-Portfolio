import React from "react";
import Image from "next/image";
import content from "../../content";

const SocialLinks = () => {  
  
  return (
    <div className="flex justify-center items-center space-x-4">
      {content.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.name !== "Email" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="hover:text-yellow-500"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={16}
            height={16}
            className="social-icon"
          />
        </a>
      ))}
      {/* <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} className="social-icon" />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
        <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} className="social-icon" />
      </a>
      <a href={email} className="hover:text-yellow-500">
        <Image src="/icons/email.svg" alt="Email" width={16} height={16} className="social-icon" />
      </a> */}
    </div>
  );
};

export default SocialLinks;
