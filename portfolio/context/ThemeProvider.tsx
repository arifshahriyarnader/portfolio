"use client";
import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  


useEffect(() => {
  const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  if (storedTheme) setTheme(storedTheme);
}, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

   const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
