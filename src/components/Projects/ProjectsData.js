import { BookingApp, Pokemon, CRUD, Rick, Weather } from "../../images/index.js";

export const projectsData = [
  {
      id: 1,
      image: BookingApp,
      title: "Booking App",
      description:
          "Aplicación de reservas de hoteles desarrollada en React con funcionalidades avanzadas como filtros personalizados, login seguro y diseño totalmente responsivo. Integra Redux Toolkit para la gestión del estado, consume múltiples APIs para datos dinámicos y utiliza Pigeon Maps para geolocalización. El diseño se realizó con Tailwind CSS para garantizar una experiencia visual moderna y eficiente, logrando una navegación fluida y una estructura optimizada para dispositivos móviles y de escritorio.",
      demo: "https://booking-app-nico.netlify.app/",
      code: "https://github.com/nic046/booking",
  },
  {
      id: 2,
      image: Pokemon,
      title: "PokeApiDex",
      description:
          "Pokedex interactiva diseñada en React que permite explorar y filtrar Pokémon. Cuenta con rutas protegidas para mayor seguridad, paginación dinámica y un detalle visual de cada Pokémon. Usa hooks avanzados como useContext y useReducer para la gestión de estado, integrando diseño responsivo adaptable. Perfecta para usuarios que buscan una experiencia fluida y moderna, con datos obtenidos en tiempo real a través de la API oficial, asegurando precisión y velocidad en las consultas.",
      demo: "https://api-poke-nicolas.netlify.app/#/pokedex",
      code: "https://github.com/nic046/Poke-api",
  },
  {
      id: 3,
      image: CRUD,
      title: "Crud de usuarios",
      description:
          "Sistema CRUD interactivo diseñado en React para la gestión de usuarios, integrando manejo eficiente de APIs y validaciones robustas de entrada. El diseño es completamente responsivo, asegurando accesibilidad desde cualquier dispositivo. Este proyecto destaca por su interfaz intuitiva, que permite crear, leer, actualizar y eliminar registros de usuarios de forma rápida y segura. Ideal para aplicaciones que requieren una administración sencilla y escalable con funcionalidades personalizables según las necesidades del cliente.",
      demo: "https://crud-api-usuarios.netlify.app/",
      code: "https://github.com/nic046/CRUD-API",
  },
  {
      id: 4,
      image: Rick,
      title: "Api Rick and Morty",
      description:
          "Aplicación basada en React que consume la API de Rick and Morty, ofreciendo filtros dinámicos, paginación avanzada y un diseño responsivo único. Utiliza hooks personalizados para manejar estados y errores, garantizando una navegación fluida y sin interrupciones. La interfaz moderna permite a los usuarios explorar personajes y episodios fácilmente, con información actualizada en tiempo real. Este proyecto combina funcionalidad y estética, destacando como una excelente herramienta de aprendizaje y entretenimiento.",
      demo: "https://rick-and-morty-api-nico.netlify.app/",
      code: "https://github.com/nic046/Rick-and-Morty-Api",
  },
  {
      id: 5,
      image: Weather,
      title: "WeatherApp",
      description:
          "Aplicación del clima construida en React con integración de OpenWeatherMap para obtener datos precisos en tiempo real. Incluye geolocalización automática, búsqueda avanzada por ciudad, cambio de unidades de medida y fondos dinámicos que reflejan el clima actual. El diseño responsivo garantiza una experiencia fluida en dispositivos móviles y de escritorio. Perfecta para usuarios que desean información meteorológica rápida y confiable, presentada en una interfaz atractiva y fácil de usar.",
      demo: "https://weather-app-nico-academlo.netlify.app/",
      code: "https://github.com/nic046/Project-02-react-",
  },
];
