import React from "react";
import { CiSearch, CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import { IoPersonSharp } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
const Header = ({title,rightcontent}) => {
  const{theme,toggleTheme}=useTheme();
  return (
    <header className=" dark:bg-gray-900 dark:text-white fixed top-0 left-0 w-full h-20 bg-white z-50 custom-shadow flex items-center justify-end pr-8">
      <div className="flex items-center gap-8">
        <h1>{title}</h1>
        <div className="relative flex items-center custom-shadow rounded-2xl h-12 bg-gray-200 px-2">
          <CiSearch className="text-2xl dark:text-black hover:text-red-400" />
          <input
            type="text"
            placeholder="Search..."
            className="text-xl font-mono dark:text-black bg-gray-200 focus:outline-none w-44 h-9 pl-2"
          />
        </div>
       <button onClick={toggleTheme} >
          {theme === "dark" ? (
            <CiLight className="text-3xl cursor-pointer hover:text-yellow-400" />
          ) : (
            <FaMoon className="text-3xl cursor-pointer hover:text-gray-700" />
          )}
        </button>
        
        <IoPersonSharp className="text-3xl" />
      </div>
    </header>
  );
};

export default Header;
