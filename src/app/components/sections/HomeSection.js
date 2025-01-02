import Image from "next/image";
import Typewriter from "../Typewriter";

const HomeSection = ({ section, lang }) => (
  <>
    <h2 className="title-home font-bold text-center uppercase">
      <Typewriter text={lang === "fr" ? section.title.fr : section.title.en} />
    </h2>
    <div className="flex mt-16 items-center justify-center">
      <div className="w-1/3 flex justify-center">
        <div className="photo rounded-full bg-white">
          <Image
            src="/images/Portrait4.jpg"
            alt="Portrait de Sandra"
            width={720}
            height={1040}
            priority
            role="img"
            tabIndex="0" // to make the image focusable
          />
        </div>
      </div>
      <div className="w-2/3 p-10 flex flex-col justify-center">
        <p className="text-lg md:text-xl lg:text-1xl xl:text-2xl mt-0 text-primary text-left">
          {lang === "fr" ? section.content.fr : section.content.en}
        </p>
      </div>
    </div>
  </>
);

export default HomeSection;
