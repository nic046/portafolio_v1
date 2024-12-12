import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <div className="flex justify-end">
            <ul className="flex justify-center md:justify-start gap-4 mt-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicol%C3%A1s-mor%C3%B3n-vallejo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 text-2xl transition hover:text-[#0077b5] hover:dark:text-[#0077b5]"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+59160748307?text=Quisiera%20solicitar%20un%20desarrollo%20web!!!!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 text-2xl transition hover:text-[#31af35] dark:hover:text-[#25D366]"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nic046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 text-2xl transition hover:text-gray-800 dark:hover:text-gray-500"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nmoron386@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 text-2xl transition hover:text-[#D44638] dark:hover:text-[#D44638]"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>
  )
}

export default ContactMe