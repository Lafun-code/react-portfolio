import React from "react";
import { useLanguage } from "../LanguageContext";

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <h2>{t.skillsTitle}</h2>
      <div className="skills-list">
        {/* Bu liste statikti, bu yüzden çeviriye gerek yok */}
        <ul className="cmd-list">
          <li>JavaScript (ES6+)</li>
          <li>C++ (Basics)</li>
          <li>C# (Basics)</li>
          <li>HTML5 & CSS3</li>
          <li>SQL & NoSQL (PostgreSQL, MongoDB)</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;