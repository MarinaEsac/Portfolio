import React from "react";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import jquery from "../assets/jquery.png";
import js from "../assets/js.png";
import mui from "../assets/mui.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
const Skills = () => {
  return (
    <div className="py-10 bg-image  mx-auto">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold mb-11 text-center">
        My Skills
      </h2>
      <div className="bg-white max-w-screen-lg text-gray-400 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={html} alt="" width={100} height={100} />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={css} alt="" width={100} height={100} />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={bootstrap} alt="" width={100} height={100} />
          <p className="mt-2">BOOTSTRAP</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={tailwind} alt="" width={100} height={100} />
          <p className="mt-2">TAILWIND</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={mui} alt="" width={100} height={100} />
          <p className="mt-2">MATERIAL UI</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={js} alt="" width={100} height={100} />
          <p className="mt-2">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={jquery} alt="" width={100} height={100} />
          <p className="mt-2">JQUERY</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 shadow-md border border-gray-200 rounded-lg p-9 text-center hover:p-6 transition-all duration-300"> 
          <img src={typescript} alt="" width={100} height={100} />
          <p className="mt-2">TYPESCRIPT</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
