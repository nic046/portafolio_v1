import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SendEmail from "./SendEmail";

const Contact = ({ language, sectionRefs }) => {
  return (
    <section
      id="contact"
      ref={(el) => (sectionRefs.current[4] = el)}
      className="section bg-light dark:bg-dark py-20 border-b-4 border-b-gray-200 pixel text-black dark:text-gray-100 "
    >
      <h2 className="section__title text-2xl font-bold text-center mb-6">
        {language === "ES" ? "Contacto" : "Contact"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        <div>
          <h3 className="text-xl font-semibold mb-4 ">
            {language === "ES"
              ? "Información de contacto"
              : "Contact information"}
          </h3>
          <p className="mb-6 ">
            {language === "ES"
              ? "Como desarrollador de software estoy a su disposición para resolver cualquier consulta que tenga."
              : "As a software developer, I am at your disposal to resolve any inquiries you may have."}
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
                {language === "ES"
                  ? "Enviar mensaje a WhatsApp"
                  : "Send me a WhatsApp"}
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
              <span className="">Cochabamba, Bolivia</span>
            </div>
          </address>
        </div>

        {/*Send emails*/}
        <SendEmail language={language} />
      </div>
    </section>
  );
};

export default Contact;
