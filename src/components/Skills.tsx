"use client";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React",
      "Next",
      "Node",
      "Express",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Other Technologies",
    items: ["Gt/Github", "Docker", "CI/CD", "AWS"],
  },
];

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={`py-20 px-6 text-center transition-colors duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-[#020817] text-white"
      }`}
    >
      <h2 className="text-4xl font-bold mb-4">
        Skills &{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p
        className={`max-w-2xl mx-auto mb-12 ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
      >
        A comprehensive toolkit of modern technologies and frameworks I use to
        bring ideas to life.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className={`p-6 rounded-lg border transition ${
              theme === "light"
                ? "border-gray-200 bg-white"
                : "border-gray-700 bg-gray-800"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                    theme === "light"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
