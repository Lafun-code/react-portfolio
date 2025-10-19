import React, { useEffect } from "react";
import { LanguageProvider } from "./LanguageContext";
import LangSwitcher from "./components/LangSwitcher";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Orijinal script.js'teki IntersectionObserver (scroll spy) mantığı
const useScrollSpy = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("nav-active", href === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Cleanup fonksiyonu
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []); // Boş dependency array, sadece bir kez (component mount olduğunda) çalışır
};

// Tüm içeriği sarmalayan ve hook'u çağıran ara bileşen
function AppContent() {
  useScrollSpy(); // Scroll spy'ı etkinleştir

  return (
    <main className="terminal">
      <LangSwitcher />
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <footer>
        <p>// SESSION_TERMINATED</p>
      </footer>
    </main>
  );
}

// Ana Uygulama: Context Provider ile tüm uygulamayı sarmalar
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;