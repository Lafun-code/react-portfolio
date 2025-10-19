import React from "react";
import { useLanguage } from "../LanguageContext";

// ASCII art'ı doğrudan JS içine alabiliriz
const asciiArt = `
██╗  ██╗███████╗██████╗  
██║  ██║██╔════╝██╔══██╗ 
███████║█████╗  ██████╔╝ 
██╔══██║██╔══╝  ██╔══██╗ 
██║  ██║███████╗██║  ██║ 
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ 
  `;

function Header() {
  const { t } = useLanguage(); // 't' -> o anki dilin çeviri objesi

  return (
    <header>
      <pre className="ascii-art" aria-label="H.E.B. Logo">
        {asciiArt}
      </pre>
      <h1>
        <span>{t.mainTitle}</span>
        <span className="cursor"></span>
      </h1>
      <p>{t.subtitle}</p>
    </header>
  );
}

export default Header;