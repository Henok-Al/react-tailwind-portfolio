import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-2">
          I am committed to delivering high-quality and impactful solutions that
          meet the needs of users and businesses alike. I am dedicated to
          staying up-to-date with the latest technologies and trends in the
          field, and I am always looking for ways to improve my skills and learn
          new things.
        </p>

        <br />
        <p className="text-xl">
          I have a passion for creating dynamic and innovative web applications
          that provide exceptional user experiences. I am dedicated to staying
          up-to-date with the latest trends and technologies in the field.
        </p>
      </div>
    </div>
  );
};

export default About;
