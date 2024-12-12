function Nav({ language }) {
  return (
    <ul className="flex flex-col text-lg font-Pixelify lg:flex-row lg:space-x-10 p-4 lg:p-0 text-gray-700 dark:text-gray-300 text-center">
      <li>
        <a href="#home" className="hover:text-gray-900 dark:hover:text-white">
          {language === "ES" ? "Inicio" : "Home"}
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-gray-900 dark:hover:text-white">
          {language === "ES" ? "Acerca de Mí" : "About Me"}
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-gray-900 dark:hover:text-white">
          {language === "ES" ? "Habilidades" : "Skills"}
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-gray-900 dark:hover:text-white"
        >
          {language === "ES" ? "Portafolio" : "Portfolio"}
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-gray-900 dark:hover:text-white"
        >
          {language === "ES" ? "Contacto" : "Contact"}
        </a>
      </li>
    </ul>
  );
}

export default Nav;
