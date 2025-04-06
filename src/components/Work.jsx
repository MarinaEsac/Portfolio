import React, { useState } from "react";
import pr from "../assets/xcell1.png";
import zf from "../assets/xcell2.png";
import proj2 from "../assets/proj2.png";
import missingFinder from "../assets/missingFinder.png";
import weather from "../assets/weather.png";
import weatherApp from "../assets/weather-app.png";
import redux1 from "../assets/redux1.png";
import redux2 from "../assets/redux2.png";
import debounce from "../assets/debounce.png";

const categories = [
  "All",
  "Js",
  "React",
  "NextJs",
  "Redux",
];

const projects = [
  {
    id: 1,
    name: "Xcell",
    category: "NextJs",
    img1: zf,
    img2: pr,
    github: "#",
  },
  {
    id: 2,
    name: "Missing Finder",
    category: "React",
    img1: missingFinder,
    img2: proj2,
    github: "https://github.com/MarinaEsac/Missing-Finder",
  },
  {
    id: 3,
    name: "Weather",
    category: "Js",
    img1: weatherApp,
    img2: weather,
    github: "https://github.com/MarinaEsac/Weather-Website",
  },
  {
    id: 4,
    name: "ToDo List",
    category: "Redux",
    img1: redux2,
    img2: redux1,
    github: "https://github.com/MarinaEsac/Redux2",
  },
  {
    id: 5,
    name: "Debounce",
    category: "Redux",
    img1: debounce,
    img2: null,
    github: "https://github.com/MarinaEsac/Redux-Training",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeTab);

  return (
    <div
      id="work"
      className="flex flex-col justify-center items-center bg-image text-center p-7"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6 reveal-up">
        My Recent Works
      </h2>

      <div className="flex justify-center items-center gap-2 bg-white rounded-full border border-solid max-w-xl mx-auto my-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full transition font-semibold ${
              activeTab === category
                ? "bg-gray-600 text-white"
                : "text-gray-700 hover:text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-6 reveal-up">
        {filteredProjects.map(({ id, name, img1, img2, category, github }) => (
          <div
            key={id}
            className="relative w-80 h-96 p-6 bg-transparent rounded-xl shadow-lg border border-blue-400 hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-48">
              <img
                src={img1}
                alt={name}
                className="w-full h-full object-cover rounded-lg shadow-md border-2 border-blue-400"
              />
              {img2 && (
                <img
                  src={img2}
                  alt={`${name} preview`}
                  className="absolute bottom-3 right-3 w-24 h-16 object-cover rounded-lg shadow-xl border-2 border-gray-400"
                />
              )}
            </div>

            <div className="mt-4 text-gray-900 text-center">
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-sm text-gray-400">{category}</p>

              <div className="mt-4">
                <a
                  href={github}
                  className="px-4 py-2 bg-blue-400 text-white border border-blue-400 font-semibold rounded-md shadow-md hover:bg-transparent hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
