import { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = [
  "experience",
  "skills",
  "projects",
  "about",
  "education",
  "contact",
];

const App = () => {
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="min-h-screen bg-bg-base text-slate-100">
        <Navbar activeSection={activeSection} />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
