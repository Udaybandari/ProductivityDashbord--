// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

 useEffect(()=>
 {
   const save=localStorage.getItem("theme")||"light";
   setTheme(save);
 },[]

 )
 const toggleTheme=()=>{
  const newtheme=theme=="dark"?"light":"dark";
  setTheme(newtheme);
  document.documentElement.className=newtheme;
  localStorage.setItem("theme",newtheme);

 }



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
