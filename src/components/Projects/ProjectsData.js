import { BookingApp, Pokemon, CRUD, Rick, Weather } from "../../images/index.js";

export const projectsData = [
    {
      id: 1,
      image: BookingApp,
      title: "Booking App",
      description:
        "Este proyecto es una aplicación de reservas de hoteles desarrollada con React, utilizando herramientas como React Hook Form, React Router DOM, Redux Toolkit, y Tailwind CSS. Permite a los usuarios explorar hoteles disponibles, aplicar filtros por precio y ciudad, y ver detalles específicos, como ubicación y reviews. La funcionalidad de login y registro asegura acceso protegido a características avanzadas como reservas. El diseño responsivo y las integraciones con APIs y librerías como Pigeon Maps brindan una experiencia moderna y completa.",
      demo: "https://booking-app-nico.netlify.app/",
      code: "https://github.com/nic046/booking",
    },
    {
      id: 2,
      image: Pokemon,
      title: "PokeApiDex",
      description:
        "Desarrollé una Pokedex interactiva con React y ViteJs, conectada a la API de PokéAPI. Implementé rutas protegidas, estado global con useContext y useReducer, y paginación para listar Pokémon. Los usuarios pueden buscar Pokémon por nombre, aplicar filtros por tipo, y explorar detalles como estadísticas, movimientos y habilidades. Añadí validaciones de entrada, manejo de errores, y diseño responsivo.",
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
        "Desarrollé una aplicación con ViteJs y React utilizando la API de Rick and Morty. Muestra información detallada de una ubicación aleatoria o seleccionada por el usuario, incluyendo residentes y sus características. La app valida entradas, maneja errores, y usa un custom hook para consumir la API. Se implementó renderizado condicional, paginación para residentes, y un sistema de sugerencias para ubicaciones. Desplegada en Vercel/GitHub con diseño responsivo y estilos personalizados.",
      demo: "https://rick-and-morty-api-nico.netlify.app/",
      code: "https://github.com/nic046/Rick-and-Morty-Api",
    },
    {
      id: 5,
      image: Weather,
      title: "WeatherApp",
      description:
        "Desarrollé una aplicación del clima utilizando ViteJs y React, integrada con la API de OpenWeatherMap. La app emplea la geolocalización del navegador para mostrar datos en tiempo real, como temperatura, velocidad del viento y presión atmosférica. Los usuarios pueden alternar entre Celsius y Fahrenheit y buscar el clima por ciudad. Incluye fondos dinámicos según el clima, manejo de errores y pantalla de carga. Incluye un diseño responsivo y estilos personalizados en CSS.",
      demo: "https://weather-app-nico-academlo.netlify.app/",
      code: "https://github.com/nic046/Project-02-react-",
    },
  ];