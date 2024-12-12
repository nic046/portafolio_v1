import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({language}) => {
  return (
    <section id="contact" className="section bg-light dark:bg-dark py-10 border-b-4 border-b-gray-200">
      <h2 className="section__title text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">{language==="ES"?"Contacto":"Contact"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{language==="ES"?"Información de contacto":"Contact information"}</h3>
          <p className="mb-6 text-gray-800 dark:text-gray-200">
          {language==="ES"?"Como desarrollador de software estoy a su disposición para resolver cualquier consulta que tenga.": "As a software developer, I am at your disposal to resolve any inquiries you may have."}
          </p>

          <address className="space-y-4">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" size={20} />
              <a
                href="https://wa.me/+59160748307?text=Quisiera%20solicitar%20un%20desarrollo%20web!!!!"
                target="_blank"
                rel="noreferrer nofollow"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {language==="ES"?"Enviar mensaje a WhatsApp" : "Send me a WhatsApp"}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-700" size={20} />
              <a
                href="tel:+59177418321"
                target="_blank"
                rel="noreferrer nofollow"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                +591 77418321
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" size={20} />
              <a
                id="mail"
                href="mailto:nmoron386@gmail.com"
                target="_blank"
                rel="noreferrer nofollow"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                nmoron386@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-500" size={20} />
              <span className="text-gray-800 dark:text-gray-200">Cochabamba, Bolivia</span>
            </div>
          </address>
        </div>

        <div className=" bg-white p-6 rounded-lg shadow-lg">
          <h3 className="contact__form-title text-xl font-semibold mb-4">{language==="ES"?"Enviar mensaje":"Send email"}</h3>

          <form id="form" className="space-y-4">
            <div >
              <label htmlFor="name" className="block mb-2 font-medium">{language==="ES"?"Nombre":"Name"}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="contact__form-label block mb-2 font-medium">{language==="ES"?"Correo":"Email"}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">{language==="ES"?"Asunto":"Reason"}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div >
              <label htmlFor="message" className="contact__form-label block mb-2 font-medium">{language==="ES"?"Mensaje":"Message"}</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {language==="ES"?"Enviar":"Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
