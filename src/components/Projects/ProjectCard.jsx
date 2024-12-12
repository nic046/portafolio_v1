const ProjectCard = ({ project, language }) => {
  return (
    <div
      className="w-full max-w-md bg-gray-100 border-4 border-gray-500 shadow-md rounded-lg p-4 m-1 relative mx-6 transition ease-in-out hover:border-blue-500"
    >
      <div>
        <img
          src={project.image}
          alt={project.title}
          title={project.title}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
        <h3 className="text-xl font-semibold mb-2 text-center pt-3">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {language === "ES" ? "Ver demo" : "See demo"}
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {language === "ES" ? "Ver código" : "See code"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;