import React from "react";
import myImage from "../assets/myImage.jpg";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[100vh] mx-auto py-8 bg-black ">
      <div className=" col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
          <img src={myImage} alt="myImage"/>
      </div>
      <div className="col-span-2 px-5 my-auto">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
        <span className="primary-color">I'm a</span><br/>
        <TypeAnimation sequence={["Frontend dev", 1000 , "Web designer" , 1000]} wrapper="span" speed={50} repeat={Infinity}/>
      </h1>
      <p className="text-white sm:text-lg my-6 lg:text-xl">
       My name is Marina Hany and I have 1+ year of experience in web development.
      </p>
      <div className="my-8"/>
      <a href="/" className="px-6 py-3 w-full rounded-xl mr-4
      bg-gradient-to-br from-gray-800 to-gray-500 text-white">
        Download CV
      </a>
      <a  href="#contact" className="px-6 py-3 w-full rounded-xl
      border border-gray-400 hover:bg-gradient-to-br from-gray-500 to-gray-300
      text-white hover:border-none">
       Contact
      </a>
      </div>
    </div>
  );
};

export default Hero;
