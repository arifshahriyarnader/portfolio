"use client";
import ThemeContext from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h4
        className={`${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        } text-lg mb-2`}
      >
        Hello, I&apos;m
      </h4>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        Arif Shahriyar Nader
      </h1>

      <h3
        className={`text-2xl md:text-3xl font-bold mb-6 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Full Stack Developer
      </h3>

      <p
        className={`text-md md:text-lg max-w-2xl mb-10 
          ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
      >
        I create beautiful, responsive web applications with modern
        technologies. <br />
        Passionate about clean code, user experience, and innovative solutions.
      </p>

      <div className="flex space-x-4 mb-10">
        <Link
          href="https://github.com/arifshahriyarnader"
          target="_blank"
          className={`p-3 rounded-md border transition 
            ${
              theme === "light"
                ? "hover:bg-gray-100"
                : "hover:bg-gray-800 border-gray-600"
            }`}
        >
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/arif-shahriyar-nader"
          target="_blank"
          className={`p-3 rounded-md border transition 
            ${
              theme === "light"
                ? "hover:bg-gray-100"
                : "hover:bg-gray-800 border-gray-600"
            }`}
        >
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:naderarifshahriyar@gmail.com"
          className={`p-3 rounded-md border transition 
            ${
              theme === "light"
                ? "hover:bg-gray-100"
                : "hover:bg-gray-800 border-gray-600"
            }`}
        >
          <FaEnvelope className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex space-x-4 mb-16">
        <Link
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition"
        >
          View My Work
        </Link>
        <Link
          href="#contact"
          className={`px-6 py-3 border rounded-md font-medium transition
            ${
              theme === "light"
                ? "border-gray-400 text-gray-800 hover:bg-gray-100"
                : "border-gray-600 text-white hover:bg-gray-800"
            }`}
        >
          Get In Touch
        </Link>
      </div>
      <button
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`
    rounded-full cursor-pointer transition-all duration-300
    ${theme === "light" ? "text-gray-600" : "text-gray-300"}
    hover:bg-purple-600 hover:text-white hover:p-3
  `}
      >
        <FaArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
