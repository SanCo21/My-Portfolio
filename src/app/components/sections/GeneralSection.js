import CollapseAbout from "../CollapseAbout";

const GeneralSection = ({ section, lang, textSize, textMargin }) => (
  <>
    <h3 className={`font-bold text-center ${textSize.h3} ${textMargin.h3}`}>
      {lang === "fr" ? section.title.fr : section.title.en}
    </h3>
    {section.id === "about" ? (
      <CollapseAbout
        content={lang === "fr" ? section.content.fr : section.content.en}
        textSize={textSize.content}
      />
    ) : (
      section.content && (
        <p className={`${textSize.content} mt-6 text-primary`}>
          {lang === "fr" ? section.content.fr : section.content.en}
        </p>
      )
    )}
  </>
);

export default GeneralSection;
