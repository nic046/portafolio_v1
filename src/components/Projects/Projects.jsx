import { projectsData } from "./ProjectsData.js";

import ProjectList from "./ProjectList.jsx";

const Projects = ({ language }) => {
  return (
    <section
      id="projects"
      className="bg-light-reverse dark:bg-dark py-10 border-b-4 border-b-gray-200 pixel "
    >
      <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100">
        {language === "ES" ? "Proyectos" : "Project"}
      </h2>

      <ProjectList language={language} projectsData={projectsData} />
    </section>
  );
};

export default Projects;
