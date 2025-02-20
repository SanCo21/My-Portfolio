import React from "react";

const LanguageSwitcher = ({ lang, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 text-primary bg-white rounded-2xl border-secondary border-2 hover:border-white hover:bg-accent hover:text-white transition-colors duration-300"
      aria-label={
        lang === "fr"
          ? "Changer la langue en anglais"
          : "Change language to French"
      }
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
      </svg>
      <span className="ml-2">{lang === "fr" ? "Français" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;
