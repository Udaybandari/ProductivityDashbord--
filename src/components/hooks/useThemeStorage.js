import { useEffect, useState } from "react";

export const useThemeStorage = () => {
  const [theme, setThemes] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


const setTheme = (newtheme)=>{
      setThemes(newtheme);
      localStorage.setItem("theme",newtheme);
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

   const togglesTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme; // ✅ This changes the theme class
   
  };


  return [theme, togglesTheme];
};