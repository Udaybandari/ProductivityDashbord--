// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("all");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };
  const handleHabitSelect = (habit) => {
  // setHabits((prev) => [...prev, habit]);  // add the selected habit

  setShowOptions(false);                  // hide the options again
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
   
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
