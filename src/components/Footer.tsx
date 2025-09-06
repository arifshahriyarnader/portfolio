"use client";

import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-6 border-t transition-colors ${
        theme === "light"
          ? "bg-[#F8FAFC] text-gray-700 border-gray-200"
          : "bg-[#020817] text-gray-300 border-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        {/* Left Side */}
        <p className="flex items-center gap-1 text-sm">
          
          <span className="font-medium">&copy; Arif Shahriyar Nader</span>
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-3 text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full hover:bg-purple-600 hover:text-white transition cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
