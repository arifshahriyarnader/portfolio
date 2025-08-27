"use client";
import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-inherit z-50">
      <h1 className="text-xl font-bold text-[#7E3BEE]">
        Nader&apos;s Portfolio
      </h1>
      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="relative pb-1 transition 
                hover:border-b-2 hover:border-[#9032E9] 
                dark:hover:border-[#9032E9]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition cursor-pointer
    ${
      theme === "light"
        ? "bg-gray-200 hover:bg-gray-300"
        : "bg-[#050C1A] hover:bg-[#1D283A]"
    }`}
        >
          {theme === "light" ? (
            <Sun size={20} className="text-black" />
          ) : (
            <Moon size={20} className="text-white" />
          )}
        </button>
        <button
          className={`md:hidden p-2 rounded cursor-pointer ${
            theme === "light" ? "hover:bg-gray-200" : "hover:bg-[#1D283A]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-inherit shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block text-lg relative pb-1 transition 
                  hover:border-b-2 hover:border-[#9032E9] 
                  dark:hover:border-[#9032E9]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
