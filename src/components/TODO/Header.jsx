import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
const Header = () => {
 const {filter,setFilter}=useTheme();
  return (
    <header className="">
        <h1 className="    ">TASKS</h1>
        
    </header>
  )
};

export default Header;