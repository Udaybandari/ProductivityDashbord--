import React, { createContext, useState, useEffect, useContext } from "react";
import { useHabitsStorage } from "../components/hooks/useLocalStorage";
import { useThemeStorage } from "../components/hooks/useThemeStorage";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useThemeStorage();
  const [filter, setFilter] = useState("all");
  const [showOptions, setShowOptions] = useState(false);
  const [habits, setHabits] = useHabitsStorage("habits");
 

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