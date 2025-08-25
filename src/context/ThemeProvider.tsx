"use client";
import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#222";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
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
