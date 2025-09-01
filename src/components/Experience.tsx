"use client";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

const experiences = [
  {
    role: "Full Stack Developer",
    period: "2022 - Present",
    description:
      "Developing scalable web applications using modern frameworks and technologies. Focus on user experience and performance optimization.",
  },
  {
    role: "Frontend Developer",
    period: "2021 - 2022",
    description:
      "Specialized in React development and UI/UX implementation. Collaborated with design teams to create pixel-perfect interfaces.",
  },
];

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="journey"
      className={`py-20 px-6 transition-colors duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-[#020817] text-white"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional Journey
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 h-full border-l-2 border-purple-500"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              <div className="w-8 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-purple-600 ml-2"></div>
              </div>
              <div
                className={`ml-4 p-6 rounded-lg shadow-sm transition ${
                  theme === "light"
                    ? "bg-white border border-gray-200"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-purple-600 font-medium mb-2">{exp.period}</p>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
