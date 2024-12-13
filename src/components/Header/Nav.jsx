function Nav({ language, navLinksRefs, activeIndex }) {
  return (
    <ul className="flex flex-col text-lg lg:flex-row lg:space-x-4 p-2 lg:p-0 text-gray-600 dark:text-gray-300 text-center">
      {["home", "about", "skills", "projects", "contact"].map((id, index) => (
        <li key={id}>
          <a
            href={`#${id}`}
            ref={(el) => (navLinksRefs.current[index] = el)}
            className={`hover:text-black dark:hover:text-white ${
              index === activeIndex ? "active underline_effect" : ""
            }`}
          >
            {language === "ES"
              ? ["Inicio", "Acerca de Mí", "Habilidades", "Portafolio", "Contacto"][index]
              : ["Home", "About Me", "Skills", "Portfolio", "Contact"][index]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
