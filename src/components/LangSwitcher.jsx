import React from "react";
import { useLanguage } from "../LanguageContext";

function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  const handleLangChange = (e, newLang) => {
    e.preventDefault();
    setLang(newLang);
  };

  return (
    <div className="lang-switcher">
      <a
        href="#"
        id="lang-en"
        className={lang === "en" ? "active" : ""}
        onClick={(e) => handleLangChange(e, "en")}
      >
        [EN]
      </a>
      <a
        href="#"
        id="lang-tr"
        className={lang === "tr" ? "active" : ""}
        onClick={(e) => handleLangChange(e, "tr")}
      >
        [TR]
      </a>
    </div>
  );
}

export default LangSwitcher;