import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BookingApp, Pokemon, CRUD, Rick } from "../../images/index.js";

const projectsData = [
  {
    id: 1,
    image: BookingApp,
    title: "Booking App",
    description:
      "La siguiente aplicación utiliza react y tailwind para consumir una API. De esta manera realizar reservas a hoteles y ver datos de los mismos. Tambien permite registrar  usuarios y mantener un registro de las reservas",
    demo: "https://booking-app-nico.netlify.app/",
    code: "https://github.com/nic046/booking",
  },
  {
    id: 2,
    image: Pokemon ,
    title: "PokeApiDex",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ex numquam magni repellat fugiat nemo mollitia porro hic? Tempora blanditiis eaque quis, mollitia praesentium ipsum animi quasi nostrum accusamus veniam!.",
    demo: "https://api-poke-nicolas.netlify.app/#/pokedex",
    code: "https://github.com/nic046/Poke-api",
  },
  {
    id: 3,
    image: CRUD,
    title: "Crud de usuarios",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ex numquam magni repellat fugiat nemo mollitia porro hic? Tempora blanditiis eaque quis, mollitia praesentium ipsum animi quasi nostrum accusamus veniam!.",
      demo: "https://crud-api-usuarios.netlify.app/",
      code: "https://github.com/nic046/CRUD-API",
  },
  {
    id: 4,
    image: Rick,
    title: "Api Rick and Morty",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ex numquam magni repellat fugiat nemo mollitia porro hic? Tempora blanditiis eaque quis, mollitia praesentium ipsum animi quasi nostrum accusamus veniam!.",
      demo: "https://rick-and-morty-api-nico.netlify.app/",
      code: "https://github.com/nic046/Rick-and-Morty-Api",
  },
];

const Projects = ({ language }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 1;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : projectsData.length - 1
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < projectsData.length - 1 ? prevPage + 1 : 0
    );
  };

  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  return (
    <section
      id="projects"
      className="projects section bg-gradient-to-b from-green-200 to-green-300 dark:bg-dark py-10 border-b-4 border-b-gray-200 font-Pixelify tracking-widest"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        {language === "ES" ? "Proyectos" : "Project"}
      </h2>

      <div className="projects__container flex items-center justify-center gap-4">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="projects__project w-full max-w-md bg-white shadow-md rounded-lg p-4 relative"
          >
            {console.log(project)}
            <button
              onClick={handlePrevPage}
              className="absolute top-[40%] left-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            >
              <FaChevronLeft size={20} />
            </button>

            <div className="projects__image mb-4">
              <img
                src={project.image}
                alt={project.title}
                title={project.title}
                className="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>

            <div className="projects__info">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="projects__buttons flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  className="btn projects__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {language === "ES" ? "Ver demo" : "See demo"}
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="btn projects__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {language === "ES" ? "Ver codigo" : "See code"}
                </a>
              </div>
            </div>

            <button
              onClick={handleNextPage}
              className="absolute top-[40%] right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
