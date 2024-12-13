import Header from "./components/Header/Header";
import { useState, useRef, useEffect } from "react";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("ES");
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = useRef([]); 
  const navLinksRefs = useRef([]); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sectionRefs.current.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveIndex(index);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} navLinksRefs={navLinksRefs} activeIndex={activeIndex}/>
        <Home isDarkMode={isDarkMode} language={language} sectionRefs={sectionRefs}/>
        <About language={language} sectionRefs={sectionRefs}/>
        <Skills language={language} sectionRefs={sectionRefs}/>
        <Projects language={language} sectionRefs={sectionRefs}/>
        <Contact language={language} sectionRefs={sectionRefs}/>
        <Footer language={language} sectionRefs={sectionRefs}/>
      </div>
    </div>
  );
}

export default App;
