import Image from "next/image";
import Typewriter from "../Typewriter";
import getImagePath from "../getImagePath";

const HomeSection = ({ section, lang, textSize, textMargin }) => (
  <>
    <Typewriter
      text={lang === "fr" ? section.title.fr : section.title.en}
      className={`title-home font-bold text-center uppercase ${textSize.title} ${textMargin.title}`}
    />
    <div className="flex mt-12 items-center justify-center">
      <div className="w-1/3 flex justify-center">
        <div className="photo rounded-full bg-white">
          <Image
            src={getImagePath(section.imageSrc)}
            alt={section.imageAlt}
            width={720}
            height={1040}
            priority={true}
            // role="img"
            tabIndex="0" // to make the image focusable
          />
        </div>
      </div>
      <div className="w-2/3 p-10 flex flex-col justify-center">
        <h3 className={`${textSize.h3} mt-0 text-primary text-left`}>
          {lang === "fr" ? section.content.fr : section.content.en}
        </h3>
      </div>
    </div>
  </>
);

export default HomeSection;