import React from "react";
import { useLanguage } from "../LanguageContext";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <h2>{t.experienceTitle}</h2>
      <div className="job">
        <h3>{t.job1Title}</h3>
        <p>{t.job1Date}</p>
        <p>{t.job1Desc}</p>
      </div>
    </section>
  );
}

export default Experience;