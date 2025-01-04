import Image from "next/image";
import Typewriter from "../Typewriter";
import getImagePath from "../getImagePath";

const HomeSection = ({ section, lang, textSize, textMargin }) => (
  <>
    <h2 className={`title-home font-bold text-center uppercase ${textSize} ${textMargin}`}>
      <Typewriter text={lang === "fr" ? section.title.fr : section.title.en} />
    </h2>
    <div className="flex mt-16 items-center justify-center">
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
        <p className="text-base xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl mt-0 text-primary text-left">
          {lang === "fr" ? section.content.fr : section.content.en}
        </p>
      </div>
    </div>
  </>
);

export default HomeSection;
