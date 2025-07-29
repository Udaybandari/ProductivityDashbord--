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
const [habits, setHabits] = useState(() => {
  const stored = localStorage.getItem("habits");
  return stored ? JSON.parse(stored) : [];
});

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
