import React from "react";

function About({ language }) {
  return (
    <section
      id="about"
      className="section bg-light-reverse dark:bg-dark overflow-hidden pt-6 px-4 pixel border-b-4 border-b-gray-200 pb-6"
    >
      <h2 className="section__title text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        {language === "ES" ? "Acerca de Mí" : "About me"}
      </h2>

      <div className="flex gap-6 mt-6 mx-auto max-w-3xl">
        <p className="text-center text-gray-900 dark:text-gray-300 text-xl">
          {language === "ES"
            ? "Soy un desarrollador comprometido con la creación de soluciones eficientes e innovadoras. Con experiencia en programación y diseño web, siempre enfocado en ofrecer productos optimizados y funcionales. Me apasiona aprender nuevas tecnologías y enfrentar desafíos que impulsen mi crecimiento profesional, buscando mejorar continuamente mis habilidades y aportar valor en cada proyecto."
            : "I am a developer committed to creating efficient and innovative solutions. I have experience in programming, web design, and application development, always focused on delivering optimized and functional products. I am passionate about learning new technologies and facing challenges that drive my professional growth, continuously seeking to improve my skills and bring value to every project."}
        </p>
      </div>
    </section>
  );
}

export default About;
