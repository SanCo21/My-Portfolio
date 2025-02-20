
import { content } from "@/content-data";
import SocialLinks from "./socialLinks";

const Footer = ({ lang }) => {
  const { base, complement } = content.companyName;
  const footerText = {
    en: content.legalNotices.text.en
      .replace("${base}", base)
      .replace("${complement.en}", complement.en),
    fr: content.legalNotices.text.fr
      .replace("${base}", base)
      .replace("${complement.fr}", complement.fr),
  };

  return (
    <footer className="bg-primary text-white  py-4 w-full lg:hidden">
      <SocialLinks />
      <div className="max-w-screen-max mx-auto py-4">
        <p className="text-sm text-center">
          {lang === "fr" ? footerText.fr : footerText.en}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
