import React from "react";
import { useLanguage } from "../LanguageContext";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <h2>{t.contactTitle}</h2>
      {/* Bu bölümdeki linkler statikti, çeviriye gerek yok */}
      <ul>
        <li>
          Email:
          <a href="mailto:husnuemre@outlook.com">husnuemre@outlook.com</a>
        </li>
        <li>
          GitHub:
          <a
            href="https.github.com/Lafun-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lafun-code
          </a>
        </li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/husnu-emre-berkay-040b46270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            husnu-emre-berkay-040b46270
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;