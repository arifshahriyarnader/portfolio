"use client";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section
      id="projects"
      className={`py-20 px-6 font-sans transition-colors ${
        theme === "light"
          ? "bg-[#F8FAFC] text-black"
          : "bg-[#101929] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p
            className={`text-lg ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 cursor-pointer">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Other Notable Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/arifshahriyarnader?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 border border-purple-500 hover:bg-purple-500 hover:text-white rounded-full  font-semibold transition-all duration-300 ${`theme === "light" ? "text-[#000]"  : "text-[#fff]"`}`}
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
