import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-image text-gray-900 py-16 pt-3 pb-5 md:h-[100vh]">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-16 mt-24 reveal-up">
        About Me
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="reveal-up border border-gray-500 p-10 rounded-lg text-center">
          <div className="text-5xl mb-4">
            <i className="fa-solid fa-award"></i>
          </div>
          <h3 className="text-xl font-bold">Experience</h3>
          <p className="text-lg">1+ Year</p>
          <p className="text-lg">Frontend Development</p>
        </div>
        <div className="reveal-up border border-gray-500 p-10 rounded-lg text-center">
          <div className="text-5xl mb-4">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h3 className="text-xl font-bold">Education</h3>
          <p className="text-lg">Sh.A _ Mis</p>
          <p className="text-lg">Bachelors Degree</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-14 text-center text-xl">
        <p className="reveal-up">
          I am a graduate of El-Shorouk Academy, Class of 2024, from the
          Management Information Systems Department, with a Bachelor's degree
          graded Excellent with honor degree. I have over one year of experience
          as a Frontend Developer, specializing in building responsive and
          user-friendly web interfaces. I am committed to continuous learning
          and staying up-to-date with the latest technologies, ensuring I
          deliver innovative solutions that add value to every project I work
          on.
        </p>
      </div>
    </div>
  );
};

export default About;
