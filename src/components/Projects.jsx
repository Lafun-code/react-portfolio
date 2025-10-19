import React from "react";
import { useLanguage } from "../LanguageContext";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <h2>{t.projectsTitle}</h2>

      <div className="project">
        <h3>
          <a
            href="https://github.com/Lafun-code/CS2_External"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project1Title}
          </a>
        </h3>
        <p>{t.project1Desc}</p>
      </div>

      <div className="project">
        <h3>
          <a
            href="https://github.com/Lafun-code/discord-youtube-music-bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project2Title}
          </a>
        </h3>
        <p>{t.project2Desc}</p>
      </div>

      <div className="project">
        <h3>
          <a
            href="https://github.com/Lafun-code/youtube-downloader"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project3Title}
          </a>
        </h3>
        <p>{t.project3Desc}</p>
      </div>

      {/* Orijinal HTML'de bu bölüm section dışındaydı, React'te düzelttik */}
      <div className="project">
        <h3>
          <a
            href="https://github.com/Lafun-code/cool-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project4Title}
          </a>
        </h3>
        <p>{t.project4Desc}</p>
      </div>
    </section>
  );
}

export default Projects;