"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
