import React from "react";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind-css.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import github from "../assets/github.svg";
import mui from "../assets/mui.svg";
import jquery from "../assets/jquery.svg";
import next from "../assets/nextjs.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const skills = [
  { img: html, label: "HTML5" },
  { img: css, label: "CSS3" },
  { img: bootstrap, label: "BOOTSTRAP" },
  { img: tailwind, label: "TAILWIND" },
  { img: mui, label: "MATERIAL UI" },
  { img: js, label: "JAVASCRIPT" },
  { img: jquery, label: "JQUERY" },
  { img: ts, label: "TYPESCRIPT" },
  { img: react, label: "REACT.JS" },
  { img: redux, label: "REDUX TOOLKIT" },
  { img: next, label: "NEXT.JS" },
  { img: github, label: "GIT/GITHUB" },
];

const Skills = () => {
  const loopedSkills = [...skills, ...skills]; 

  useGSAP(() => {
    gsap.to(".slider-track", {
      xPercent: -50,
      ease: "linear",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div id="skills" className="py-10 bg-image mx-auto overflow-hidden">
      <h2 className="text-gray-900 text-2xl md:text-4xl font-bold mb-11 text-center">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex slider-track w-[200%] gap-4">
          {loopedSkills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-white text-gray-400 shadow-md border border-gray-200 rounded-lg p-5 cursor-pointer text-center group transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={skill.img}
                alt={skill.label}
                width={100}
                height={100}
                className="mx-auto group-hover:scale-105 transition-all duration-300"
              />
              <p className="mt-2 text-sm">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
