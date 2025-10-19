import React from "react";
import { useLanguage } from "../LanguageContext";

function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="main-nav">
      <ul>
        <li><a href="#about">{t.navAbout}</a></li>
        <li><a href="#skills">{t.navSkills}</a></li>
        <li><a href="#experience">{t.navExperience}</a></li>
        <li><a href="#education">{t.navEducation}</a></li>
        <li><a href="#projects">{t.navProjects}</a></li>
        <li><a href="#contact">{t.navContact}</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;