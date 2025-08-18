"use client";
import { createContext } from "react";
import { ThemeContextType } from "./type";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
