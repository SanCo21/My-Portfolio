import Image from "next/image";
import Typewriter from "../Typewriter";

const HomeSection = ({ section, lang }) => (
    <>
      <h2 className="text-4xl font-bold text-primary text-center uppercase">
        <Typewriter text={lang === "fr" ? section.title.fr : section.title.en} />
      </h2>
      <div className="flex mt-16 items-center justify-center">
        <div className="w-1/3 flex justify-center">
          <div className="photo rounded-full bg-accent">
            <Image
              src="/images/Portrait7.png"
              alt="Portrait Sandra"
              width={300}
              height={500}
              priority
            />
          </div>
        </div>
        <div className="w-2/3 p-10 flex flex-col justify-center">
          <p className="text-lg mt-0 text-primary text-left">
            {lang === "fr" ? section.content.fr : section.content.en}
          </p>
        </div>
      </div>
    </>
  );

export default HomeSection;