// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { useHabitsStorage } from "../components/hooks/useLocalStorage";
import { useThemeStorage } from "../components/hooks/useThemeStorage";
// 1. Create the context
const ThemeContext = createContext();

// 2. Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useThemeStorage();
  const [filter, setFilter] = useState("all");
  const [showOptions, setShowOptions] = useState(false);
const [habits, setHabits] = useHabitsStorage();



  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };




  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        filter,
        setFilter,
        showOptions,
        setShowOptions,
        habits,
        setHabits,
   
   
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
