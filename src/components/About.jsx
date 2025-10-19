import React from "react";
import { useLanguage } from "../LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutText}</p>
    </section>
  );
}

export default About;