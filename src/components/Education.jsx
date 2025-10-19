import React from "react";
import { useLanguage } from "../LanguageContext";

function Education() {
  const { t } = useLanguage();

  return (
    <section id="education">
      <h2>{t.educationTitle}</h2>
      <div className="education-item">
        <h3>{t.schoolName}</h3>
        <p>{t.degree}</p>
        <p>{t.educationDate}</p>
      </div>
    </section>
  );
}

export default Education;