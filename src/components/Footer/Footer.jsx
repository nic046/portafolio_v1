import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = ({language}) => {
  return (
    <footer className="bg-gradient-to-b from-green-200 to-green-300 dark:bg-dark text-gray-800 dark:text-gray-200 py-8 font-Pixelify tracking-widest">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Información del desarrollador */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Nicolás Morón Vallejo</h3>
          <p>
            {language==="ES" ? "Como desarrollador web, me apasiona integrar nuevas tecnologías en mi trabajo y brindar al usuario la mejor experiencia posible.": "A passionate developer focused on creating innovative solutions in web development and digital systems optimization."}
          </p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-bold mb-4">{language==="Es"?"Redes Sociales":"Social media"}</h3>
          <ul className="flex space-x-4 text-2xl">
            <li>
              <a
                href="https://www.facebook.com/nicolas.moron.94/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nicolasmoronvallejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-mor%C3%B3n-vallejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <p className="text-center text-sm border-t border-gray-700 pt-4 mt-8">
        &copy; <span>{new Date().getFullYear()}</span>, {language==="ES"?"Todos los derechos reservados Cochabamba, Bolivia.":"All right reserved Cochabamba, Bolivia"}
      </p>
    </footer>
  );
};

export default Footer;
