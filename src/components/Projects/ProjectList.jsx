import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectList = ({ language, projectsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsToShow = 2;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % projectsData.length
    );
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < projectsToShow; i++) {
      visibleProjects.push(projectsData[(currentIndex + i) % projectsData.length]);
    }
    return visibleProjects;
  };

  const currentProjects = getVisibleProjects();

  return (
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-8 bg-blue-500/50 text-white p-2 rounded-full hover:bg-blue-700 z-10"
      >
        <FaChevronLeft size={20} />
      </button>
      <div className="flex flex-col md:flex-row items-center justify-center transition-all duration-300 gap-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-8 bg-blue-500/50 text-white p-2 rounded-full hover:bg-blue-700 z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProjectList;
