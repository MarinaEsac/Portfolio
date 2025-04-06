import React from "react";
import myImage from "../assets/myImage.jpg"; 
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import icon from "../assets/myImage.jpg"; 
const Profile = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center overflow-hidden gap-20 bg-black"
    >
      <div className="flex flex-col justify-center gap-6">
        <p className="text-sm text-gray-200">
          <img src={icon} alt="Icon" className="w-4 h-4 inline-block mr-2" />
          <i className="fa-solid fa-circle text-[8px] me-2 text-green-500 outline-4 ot outline-green-200/90"></i>
          Available for work
        </p>
        <h1 className="text-5xl font-bold text-gray-300">
          Building Scalable <br />
          Modern Websites <br />
          for the Future
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/my-cv.pdf";
              link.download = "My_CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-cyan-600 border border-cyan-600 text-white px-6 py-3 
  rounded-md flex items-center gap-4 text-sm mr-4 transition-all duration-300 
  hover:bg-cyan-700 active:scale-95"
          >
            Download CV <FaDownload />
          </button>

          <div className="flex gap-4">
            <a
              href="https://github.com/MarinaEsac"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
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
      </div>
      <div className="w-1/4 rounded-3xl">
        <img
          src={myImage}
          alt=""
          className="w-full border border-solid border-white"
        />
      </div>
    </section>
  );
};

export default Profile;
