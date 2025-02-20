import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { content } from "@/content-data";
import SocialLinks from "./socialLinks";
import Navbar from "./Navbar";
import getImagePath from "./getImagePath";

const Sidebar = ({ lang, toggleLanguage, activeSection }) => {
  //   const sections = content.sectionsData;
  const { companyLogo } = content;
  // <Image
  //           src={getImagePath(companyLogo.src)}
  //           alt={companyLogo.alt}
  //           width={120}
  //           height={120}
  //         />
  const { base, complement } = content.companyName;
  const legalNoticesTextBreaks = {
    en: content.legalNotices.textBreaks.en
      .replace("${base}", base)
      .replace("${complement.en}", complement.en),
    fr: content.legalNotices.textBreaks.fr
      .replace("${base}", base)
      .replace("${complement.fr}", complement.fr),
  };

  return (
    <aside className="hidden lg:flex bg-primary text-white items-center w-64 min-h-screen fixed top-0 left-0 flex-col  ">
      <div className="flex-shrink-0 mb-8">
        <div className="text-2xl text-center font-bold my-5">
          <a href="#home">
            <Image
              src={getImagePath(companyLogo.src)}
              alt={companyLogo.alt}
              width={200}
              height={87}
              priority
            />
            {/* {base}
            <br />
            {complement[lang]} */}
          </a>
        </div>
        <div className="flex justify-center mt-8 mb-4">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />
        </div>
      </div>
      <div className="text-xl flex-grow flex flex-col justify-center">
        <Navbar
          lang={lang}
          activeSection={activeSection}
          orientation="vertical"
          sidebar
        />
      </div>
      <div className="mt-8 ">
        <SocialLinks />
        <div className="my-6 text-center">
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html:
                lang === "fr"
                  ? legalNoticesTextBreaks.fr
                  : legalNoticesTextBreaks.en,
            }}
          ></p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
