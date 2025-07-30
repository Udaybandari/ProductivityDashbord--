// src/hooks/useThemeStorage.js
import { useEffect, useState } from "react";

export const useThemeStorage = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
