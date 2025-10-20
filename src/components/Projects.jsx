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
            href="https://github.com/Lafun-code/youtube-shorts-auto-scroller"
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

      <div className="project">
        <h3>
          <a
            href="https://github.com/Lafun-code/react-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project5Title}
          </a>
        </h3>
        <p>{t.project5Desc}</p>
      </div>
    </section>
  );
}

export default Projects;