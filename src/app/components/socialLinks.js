import React from "react";
import Image from "next/image";
import { content } from "../../content";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {content.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.name !== "Email" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={16}
            height={16}
            style={{ width: "16px", height: "16px" }}
            className="social-icon"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
