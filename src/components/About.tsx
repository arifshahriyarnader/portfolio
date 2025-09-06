"use client";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { FaCode, FaPaintBrush, FaGlobe, FaTrophy } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code following best practices.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences.",
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    description: "Building responsive, modern web applications.",
  },
  {
    icon: FaTrophy,
    title: "Quality Focus",
    description: "Delivering high-quality solutions that exceed expectations.",
  },
];

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`min-h-screen py-16 px-6 transition 
        ${
          theme === "light"
            ? "bg-[#F8FAFC] text-gray-900"
            : "bg-[#101929] text-white"
        }
      `}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-3xl font-extrabold mb-4 
            ${theme === "light" ? "text-gray-900" : "text-white"}`}
        >
          About{" "}
          <span
            className={
              theme === "light" ? "text-purple-600" : "text-purple-400"
            }
          >
            Me
          </span>
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto 
            ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
        >
          Passionate developer with a keen eye for design and a love for
          creating exceptional digital experiences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <h3
            className={`text-3xl md:text-4xl font-bold mb-4 
              ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            Building Digital Experiences That Matter
          </h3>
          <p
            className={`text-md mb-6 
              ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
          >
            I&apos;m a full-stack developer with 2+ years of experience building
            modern, responsive applications. My journey started with a passion
            for both code and design, which drives me to create user-centered,
            high-quality solutions.
          </p>
          <p
            className={`text-md mb-8 
              ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
          >
            I focus on writing clean, efficient code and delivering intuitive
            designs. Whether it&apos;s a complex application or a simple landing
            page, my goal is to make it look great and perform seamlessly.
          </p>

          <p
            className={`text-md mb-8 
              ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
          >
            Alongside development, I&apos;m enthusiastic about DevOps
            practices, focusing on automation, CI/CD pipelines, and cloud deployment. This
            helps me bridge the gap between development and operations, ensuring
            faster, more reliable project delivery.
          </p>

          <div className="flex space-x-12 mb-8">
            <div>
              <p
                className={`text-5xl font-bold 
                  ${theme === "light" ? "text-purple-600" : "text-purple-400"}`}
              >
                20+
              </p>
              <p
                className={`text-lg 
                  ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
              >
                Projects Completed
              </p>
            </div>
            <div>
              <p
                className={`text-5xl font-bold 
                  ${theme === "light" ? "text-purple-600" : "text-purple-400"}`}
              >
                2+
              </p>
              <p
                className={`text-lg 
                  ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
              >
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-8 rounded-lg shadow-xl border transition transform hover:scale-105
                ${
                  theme === "light"
                    ? "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    : "bg-gray-900 border-gray-800 hover:bg-gray-800"
                }`}
            >
              <div
                className={`p-4 rounded-full mb-4 
                  ${theme === "light" ? "bg-purple-100" : "bg-[#0D0B2B]"}`}
              >
                <service.icon
                  className={`w-8 h-8 ${
                    theme === "light" ? "text-purple-600" : "text-purple-400"
                  }`}
                />
              </div>
              <h4
                className={`text-xl font-bold mb-2 
                  ${theme === "light" ? "text-gray-900" : "text-white"}`}
              >
                {service.title}
              </h4>
              <p
                className={`text-sm 
                  ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
