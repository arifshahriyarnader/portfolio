"use client";
import { createContext } from "react";
import { ThemeContextType } from "./type";

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;
