import { useEffect, useRef } from "react";
import { initCanvas } from "../../utils/index.js"
import { profile } from "../../images/index";
import { cv } from "../../docs";
import Name from "./Name.jsx";
import ContactMe from "./ContactMe.jsx";

function Home({ language, isDarkMode, sectionRefs }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    initCanvas(canvas, isDarkMode)
  },[isDarkMode])

  return (
    <section
      id="home"
      ref={(el) => (sectionRefs.current[0] = el)}
      className="relative bg-gradient-to-b bg-light dark:bg-dark border-b-4 border-b-gray-200 pixel"
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12 ">
        <div className="flex flex-col space-y-6 md:text-left ">

          <Name language={language}/>

          <div className="text-end">
            <p className="text-black dark:text-white">
              {language==="ES" ? "Desarrollador apasionado por crear soluciones innovadoras, en el desarrollo web y optimización de sistemas digitales.": "A passionate developer focused on creating innovative solutions in web development and digital systems optimization."}
            </p>
          </div>

          <ContactMe />
          <div className="flex justify-end">
            <a
              href={cv}
              download="Nicolas_Moron_cv"
              rel="noreferrer nofollow"
              className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 transition"
            >
              {language==="ES" ? "Descargar CV":"Download CV"}
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs md:max-w-sm">
          <img
            src={profile}
            alt="profile photo"
            title="Nicolás Morón Vallejo"
            className="rounded-full aspect-square bg-gray-300/20 "
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
