import React from "react";
import heni from "../assets/heni.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am committed to delivering high-quality and impactful solutions
            that meet the needs of users and businesses alike. I am dedicated to
            staying up-to-date with the latest technologies and trends in the
            field, and I am always looking for ways to improve my skills and
            learn new things.
          </p>
          <div>
            <Link
              to="portfolio"
              duration={500}
              smooth
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heni}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
