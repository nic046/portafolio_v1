import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";

function SendEmail({ language }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);

  const onSubmit = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_cztirce",
          "template_sw6rhzk",
          formRef.current,
          "waYalZzn7Jxgl67yH"
        )
        .then(
          () => {
            toast.success("Success sending the email!", {
              position: "bottom-right",
              autoClose: 3000,
              theme: "light",
            });
            reset();
          },
          (error) => {
            toast.error("Error sending the email!", {
              position: "bottom-right",
              autoClose: 3000,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-black font-extrabold border-2 border-gray-500 hover:border-blue-500">
      <h3 className="contact__form-title text-xl mb-4">
        {language === "ES" ? "Enviar mensaje" : "Send email"}
      </h3>

      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block mb-2">
            {language === "ES" ? "Nombre" : "Name"}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 20, message: "Max length is 20 characters" },
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">
            {language === "ES" ? "Correo" : "Email"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              maxLength: { value: 30, message: "Max length is 30 characters" },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2">
            {language === "ES" ? "Asunto" : "Reason"}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("subject", {
              required: "Subject is required",
              maxLength: { value: 50, message: "Max length is 50 characters" },
            })}
          />
          {errors.subject && <p className="error">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">
            {language === "ES" ? "Mensaje" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            {...register("message", {
              required: "Message is required",
              maxLength: { value: 250, message: "Max length is 250 characters" },
            })}
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {language === "ES" ? "Enviar" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
