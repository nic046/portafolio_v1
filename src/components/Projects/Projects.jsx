import { projectsData } from "./ProjectsData.js";

import ProjectList from "./ProjectList.jsx";

const Projects = ({ language, sectionRefs }) => {
  return (
    <section
      id="projects"
      ref={(el) => (sectionRefs.current[3] = el)}
      className="bg-light-reverse dark:bg-dark py-14 border-b-4 border-b-gray-200 pixel"
    >
      <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100">
        {language === "ES" ? "Proyectos" : "Project"}
      </h2>

      <ProjectList language={language} projectsData={projectsData} />
    </section>
  );
};

export default Projects;
