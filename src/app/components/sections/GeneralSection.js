import CollapseAbout from "../CollapseAbout";

const GeneralSection = ({ section, lang }) => (
    <>
      <h2 className="text-3xl font-bold text-primary text-center">
        {lang === "fr" ? section.title.fr : section.title.en}
      </h2>
      {section.id === "about" ? (
        <CollapseAbout
          content={lang === "fr" ? section.content.fr : section.content.en}
        />
      ) : (
        section.content && (
          <p className="text-lg mt-6 text-primary">
            {lang === "fr" ? section.content.fr : section.content.en}
          </p>
        )
      )}
    </>
  );

export default GeneralSection;