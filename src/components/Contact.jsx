import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="section bg-black text-gray-400">
      <div
        className="container lg:grid lg:grid-cols-2 lg:items-stretch
      gap-10 mx-auto py-20 px-4"
      >
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 text-2xl font-bold reveal-up">
            Contact me for collaboration
          </h2>
          <p
            className="text-zinc-400 mt-3 mb-8 max-w-xl
          lg:max-w-lg reveal-up
          "
          >
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
          <div className="flex items-center gap-3 ml-28 mt-10 reveal-up">
            <a
              href="https://github.com/MarinaEsac"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition active:bg-zinc-50/80"
            >
              <FaGithub className="text-cyan-600" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/marina-esac/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <FaLinkedin className="text-cyan-600" size={20} />
            </a>
            <a
              href="https://wa.me/01284947722"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <FaWhatsapp className="text-cyan-600" size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=marina.hany.esac@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <FaEnvelope className="text-cyan-600" size={20} />
            </a>
          </div>
        </div>

        <form action="https://getform.io/f/anlqwzma" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-400 label reveal-up">
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-400 label reveal-up">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="marina@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-400 label reveal-up">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="message"
              required
              placeholder="Your message here..."
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg reveal-up"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
