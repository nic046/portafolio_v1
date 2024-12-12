import Header from "./components/Header/Header";
import { useState } from "react";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("ES");

  return (
    <div>
      <div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage}/>
        <Home isDarkMode={isDarkMode} language={language}/>
        <About language={language}/>
        <Skills language={language}/>
        <Projects language={language}/>
        <Contact language={language}/>
        <Footer language={language}/>
      </div>
    </div>
  );
}

export default App;
