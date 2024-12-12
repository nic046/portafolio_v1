import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaGithub  } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills({language}) {
  const skills = [
    {
      title: "HTML",
      description:
        "Domino HTML para estructurar contenido web de manera semántica y accesible. Utilizo etiquetas y atributos de manera efectiva, garantizando que las páginas sean compatibles con diversos dispositivos y navegadores. Me enfoco en la validación y buenas prácticas para asegurar la calidad del código.",
      icon: (
        <FaHtml5 className="text-[#E34F26] hover:text-[#C6391D] text-4xl" />
      ), 
    },
    {
      title: "CSS3",
      description:
        "Poseo habilidades avanzadas en CSS, aplicando estilos a las páginas web para lograr diseños atractivos y responsivos. Utilizo preprocesadores como SASS y herramientas de diseño para implementar layouts flexibles y adaptativos, mejorando la presentación visual de proyectos.",
      icon: (
        <FaCss3Alt className="text-[#1572B6] hover:text-[#0D5CB6] text-4xl" />
      ),
    },
    {
      title: "React Developer",
      description:
        "Como desarrollador React, me especializo en la creación de interfaces de usuario dinámicas y escalables utilizando la librería React. Tengo experiencia en la gestión del estado con hooks, optimización de la renderización y desarrollo de aplicaciones web con una experiencia de usuario fluida y eficiente. Me enfoco en las mejores prácticas y la modularidad del código.",
      icon: <FaReact className="text-[#61dafb] hover:text-[#21a1f1] text-4xl" />,
    },
    {
      title: "React",
      description:
        "Mis competencias con JavaScript, utilizando sus características para crear aplicaciones web interactivas. Tengo experiencia en manipulación del DOM, manejo de eventos y desarrollo de funciones asíncronas. Mi enfoque se centra en optimizar el rendimiento y la experiencia del usuario.",
      icon: <FaJs className="text-[#e2c910] hover:text-[#E0C60D] text-4xl" />,
    },
    {
      title: "Tailwind CSS",
      description:
        "Con Tailwind CSS, creo interfaces de usuario rápidamente usando clases de utilidad. Esta herramienta me permite crear diseños responsivos y altamente personalizados con un enfoque en la simplicidad, la modularidad y la optimización del rendimiento, manteniendo el código limpio y eficiente.",
      icon: <RiTailwindCssFill className="text-[#06B6D4] hover:text-[#0ea5e9] text-4xl" />,
    },
    {
      title: "MySQL",
      description:
        "Soy competente en MySQL, gestionando bases de datos y optimizando consultas para un rendimiento eficiente. Diseño esquemas de bases de datos que garantizan integridad y eficiencia, y utilizo SQL para extraer y manipular datos según las necesidades del proyecto.",
      icon: (
        <DiMysql className="text-[#4479A1] hover:text-[#365A73] text-4xl" />
      ),
    },
    {
      title: "Python",
      description:
        "Tengo experiencia en Python, desarrollando aplicaciones y scripts eficientes. Utilizo bibliotecas como Pandas y NumPy para análisis de datos, y frameworks como Flask para crear aplicaciones web. Mi enfoque está en la legibilidad y mantenibilidad del código.",
      icon: (
        <FaPython className="text-[#3776AB] hover:text-[#28517E] text-4xl" />
      ),
    },
    {
      title: "Flask",
      description:
        "Tengo experiencia en el desarrollo de aplicaciones web utilizando Flask. Aprovecho su flexibilidad para implementar rutas, manejar solicitudes y respuestas, y trabajar con plantillas Jinja2 para generar contenido dinámico. También integro bases de datos y gestiono autenticación de usuarios, asegurando que las aplicaciones sean funcionales y seguras.",
      icon: <SiFlask className="text-black hover:text-gray-800 text-4xl" />,
    },
    {
      title: "Git",
      description:
        "Soy experto en el uso de Git para el control de versiones, gestionando eficazmente el flujo de trabajo en equipos mediante ramas, fusiones y resolución de conflictos. Utilizo Git para garantizar un desarrollo organizado, colaborativo y seguro, permitiendo un fácil seguimiento de los cambios en el código.",
      icon: <FaGithub className="text-[#F14E32] hover:text-[#c43620] text-4xl" />,
    }
  ];

  const skills_en = [
    {
      title: "HTML",
      description:
        "I am proficient in HTML for structuring web content in a semantic and accessible way. I use tags and attributes effectively, ensuring pages are compatible with various devices and browsers. My focus is on validation and best practices to ensure code quality.",
      icon: <FaHtml5 className="text-[#E34F26] hover:text-[#C6391D] text-4xl" />,
    },
    {
      title: "CSS3",
      description:
        "I have advanced skills in CSS, applying styles to web pages to achieve attractive and responsive designs. I use preprocessors like SASS and design tools to implement flexible, adaptive layouts, improving the visual presentation of projects.",
      icon: <FaCss3Alt className="text-[#1572B6] hover:text-[#0D5CB6] text-4xl" />,
    },
    {
      title: "React Developer",
      description:
        "As a React developer, I specialize in creating dynamic and scalable user interfaces using the React library. I have experience in state management with hooks, optimizing rendering, and developing web applications with a smooth and efficient user experience. I focus on best practices and code modularity.",
      icon: <FaReact className="text-[#61dafb] hover:text-[#21a1f1] text-4xl" />,
    },
    {
      title: "JavaScript",
      description:
        "I am proficient in JavaScript, utilizing its features to create interactive web applications. I have experience manipulating the DOM, handling events, and developing asynchronous functions. My focus is on optimizing performance and the user experience.",
      icon: <FaJs className="text-[#e2c910] hover:text-[#E0C60D] text-4xl" />,
    },
    {
      title: "Tailwind CSS",
      description:
        "With Tailwind CSS, I quickly build user interfaces using utility classes. This tool allows me to create responsive and highly customizable designs with a focus on simplicity, modularity, and performance optimization, while keeping the code clean and efficient.",
      icon: <RiTailwindCssFill className="text-[#06B6D4] hover:text-[#0ea5e9] text-4xl" />,
    },
    {
      title: "MySQL",
      description:
        "I am skilled in MySQL, managing databases and optimizing queries for efficient performance. I design database schemas that ensure integrity and efficiency, and I use SQL to extract and manipulate data as needed for projects.",
      icon: <DiMysql className="text-[#4479A1] hover:text-[#365A73] text-4xl" />,
    },
    {
      title: "Python",
      description:
        "I have experience in Python, developing efficient applications and scripts. I use libraries like Pandas and NumPy for data analysis, and frameworks like Flask to create web applications. My focus is on code readability and maintainability.",
      icon: <FaPython className="text-[#3776AB] hover:text-[#28517E] text-4xl" />,
    },
    {
      title: "Flask",
      description:
        "I have experience developing web applications using Flask. I leverage its flexibility to implement routes, handle requests and responses, and work with Jinja2 templates to generate dynamic content. I also integrate databases and manage user authentication, ensuring applications are functional and secure.",
      icon: <SiFlask className="text-black hover:text-gray-800 text-4xl" />,
    },
    {
      title: "Git",
      description:
        "I am an expert in using Git for version control, efficiently managing team workflows through branches, merges, and conflict resolution. I use Git to ensure organized, collaborative, and secure development, allowing easy tracking of changes in code.",
      icon: <FaGithub className="text-[#F14E32] hover:text-[#c43620] text-4xl" />,
    },
  ];

  const softSkills = [
    "Responsable",
    "Trabajo en equipo",
    "Creativo",
    "Puntual",
    "Proactivo",
    "Autodidacta",
    "Solucionador de conflictos",
    "Empático",
  ];
  const softSkills_en = [
    "Responsible",
  "Teamwork",
  "Creative",
  "Punctual",
  "Proactive",
  "Self-taught",
  "Conflict resolver",
  "Empathetic",
  ];


  return (
    <section id="skills" className="bg-light dark:bg-dark py-12 border-b-4 border-b-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-4 dark:text-gray-200 font-Pixelify tracking-widest">
        {language==="ES"?"Habilidades técnicas":"Technical skills"}
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(language==="ES" ? skills : skills_en).map((skill, index) => (
            <details
              key={index}
              className="bg-white shadow-md rounded-lg py-6 px-1 hover:shadow-lg overflow-hidden hover:border-2 hover:border-blue-400 w-full"
            >
              <summary className="flex items-center justify-center cursor-pointer mb-4">
                {skill.icon}
                <span className="text-lg font-bold ml-4">{skill.title}</span>
              </summary>
              <p className="text-gray-600 text-sm px-6">{skill.description}</p>
            </details>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4 dark:text-gray-200 font-Pixelify tracking-widest">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-4 font-Pixelify tracking-widest">
            {(language==="ES" ? softSkills : softSkills_en).map((softSkill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-medium"
              >
                {softSkill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
